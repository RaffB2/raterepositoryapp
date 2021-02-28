import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch, Redirect, Link } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#e1e4e8',
        flex: 1
    }
})

const Main = () => {
    return (
        <View style={styles.main}>
            <AppBar.AppBar />
            <Route path="/" exact>
                <RepositoryList />
            </Route>
            <Route path="/test">
                <SignIn />
            </Route>
            <Text>test123</Text>
        </View >
    );
};

export default { Main };