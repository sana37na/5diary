import React, { Suspense, useEffect } from "react";
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import PageNation from "../components/PageNation";

const Num1 = (props) => {

    function Instances({ count = 9, temp = new THREE.Object3D() }) {
        const ref = useRef()
        useFrame((state, delta) => (ref.current.rotation.z -= 0.001))

        useEffect(() => {
            // Set positions
            for (let i = 0; i < count; i++) {
                const id = i++;
                temp.position.set(0, 0, i);
                temp.scale.set(i, i, i);
                temp.updateMatrix()
                ref.current.setMatrixAt(id, temp.matrix)
            }
            // Update the instance
            // ref.current.instanceMatrix.needsUpdate = true
        }, [])
        return (
            <instancedMesh ref={ref} args={[null, null, count]} scale={0.1} rotation={[0, 0, Math.PI / 2]}>
                <ringBufferGeometry args={[5, -5, 1]} />
                <meshPhongMaterial color={'dimgray'} transparent opacity={'0.4'} />
            </instancedMesh>
        )
    };


    return (
        <>
            <h2>{props.num} / 365</h2>
            <div className="daily-canvas">
                <Canvas
                    performance={{ min: 0.5 }}
                    dpr={[1, 2]}
                    camera={{ fov: 100, position: [0, 0, 5] }}
                >

                    <Suspense fallback={<span>loading...</span>}>
                        <ambientLight />
                        <Instances />
                    </Suspense>
                </Canvas>
            <PageNation prev="archive" next="2" />
            </div>
            <>
                <div className="essay">
                    <h3>"すべての時間軸に抗う" ために</h3>

                    <p>半年ほど前「すべての時間軸に抗う人へ」というタイトルで、作品集を作った(1)。CLOやBlenderといった3DCG作成ツールを使って作った作品を載せた。タイトルは、劇団マームとジプシーの主宰 藤田貴大さんのインタビュー記事(2)から着想を得たものだ。</p>
                    <p>1次元がX方向にだけ進める直線である時、2次元ではそこにYの縦軸が加わり平面的な移動ができる。3次元ではさらにZ方向の奥行きが加わり、私たちが存在している現実のような空間になる。4次元ではそこに時間が加わる。では、5次元は?</p>
                    <p>ある説では平行宇宙、つまり「選ばれなかった世界」が実は同時に存在している空間、と考えられている。そこでは無数の時間軸が存在するのだ。<br />
                        過去のわたしと、過去のいくつもの分岐点において選択されなかったわたしと、今のわたしと、たった今切り捨てたわたしと、未来のわたしと、未来に選ばれなかったわたしが、全部ぜんぶ存在しているのだ。そう思うと、どこでどう生きても結局はひとつなんだと清々しい気持ちになれる。</p>
                    <p>どこかに存在している 5次元世界のわたし について描こうと思う。</p>
                    <ul className="source">
                        <li>(1) </li>
                        <li>(2) <a href="https://www.cinra.net/interview/201404-mumgypsykawakami" target="_blank" rel="noreferrer">藤田貴大×川上未映子の叫び「まだ全然言い足りてない」</a> 2014/04/03</li>
                    </ul>
                    <p className="date">2021.09.23</p>
                </div>
            </>
        </>
    );
}

export default Num1;