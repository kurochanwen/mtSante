import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Switch
} from "react-native";
import { Button } from "native-base";
import bgImage from "../../assets/backgrounds/Mt.Sante-01.png";

export default class Device extends Component<Props> {
  state = {
    page: 1,
    switchValue1: false,
    switchValue2: false,
    switchValue3: false,
    switchValue4: false,
    switch3: false,
    button1: false,
    button2: false,
    time: ""
  };

  handleButton = state => {
    if (state) {
      return "rgba(255,255,255,.8)";
    } else {
      return "rgba(255,255,255,.4)";
    }
  };

  renderTopMenu = () => (
    <>
      <TouchableOpacity
        style={{ position: "absolute", top: 40, left: 20 }}
        onPress={() => this.props.navigation.toggleDrawer()}
      >
        <Image
          source={require("../../assets/ver5/menu.png")}
          style={{
            height: 25,
            width: 25,
            zIndex: 999
          }}
        />
      </TouchableOpacity>
    </>
  );

  handleRenders = () => {
    switch (this.state.page) {
      case 1:
        return (
          <>
            {this.renderTopMenu()}
            {this.renderFollowUp()}
          </>
        );
        break;
    }
  };
  switches = switchValues => {
    let switchValue;
    switch (switchValues) {
      case 1:
        return (
          <Switch
            value={this.state.switchValue1}
            onValueChange={value => this.setState({ switchValue1: value })}
            trackColor={{ true: "#91D0eD", false: "#ABAAAC" }}
            ios_backgroundColor={"#ABAAAC"}
          />
        );
        break;
      case 2:
        return (
          <Switch
            value={this.state.switchValue2}
            onValueChange={value => this.setState({ switchValue2: value })}
            trackColor={{ true: "#91D0eD", false: "#ABAAAC" }}
            ios_backgroundColor={"#ABAAAC"}
          />
        );

        break;
      case 3:
        return (
          <Switch
            value={this.state.switchValue3}
            onValueChange={value => this.setState({ switchValue3: value })}
            trackColor={{ true: "#91D0eD", false: "#ABAAAC" }}
            ios_backgroundColor={"#ABAAAC"}
          />
        );
        break;
      case 4:
        return (
          <Switch
            value={this.state.switchValue4}
            onValueChange={value => this.setState({ switchValue4: value })}
            trackColor={{ true: "#91D0eD", false: "#ABAAAC" }}
            ios_backgroundColor={"#ABAAAC"}
          />
        );
        break;
    }
  };

  renderMenu = (word, number) => (
    <View
      style={{
        marginTop: 10,
        paddingHorizontal: 10,
        width: "90%",
        height: 40,
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Text style={{ fontSize: 14, color: "white" }}>{word}</Text>
      {number ? this.switches(number) : null}
    </View>
  );
  renderFollowUp = () => {
    return (
      <>
        <View style={{ marginTop: 80, width: "100%" }}>
          <Text
            style={{
              right: 2,
              fontSize: "bold",
              textAlign: "center",
              fontSize: 16,
              color: "white"
            }}
          >
            Sante Band
          </Text>
        </View>
        <View
          style={{
            borderRadius: 20,
            width: "90%",
            height: 150,
            overflow: "hidden"
          }}
        >
          <View
            style={{
              height: 120,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.3)"
            }}
          >
            <Image
              style={{
                transform: [{ rotate: "45deg" }],
                height: 80,
                width: 80
              }}
              source={require("../../assets/ver6/wearable.png")}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 30,
              backgroundColor: "rgba(255,255,255,0.2)"
            }}
          >
            <Text style={{ fontSize: 14, color: "white" }}>54% battery</Text>
          </View>
        </View>
        <View style={{ width: "100%", marginTop: 5 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "white",
              textDecorationLine: "underline"
            }}
          >
            Pair now
          </Text>
        </View>
        <View style={{ width: "90%", marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            General
          </Text>
        </View>
        {this.renderMenu("Sync alarm", 1)}
        {this.renderMenu("Vibration", 2)}
        {this.renderMenu("Low battery alert", 3)}
        {this.renderMenu("Battery saver", 4)}
        <View
          style={{
            marginTop: 10,
            width: "90%",
            height: 80,
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: 10,
            overflow: "hidden"
          }}
        >
          <View
            style={{
              width: "100%",
              height: 30,
              paddingHorizontal: 10,
              backgroundColor: "rgba(255,255,255,0.3)",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 14, color: "white" }}>Vibration mode</Text>
            <Text> </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              height: 50,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View>
              <Button
                onPress={() => this.setState({ button1: !this.state.button1 })}
                style={{
                  ...styles.button,
                  backgroundColor: this.handleButton(this.state.button1)
                }}
              >
                <Text style={{ ...styles.buttonText }}>Single movement</Text>
              </Button>
            </View>
            <View>
              <Button
                onPress={() => this.setState({ button2: !this.state.button2 })}
                style={{
                  ...styles.button,
                  backgroundColor: this.handleButton(this.state.button2)
                }}
              >
                <Text style={{ ...styles.buttonText }}>Movement set</Text>
              </Button>
            </View>
          </View>
        </View>

        <View style={{ width: "90%", marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            About
          </Text>
        </View>
        {this.renderMenu("Product info")}
        {this.renderMenu("Product support")}
        {this.renderMenu("Product manual")}
      </>
    );
  };

  renderMainPage = () => (
    <View style={{ width: "90%", marginTop: 100, marginBottom: 20 }}>
      <Text style={styles.welcome2}>Next Alarm</Text>
      <Text style={styles.welcome}>07h 38min. remaining</Text>
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.imageBackground} source={bgImage} />
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
    flex: 1,
    alignItems: "center"
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
    fontSize: 14,
    color: "#ABAAAC"
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
  alarmText: { fontSize: 30, color: "#5F666D", fontWeight: "bold" },

  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,.4)",
    height: 33,
    width: 126,
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
  }
});
