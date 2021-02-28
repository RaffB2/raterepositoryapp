import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';
import theme from '../theme'

//create custom presets/custom combinations
const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.medium,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    textPrimary: {
        color: theme.colors.textWhite
    },
    textSecondary: {
        color: theme.colors.textPrimary
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold
    },
    fontSizeLarge: {
        fontSize: theme.fontSizes.large
    },
    textGray: {
        color: theme.colors.textGray
    },

})

const Text = (props) => {
    //Text style from template
    const TextStyle = [
        styles.text, //default text
        //preset styles
        props.color === 'primary' && styles.textPrimary,
        props.color === 'secondary' && styles.textSecondary,
        props.color === 'gray' && styles.textGray,
        props.fontWeight === 'bold' && styles.fontWeightBold,
        props.fontSize === 'large' && styles.fontSizeLarge,

        props.style //custom direct style input eg. <Text style={styles.abc}/>
    ];
    return <NativeText style={TextStyle}>{props.textContent}</NativeText>
}

export default Text 
