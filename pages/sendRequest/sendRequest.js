import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { Button } from "native-base";

export default class Request extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageBackground}
          source={require("../../assets/ver6/emailpage.png")}
        />
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={{ height: 100, width: 100 }} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  container: {
    flex: 1
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
    borderRadius: 25,
    opacity: 0.5
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "200"
  },
  buttonLogin: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 50,
    borderRadius: 25,
    opacity: 0.5
  }
});
