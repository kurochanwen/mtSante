import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Button } from "native-base";
import bgImage from "../../assets/backgrounds/Mt.Sante-01.png";

export default class ResultsPage extends Component<Props> {
  renderCircleText = word => (
    <View
      style={{
        justifyContent: "center",
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: "rgba(255,255,255,.5)",
        borderRadius: 25
      }}
    >
      <Text
        style={{
          ...styles.text,
          color: "rgba(109,109,109,1)"
        }}
      >
        {word}
      </Text>
    </View>
  );
  renderFollowUp = () => (
    <>
      <View style={{ height: "100%" }}>
        <View
          style={{
            paddingLeft: 40,
            paddingTop: 180,
            flexDirection: "row"
          }}
        >
          <Text style={styles.text}>you are on day </Text>
          {this.renderCircleText(7)}
          <Text style={styles.text}> of </Text>
          {this.renderCircleText(31)}
        </View>

        <View
          style={{
            paddingLeft: 40,
            paddingTop: 10,
            flexDirection: "row"
          }}
        >
          <Text style={styles.text}>your average accuracy is </Text>
          {this.renderCircleText("74.3%")}
        </View>

        <View
          style={{
            paddingLeft: 40,
            paddingTop: 10,
            flexDirection: "row"
          }}
        >
          <Text style={styles.text}>you spent </Text>
          {this.renderCircleText("1hr 23m")}
          <Text style={styles.text}> on Mt.Sante </Text>
        </View>

        <View
          style={{
            paddingLeft: 40,
            paddingTop: 10,
            flexDirection: "row"
          }}
        >
          <Text style={styles.text}>you've earned </Text>
          {this.renderCircleText("45 CAD")}
          <Text style={styles.text}> so far </Text>
        </View>

        <View
          style={{
            paddingLeft: 40,
            paddingTop: 10,
            flexDirection: "row"
          }}
        >
          {this.renderCircleText("3")}
          <Text style={styles.text}> days till the next follow up </Text>
        </View>

        <View style={{ alignItems: "center", paddingTop: 60 }}>
          <Text style={{ ...styles.text, marginBottom: 20 }}>Keep up!</Text>
          <View>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("DrawerHome")}
            >
              <Text style={styles.buttonText}>Back to today</Text>
            </Button>

            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Tabs")}
            >
              <Text style={styles.buttonText}>Back to home</Text>
            </Button>
          </View>
        </View>
      </View>
    </>
  );
  render() {
    return (
      <View style={styles.container}>
        <ScrollView ref={r => (this._ScrollView = r)}>
          <ImageBackground
            style={styles.imageBackground}
            source={require("../../assets/backgrounds/Mt.Sante-01.png")}
          />

          {this.renderFollowUp()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 1200,
    position: "absolute",
    top: 0,
    left: 0
  },
  container: {
    flex: 1,
    height: 1200,
    position: "relative"
  },
  text: {
    fontSize: 20,
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
    color: "white"
  },
  centerContainer: {
    marginTop: "60%",
    height: 260,
    width: 206,
    backgroundColor: "rgba(255,255,255,.7)",
    borderRadius: 35
  },
  welcome3: {
    marginTop: 45,
    fontSize: 16,
    textAlign: "center",
    color: "rgba(131,134,137,1)"
  },
  welcome4: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    color: "rgba(131,134,137,1)"
  },
  button: {
    backgroundColor: "rgba(255,255,255,.85)",
    height: 40,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginTop: 20
  },
  buttonText: {
    color: "rgba(127,130,132,1)",
    fontSize: 16
  },
  buttonLogin: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 87,
    borderRadius: 25,
    opacity: 0.5
  }
});
