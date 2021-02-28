import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text as NativeText, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e',
        flexDirection: 'row',

    },
    textContainer: {
        paddingLeft: 15,
    },
});

const AppBarTab = ({ textContent, fontWeight, fontSize = "large" }) => (
    <Text textContent={textContent} fontWeight={fontWeight} color="primary" fontSize={fontSize} />
)

//Top bar -- navigation
const AppBar = () => (
    <View style={styles.container}>
        <ScrollView horizontal={true}>
            <Link to="/">
                <View style={styles.textContainer}>
                    <AppBarTab textContent="Repositories" fontWeight='' />
                </View>
            </Link>
            <Link to="/test">
                <View style={{ ...styles.textContainer }}>
                    <AppBarTab textContent="Sign In" fontWeight='bold' />
                </View>
            </Link>
        </ScrollView>
    </View>
)

export default { AppBar };