import React from "react";
import "./css/school.css";
import Img1 from "./../img/20210522__1.png";
import Img2 from "./../img/20210522__2.png";
import Img3 from "./../img/20210522__3.png";
import Img4 from "./../img/20210522__4.png";
import Img5 from "./../img/20210605__1.png";
import Img6 from "./../img/20210605__2.png";
import Img7 from "./../img/20210619.png";

const SchoolArchive = (props) => {
    return (
        <>
            <h2>WebGL School Archive</h2>
            <div className="webgl-school contents">
                <ul className="archive">
                    <li className="archive__item">
                        <a href="https://sana37na.github.io/webgl/work_210522/" target="_blank" rel="noreferrer">
                            <img src={Img1} alt="Boxジオメトリ1" />
                            <ol className="point">
                                <li><h4>2021.05.22 - 課題：100個のBoxジオメトリを使ってシーンをつくる(1)</h4></li>
                                <li>fogの実装</li>
                                <li>反射光によるマテリアルの色変化</li>
                            </ol>
                        </a>
                    </li>
                    <li className="archive__item">
                        <a href="https://sana37na.github.io/webgl/work_210522/2.html" target="_blank" rel="noreferrer">
                            <img src={Img2} alt="Boxジオメトリ2" />
                            <ol className="point">
                                <li><h4>2021.05.22 - 課題：100個のBoxジオメトリを使ってシーンをつくる(2)</h4></li>
                                <li>sin&theta;,cos&theta;の理解</li>
                                <li>レイキャスターの実装</li>
                                <li>GSAPアニメーションの実装</li>
                            </ol>
                        </a>
                    </li>
                    <li className="archive__item">
                        <a href="https://sana37na.github.io/webgl/work_210522/3.html" target="_blank" rel="noreferrer">
                            <img src={Img3} alt="Boxジオメトリ3" />
                            <ol className="point">
                                <li><h4>2021.05.22 - 課題：100個のBoxジオメトリを使ってシーンをつくる(3)</h4></li>
                                <li>スクロールコントロールの制御</li>
                            </ol>
                        </a>
                    </li>
                    <li className="archive__item">
                        <a href="https://sana37na.github.io/webgl/work_210522/4.html" target="_blank" rel="noreferrer">
                            <img src={Img4} alt="Boxジオメトリ4" />
                            <ol className="point">
                                <li><h4>2021.05.22 - 自主課題</h4></li>
                                <li>3Dオブジェクトのドラッグコントロール実装</li>
                                <li>トゥーンシェーダ</li>
                            </ol>
                        </a>
                    </li>
                    <li className="archive__item">
                        <a href="https://sana37na.github.io/webgl/work_210605/" target="_blank" rel="noreferrer">
                            <img src={Img5} alt="扇風機" />
                            <ol className="point">
                                <li><h4>2021.06.05 - 課題：首振り機能付き扇風機</h4></li>
                                <li>タイマーの実装</li>
                                <li>3Dオブジェクトのグループ理解</li>
                            </ol>
                        </a>
                    </li>
                    <li className="archive__item">
                        <a href="https://sana37na.github.io/webgl/work_210605/2.html" target="_blank" rel="noreferrer">
                            <img src={Img6} alt="時計" />
                            <ol className="point">
                                <li><h4>2021.06.05 - 課題：3D時計</h4></li>
                                <li>フォント読み込みとテキストジオメトリの理解</li>
                                <li>castShadow, receiveShadowの実装</li>
                            </ol>
                        </a>
                    </li>
                    <li className="archive__item">
                        <a href="https://sana37na.github.io/webgl/work_210619/" target="_blank" rel="noreferrer">
                            <img src={Img7} alt="太陽系" />
                            <ol className="point">
                                <li><h4>2021.06.05 - 課題：太陽を周回する地球と、地球を周回する月の表現</h4></li>
                                <li>マテリアルにテクスチャを適用</li>
                                <li>自転と公転速度を考えてみる</li>
                            </ol>
                        </a>
                    </li>
                </ul>
                <span className="scroll">
                    <span className="arrow-down">
                        <span className="down">Scroll</span>
                    </span>
                </span>
                I've learned a lot from "<a href="https://webgl.souhonzan.org/" target="_blank" rel="noreferrer">WebGL総本山 &amp; WebGL School</a>" :)
            </div>
        </>
    )
};

export default SchoolArchive;