import React, { Suspense } from "react";
// import reactDom from "react-dom";
// import * as THREE from 'three';
// import * as Fiber from '@react-three/fiber';
// import * as Drei from '@react-three/drei';
import { OrbitControls, Stage, Html } from '@react-three/drei'
import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from '@react-three/drei';
import Model from "./Model";



const Top = () => {

    function Box(props) {
        const mesh = useRef()
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
        useFrame((state, delta) => (mesh.current.rotation.z += 0.005))

        return (
            <mesh
                {...props}
                ref={mesh}
                castShadow
                receiveShadow
                scale={active ? 0.6 : 0.5}
                onClick={(event) => setActive(!active)}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
            >
                <boxBufferGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : '#7B96B8'} />
                <Html distanceFactor={10}>
                    <div className="content">
                        <a href="./3" className="content-link">Day 3</a>
                    </div>
                </Html>
            </mesh>
        )
    }

    function Triangle(props) {
        const mesh = useRef()
        // useFrame((state, delta) => (mesh.current.rotation.z += 0.01))

        return (
            <mesh
                {...props}
                ref={mesh}
                scale={0.3}
                rotation={[Math.PI / -1, 2, 0]}
            >
                <torusGeometry tubularSegments={3} args={[3, 0.1, 2, 3]} />
                <meshBasicMaterial color="lightgray" />

                <Html distanceFactor={10}>
                    <div className="content">
                        <a href="/1" className="content-link">Day 1</a>
                    </div>
                </Html>
            </mesh>
        )
    }

    function Icosahedron(props) {
        const mesh = useRef()

        return (
            <mesh
                {...props}
                ref={mesh}
                scale={0.5}
                doubleSide={true}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <icosahedronGeometry  args={[1, 5]}/>
                <meshPhongMaterial color="pink" />
                <Html distanceFactor={10}>
                    <div className="content">
                        <a href="/2" className="content-link">Day 2</a>
                    </div>
                </Html>
            </mesh>
        )
    }

    // book
    function LoadModel(props) {
        const group = useRef()
        const gltf = useLoader(GLTFLoader, "/only_book.glb")
        return (
            // <group ref={group} {...props} dispose={null}>
                <primitive scale={0.8} position={[0, 0, 0]}
                    castShadow
                    receiveShadow
                    object={gltf.scene} dispose={null} />
        )
    }


    return (
        <>
            <h2>See the picture</h2>
            <div className="canvas-area">
                <Suspense fallback={<span>loading...</span>}>
                    <Canvas
                        performance={{ min: 0.5 }}
                        dpr={[1, 2]}
                        camera={{ fov: 40, position: [-10, 11, -10] }}
                    >
                        <Stage adjustCamera={false} environment="city">
                        <Box position={[-3, 3, -2]} />
                        <Triangle position={[-1, 3, 2]} />
                        <Icosahedron position={[1.5, 3.5, -1.5]} />
                            {/* <Model /> */}
                            {/* <LoadModel /> */}
                        </Stage>
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

                    </Canvas>
                </Suspense>
                <p className="small textRight"><a href="/3">open the latest picture</a></p>
            </div>
        </>
    );
}
export default Top;