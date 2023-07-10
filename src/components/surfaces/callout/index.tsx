import * as React from 'react';
import { Callout, Link, mergeStyleSets, Text, FontWeights, DirectionalHint } from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { IChild } from '../../../types/interfaces';

export const CalloutBasic: React.FunctionComponent<IChild> = (props) => {
    const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
    const buttonId = useId('callout-button');
    const labelId = useId('callout-label');
    const descriptionId = useId('callout-description');
    const { children } = props;

    return (
        <>
            <DefaultButton
                id={buttonId}
                onClick={toggleIsCalloutVisible}
                text={isCalloutVisible ? 'Hide callout' : 'Show callout'}
                className={styles.button}
            />
            {isCalloutVisible && (
                <Callout
                    className={styles.callout}
                    ariaLabelledBy={labelId}
                    ariaDescribedBy={descriptionId}
                    role="dialog"
                    gapSpace={0}
                    target={`#${buttonId}`}
                    onDismiss={toggleIsCalloutVisible}
                    setInitialFocus
                    directionalHint={DirectionalHint.rightCenter}
                >
                    {children}
                </Callout>
            )}
        </>
    );
};

const styles = mergeStyleSets({
    button: {
        width: 130,
    },
    callout: {
        width: 700,
        maxWidth: '90%',
        padding: '20px 24px',
    },
    title: {
        marginBottom: 12,
        fontWeight: FontWeights.semilight,
    },
    link: {
        display: 'block',
        marginTop: 20,
    },
});
