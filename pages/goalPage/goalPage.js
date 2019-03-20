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

export default class Mountain extends Component<Props> {
  state = {
    size: 20,
    page: 1
  };
  handlePage = () => {
    switch (this.state.page) {
      case 1:
        return this.roadPage();
        break;
      case 2:
        return this.renderFollowUp();
        break;
      case 3:
        return this.renderCheckGoals();
        break;
    }
  };
  renderCheckGoals = () => (
    <>
      <View style={{ height: 1200, alignItems: "center" }}>
        <View style={{ alignItems: "center", paddingTop: 450 }}>
          <View style={styles.centerContainer}>
            <Text style={styles.welcome3}>Alright</Text>
            <Text style={styles.welcome4}>Let's check today's goal</Text>
            <View style={{ paddingTop: 45, alignItems: "center" }}>
              <View>
                <Button style={styles.button}>
                  <Text style={styles.buttonText}>YEAH!</Text>
                </Button>
              </View>
              <Text
                style={{ ...styles.welcome4, textDecorationLine: "underline" }}
              >
                Maybe later
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
  renderWelcome = () => (
    <>
      <TouchableOpacity
        style={{ height: 1200, alignItems: "center" }}
        onPress={() => this.setState({ page: 2 })}
      >
        <Text style={{ ...styles.welcome, paddingTop: 180 }}>
          Welcome to Mt.Sante
        </Text>
      </TouchableOpacity>
    </>
  );
  renderBox = () => (
    <>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          width: 206,
          height: 282,
          backgroundColor: "rgba(255,255,255,.9)",
          borderRadius: 20,
          alignItems: "center"
        }}
      >
        <Text style={{ ...styles.buttonText, paddingTop: 20 }}>
          Today's goal
        </Text>
        <Text style={{ paddingTop: 20 }}>
          <Text style={{ ...styles.buttonText, fontSize: 20 }}>3 </Text>
          <Text style={{ ...styles.buttonText }}> exercises </Text>
        </Text>
        <Text style={{ paddingTop: 20 }}>
          <Text style={{ ...styles.buttonText, fontSize: 20 }}>8 </Text>
          <Text style={{ ...styles.buttonText }}> mins </Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: 20 }}>
            <Button style={styles.button}>
              <Text style={styles.buttonText}> Start now </Text>
            </Button>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Button style={styles.button}>
              <Text style={styles.buttonText}>Set an Alarm</Text>
            </Button>
          </View>
          <Text
            style={{
              ...styles.buttonText,
              paddingTop: 10,
              textDecorationLine: "underline"
            }}
          >
            Not Now
          </Text>
        </View>
      </View>
    </>
  );
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/backgrounds/Mt.Sante-03.png")}
          resizeMode={"contain"}
        />

        <View
          style={{
            position: "absolute",
            bottom: 40,
            left: 120,
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{ ...styles.painOuter, borderColor: "#F67676" }}
            onPress={() => this.setState({ size: 30 })}
          >
            <View
              style={{
                ...styles.painInner,
                width: this.state.size,
                height: this.state.size,
                backgroundColor: "#F67676"
              }}
            />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 10 }}>02/20</Text>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 200,
            left: 135,
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{ ...styles.painOuter, borderColor: "#F67676" }}
          >
            <View
              style={{
                ...styles.painInner,

                backgroundColor: "#F67676"
              }}
            />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 10 }}>02/21</Text>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 400,
            left: 172,
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{ ...styles.painOuter, borderColor: "#F67676" }}
          >
            <View
              style={{
                ...styles.painInner,

                backgroundColor: "#F67676"
              }}
            />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 10 }}>02/22</Text>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 550,
            left: 180,
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{ ...styles.painOuter, borderColor: "#F67676" }}
          >
            <View
              style={{
                ...styles.painInner,

                backgroundColor: "#F67676"
              }}
            />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 10 }}>02/23</Text>
        </View>

        <View
          style={{
            position: "absolute",
            top: 30,
            left: 195,
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{ ...styles.painOuter, borderColor: "#F67676" }}
          >
            <View
              style={{
                ...styles.painInner,

                backgroundColor: "#F67676"
              }}
            />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 10 }}>02/24</Text>
        </View>
        {this.state.size === 30 && this.renderBox()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
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
    backgroundColor: "white",
    height: 40,
    paddingHorizontal: 35,
    borderRadius: 25
  },
  buttonText: {
    color: "rgba(127,130,132,1)",
    fontSize: 16
  },
  buttonLogin: {
    backgroundColor: "white",
    height: 40,
    paddingHorizontal: 87,
    borderRadius: 25
  },
  painOuter: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1
  },
  painInner: {
    borderRadius: 25,
    margin: 4,
    width: 20,
    height: 20
  }
});
