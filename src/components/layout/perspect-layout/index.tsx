import React from 'react'
import styles from './index.module.css'
import { DividerProps } from '@fluentui/react-components'
import { usePerspective } from './../../../hooks/use-perspect'

const PerspectLayout: React.FC<DividerProps> = (props) => {
    const { children } = props
    const [bendContainerRef, perspectiveStyle] = usePerspective()

    return (
        <div
            ref={bendContainerRef}
            className={styles.mainContent}
            style={{ transform: `${perspectiveStyle}` }}
        >
            {children}
        </div>
    )
}

export default PerspectLayout
