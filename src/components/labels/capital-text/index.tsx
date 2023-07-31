import React from 'react'
import styles from './index.module.css'
import { IntrinsicElements } from '../../../types/interfaces'

type LinkProps = IntrinsicElements['a']

const CapitalText: React.FC<LinkProps> = (props) => {
    const { children } = props

    return (
        <a {...props} className={styles.capital}>
            {children}
        </a>
    )
}

export default CapitalText
