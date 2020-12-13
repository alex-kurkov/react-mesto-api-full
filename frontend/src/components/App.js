import React, { useEffect, useState } from 'react';
import { Switch, Redirect, Route, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import InfoTooltip from './Popups/InfoTooltip';
import ImagePopup from './Popups/ImagePopup';
import ConfirmPopup from './Popups/ConfirmPopup';
import EditProfilePopup from './Popups/EditProfilePopup';
import EditAvatarPopup from './Popups/EditAvatarPopup';
import AddPlacePopup from './Popups/AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { login, register, checkToken } from '../utils/auth';
import api from '../utils/api';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [userAuthData, setUserAuthData] = useState({email: ''});
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoaderVisible, setLoaderVisibible] = useState(false)
  const [headerAuthStatus, setHeaderAuthStatus] = useState('login');
  const [tooltipMessage, setTooltipMessage] = useState('');

  const history = useHistory();
 
  const checkUserToken = (jwt) => {
    checkToken(jwt)
      .then(((res) => {
        setLoggedIn(true);
        setUserAuthData(res);
      }))
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setLoaderVisibible(true);
      checkUserToken(jwt);
      setLoaderVisibible(false);
    }
  }, [])

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (loggedIn && jwt) {
      setLoaderVisibible(true);
      Promise.all([
        api.getUserData(jwt),
        api.getCards(jwt)
      ])
        .then(([ user, serverCards ]) => {
          const jwt = localStorage.getItem('jwt');
          if (jwt) checkUserToken(jwt);
          setCurrentUser(user);
          setCards(serverCards);
        })
        .catch((e) => console.log('status', e))
        .finally(() => {
          setLoaderVisibible(false)
          history.push('/main');
          setHeaderAuthStatus('logout');
      })
    }
  }, [loggedIn]);

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfileOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfileOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmPopupOpen(false);
    setInfoTooltipOpen(false);
    setTooltipMessage('');
    setSelectedCard(null);
    setCardToDelete(null);
  };

  const handleUpdateUser = (data) => {
    setLoaderVisibible(true);
    const jwt = localStorage.getItem('jwt');
    api.setUserData(data, jwt)
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch((error) => console.log(error))
    .finally(() => setLoaderVisibible(false));
  };

  const handleCardLike = (card, ) => {
    const jwt = localStorage.getItem('jwt');
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked, jwt)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch((error) => console.log(error));
  };

  const handleTrashBtnClick = (card) => {
    setConfirmPopupOpen(true);
    setCardToDelete(card);
  };

  const handleCardDelete = (card) => {
    const jwt = localStorage.getItem('jwt');
    setLoaderVisibible(true);
    api.deleteCard(card, jwt)
      .then(() => {
        const newCards = cards.filter((i) => i._id !== card._id);
        setCards(newCards);
        setCardToDelete(null);
        closeAllPopups();
      })
      .catch((error) => console.log(error))
      .finally(() => setLoaderVisibible(false));
  };

  const handleUpdateAvatar = (avatar) => {
    const jwt = localStorage.getItem('jwt');
    setLoaderVisibible(true);
    api.setAvatar(avatar, jwt)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((error) => console.log(error))
      .finally(() => setLoaderVisibible(false));
  };
  const handleCardAdd = (card) => {
    setLoaderVisibible(true);
    const jwt = localStorage.getItem('jwt');
    api.postCard(card, jwt)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups()
      })
      .catch((error) => console.log(error))
      .finally(() => setLoaderVisibible(false));
  };

  const handleLogin = (data) => {
    setLoaderVisibible(true);
    login(data)
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          history.push('/main');
          setLoggedIn(true);
          setHeaderAuthStatus('logout');
          setTooltipMessage('Вы успешно прошли аутентификацию!');
          setInfoTooltipOpen(true);
        }
      })
    .catch(e => {
      setTooltipMessage(e.message);
      setInfoTooltipOpen(true);
    })
    .finally(() => setLoaderVisibible(false))
  }

  const handleRegister = (data) => {
    setLoaderVisibible(true);
    register(data)
      .then((res) => {
        if (res.data.email) {
          setTooltipMessage('Вы успешно зарегистрировались!');
          setInfoTooltipOpen(true);
          history.push('/sign-in');
        }
      })
      .catch((e) => {
        setTooltipMessage(e.message);
        setInfoTooltipOpen(true);
        history.push('/sign-up');
      })
      .finally(() => setLoaderVisibible(false))
  };
  const handleLogout = () => {
/*     logout()
      .then(() => setLoggedIn(false))
      .catch((e) => console.log(e)) */
      localStorage.removeItem('jwt');
      setLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header headerAuthStatus={headerAuthStatus} handleLogout={handleLogout} login={userAuthData.email || ''}/>
          <main className="content">
            <Switch>
              <ProtectedRoute
                path="/main"
                loggedIn={loggedIn}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleTrashBtnClick}
                component={Main} />
              {!isLoaderVisible && <Route path="/sign-up">
                <Register handleRegister={handleRegister} setHeaderAuthStatus={setHeaderAuthStatus}/>
              </Route>}
              {!isLoaderVisible && <Route path="/sign-in">
                <Login handleLogin={handleLogin} setHeaderAuthStatus={setHeaderAuthStatus}/>
              </Route>}
              <Route path="/">
                {loggedIn ? <Redirect to="/main" /> : <Redirect to="/sign-in" />}
              </Route>
            </Switch>
          </main>
        <Footer />
      {isLoaderVisible && (<div className="loader" />)}
       
      <ImagePopup card={selectedCard || ''} onClose={closeAllPopups}/>)
       
      <ConfirmPopup 
        isOpen={isConfirmPopupOpen} 
        onClose={closeAllPopups}
        onSubmit={(e) => {
          e.preventDefault();
          handleCardDelete(cardToDelete);
        }} />

      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser} />

      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar} />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onCardAdd={handleCardAdd} />

      {isInfoTooltipOpen && <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        message={tooltipMessage}
        success={loggedIn} />}

      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
