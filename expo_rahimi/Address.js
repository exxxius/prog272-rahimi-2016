/**
 * by Charlie Calvert
 */

import React, {Component} from 'react';
import {
    Alert,
    Button,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'expo try state',
            firstName: 'default firstName',
            lastName: 'default lastName',
            Street: 'default Street',
            City: 'default City',
            State: 'default State',
            Zip: 'default Zip Code'
        };
        // NOT USED NOW, BUT YOU MIGHT FIND IT HANDY LATER
        this.collection = [];
        this.fetchAddress = this.fetchAddress.bind(this);
    }

    fetchAddress(event) {
        this.setState({foo:'fetcher king'});
        const that = this;
        const ip = '192.168.1.8';
        fetch('http://' + ip + ':30025/all-data')
            .then((response) => response.json())
            .then(function(result) {
                this.collection = result.allData;
                that.setState({
                    foo: 'qux success',
                    firstName: collection[0].firstName,
                    lastName: collection[0].lastName,
                    Street: collection[0].Street,
                    City: collection[0].City,
                    State: collection[0].State,
                    Zip: collection[0].Zip
                });
            }).catch(function(ex) {
            that.setState({foo: 'qux error'});
        });
        if (event) {
            event.preventDefault();
        }
    };

    render() {
        console.log('tst');

        return (
            <View>
                <Text style={styles.instructions}>
                    {this.state.foo}
                </Text>
                <Text style={styles.instructions}>
                    First Name: {this.state.firstName}
                </Text>
                <Text style={styles.instructions}>
                    Last Name:  {this.state.lastName}
                </Text>
                <Text style={styles.instructions}>
                    Street:  {this.state.Street}
                </Text>
                <Text style={styles.instructions}>
                    City:  {this.state.City}
                </Text>
                <Text style={styles.instructions}>
                    State:  {this.state.State}
                </Text>
                <Text style={styles.instructions}>
                    Zip Code:  {this.state.Zip}
                </Text>
                <Button
                    onPress={this.fetchAddress}
                    title="Get Data"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Address', () => Address);