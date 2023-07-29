import React, { Suspense } from 'react'
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
    const materials = useLoader(MTLLoader, "./../models/nanosuit/nanosuit.mtl");
    const obj = useLoader(OBJLoader, "./../models/nanosuit/nanosuit.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    console.log(obj);
    return <primitive object={obj} scale={0.4} />;
};

export default function ModelLayout() {
    return (
        <div>
            <Canvas style={{ width: '100%', height: '80vh' }} camera={{ position: [-0.5, 1, 3] }} shadows>
                {/* Model */}

                <Suspense fallback={null}>
                    <Scene />
                </Suspense>

                {/* Circle */}
                <Circle args={[1]} rotation-x={-Math.PI / 2} receiveShadow>
                    <meshStandardMaterial />
                </Circle>

                {/* Lights */}
                <directionalLight
                    castShadow
                    intensity={1}
                    position={[-0.5, 1, 3]}
                />

                <pointLight
                    intensity={1}
                    position={[1, 3, -1]}
                    color="white"
                />

                {/* Camera and Controls */}
                <OrbitControls
                    target={[0, 1, 0]}
                    autoRotate
                    rotateSpeed={0.5}
                    enableZoom={false}
                    enablePan={false} />

                {/* Axes Helper */}
                <axesHelper args={[3]} />

                {/* Stats */}
                <Stats />
            </Canvas>
        </div>
    )
}



