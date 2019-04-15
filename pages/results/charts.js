import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  Dimensions
} from "react-native";
import { Button } from "native-base";
import bgImage from "../../assets/backgrounds/Mt.Sante-01.png";
import Carousel from "react-native-snap-carousel";

export default class Charts extends Component<Props> {
  state = {
    page: 1,
    switchValue1: false,
    switchValue2: false,
    switchValue3: false,
    switch3: false,
    time: "",
    width: Dimensions.get("window").width * 2,
    images: [
      { picture: require("../../assets/ver6/Maycal.png") },
      { picture: require("../../assets/ver6/JuneCal.png") }
    ]
  };

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
  _renderItem = ({ item, index }) => {
    return (
      <View style={{ marginLeft: 12 }}>
        <Image
          source={item.picture}
          style={{ width: 350, height: 350, borderRadius: 20 }}
        />
      </View>
    );
  };

  renderCharts = () => (
    <>
      <Carousel
        data={this.state.images}
        renderItem={this._renderItem}
        sliderWidth={this.state.width}
        itemWidth={Dimensions.get("window").width}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />

      <View style={{ padding: 20, width: "100%", alignItems: "flex-start" }}>
        <Text
          style={{
            marginTop: 30,
            fontSize: 16,
            textAlign: "left",
            fontWeight: "bold",
            color: "white"
          }}
        >
          Weekly accuracy
        </Text>
      </View>
      <View
        style={{
          width: 354,
          height: 211,
          borderRadius: 20,
          backgroundColor: "rgba(255,255,255,.6)",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: 333, height: 193 }}
          source={require("../../assets/ver6/chart.png")}
        />
      </View>

      <View
        style={{ paddingLeft: 20, width: "100%", alignItems: "flex-start" }}
      >
        <Text
          style={{
            marginTop: 30,
            fontSize: 16,
            textAlign: "left",
            fontWeight: "bold",
            color: "white"
          }}
        >
          Money accumulated
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          width: "100%",
          flexDirection: "row"
        }}
      >
        {this.renderCircleText("12 CAD")}
        <Text style={styles.text}> of </Text>
        {this.renderCircleText("93 CAD")}
        <Text style={styles.text}> collected </Text>
      </View>
      <View style={{ alignItems: "center", paddingVertical: 80 }}>
        <View>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Tabs")}
          >
            <Text style={styles.buttonText}>Back to today</Text>
          </Button>

          <Button
            style={{ ...styles.button, marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("DrawerHome")}
          >
            <Text style={styles.buttonText}>Back to home</Text>
          </Button>
        </View>
      </View>
    </>
  );

  renderMainPage = () => (
    <View style={{ width: "90%", marginTop: 100, marginBottom: 20 }}>
      <Text style={styles.welcome2}>Next follow up in</Text>
      <Text style={styles.welcome}>4 Days</Text>
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <ImageBackground style={styles.imageBackground} source={bgImage} />
          {this.renderMainPage()}
          {this.renderCharts()}
        </ScrollView>
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
    flex: 1
  },
  welcome: {
    fontSize: 30,
    textAlign: "left",
    color: "white",
    fontWeight: "bold"
  },
  welcome2: {
    fontSize: 16,
    textAlign: "left",
    color: "white",
    fontWeight: "bold"
  },
  welcome1: {
    marginTop: 100,
    fontSize: 16,
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  receiptContainer: {
    marginTop: 15,
    borderRadius: 20,
    width: "90%",
    height: 110,
    backgroundColor: "rgba(255,255,255,0.3)",
    overflow: "hidden"
  },
  receiptHeadImage: {
    width: "100%",
    height: "70%"
  },
  receiptText: {
    padding: 10,
    fontSize: 12,
    color: "#666666",
    fontWeight: "bold"
  },
  receiptTextContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "200"
  },
  assessmentContainer: {
    borderRadius: 20,
    width: "85%",
    height: 500,
    backgroundColor: "rgba(255,255,255,0.3)",
    overflow: "hidden"
  },
  assessmentHeadImage: {
    width: "100%",
    height: 70
  },
  alarmText: { fontSize: 30, color: "white", fontWeight: "bold" },

  buttonText: {
    fontSize: 16,
    color: "#7F8284"
  },
  button: {
    backgroundColor: "rgba(255,255,255,.85)",
    height: 40,
    paddingHorizontal: 47,
    borderRadius: 25
  },
  underText: {
    paddingTop: 20,
    fontSize: 16,
    color: "white",
    textDecorationLine: "underline"
  },
  textContainer: {
    alignItems: "flex-end",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 20,
    color: "white"
  }
});
