import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Button } from "native-base";

export default class Mountain extends Component<Props> {
  state = {
    blur: 0,
    page: 1,
    picture: require("../../assets/human-figures/Mt.Sante-02shaw.png")
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("USERDATA");
      if (value !== null) {
        let user = JSON.parse(value);
        if (user.gender === "male") {
          this.setState({
            picture: require("../../assets/human-figures/Mt.Sante-02shaw.png")
          });
        }
        if (user.gender === "female") {
          this.setState({
            picture: require("../../assets/human-figures/Asset-3.png")
          });
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };
  componentDidMount = () => {
    this._retrieveData();
    setTimeout(() => {
      this._ScrollView.scrollToEnd({ animated: true });
    }, 100);
    setTimeout(() => {
      this.setState({ page: 2 });
    }, 4200);
  };

  renderTopMenu = () => (
    <>
      <TouchableOpacity
        style={{ position: "absolute", top: 450, left: 20 }}
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
  handlePage = () => {
    switch (this.state.page) {
      case 1:
        return this.renderWelcome();
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
          </View>
        </View>
      </View>
    </>
  );
  renderWelcome = () => {
    return (
      <>
        <TouchableOpacity
          style={{ height: 1200, alignItems: "center" }}
          onPress={() => this.setState({ page: 2 })}
        >
          <Text style={{ ...styles.welcome, marginTop: 500 }}>
            Welcome to Mt.Sante
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  renderFollowUp = () => (
    <>
      <View style={{ height: 1200, alignItems: "center" }}>
        <View
          style={{
            marginTop: 500,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text style={styles.text}>In </Text>
          <View
            style={{
              justifyContent: "center",
              paddingVertical: 2,
              paddingHorizontal: 5,
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
              30
            </Text>
          </View>
          <Text style={styles.text}> days, you will conquer the</Text>
        </View>
        <Text style={styles.text}>Mt.Sante by taking little steps</Text>
        <Text style={styles.text}>everyday.</Text>
        <View style={{ marginTop: 400, alignItems: "center" }}>
          <View>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Tabs")}
            >
              <Text style={styles.buttonText}>Start today's journey</Text>
            </Button>
          </View>
          <TouchableOpacity onPress={() => this.setState({ page: 1 })}>
            <Text
              style={{
                ...styles.welcome4,
                textDecorationLine: "underline",
                color: "#FFFFFF"
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
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
          <Image
            style={{
              position: "absolute",
              height: 106,
              width: 40,
              bottom: 50,
              left: 10
            }}
            resizeMode={"contain"}
            source={this.state.picture}
          />

          {this.handlePage()}
          {this.renderTopMenu()}
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
    backgroundColor: "rgba(255,255,255,.9)",
    height: 40,
    paddingHorizontal: 35,
    borderRadius: 25
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
