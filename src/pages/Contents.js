import React from "react";
import "./css/contents.css";
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    // Link
} from "react-router-dom";
// import Num1 from "./1";
// import Num2 from "./2";
// import Num3 from "./3";


class Contents extends React.Component {
    navigate() {
        console.log(this.props.history);
        this.props.history.push("/");
    }
    render() {
        return (
            <>
                <h2>Contents</h2>
                <div className="contents">
                    <Router>
                        {/* <Switch>
                        <Route path="/1">
                            <Num1 num="1" />
                        </Route>
                        <Route path="/2">
                            <Num2 num="2" />
                        </Route>
                        <Route path="/3">
                            <Num3 num="3" />
                        </Route>
                    </Switch> */}
                        <ol className="daily-archive">

                            <li className="daily-archive__item">
                                <a href="./1">
                                    <span className="daily-num">Day 1</span>
                                </a>
                                <span className="title">"すべての時間軸に抗う" ために</span>
                            </li>
                            <li className="daily-archive__item">
                                <a href="/2">
                                    <span className="daily-num">Day 2</span>
                                </a>
                                <span className="title">月と星のあいだ</span>
                            </li>
                            <li className="daily-archive__item">
                                <a href="/3">
                                    <span className="daily-num">Day 3</span>
                                </a>
                                <span className="title">背中合わせで笑って</span>
                            </li>
                            <li className="daily-archive__item small textRight">...... coming soon</li>
                        </ol>
                    </Router>
                </div>
            </>
        );
    }
}


export default Contents;