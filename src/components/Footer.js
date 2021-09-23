import React from "react";

const footerStyle = {
    // position: 'fixed',
    // bottom: '0',
    textAlign: 'center',
    width: '100%',
    fontSize: '0.6em',
};

const Footer = (props) => {
    return (
        <footer style={footerStyle}>
            <p>
                &copy; 2021 <a href="http://hi37.wp.xdomain.jp/" target="_blank" rel="noreferrer" className="my-link">Sana＊Works LAB</a></p>
        </footer>
    );
};

export default Footer;