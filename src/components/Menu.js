import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="#about">Conóceme</Link></li>
                <li><Link onClick={props.onToggleMenu} to="https://www.youtube.com/channel/UCvHOY_OJnkZgup5XIDu7BFA/videos" target="_blank">Youtube Channel</Link></li>
                <li><Link onClick={props.onToggleMenu} to="#contact">Cuentame tu idea</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
