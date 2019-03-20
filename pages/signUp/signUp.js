import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
  Image
} from "react-native";
import { Button, Icon } from "native-base";

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/backgrounds/Mt.Sante-01.png")}
        />
        <View style={{ top: "15%" }}>
          <View style={{ alignItems: "center", paddingBottom: 50 }}>
            <Text style={styles.welcome}>Create an account to</Text>
            <Text style={styles.welcome}>save your progress</Text>
          </View>

          <Text style={styles.iconText}>Sign in with</Text>
          <View
            style={{
              left: 9,
              width: "80%",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row"
            }}
          >
            <View style={styles.icon}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25
                }}
                source={require("../../assets/Icons/google-logo.png")}
              />
            </View>
            <View style={styles.icon}>
              <Image
                style={{
                  width: 82,
                  height: 82,
                  borderRadius: 25
                }}
                source={require("../../assets/Icons/facebook-logo.png")}
              />
            </View>
            <View style={styles.icon}>
              <Image
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: 25
                }}
                source={require("../../assets/Icons/microsoft-logo.png")}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              paddingVertical: 60
            }}
          >
            <View
              style={{
                top: -8.5,
                borderBottomColor: "white",
                borderBottomWidth: 2,
                padding: 1,
                paddingHorizontal: 70
              }}
            />
            <Text style={{ padding: 0, color: "white" }}>OR</Text>
            <View
              style={{
                top: -8.5,
                borderBottomColor: "white",
                borderBottomWidth: 2,
                padding: 1,
                paddingHorizontal: 70
              }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={{}}>
              <Button style={styles.buttonPhone}>
                <Text
                  style={styles.buttonText}
                  onPress={() => this.props.navigation.navigate("GenderPage")}
                >
                  Sign up with phone number
                </Text>
              </Button>
            </View>
            <View style={{}}>
              <Button style={styles.buttonEmail}>
                <Text style={styles.buttonText}>Sign up with Email</Text>
              </Button>
            </View>
          </View>
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
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 0,
    color: "white"
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 65,
    height: 65,
    borderRadius: 32,
    backgroundColor: "white"
  },
  buttonPhone: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 30,
    opacity: 0.5
  },
  iconText: {
    fontSize: 16,
    color: "white",
    left: 18,
    paddingBottom: 30
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "200"
  },
  buttonEmail: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 84,
    borderRadius: 25,
    opacity: 0.5
  }
});
