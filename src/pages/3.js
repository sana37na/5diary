import React, { Suspense } from "react";
import { OrbitControls, Environment } from '@react-three/drei';
import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import PageNation from "../components/PageNation";

const Num3 = (props) => {


    function Moon(props) {
        const mesh = useRef()

        return (
            <mesh
                {...props}
                ref={mesh}
                scale={10}
            >

                <pointLight position={[0, -8, 10]} intensity={2.5} />
                <icosahedronGeometry args={[5.5, 0]} />
                <meshPhongMaterial
                    color="#7B96B8"
                    specular="pink"
                    transparent
                    opacity={'0.6'} />
            </mesh>)
    };

    function Rig({ mouse }) {
        const { camera, viewport } = useThree()
        useFrame((state) => {
            camera.position.x += (state.mouse.x * viewport.width) * 0.0005
            camera.position.y += (-state.mouse.y * viewport.height) * 0.0001
            camera.lookAt(0, 0, 0)
        })
        return null
    };



    return (
        <>
            <h2>{props.num} / 365</h2>
            <div className="daily-canvas">
                <Suspense fallback={<span>loading...</span>}>
                    <Canvas
                        performance={{ min: 0.5 }}
                        dpr={[1, 2]}
                        camera={{ fov: 122, near: 1, position: [-10, -65, 0] }}
                    // orthographic
                    >

                        <Environment preset="night" background />


                        {/* <color attach="background" args={['#7B96B8']} transparent opacity={0.5}/> */}
                        {/* <fog attach="fog" args={['#7B96B8', 0, 50]} /> */}
                        <hemisphereLight intensity={0.5} />

                        <directionalLight color="#DAA520" intensity={0.5} position={[-10, -75, 0]} />
                        <Moon />
                        <Rig />
                        {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
                    </Canvas>
                </Suspense>
            <PageNation prev="2" next="" />
            </div>
            <>
                <div className="essay">
                    <h3>背中合わせで笑って</h3>

                    <p>騒々しい夜も</p>
                    <p>報われない朝も</p>
                    <p>ひとまわりして、元どおり。</p>
                    {/* <ul className="source">
                        <li><a href="https://gendai.ismedia.jp/articles/-/74255" target="_blank" rel="noreferrer">「時間は逆戻りするのか」</a>シリーズ連載</li>
                    </ul> */}
                    <p className="date"><span className="flip">2021.09.23</span></p>
                </div>
            </>
        </>
    );
}

export default Num3;