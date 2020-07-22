import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/GsusRodriguezC" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/jesussrc" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/salvador.rodrigu3z/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/tenajesus" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
            </ul>
            <ul className="copyright">
                <li>Powered by: <a href="https://www.gatsbyjs.org/">Gatsby</a></li><li>❤️</li>
            </ul>
        </div>
    </footer>
)

export default Footer
