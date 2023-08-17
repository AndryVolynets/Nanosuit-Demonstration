import React, { Suspense } from 'react'
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { DDSLoader } from 'three-stdlib'
import Scene from '../scene'
import { DefaultLoadingManager } from 'three'

DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

export default function ModelLayout() {
    return (
        <div>
            <Canvas
                style={{ width: '100%', height: '100vh' }}
                camera={{ position: [5, 1, 3] }}>
                    
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>

                <Circle
                    args={[4]}
                    rotation-x={-Math.PI / 2}
                    position={[0, -1, 0]}>
                    <meshStandardMaterial />
                </Circle>

                <directionalLight
                    castShadow
                    intensity={1}
                    position={[-0.5, 1, 3]}
                />

                <pointLight intensity={1} position={[1, 3, -1]} color="white" />
                <OrbitControls
                    autoRotate
                    target={[0, 1, 0]}
                    rotateSpeed={0.5}
                />
                <axesHelper args={[3]} />
                <Stats />
            </Canvas>
        </div>
    )
}
