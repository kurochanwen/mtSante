import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  AsyncStorage,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Button } from "native-base";

export default class ReviewSteps extends Component {
  state = {
    page: 1,
    therapist: "Olivia Calson",
    picture: require("../../assets/stock-photo/CarlaS.png"),
    star: "",
    text: ""
  };

  componentDidMount = () => {
    this._retrieveData();
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("THERAPIST");
      if (value !== null) {
        let therapistValue = JSON.parse(value);
        this.setState({
          therapist: therapistValue.therapist,
          picture: therapistValue.therapistPicture
        });
      }
    } catch (error) {
      console.warn(error);
    }
  };

  handleRenders = () => {
    switch (this.state.page) {
      case 1:
        return this.renderFist();
        break;
      case 2:
        return this.renderReview();
        break;
      case 3:
        return this.renderReviewTherapist();
        break;
      case 4:
        return this.renderComment();
        break;
      case 5:
        return this.renderHorn();
        break;
    }
  };
  renderHorn = () => (
    <View style={{ alignItems: "center" }}>
      <View style={{ ...styles.centerContainer, height: 400 }}>
        <Image
          style={styles.icon}
          source={require("../../assets/Icons/loudspeaker.png")}
        />
        <Text style={{ ...styles.welcome1, paddingTop: 40 }}>
          Thank you for sharing your experience with us!
        </Text>
        <Text style={styles.welcome1}>
          Now you can manage all your appointments in your History
        </Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: 10 }}>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Mountain")}
            >
              <Text style={styles.buttonText}>See today's goal</Text>
            </Button>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("ReviewHome")}
            >
              <Text style={styles.buttonText}>Check history</Text>
            </Button>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.underText}>Not now</Text>
      </View>
    </View>
  );
  renderComment = () => (
    <View style={{ alignItems: "center" }}>
      <View style={styles.centerContainer}>
        <Image
          style={styles.CommentLogoHeading}
          source={require("../../assets/stock-photo/Supergood-physio-logos/twitter_header_photo_1.png")}
        />
        <Image style={styles.CommentIconHead} source={this.state.picture} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Text style={styles.welcome2}>
            Leave some comments for {this.state.therapist}
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View
            style={{
              top: -20,
              width: 200,
              height: 100,
              borderRadius: 25,
              padding: 10,
              backgroundColor: "white"
            }}
          >
            <TextInput
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              editable={true}
              multiline={true}
              numberOfLines={5}
              style={styles.buttonText}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={{ top: -10 }}>
          <Button
            style={styles.button}
            onPress={() => this.setState({ page: this.state.page + 1 })}
          >
            <Text style={styles.buttonText}>All Done</Text>
          </Button>
        </View>
      </View>
      <View>
        <Text style={styles.underText}>Not now</Text>
      </View>
    </View>
  );
  emptyStar = number => (
    <TouchableOpacity onPress={() => this.setState({ star: number })}>
      <Image
        style={styles.reviewStar}
        source={require("../../assets/Icons/star.png")}
      />
    </TouchableOpacity>
  );
  handleSupergoodStar = star => {
    if (star === this.state.star) {
      this.setState({ page: this.state.page + 1, star: 0 });
    } else {
      this.setState({ star });
    }
  };
  fullStar = star => (
    <TouchableOpacity onPress={() => this.handleSupergoodStar(star)}>
      <Image
        style={styles.reviewStar}
        source={require("../../assets/Icons/fullstar.png")}
      />
    </TouchableOpacity>
  );
  renderStars = () => {
    switch (this.state.star) {
      case 1:
        return (
          <View
            style={{
              top: -25,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            {this.fullStar(1)}
            {this.emptyStar(2)}
            {this.emptyStar(3)}
            {this.emptyStar(4)}
            {this.emptyStar(5)}
          </View>
        );
        break;
      case 2:
        return (
          <View
            style={{
              top: -25,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            {this.fullStar(1)}
            {this.fullStar(2)}
            {this.emptyStar(3)}
            {this.emptyStar(4)}
            {this.emptyStar(5)}
          </View>
        );
        break;
      case 3:
        return (
          <View
            style={{
              top: -25,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            {this.fullStar(1)}
            {this.fullStar(2)}
            {this.fullStar(3)}
            {this.emptyStar(4)}
            {this.emptyStar(5)}
          </View>
        );
        break;
      case 4:
        return (
          <View
            style={{
              top: -25,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            {this.fullStar(1)}
            {this.fullStar(2)}
            {this.fullStar(3)}
            {this.fullStar(4)}
            {this.emptyStar(5)}
          </View>
        );
        break;
      case 5:
        return (
          <View
            style={{
              top: -25,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            {this.fullStar(1)}
            {this.fullStar(2)}
            {this.fullStar(3)}
            {this.fullStar(4)}
            {this.fullStar(5)}
          </View>
        );
        break;
      default:
        return (
          <View
            style={{
              top: -25,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            {this.emptyStar(1)}
            {this.emptyStar(2)}
            {this.emptyStar(3)}
            {this.emptyStar(4)}
            {this.emptyStar(5)}
          </View>
        );
    }
  };
  renderFist = () => (
    <View style={{ alignItems: "center" }}>
      <View style={styles.centerContainer}>
        <Text style={styles.welcome1}>Bravo!</Text>
        <Image
          style={styles.icon}
          source={require("../../assets/Icons/motivation.png")}
        />
        <Text style={styles.welcome1}>You finished your first step!</Text>
        <Text style={styles.welcome1}>
          let us know how did u feel about your first experience at Supergood
          Physio
        </Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: 10 }}>
            <Button
              style={styles.button}
              onPress={() => this.setState({ page: 2 })}
            >
              <Text style={styles.buttonText}>Leave a review</Text>
            </Button>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.underText}>Not now</Text>
      </View>
    </View>
  );

  renderReview = () => (
    <View style={{ alignItems: "center" }}>
      <View style={styles.centerContainer}>
        <Image
          style={styles.logoHeading}
          source={require("../../assets/stock-photo/Supergood-physio-logos/logo.png")}
        />
        <Image style={styles.iconHead} source={this.state.picture} />
        <Text style={styles.welcome2}>Leave a rating for Supergood Physio</Text>
        {this.renderStars()}
      </View>
      <View>
        <Text style={styles.underText}>Not now</Text>
      </View>
    </View>
  );

  renderReviewTherapist = () => (
    <View style={{ alignItems: "center" }}>
      <View style={styles.centerContainer}>
        <Image
          style={styles.logoHeading}
          source={require("../../assets/stock-photo/Supergood-physio-logos/logo.png")}
        />
        <Image style={styles.iconHead} source={this.state.picture} />
        <Text style={styles.welcome2}>Leave a rating for your therapist</Text>
        {this.renderStars()}
      </View>
      <View>
        <Text style={styles.underText}>Not now</Text>
      </View>
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/backgrounds/Mt.Sante-01.png")}
        />
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
    position: "relative",
    flex: 1,
    justifyContent: "center"
  },
  centerContainer: {
    height: 350,
    width: 250,
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255,255,255,.7)",
    borderRadius: 35,
    alignItems: "center",
    overflow: "hidden"
  },
  welcome: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "white"
  },
  welcome1: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "#666666",
    paddingTop: 10,
    lineHeight: 20
  },
  welcome2: {
    top: -40,
    fontSize: 16,
    textAlign: "center",
    color: "#666666"
  },
  underText: {
    paddingTop: 20,
    fontSize: 16,
    color: "white",
    textDecorationLine: "underline"
  },
  buttonText: {
    fontSize: 16,
    color: "#666666"
  },
  button: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 25
  },
  icon: {
    marginTop: 15,
    height: 60,
    width: 60
  },
  iconHead: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: "#666666",
    top: -55
  },
  logoHeading: {
    height: "50%",
    width: "130%",
    top: -10
  },
  CommentIconHead: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: "#666666",
    top: -55
  },
  CommentLogoHeading: {
    height: "20%",
    width: "130%",
    top: -10
  },
  reviewStar: {
    height: 35,
    width: 35
  }
});
