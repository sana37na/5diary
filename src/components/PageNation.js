import React from "react";
import { Link } from "react-router-dom";

// const prevStyle = {
//     // position: 'absolute',
//     left: '0',
//     top: '22%',
// }

// const nextStyle = {
//     position: 'relative',
//     right: '0',
//     top: '22%',
// }

const PageNation = (props) => {

    return (
        <nav className="navigation">
            <ul className="page-navi">
                <li className="page-navi__item prev">
                    <Link to={`/${props.prev}`} className="page-navi__link">
                        <span className="border__top--prev" />
                        <span className="border__bottom--prev" />
                    </Link>
                </li>
                <li className="page-navi__item">
                    <Link to={`/${props.next}`} className="page-navi__link">
                        <span className="border__top" />
                        <span className="border__bottom" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default PageNation;