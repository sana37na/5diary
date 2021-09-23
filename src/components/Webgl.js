import React, { useEffect, Suspense } from "react";
// import reactDom from "react-dom";
// import * as THREE from 'three';
// import * as Fiber from '@react-three/fiber';
// import * as Drei from '@react-three/drei';
import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const Webgl = () => {
    function Box(props) {
        const mesh = useRef()
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)

        useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

        return (
            <mesh
                {...props}
                ref={mesh}
                castShadow
                receiveShadow
                scale={active ? 0.8 : 0.5}
                onClick={(event) => setActive(!active)}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
            // onWheel={(event) => setActive(true)}
            >
                <boxBufferGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'yellow'} />
            </mesh>
        )
    }

    const LoadModel = () => {

        const gltf = useLoader(GLTFLoader, "/only_book.glb")
        return (
            <>
            <primitive scale={0.5} position={[0, -1, 0]} castShadow
                receiveShadow
            object={gltf.scene} dispose={null} />
            <meshStandardMaterial color={'#fff'} />
            </>
        )
    }


    return (
        <div className="canvas-area">
            <Suspense fallback={<span>loading...</span>}>
                <Canvas
                    shadows
                    performance={{ min: 0.5 }}
                    // dpr={[1, 2]}
                    camera={{ fov: 45, position: [10, 10, 10] }}
                >
                    <color attach="background" args={['#1e2243']} />

                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <directionalLight position={[10, 15, 10]} color="white" />
                        <Box position={[0, 0.5, 0]} />
                        <LoadModel />
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

                </Canvas>
            </Suspense>
        </div>
    );
}
export default Webgl;