import React, { Suspense, useMemo } from "react";
// import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import PageNation from "../components/PageNation";

const Num2 = (props) => {

    function Particles({ count }) {
        const mesh = useRef()
        const light = useRef()
        useFrame((state, delta) => (mesh.current.rotation.y += 0.001))

        const dummy = useMemo(() => new THREE.Object3D(), [])
        // Generate some random positions, speed factors and timings
        const particles = useMemo(() => {
            const temp = []
            for (let i = 0; i < count; i++) {
                const t = Math.random() * 100
                const factor = 20 + Math.random() * 100
                const speed = 0.01 + Math.random() / 200
                const xFactor = -50 + Math.random() * 100
                const yFactor = -50 + Math.random() * 100
                const zFactor = -50 + Math.random() * 100
                temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
            }
            return temp
        }, [count])
        // The innards of this hook will run every frame
        useFrame((state) => {
            // Makes the light follow the mouse
            // light.current.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
            // Run through the randomized data to calculate some movement
            particles.forEach((particle, i) => {
                let { t, factor, speed, xFactor, yFactor, zFactor } = particle
                // There is no sense or reason to any of this, just messing around with trigonometric functions
                t = particle.t += speed / 2
                const a = Math.cos(t) + Math.sin(t * 1) / 10
                const b = Math.sin(t) + Math.cos(t * 2) / 10
                const s = Math.cos(t)
                // particle.mx += (mouse.current[0] - particle.mx) * 0.01
                // particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
                // Update the dummy object
                dummy.position.set(
                    (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                    (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                    (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
                )
                dummy.scale.set(s, s, s)
                dummy.rotation.set(s * 5, s * 5, s * 5)
                dummy.updateMatrix()
                // And apply the matrix to the instanced item
                mesh.current.setMatrixAt(i, dummy.matrix)
            })
            // mesh.current.instanceMatrix.needsUpdate = true
        })
        return (
            <>
                <pointLight ref={light} distance={40} intensity={10} color="#7B96B8" />
                <instancedMesh ref={mesh} args={[null, null, count]}>
                    <dodecahedronGeometry args={[1, 1]} />
                    <meshPhongMaterial color="#fff" />
                </instancedMesh>
            </>
        )
    };

    function Moon(props) {
        const mesh = useRef()

        return (
            <mesh
                {...props}
                ref={mesh}
                scale={2}
            >
                <pointLight position={[0, -8, 10]} intensity={2.5} />
                <icosahedronGeometry args={[6, 5]} />
                <meshPhongMaterial color="#7B96B8" specular="pink" />
            </mesh>)
    };



    return (
        <>
            <h2>{props.num} / 365</h2>
            <div className="daily-canvas">
                <Canvas
                    shadows
                    performance={{ min: 0.5 }}
                    dpr={[1, 2]}
                    camera={{ fov: 100, position: [-30, -25, 5] }}
                >
                    <Suspense fallback={<span>loading...</span>}>
                        <hemisphereLight intensity={0.3} />
                        <ambientLight color="pink" intensity={0.3} />
                        <Particles count={50} />
                        <Moon />
                        {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
                    </Suspense>
                </Canvas>
            <PageNation prev="1" next="3" />
            </div>
            <>
            <div className="essay">
                <h3>月と星のあいだ</h3>

                <p>夢うつつのからだ</p>
                {/* <ul className="source">
                        <li>(1) </li>
                        <li>(2) <a href="https://www.cinra.net/interview/201404-mumgypsykawakami" target="_blank" rel="noreferrer">藤田貴大×川上未映子の叫び「まだ全然言い足りてない」</a> 2014/04/03</li>
                    </ul> */}
                <p className="date">2021.09.23</p>
            </div>
            </>
        </>
    );
}

export default Num2;