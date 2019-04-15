import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView
} from "react-native";
import { Button } from "native-base";
import bgImage from "../../assets/backgrounds/Mt.Sante-01.png";

export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.imageBackground} source={bgImage} />
        <View style={{ top: "-10%" }}>
          <Text style={styles.welcome}>Welcome to the Mt.Sante</Text>
          <Text style={styles.welcome2}>let's Start the Journey</Text>
        </View>
        <View style={{ top: "10%" }}>
          <Button
            style={styles.buttonSignUp}
            onPress={() => this.props.navigation.navigate("GenderPage")}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </Button>
        </View>
        <View style={{ top: "12%" }}>
          <Button
            style={styles.buttonLogin}
            onPress={() => this.props.navigation.navigate("Mountain")}
          >
            <Text style={styles.buttonText}>Returning User</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 2000,
    position: "absolute",
    top: 0,
    left: 0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
