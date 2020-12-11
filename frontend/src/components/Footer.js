import React from 'react';

const Footer = () => {
  const today = new Date();
  const yearNow = today.getFullYear();
  return (
    <footer className="footer">
      <span className="footer__copyright">&copy; {yearNow} Mesto Russia</span>
    </footer>
  );
}

export default Footer;
