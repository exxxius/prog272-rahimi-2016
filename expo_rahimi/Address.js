import React, {Component} from 'react';
import {
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
        this.index = 0;
        this.collection = [];
        this.deleteAddresses = this.deleteAddresses.bind(this);
        this.insertAddresses = this.insertAddresses.bind(this);
        this.fetchAddress = this.fetchAddress.bind(this);
        this.getPrevAddress = this.getPrevAddress.bind(this);
        this.getNextAddress = this.getNextAddress.bind(this);
    }

    deleteAddresses(event) {
        this.setState({foo:'Beginning Deleting'});
        const that = this;
        const ip = '192.168.1.19';
        fetch('http://' + ip + ':30025/emptyCollection')
            .then((response) => response.json())
            .then(function(result) {
                if (result.result === "collection removed") {
                    that.setState({
                        foo: 'Collection Emptied',
                    });
                }
                else
                    that.setState({
                        foo: 'Error Emptying Collection'
                    });
            }).catch(function(ex) {
            that.setState({foo: 'qux error'});
        });
        if (event) {
            event.preventDefault();
        }
    };

    insertAddresses(event) {
        this.setState({foo:'Beginning Inserting'});
        const that = this;
        const ip = '192.168.1.19';
        fetch('http://' + ip + ':30025/insertValidCollection')
            .then((response) => response.json())
            .then(function(result) {
                if (result.totalSaved === 102) {
                    that.setState({
                        foo: 'Inserted ' + result.totalSaved + ' objects',
                    });
                }
                else
                    that.setState({
                        foo: 'Error Inserting Data'
                    });
            }).catch(function(ex) {
            that.setState({foo: 'qux error'});
        });
        if (event) {
            event.preventDefault();
        }
    };

    fetchAddress(event) {
        this.setState({foo:'gone Fetchin...'});
        const that = this;
        const ip = '192.168.1.19';
        fetch('http://' + ip + ':30025/all-data')
            .then((response) => response.json())
            .then(function(result) {
                that.collection = result.allData;
                if (that.collection.length != 0)
                    that.setState({
                        foo: 'qux success',
                        firstName: that.collection[that.index].firstName,
                        lastName: that.collection[that.index].lastName,
                        Street: that.collection[that.index].Street,
                        City: that.collection[that.index].City,
                        State: that.collection[that.index].State,
                        Zip: that.collection[that.index].Zip
                    });
                else
                    that.setState({
                        foo: 'DB is empty'
                    });
            }).catch(function(ex) {
            that.setState({foo: 'qux error'});
        });
        if (event) {
            event.preventDefault();
        }
    };

    getPrevAddress(event) {
        if (this.collection.length != 0) {
            if (this.index === 0) {
                this.index = this.collection.length - 1;
            }
            else {
                this.index--;
            }
            this.setState({
                foo: 'Previous Address succeed',
                firstName: this.collection[this.index].firstName,
                lastName: this.collection[this.index].lastName,
                Street: this.collection[this.index].Street,
                City: this.collection[this.index].City,
                State: this.collection[this.index].State,
                Zip: this.collection[this.index].Zip
            });
            if (event) {
                event.preventDefault();
            }
        }
        else {
            this.setState({
                foo: 'Prev Unavailable'
            });
        }
    };

    getNextAddress(event) {
        if (this.collection.length != 0) {
            if (this.index === this.collection.length - 1) {
                this.index = 0;
            }
            else {
                this.index++;
            }
            this.setState({
                foo: 'Next Address succeed',
                firstName: this.collection[this.index].firstName,
                lastName: this.collection[this.index].lastName,
                Street: this.collection[this.index].Street,
                City: this.collection[this.index].City,
                State: this.collection[this.index].State,
                Zip: this.collection[this.index].Zip
            });

            if (event) {
                event.preventDefault();
            }
        }
        else {
            this.setState({
                foo: 'Next Unavailable'
            });
        }

    };

    render() {
        console.log('Running Render Method');

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
                    style={styles.appButtons}
                    onPress={this.deleteAddresses}
                    title="Delete AddressBook"
                    color="red"
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    style={styles.appButtons}
                    onPress={this.insertAddresses}
                    title="Insert AddressBook"
                    color="cyan"
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    style={styles.appButtons}
                    onPress={this.fetchAddress}
                    title="Load Addresses"
                    color="orange"
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    style={styles.appButtons}
                    onPress={this.getPrevAddress}
                    title="Previous Address"
                    color="blue"
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    style={styles.appButtons}
                    onPress={this.getNextAddress}
                    title="Next Address"
                    color="green"
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
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da'
    }
});

AppRegistry.registerComponent('Address', () => Address);