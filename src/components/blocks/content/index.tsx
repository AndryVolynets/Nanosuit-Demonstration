import React from 'react'
import styles from './index.module.css'
import { IChild } from '../../../types/interfaces'

const ContentSnippet = (props: IChild) => {
    const { children } = props

    return <div className={styles.snippet}>{children}</div>
}

export default ContentSnippet
