import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Button } from "native-base";

export default class TransitionMap extends Component<Props> {
  renderBravo = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/backgrounds/Mt.Sante-01.png")}
      />
      <View style={{ alignItems: "center" }}>
        <View style={styles.centerContainer}>
          <Text style={styles.welcome3}>Bravo!</Text>
          <Text style={styles.welcome4}>You finished your</Text>
          <Text style={styles.welcome4}>first step!</Text>
          <Text style={{ ...styles.welcome4, paddingTop: 20 }}>
            Let us know how did
          </Text>
          <Text style={styles.welcome4}>you feel about your</Text>
          <Text style={styles.welcome4}>first experience</Text>

          <View style={{ paddingTop: 40, alignItems: "center" }}>
            <View>
              <Button style={styles.button1}>
                <Text style={styles.buttonText}>Leave a review</Text>
              </Button>
            </View>
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Mountain")}
              >
                <Text
                  style={{
                    ...styles.buttonText,
                    textDecorationLine: "underline",
                    color: "white"
                  }}
                >
                  Not now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
  renderAllSet = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/backgrounds/Mt.Sante-01.png")}
      />
      <View style={{ alignItems: "center" }}>
        <View style={styles.centerContainer}>
          <Text style={styles.welcome3}>All set!</Text>
          <Text style={styles.welcome4}>Pack up and get ready</Text>
          <Text style={styles.welcome4}>for the journey starts</Text>
          <Text style={styles.welcome4}>
            <Text>on </Text>
            <Text
              style={{ ...styles.welcome4, textDecorationLine: "underline" }}
            >
              2019.02.20
            </Text>
          </Text>
          <View style={{ paddingTop: 40, alignItems: "center" }}>
            <View>
              <Button style={styles.button1}>
                <Text style={styles.buttonText}>Set Reminder</Text>
              </Button>
            </View>
            <View style={{ paddingTop: 20 }}>
              <Button style={styles.button1}>
                <Text style={styles.buttonText}>Check details</Text>
              </Button>
            </View>
            <View style={{ paddingTop: 20 }}>
              <Text
                style={{
                  ...styles.buttonText,
                  textDecorationLine: "underline",
                  color: "white"
                }}
              >
                dismiss
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
  render() {
    return <View style={styles.container}>{this.renderBravo()}</View>;
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
    flex: 1
  },
  centerContainer: {
    marginTop: "60%",
    height: 344,
    width: 206,
    backgroundColor: "rgba(255,255,255,.15)",
    borderRadius: 35
  },
  button1: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 25,

    opacity: 0.5
  },
  welcome3: {
    marginTop: 40,
    fontSize: 16,
    textAlign: "center",
    color: "white"
  },
  welcome4: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
    color: "white"
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
    color: "white",
    marginTop: 90,
    marginBottom: 50
  },
  button: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 40,
    opacity: 0.5
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "200"
  }
});
