import React, { useMemo, useState } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Object3D } from 'three'

interface LoadModelProps {
    url: string
}

const LoadModel: React.FC<LoadModelProps> = ({ url }) => {
    const [obj, set] = useState<Object3D | null>(null)

    useMemo(() => new OBJLoader().load(url, set), [url])

    return obj ? (
        <primitive object={obj} dispose={null} position={[0, 10, 0]} />
    ) : null
}

export default LoadModel
