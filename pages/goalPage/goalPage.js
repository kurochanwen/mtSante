import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { Button } from "native-base";
import Video from "react-native-video";

export default class GoalPage extends Component<Props> {
  state = {
    size: 20,
    page: 1,
    lock: false
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
  pagination = () => (
    <View
      style={{
        position: "absolute",
        bottom: 20,
        width: "100%",
        alignItems: "center"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "10%"
        }}
      >
        <Image
          style={{ height: 7.5, width: 7.5 }}
          source={require("../../assets/ver5/circle.png")}
        />
        <Image
          style={{ height: 7.5, width: 7.5 }}
          source={require("../../assets/ver5/circlevoid.png")}
        />
        <Image
          style={{ height: 7.5, width: 7.5 }}
          source={require("../../assets/ver5/circlevoid.png")}
        />
      </View>
    </View>
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
        source={require("../../assets/ver5/Bspring.png")}
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
              source={require("../../assets/ver5/Asqure.png")}
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
                <Text style={styles.blackText}>72%</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <Text style={styles.blackText}>Miss:</Text>
                <Text style={styles.blackText}>13%</Text>
              </View>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Time</Text>
            <Text style={styles.grayText}>08m32s</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Total time spent</Text>
            <Text style={styles.grayText}>26m42s</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Days of exercises</Text>
            <Text style={styles.grayText}>3</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Average accuracy</Text>
            <Text style={styles.grayText}>68.42%</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Days left</Text>
            <Text style={styles.grayText}>28</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grayText}>Rent earned</Text>
            <Text style={styles.grayText}>9CAD</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <View style={{ paddingTop: 40 }}>
              <Button
                style={styles.button}
                onPress={() =>
                  this.setState({ page: 1 }, () =>
                    this.props.navigation.navigate("DrawerHome")
                  )
                }
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
      <TouchableWithoutFeedback onPress={() => this.nextPage()}>
        <Video
          source={require("../../assets/ver5/exercise.mp4")}
          ref={ref => {
            this.player = ref;
          }}
          onError={this.videoError}
          style={styles.backgroundVideo}
          onEnd={() => this.nextPage()}
        />
      </TouchableWithoutFeedback>
    </>
  );

  renderClap = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/ver5/Bspring.png")}
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
  videoError = () => {
    console.warn("somethings wrong with the video!");
  };
  renderExercise = () => (
    <>
      <TouchableWithoutFeedback onPress={() => this.nextPage()}>
        <Video
          source={require("../../assets/ver5/tutorial.mp4")}
          ref={ref => {
            this.player = ref;
          }}
          onError={this.videoError}
          style={styles.backgroundVideo}
          onEnd={() => this.nextPage()}
        />
      </TouchableWithoutFeedback>
    </>
  );
  renderStartTutorial = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/ver5/Bspring.png")}
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

  handleLockOpening = () => {
    if (this.state.size === 20) {
      this.setState({ lock: true });
    }
  };

  renderLocks = () => (
    <>
      <View
        style={{
          position: "absolute",
          bottom: 200,
          right: 10,
          width: 174,
          height: 205,
          backgroundColor: "rgba(255,255,255,.9)",
          borderRadius: 20,
          alignItems: "center",
          padding: 20
        }}
      >
        <Text
          style={{ ...styles.buttonText, paddingTop: 20, textAlign: "center" }}
        >
          Finish today's goal to unlock future tasks.
        </Text>

        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: 30 }}>
            <Button
              style={styles.button}
              onPress={() => this.setState({ size: 30, lock: false })}
            >
              <Text style={styles.buttonText}>see today's goal</Text>
            </Button>
          </View>
        </View>
      </View>
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
            <Button
              style={styles.button}
              onPress={() => this.setState({ size: 20, page: 2 })}
            >
              <Text style={styles.buttonText}> Start now </Text>
            </Button>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Alarm")}
            >
              <Text style={styles.buttonText}>Set an Alarm</Text>
            </Button>
          </View>
          <TouchableOpacity onPress={() => this.setState({ size: 20 })}>
            <Text
              style={{
                ...styles.buttonText,
                paddingTop: 10,
                textDecorationLine: "underline"
              }}
            >
              Not Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  renderGoals = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/backgrounds/Mt.Sante-03.png")}
        resizeMode={"contain"}
      />
      {this.renderTopMenu()}
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
          onPress={() => this.setState({ size: 30, lock: false })}
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
        <Text style={{ color: "white", fontSize: 10 }}>05/01</Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 200,
          left: 135,
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={() => this.handleLockOpening()}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../assets/ver6/lock.png")}
          />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 10 }}>05/02</Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 400,
          left: 172,
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={() => this.handleLockOpening()}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../assets/ver6/lock.png")}
          />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 10 }}>05/03</Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 550,
          left: 180,
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={() => this.handleLockOpening()}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../assets/ver6/lock.png")}
          />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 10 }}>05/04</Text>
      </View>

      <View
        style={{
          position: "absolute",
          top: 30,
          left: 195,
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={() => this.handleLockOpening()}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../assets/ver6/lock.png")}
          />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 10 }}>05/05</Text>
      </View>
      {this.state.size === 30 && this.renderBox()}
      {this.state.lock && this.renderLocks()}
      {this.pagination()}
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
    width: 142,
    justifyContent: "center",
    borderRadius: 25
  },
  buttonText: {
    color: "rgba(127,130,132,1)",
    fontSize: 16
  },
  buttonBottom: {
    color: "#7F8284",
    fontSize: 14,
    textDecorationLine: "underline"
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
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
