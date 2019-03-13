import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import { Button, Icon } from "native-base";

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ top: "10%" }}>
          <View style={{ alignItems: "center", marginBottom: 40 }}>
            <Text style={styles.welcome}>Create an account to</Text>
            <Text style={styles.welcome}>save your progress</Text>
          </View>
          <View style={{ left: 18, marginBottom: 20 }}>
            <Text style={{ color: "white" }}>Sign in with</Text>
          </View>
          <View
            style={{
              left: 25,
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 50
            }}
          >
            <View
              style={{
                width: 65,
                height: 65,
                borderRadius: 35,
                backgroundColor: "white"
              }}
            />
            <View
              style={{
                width: 65,
                height: 65,
                borderRadius: 35,
                backgroundColor: "white"
              }}
            />
            <View
              style={{
                width: 65,
                height: 65,
                borderRadius: 35,
                backgroundColor: "white"
              }}
            />
          </View>
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              marginBottom: 40
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
                  onPress={() => this.props.navigation.navigate("SignUpForm")}
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
  container: {
    flex: 1,
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
  buttonPhone: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 30
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "200"
  },
  buttonEmail: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 84,
    borderRadius: 25
  }
});
