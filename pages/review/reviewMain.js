import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Button } from "native-base";
import bgImage from "../../assets/backgrounds/Mt.Sante-01.png";

export default class ReviewMain extends Component<Props> {
  state = {
    page: 1,
    therapist: ""
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
          therapist: therapistValue.therapist
        });
      }
    } catch (error) {
      console.warn(error);
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
            {this.renderMainPage()}
            {this.renderReceipt(
              "Follow up. April 2nd. 4PM",
              "Reminder on",
              2,
              1
            )}
            {this.renderReceipt(
              "Initial assessment. March 27th. 10-11AM",
              "",
              3,
              0.6
            )}
            <View
              style={{
                width: "90%",
                flexDirection: "row-reverse",
                marginTop: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("BookingMap")}
              >
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../../assets/ver5/plus.png")}
                />
              </TouchableOpacity>
            </View>
          </>
        );
        break;
      case 2:
        return this.renderAssessment();
        break;
      case 3:
        return this.renderFollowUp(0.6);
        break;
    }
  };
  renderFollowUp = opacity => (
    <>
      <Text style={styles.welcome1}>Receipt</Text>
      <View style={styles.assessmentContainer}>
        <Image
          style={{ ...styles.assessmentHeadImage, opacity }}
          source={require("../../assets/stock-photo/Supergood-physio-logos/twitter_header_photo_1.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.followUpText}>Item</Text>
          <Text style={styles.followUpText2}>Amount</Text>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.followUpText3}>March 27th, 2019 - 10-11AM</Text>
            <Text style={styles.followUpText3}>Initial Assessment(1Hour)</Text>
            <Text style={styles.followUpText3}>
              {this.state.therapist} MSc.PT,
            </Text>
            <Text style={styles.followUpText3}>Ba.Kin.Hon. FCAMPT,</Text>
            <Text style={styles.followUpText3}>License #14245</Text>
          </View>
          <View>
            <Text style={styles.followUpText4}>$126</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.followUpText}>Payments</Text>
          <Text style={styles.followUpText2}> </Text>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.followUpText3}>March 27th, 11:04, 2019</Text>
            <Text style={styles.followUpText3}>Debit</Text>
          </View>
          <View>
            <Text style={styles.followUpText4}>$126</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.followUpText}>Invoice #</Text>
          <Text style={styles.followUpText2}>Payer total</Text>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.followUpText3}>Invoice #14576-P01</Text>
          </View>
          <View>
            <Text style={styles.followUpText4}>$126</Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              ...styles.assessmentText2,
              paddingTop: 40
            }}
          >
            Thanks for choosing Supergood
          </Text>
          <Text style={styles.assessmentText2}>Physiotherapy</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <View>
          <Button style={{ ...styles.button, paddingHorizontal: 15 }}>
            <Text style={styles.buttonText}>Get it claimed</Text>
          </Button>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            style={styles.button}
            onPress={() => this.setState({ page: 1 })}
          >
            <Text style={styles.buttonText}>Back</Text>
          </Button>
        </View>
      </View>
    </>
  );
  renderAssessment = () => (
    <>
      <Text style={styles.welcome1}>It's almost time!</Text>
      <View style={styles.assessmentContainer}>
        <Image
          style={styles.assessmentHeadImage}
          source={require("../../assets/stock-photo/Supergood-physio-logos/twitter_header_photo_1.png")}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.assessmentText}>Time</Text>
          <Text style={styles.assessmentText2}>May 9th, Thursday, 2019</Text>
          <Text style={styles.assessmentText2}>2PM</Text>
          <Text style={styles.assessmentText}>Item</Text>
          <Text style={styles.assessmentText2}>
            Physiotherapy treatment 30 min
          </Text>
          <Text style={styles.assessmentText2}>
            With {this.state.therapist}
          </Text>
          <Text style={styles.assessmentText}>Location</Text>
          <Text style={styles.assessmentText2}>
            623 Adelaid St East. Suite 304, Toronto, ON
          </Text>
          <Text style={styles.assessmentText2}>Telephone: 122-233-2324</Text>
          <Text style={styles.assessmentText2}>
            Email: supergood@physio.com
          </Text>
          <Text style={{ ...styles.assessmentText2, paddingTop: 40 }}>
            Thanks for choosing Supergood
          </Text>
          <Text style={styles.assessmentText2}>Physiotherapy</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Button
          style={styles.button}
          onPress={() => this.setState({ page: 1 })}
        >
          <Text style={styles.buttonText}>Back</Text>
        </Button>
        <Text style={styles.underText}>Change/Cancel</Text>
      </View>
    </>
  );
  renderReceipt = (word1, word2, page, opacity) => (
    <TouchableOpacity
      style={styles.receiptContainer}
      onPress={() => this.setState({ page })}
    >
      <Image
        style={{ ...styles.receiptHeadImage, opacity }}
        source={require("../../assets/stock-photo/Supergood-physio-logos/twitter_header_photo_1.png")}
      />
      <View style={styles.receiptTextContainer}>
        <View>
          <Text style={styles.receiptText}>{word1}</Text>
        </View>
        <View>
          <Text style={styles.receiptText}>{word2}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  renderMainPage = () => (
    <View style={{ width: "90%", marginTop: 100, marginBottom: 20 }}>
      <Text style={styles.welcome2}>Next Appointment</Text>
      <Text style={styles.welcome}>April 2nd, Tuesday</Text>
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.imageBackground} source={bgImage} />
        {this.handleRenders()}
        {this.renderTopMenu()}
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
    fontSize: 20,
    textAlign: "left",
    marginBottom: 10,
    color: "white",
    lineHeight: 30
  },
  welcome2: {
    fontSize: 16,
    textAlign: "left",
    color: "white"
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
    color: "#666666"
  },
  receiptTextContainer: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center"
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
    height: 80
  },
  followUpText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#666666",
    lineHeight: 16,
    paddingHorizontal: 30,
    padding: 20,
    textAlign: "left"
  },
  followUpText2: {
    paddingHorizontal: 30,
    fontSize: 12,
    fontWeight: "bold",
    color: "#666666",
    lineHeight: 16,
    padding: 20,
    textAlign: "right"
  },
  followUpText3: {
    paddingHorizontal: 30,
    fontSize: 12,
    color: "#666666",
    lineHeight: 16,
    textAlign: "left"
  },
  followUpText4: {
    paddingHorizontal: 30,
    fontSize: 12,
    color: "#666666",
    lineHeight: 16,
    textAlign: "right"
  },
  assessmentText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#666666",
    lineHeight: 16,
    paddingVertical: 20
  },
  assessmentText2: {
    fontSize: 12,
    color: "#666666",
    lineHeight: 16
  },
  buttonText: {
    fontSize: 16
  },
  button: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 47,
    borderRadius: 25,
    opacity: 0.5
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
