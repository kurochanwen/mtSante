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

export default class PainMale extends Component<Props> {
  state = {
    clicked: false,
    pain: {
      frontRightShoulder: 0,
      frontLeftShoulder: "",
      frontRightKnee: "",
      frontLeftKnee: "",
      backRightShoulder: "",
      backLeftShoulder: "",
      backRightKnee: "",
      backLeftKnee: ""
    },
    painSelect: {
      mild: {
        height: 19,
        width: 19
      },
      ouch: {
        height: 19,
        width: 19
      },
      strong: {
        height: 19,
        width: 19
      },
      veryStrong: {
        height: 19,
        width: 19
      }
    },
    painColor: ""
  };

  handleOnClick = () => {
    if (this.state.clicked) {
      this.props.navigation.navigate("PainDescription");
    }
  };

  handleSelectColor = selected => {
    let painSelect = {
      mild: {
        height: 19,
        width: 19
      },
      ouch: {
        height: 19,
        width: 19
      },
      strong: {
        height: 19,
        width: 19
      },
      veryStrong: {
        height: 19,
        width: 19
      }
    };
    let painColor = "";
    switch (selected) {
      case "mild":
        painSelect.mild.height = 25;
        painSelect.mild.width = 25;
        painColor = "rgba(114,230,180,0.8)";
        break;
      case "ouch":
        painSelect.ouch.height = 25;
        painSelect.ouch.width = 25;
        painColor = "rgba(255,197,81,0.8)";
        break;
      case "strong":
        painSelect.strong.height = 25;
        painSelect.strong.width = 25;
        painColor = "rgba(246,118,118,0.8)";
        break;
      case "veryStrong":
        painSelect.veryStrong.height = 25;
        painSelect.veryStrong.width = 25;
        painColor = "rgba(225,0,0,0.8)";
        break;
      default:
        painColor = "rgba(0,0,0,0)";
    }
    this.setState({ painSelect, painColor });
  };

  render() {
    const { pain, painSelect, painColor } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/backgrounds/Mt.Sante-01.png")}
        />
        <View style={{ alignItems: "center", top: 50 }}>
          <View style={{ top: -17 }}>
            <Text style={styles.welcome}>
              First, let us know how severe is your pain
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <View>
              <View style={{ ...styles.leftRightContainer, right: 7 }}>
                <Text style={styles.leftText}>Right</Text>
                <Text style={styles.rightText}>Left</Text>
              </View>
              <Image
                style={{
                  width: 153,
                  height: 442
                }}
                source={require("../../assets/human-figures/Mt.Sante-boi.png")}
              />
            </View>
            <View
              style={{
                top: 15,
                height: 420,
                borderLeftColor: "white",
                borderLeftWidth: 0,
                padding: 2,
                marginLeft: 12,
                marginRight: 10
              }}
            />
            <View>
              <View style={styles.leftRightContainer}>
                <Text style={styles.leftText}>Left</Text>
                <Text style={styles.rightText}>Right</Text>
              </View>
              <Image
                style={{
                  top: 31,
                  width: 140,
                  height: 385
                }}
                resizeMode={"contain"}
                source={require("../../assets/human-figures/Asset_1.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            top: 70,
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 120
          }}
        >
          <View>
            <TouchableOpacity
              style={{ ...styles.painOuter, borderColor: "#72E6B4" }}
              onPress={() => {
                this.handleSelectColor("mild");
              }}
            >
              <View
                style={{
                  ...styles.painInner,
                  backgroundColor: "#72E6B4",
                  height: painSelect.mild.height,
                  width: painSelect.mild.width
                }}
              />
            </TouchableOpacity>
            <Text style={styles.painText}>Mild</Text>
          </View>

          <View>
            <TouchableOpacity
              style={{ ...styles.painOuter, borderColor: "#FFC551" }}
              onPress={() => {
                this.handleSelectColor("ouch");
              }}
            >
              <View
                style={{
                  ...styles.painInner,
                  backgroundColor: "#FFC551",
                  height: painSelect.ouch.height,
                  width: painSelect.ouch.width
                }}
              />
            </TouchableOpacity>
            <Text style={styles.painText}>Ouch</Text>
          </View>

          <View>
            <TouchableOpacity
              style={{ ...styles.painOuter, borderColor: "#F67676" }}
              onPress={() => {
                this.handleSelectColor("strong");
              }}
            >
              <View
                style={{
                  ...styles.painInner,
                  backgroundColor: "#F67676",
                  height: painSelect.strong.height,
                  width: painSelect.strong.width
                }}
              />
            </TouchableOpacity>
            <Text style={styles.painText}>Strong</Text>
          </View>

          <View>
            <TouchableOpacity
              style={{ ...styles.painOuter, borderColor: "#FF0000" }}
              onPress={() => {
                this.handleSelectColor("veryStrong");
              }}
            >
              <View
                style={{
                  ...styles.painInner,
                  backgroundColor: "#FF0000",
                  height: painSelect.veryStrong.height,
                  width: painSelect.veryStrong.width
                }}
              />
            </TouchableOpacity>
            <Text style={styles.painText}>Very</Text>
            <Text style={styles.painText}>Strong</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <View>
            <Button style={styles.button} onPress={() => this.handleOnClick()}>
              <Text style={styles.buttonText}>All Done</Text>
            </Button>
          </View>
        </View>

        <TouchableOpacity
          style={{
            ...styles.painCircle,
            position: "absolute",
            top: 250,
            left: 55,
            backgroundColor: pain.frontRightShoulder || "rgba(0,0,0,0)"
          }}
          onPress={() => {
            this.setState(prevState => ({
              clicked: true,
              pain: {
                ...prevState.pain,
                frontRightShoulder: this.state.painColor
              }
            }));
          }}
        />
        <TouchableOpacity
          style={{
            ...styles.painCircle,
            position: "absolute",
            top: 250,
            left: 120,
            backgroundColor: pain.frontLeftShoulder || "rgba(0,0,0,0)"
          }}
          onPress={() => {
            this.setState(prevState => ({
              clicked: true,
              pain: {
                ...prevState.pain,
                frontLeftShoulder: this.state.painColor
              }
            }));
          }}
        />
        <TouchableOpacity
          style={{
            ...styles.painCircle,
            position: "absolute",
            top: 450,
            left: 70,
            backgroundColor: pain.frontRightKnee || "rgba(0,0,0,0)"
          }}
          onPress={() => {
            this.setState(prevState => ({
              clicked: true,
              pain: {
                ...prevState.pain,
                frontRightKnee: this.state.painColor
              }
            }));
          }}
        />
        <TouchableOpacity
          style={{
            ...styles.painCircle,
            position: "absolute",
            top: 450,
            left: 105,
            backgroundColor: pain.frontLeftKnee || "rgba(0,0,0,0)"
          }}
          onPress={() => {
            this.setState(prevState => ({
              clicked: true,
              pain: {
                ...prevState.pain,
                frontLeftKnee: this.state.painColor
              }
            }));
          }}
        />
        <TouchableOpacity
          style={{
            ...styles.painCircle,
            position: "absolute",
            top: 250,
            right: 50,
            backgroundColor: pain.backRightShoulder || "rgba(0,0,0,0)"
          }}
          onPress={() => {
            this.setState(prevState => ({
              clicked: true,
              pain: {
                ...prevState.pain,
                backRightShoulder: this.state.painColor
              }
            }));
          }}
        />
        <TouchableOpacity
          style={{
            ...styles.painCircle,
            position: "absolute",
            top: 250,
            right: 120,
            backgroundColor: pain.backLeftShoulder || "rgba(0,0,0,0)"
          }}
          onPress={() => {
            this.setState(prevState => ({
              clicked: true,
              pain: {
                ...prevState.pain,
                backLeftShoulder: this.state.painColor
              }
            }));
          }}
        />
        <TouchableOpacity
          style={{
            ...styles.painCircle,
            position: "absolute",
            top: 450,
            right: 65,
            backgroundColor: pain.backRightKnee || "rgba(0,0,0,0)"
          }}
          onPress={() => {
            this.setState(prevState => ({
              clicked: true,
              pain: {
                ...prevState.pain,
                backRightKnee: this.state.painColor
              }
            }));
          }}
        />
        <TouchableOpacity
          style={{
            ...styles.painCircle,
            position: "absolute",
            top: 450,
            right: 105,
            backgroundColor: pain.backLeftKnee || "rgba(0,0,0,0)"
          }}
          onPress={() => {
            this.setState(prevState => ({
              clicked: true,
              pain: {
                ...prevState.pain,
                backLeftKnee: this.state.painColor
              }
            }));
          }}
        />
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
  welcome: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "white"
  },
  leftRightContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  leftText: {
    color: "white",
    fontSize: 10
  },
  rightText: {
    color: "white",
    fontSize: 10
  },
  painOuter: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1
  },
  painInner: {
    borderRadius: 25,
    margin: 5
  },
  painText: {
    top: 15,
    color: "white",
    textAlign: "center",
    fontSize: 10
  },
  button: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 25,
    borderRadius: 25,
    opacity: 0.5
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "200"
  },
  painCircle: {
    width: 25,
    height: 25,
    borderRadius: 25
  }
});
