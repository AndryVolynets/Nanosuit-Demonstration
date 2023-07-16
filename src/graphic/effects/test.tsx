import React, { FC, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, SpotLight, useDepthBuffer } from '@react-three/drei';
import { Color, DepthTexture, Vector3 } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { DividerProps } from '@fluentui/react-components';

interface MovingSpotProps {
    vec?: Vector3;
    color: string;
    position: [number, number, number];
    depthBuffer: DepthTexture;
}

type SceneData = GLTF & {
    nodes: {
        dragon: {
            geometry: any;
        };
    };
    materials: {
        [key: string]: any;
    };
}

function MovingSpot({ vec = new Vector3(), depthBuffer, ...props }: MovingSpotProps) {
    const viewport = useThree((state) => state.viewport);

    useFrame((state) => {
        const targetPosition = new Vector3(
            (state.mouse.x * viewport.width) / 2,
            (state.mouse.y * viewport.height) / 2,
            0
        );
        vec.lerp(targetPosition, 0.1);
    });

    return (
        <spotLight
            castShadow
            penumbra={1}
            distance={10}
            angle={0.35}
            power={4}
            intensity={2}
            {...props}
        />
    );
}

function Scene() {
    const depthBuffer = useDepthBuffer({ frames: 1 });
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dragon/model.gltf') as SceneData;

    return (
        <>
            <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[-1, 3, 2]} />
            <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[1, 3, 0]} />
            <mesh position={[0, -1.03, 0]} castShadow receiveShadow geometry={nodes.dragon.geometry} material={materials['Default OBJ.001']} dispose={null} />
            <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[50, 50]} />
                <meshPhongMaterial />
            </mesh>
        </>
    );
}

const ModelLayout = () => {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <Canvas style={{ width: '100%', height: '100vh' }} shadows dpr={[1, 2]} camera={{ position: [-2, 2, 6], fov: 25, near: 1, far: 20 }}>
                <color attach="background" args={['#202020']} />
                <fog attach="fog" args={['#202020', 5, 20]} />
                <ambientLight intensity={0.020} />
                <Scene />
            </Canvas>
        </div>
    );
};

export default ModelLayout;