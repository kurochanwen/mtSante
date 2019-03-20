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
    user: ""
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
  render() {
    return <View style={styles.container}>{this.renderPainPage()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }
});
