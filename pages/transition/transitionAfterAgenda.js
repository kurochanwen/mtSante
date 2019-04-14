import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image
} from "react-native";
import { Button } from "native-base";

export default class TransitionAfterAgenda extends Component<Props> {
  state = {
    transition: false
  };
  handleRenders = () => {
    if (this.state.transition) {
      return this.renderFist();
    } else {
      return this.renderMuscle();
    }
  };
  renderMuscle = () => (
    <View style={{ alignItems: "center" }}>
      <View style={styles.centerContainer}>
        <Image
          style={styles.icon}
          source={require("../../assets/Icons/muscle.png")}
        />
        <Text style={styles.welcome1}>
          Pack up and get ready for the journey starts on 2019.03.27
        </Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: 10 }}>
            <Button
              style={styles.button}
              onPress={() => this.setState({ transition: true })}
            >
              <Text style={styles.buttonText}>Set reminder</Text>
            </Button>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: 10 }}>
            <Button
              style={styles.button}
              onPress={() => this.setState({ transition: true })}
            >
              <Text style={styles.buttonText}>Check details</Text>
            </Button>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.underText}>Dismiss</Text>
      </View>
    </View>
  );
  renderFist = () => (
    <View style={{ alignItems: "center" }}>
      <View style={styles.centerContainer}>
        <Image
          style={styles.icon}
          source={require("../../assets/Icons/motivation.png")}
        />
        <Text style={styles.welcome1}>
          Alright! Your appointment date and time have been synced with your
          calendar
        </Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: 10 }}>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Review")}
            >
              <Text style={styles.buttonText}>Check Calendar</Text>
            </Button>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: 10 }}>
            <Button
              style={{ ...styles.button, paddingHorizontal: 55 }}
              onPress={() => this.props.navigation.navigate("Mountain")}
            >
              <Text style={styles.buttonText}>Back</Text>
            </Button>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.underText}>Dismiss</Text>
      </View>
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/backgrounds/Mt.Sante-01.png")}
        />
        {this.handleRenders()}
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
    position: "relative",
    flex: 1,
    justifyContent: "center"
  },
  centerContainer: {
    height: 300,
    width: 250,
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: "rgba(255,255,255,.7)",
    borderRadius: 35,
    alignItems: "center"
  },
  welcome: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "white"
  },
  welcome1: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "#666666",
    paddingTop: 20,
    lineHeight: 20
  },
  welcome2: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666"
  },
  underText: {
    paddingTop: 20,
    fontSize: 16,
    color: "white",
    textDecorationLine: "underline"
  },
  buttonText: {
    fontSize: 16
  },
  button: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 25,
    opacity: 0.5
  },
  icon: {
    marginTop: 10,
    height: 60,
    width: 60
  }
});
