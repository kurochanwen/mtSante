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

export default class GoalPage1 extends Component<Props> {
  state = {
    size: 20,
    page: 1
  };
  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
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
        return this.renderGoals();
        break;
      case 2:
        return this.renderStartTutorial();
        break;
      case 3:
        return this.renderExercise();
        break;
      case 4:
        return this.renderClap();
        break;
      case 5:
        return this.renderActualExercise();
        break;
      case 6:
        return this.renderResult();
        break;
    }
  };
  renderResult = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/ver5/Bwinter.png")}
        resizeMode={"contain"}
      />
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            ...styles.centerContainer,
            height: 356,
            paddingTop: 40,
            paddingHorizontal: 40
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(255,255,255,.9)",
              borderRadius: 10,
              flexDirection: "row",
              marginBottom: 10
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/ver5/Ssqure.png")}
            />

            <View
              style={{
                width: "75%",
                justifyContent: "center",
                paddingHorizontal: 15
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <Text style={styles.blackText}>Perfect:</Text>
                <Text style={styles.blackText}>92%</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <Text style={styles.blackText}>Miss:</Text>
                <Text style={styles.blackText}>0%</Text>
              </View>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Time</Text>
            <Text style={styles.grayText}>07m24s</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Total time spent</Text>
            <Text style={styles.grayText}>4m24s</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Days of exercises</Text>
            <Text style={styles.grayText}>31</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Average accuracy</Text>
            <Text style={styles.grayText}>78.87%</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Days left</Text>
            <Text style={styles.grayText}>0</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Rent earned</Text>
            <Text style={styles.grayText}>93CAD</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <View style={{ paddingTop: 40 }}>
              <Button
                style={styles.button}
                onPress={() => this.props.navigation.navigate("DrawerHome")}
              >
                <Text style={styles.buttonText}>Done</Text>
              </Button>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.underText}>Dismiss</Text>
        </View>
      </View>
    </>
  );

  renderActualExercise = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/ver5/Bwinter.png")}
        resizeMode={"contain"}
      />
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/stock-photo/WeChatImage_20190206014817.png")}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          height: 120,
          width: 120,
          bottom: 0,
          right: 0
        }}
        onPress={() => this.nextPage()}
      />
    </>
  );

  renderClap = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/ver5/Bwinter.png")}
        resizeMode={"contain"}
      />
      <View style={{ alignItems: "center" }}>
        <View style={{ ...styles.centerContainer, height: 356 }}>
          <View
            style={{ width: "100%", alignItems: "center", paddingBottom: 20 }}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/Icons/clap.png")}
            />
          </View>
          <Text style={styles.welcome1}>Amazing! You are ready!</Text>
          <Text style={styles.welcome1}>
            try to hit the right position every time.
          </Text>
          <Text style={styles.welcome1}>
            We are rating you base on the accuracy as well
          </Text>
          <View style={{ alignItems: "center" }}>
            <View style={{ paddingTop: 10 }}>
              <Button style={styles.button} onPress={() => this.nextPage()}>
                <Text style={styles.buttonText}>Let's start!</Text>
              </Button>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.underText}>Dismiss</Text>
        </View>
      </View>
    </>
  );
  renderExercise = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/ver5/Bwinter.png")}
        resizeMode={"contain"}
      />
      <View
        style={{
          backgroundColor: "rgba(255,255,255,.5)",
          height: "100%",
          justifyContent: "center"
        }}
      >
        <Text style={styles.topText}>
          Follow the video down below, and try to feel the vibration from your
          device
        </Text>
        <TouchableOpacity
          style={styles.startExercise}
          onPress={() => this.nextPage()}
        >
          <Image
            style={styles.startExercisePic}
            source={require("../../assets/stock-photo/WeChatImage_20190206014750.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View
            style={{
              height: 40,
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,.5)"
            }}
          >
            <Text style={styles.buttonBottom}>Can't feel the vibration?</Text>
          </View>
          <View
            style={{
              height: 40,
              width: "50%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.buttonBottom}>Help</Text>
          </View>
        </View>
      </View>
    </>
  );
  renderStartTutorial = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/ver5/Bwinter.png")}
        resizeMode={"contain"}
      />
      <View style={{ alignItems: "center" }}>
        <View style={styles.centerContainer}>
          <View
            style={{ width: "100%", alignItems: "center", marginBottom: 50 }}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/Icons/video-lesson.png")}
            />
          </View>
          <Text style={styles.welcome1}>Okay!</Text>
          <Text style={styles.welcome1}>Let's start the tutorial!</Text>
          <View style={{ alignItems: "center" }}>
            <View style={{ paddingTop: 10 }}>
              <Button style={styles.button} onPress={() => this.nextPage()}>
                <Text style={styles.buttonText}>Start</Text>
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
  renderBox = () => (
    <>
      <View
        style={{
          position: "absolute",
          top: 100,
          right: 80,
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
            <Button
              style={styles.button}
              onPress={() => this.setState({ size: 20, page: 2 })}
            >
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

  renderGoals = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/backgrounds/4th-edition/snowvalley.png")}
        resizeMode={"contain"}
      />
      {this.renderTopMenu()}
      <View
        style={{
          position: "absolute",
          bottom: 40,
          left: 160,
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
        <Text style={{ color: "white", fontSize: 10 }}>05/11</Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 200,
          left: 155,
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
        <Text style={{ color: "white", fontSize: 10 }}>05/12</Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 320,
          left: 220,
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
        <Text style={{ color: "white", fontSize: 10 }}>05/13</Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 500,
          left: 270,
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
        <Text style={{ color: "white", fontSize: 10 }}>05/14</Text>
      </View>

      <View
        style={{
          position: "absolute",
          top: 100,
          left: 300,
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
        <Text style={{ color: "white", fontSize: 10 }}>05/15</Text>
      </View>
      {this.state.size === 30 && this.renderBox()}
    </>
  );
  render() {
    return <View style={styles.container}>{this.handleRenders()}</View>;
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
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    color: "white"
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
  },
  centerContainer: {
    height: 300,
    width: 260,
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: "rgba(255,255,255,.85)",
    borderRadius: 35
  },

  welcome1: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 15,
    color: "#7F8284",
    lineHeight: 20
  },
  icon: {
    marginTop: 15,
    height: 80,
    width: 80
  },
  underText: {
    paddingTop: 20,
    fontSize: 16,
    color: "white",
    textDecorationLine: "underline"
  },
  startExercise: {
    width: "100%",
    height: 470,
    backgroundColor: "rgba(255,255,255,.85)",
    overflow: "hidden"
  },
  startExercisePic: { width: "100%", height: 470 },
  topText: {
    fontSize: 16,
    color: "#7F8284",
    padding: 20
  },
  blackText: {
    fontSize: 12,
    color: "#333333"
  },
  grayText: {
    fontSize: 12,
    color: "#7F8284"
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});
