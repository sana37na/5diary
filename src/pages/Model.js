import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/book.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
            />
            
        </group>
    )
}

useGLTF.preload('/book.glb')