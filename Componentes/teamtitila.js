import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.instructions2} >{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  instructions2: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FF5500',
    marginBottom: 5,
  },
});
