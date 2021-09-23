import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Top from "../pages/Top";
import About from "../pages/About";
import SchoolArchive from "../pages/SchoolArchive";
import Contents from "../pages/Contents";
import Num1 from "../pages/1";
import Num2 from "../pages/2";
import Num3 from "../pages/3";
import App from "./App";


class Navigation extends React.Component {
    navigate() {
        console.log(this.props.history);
        this.props.history.push("/");
    }
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>

                {/*A <Switch> looks through all its children <Route>lements and renders the first one whose pathmatches the current URL. Use a <Switch> any time you have multiple routes, but you want only one of them to render at a time */}
                <div className="daily">
                    <Switch>
                        <Route exact path="/">
                            <Top />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contents">
                            <Contents />
                        </Route>
                        <Route path="/archive">
                            <SchoolArchive />
                        </Route>
                        <Route path="/1">
                            <Num1 num="1" />
                        </Route>
                        <Route path="/2">
                            <Num2 num="2" />
                        </Route>
                        <Route path="/3">
                            <Num3 num="3" />
                        </Route>
                    </Switch>
                </div>

                <aside className="page">
                    <ul className="page-link">
                        {/* <li className="page-link__item">
                            <Link to="/">
                            <span className="daily-icon">
                                    <img src="./img/moon.svg" alt="day" />
                                    </span>
                            </Link>
                        </li> */}
                        <li className="page-link__item">
                            <Link to="/about">Prologue</Link>
                        </li>
                        <li className="page-link__item">
                            <Link to="/contents">Contents</Link>
                        </li>
                        <li className="page-link__item">
                            <Link to="/archive">WebGL School Archive</Link>
                        </li>
                        <li className="page-link__item">
                            <Link to="/">Book</Link>
                        </li>
                    </ul>
                    {/* <ol className="daily-archive">

                        <li className="daily-archive__item">
                            <Link to="/1">
                                <span className="daily-icon">
                                    <img src="./img/moon.svg" alt="day" />
                                    <span className="daily-num">1 day</span>
                                </span>
                            </Link>
                        </li>
                    </ol> */}

                </aside>
            </BrowserRouter>
        );
    }
}


export default Navigation;