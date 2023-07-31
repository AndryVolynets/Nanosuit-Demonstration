import React from 'react'
import styles from './index.module.css'
import { DividerProps } from '@fluentui/react-components'

const ShowroomLayout: React.FC<DividerProps> = ({ children }) => {
    return (
        <div>
            <div className={styles.showroomLayout}>{children}</div>
        </div>
    )
}

export default ShowroomLayout
