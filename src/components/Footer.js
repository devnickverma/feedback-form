import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '1rem',
      marginTop: '2rem',
      backgroundColor: '#f1f1f1',
      fontSize: '0.9rem',
      color: '#555'
    }}>
      © {new Date().getFullYear()} Created by Nikhil Verma
    </footer>
  );
};

export default Footer;
