import * as React from 'react';
import { Callout, Link, mergeStyleSets, Text, FontWeights, DirectionalHint } from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { IChild } from '../../../types/interfaces';
import styles from "./index.module.css"

export const CalloutBasic: React.FunctionComponent<IChild> = (props) => {
    const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);

    const buttonId = useId('callout-button');
    const labelId = useId('callout-label');
    const descriptionId = useId('callout-description');
    const { children } = props;

    return (
        <>
            <a className={styles.optionButton + " nav-link"}
                id={buttonId}
                onClick={toggleIsCalloutVisible}
            >
                Themes
            </a>
            {
                isCalloutVisible && (
                    <Callout
                        className={styles.callout}
                        ariaLabelledBy={labelId}
                        ariaDescribedBy={descriptionId}
                        role="dialog"
                        gapSpace={0}
                        target={`#${buttonId}`}
                        onDismiss={toggleIsCalloutVisible}
                        setInitialFocus
                        directionalHint={DirectionalHint.bottomLeftEdge}
                    >
                        {children}
                    </Callout>
                )
            }
        </>
    );
};