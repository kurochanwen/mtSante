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
import PainMale from "./painMale";
import PainFemale from "./painFemale";

export default class PainPage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <PainMale />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }
});
