import React, { memo } from 'react'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

const Scene = memo(() => {
    const materials = useLoader(
        MTLLoader,
        'public/assets/textures/mtl/nanosuit.mtl'
    )
    const obj = useLoader(
        OBJLoader,
        'public/assets/models/nanosuit/obj/nanosuit.obj',
        (loader) => {
            materials.preload()
            loader.setMaterials(materials)
        }
    )
    return <primitive object={obj} scale={0.0225} position={[0, -1, 0]} />
})

export default Scene
