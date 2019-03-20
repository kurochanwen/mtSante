import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Button } from "native-base";

export default class GenderPage extends Component<Props> {
  state = {
    error: false,
    gender: "",
    didClick: false,
    male: {
      width: 153,
      height: 442,
      opacity: 1
    },
    female: {
      width: 145,
      height: 460,
      opacity: 1
    }
  };

  handleOnClick = gender => {
    if (gender === "male") {
      this.setState({
        error: false,
        didClick: true,
        female: {
          width: 145,
          height: 460,
          opacity: 0.6
        },
        male: {
          width: 153,
          height: 486,
          opacity: 1
        }
      });
    } else if (gender === "female") {
      this.setState({
        error: false,
        didClick: true,
        male: {
          width: 153,
          height: 442,
          opacity: 0.6
        },
        female: {
          width: 145,
          height: 486,
          opacity: 1
        }
      });
    }
  };
  handleNextButton = () => {
    if (this.state.didClick) {
      this.props.navigation.navigate("SignUpForm");
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { male, female } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/backgrounds/Mt.Sante-01.png")}
        />
        <View style={{ top: -20 }}>
          <Text style={styles.welcome}>
            Please select a charter base on your gender
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative"
          }}
        >
          <TouchableOpacity onPress={() => this.handleOnClick("male")}>
            <Image
              style={{
                width: male.width,
                height: male.height,
                opacity: male.opacity
              }}
              source={require("../../assets/human-figures/Mt.Sante-boi.png")}
            />
            <Text style={styles.maleText}>Male</Text>
          </TouchableOpacity>
          <View
            style={{
              top: 15,
              height: 420,
              borderLeftColor: "white",
              borderLeftWidth: 2,
              padding: 2,
              marginLeft: 12,
              marginRight: 10
            }}
          />
          <TouchableOpacity onPress={() => this.handleOnClick("female")}>
            <Image
              style={{
                top: 10,
                width: female.width,
                height: female.height,
                opacity: female.opacity
              }}
              source={require("../../assets/human-figures/Mt.Sante-gul.png")}
            />
            <Text style={styles.femaleText}>Female</Text>
          </TouchableOpacity>
        </View>
        {this.state.error && (
          <Text style={styles.error}>Please select a gender!</Text>
        )}
        <View style={{ paddingTop: 40 }}>
          <Button style={styles.buttonLogin} onPress={this.handleNextButton}>
            <Text style={styles.buttonText}>Next</Text>
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
    fontSize: 16,
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
    paddingHorizontal: 50,
    borderRadius: 25,
    opacity: 0.5
  },
  error: { paddingTop: 20, fontSize: 15, color: "red", textAlign: "center" },
  maleText: { textAlign: "center", right: 5, color: "white" },
  femaleText: { textAlign: "center", top: -18, color: "white" }
});
