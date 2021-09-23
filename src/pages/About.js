import React from "react";
import './css/about.css';
import Icon from "./../img/sana.png";

const aboutStyle = {
    padding: '4em 0',
    // width: '100%',
    // height: '100%',
    // position: 'absolute',
    maxWidth: '500px',
    // top: '0',
};
const sanaIcon = {
    width: '80px',
};
const fontStyle = {
    fontFamily: 'Panchang',
    fontSize: '0.9em',
    letterSpacing: '1px',
};
const listStyle = {
    listStyle: 'disc',
    marginLeft: '2em',
};
const Margin2 = {
    marginTop: '2em',
};

const About = () => {
    return (
        <>
            <h2 id="top">Prologue</h2>
            <div style={aboutStyle} className="contents">

                <div className="prologue">
                    <p className="prologue__text">
                        "立ち止まっているとね 小さなものたちが"

                        <span className="textCenter">
                            "ここだよって 叫ぶんだ"
                        </span>
                    </p>
                    <p className="textRight">
                        こんにちは 5次元世界へ
                    </p>
                    <p className="small">
                        + This is my coding sketchbook.<br />
                        + I love to express emotional web content.
                    </p>
                </div>
                <h3 style={fontStyle}>Author</h3>
                <img src={Icon} alt="sana" style={sanaIcon} />
                <p>Sana.<br />
                    Means : Poetic Coding / 3DCG Art / WebGL<br />
                    My website : <a href="http://hi37.wp.xdomain.jp/" target="_blank" rel="noreferrer">Sana＊Works LAB</a></p>

                <ol style={Margin2}>
                    <li><h4>Using</h4></li>
                    <li style={listStyle}>CSS3</li>
                    <li style={listStyle}><a href="https://ja.reactjs.org/" target="_blank" rel="noreferrer">React</a></li>
                    <li style={listStyle}><a href="https://threejs.org/" target="_blank" rel="noreferrer">Three.js</a></li>
                    <li style={listStyle}><a href="https://www.blender.org/" target="_blank" rel="noreferrer">Blender</a></li>
                </ol>

            </div>
        </>
    )
};

export default About;