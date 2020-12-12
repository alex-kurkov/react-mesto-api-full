# **react-mesto-api-full**
**YANDEX.PRAKTICUM BACKEND + FRONTEND PROJECT**
--------------

assembled and tuned by **Alex Kurkov**,
_Yandex.Practicum student_

[Visit site](https://alex-kurkov.github.io/mesto-react/)

### **Content**
  - [About](#About-Server-Mesto)
  - [Setting Up](#Setting-Up)
  - [Usage](#Usage)
  - [Technologies used](#Technologies-used)
---------------------

## About Server Mesto
- The backend and frontend of SPA Mesto, implementing REST.API to provide frontend app with resources of users, cards, card-likes etc... 

## Setting Up
You may set Backend Server and Frontend-app by cloning this git repository or downloading zipped archive and running these instruction on command line:
```bash
# you should be in backend directiory
cd backend
# install dependencies
npm install
```
Then you can deploy the local server of **Mesto app** with:
 ```bash
# you should be in frontend directiory
npm install
npm start
```
or run server in development mode by:
 ```bash
npm run dev
```
Notice, that you should have Node-JS of version 14+ installed as well as Mongo Database local server active at standard Port. [How to install and run Mongo DB...](https://docs.mongodb.com/manual/installation/)


## Usage
After deployment **Mesto app** is available to make requests at [http://localhost:3000/](http://localhost:3000/)

# Routes and methods:
  - GET:'/cards'  *get all the cards from DB* 
  - POST:'/cards' *post new card to DB*
  - DELETE:'/cards/{id}' *delete card of provided {id}*
  - PUT:'cards/{id}/likes' *like card of provided {id}*
  - DELETE:'cards/{id}/likes' *dislike card of provided {id}*

  - GET:'/users/{id}' *get user of provided {id}* 
  - POST:'/users' *save new user to DB*
  - PATCH:'/users/me' *update name & about keys of default user*
  - PATCH:'/users/me/avatar' *update avatar link of default user*

The values of body object and parameters referring to database queries are validated by Mongo DB engine. Errors are handled by mongoose and responsed to user if occured.

## Technologies used
backend is built using [Express framework](https://expressjs.com/) and [Mongo Database](https://www.mongodb.com/) thru [mongoose library](https://mongoosejs.com/docs/)
frontent is built using [React library](https://reactjs.org/)

--------
[connect me via email](mailto:alexkourkov@yandex.ru "Email")
