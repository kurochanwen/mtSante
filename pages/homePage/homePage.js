import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ top: "-10%" }}>
          <Text style={styles.welcome}>Welcome to the Mt.Sante</Text>
          <Text style={styles.welcome2}>let's Start the Journey</Text>
        </View>
        <View style={{ top: "10%" }}>
          <Button
            style={styles.buttonSignUp}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </Button>
        </View>
        <View style={{ top: "12%" }}>
          <Button style={styles.buttonLogin}>
            <Text style={styles.buttonText}>Log in</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90D0ED"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
    color: "white"
  },
  welcome2: {
    fontSize: 16,
    textAlign: "center",
    color: "white"
  },
  buttonSignUp: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 80,
    borderRadius: 25
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "200"
  },
  buttonLogin: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 87,
    borderRadius: 25
  }
});
