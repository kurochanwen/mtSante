import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage
} from "react-native";
import { Button } from "native-base";
import PainMale from "./painMale";
import PainFemale from "./painFemale";

export default class PainPage extends Component<Props> {
  state = {
    user: "",
    transition: false
  };
  componentDidMount = () => {
    this._retrieveData();
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("USERDATA");
      if (value !== null) {
        this.setState({ user: JSON.parse(value) });
      }
    } catch (error) {
      console.warn(error);
    }
  };
  renderPainPage = () => {
    if (this.state.user.gender === "male") {
      return <PainMale navigation={this.props.navigation} />;
    } else if (this.state.user.gender === "female") {
      return <PainFemale navigation={this.props.navigation} />;
    } else {
      this.props.navigation.navigate("homePage");
    }
  };

  nextScreen = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/backgrounds/Mt.Sante-01.png")}
      />
      <View style={{ alignItems: "center" }}>
        <View style={styles.centerContainer}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.icon}
              source={require("../../assets/Icons/checked.png")}
            />
          </View>
          <Text style={styles.welcome1}>All Set!</Text>
          <Text style={styles.welcome2}>Let's know more about you</Text>
          <View style={{ alignItems: "center" }}>
            <View style={{ paddingTop: "20%" }}>
              <Button
                style={styles.button}
                onPress={() => this.setState({ transition: true })}
              >
                <Text style={styles.buttonText}>Next</Text>
              </Button>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.underText}>Skip</Text>
        </View>
      </View>
    </>
  );

  render() {
    return (
      <View style={styles.container}>
        {this.state.transition ? this.renderPainPage() : this.nextScreen()}
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
    borderRadius: 35
  },
  welcome: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "white"
  },
  welcome1: {
    fontSize: 16,
    textAlign: "left",
    marginVertical: 15,
    color: "#666666"
  },
  welcome2: {
    fontSize: 16,
    textAlign: "left",
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
  icon: {
    marginVertical: 20,
    height: 80,
    width: 80
  },
  button: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 38,
    borderRadius: 25,
    opacity: 0.5
  }
});
