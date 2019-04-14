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
import AlarmSetup from "./alarmSetup";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class AlarmPage extends Component<Props> {
  state = {
    page: 1,
    switchValue1: false,
    switchValue2: false,
    switchValue3: false,
    switch3: false,
    time: ""
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = time => {
    let formatTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
    this.setState({ time: formatTime }, () => this._hideDateTimePicker());
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
            {this.renderMainPage()}
            {this.renderReceipt("8:30", "PM", "Timer/Loop", 1)}
            {this.renderReceipt("1:00", "PM", " ", 2)}
            {this.state.switch3
              ? this.renderReceipt(this.state.time, " ", "Exercise time", 3)
              : null}
            <View
              style={{
                width: "90%",
                flexDirection: "row-reverse",
                marginTop: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ page: 2 }, () => this.getTime())}
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
        return this.renderFollowUp();
        break;
    }
  };
  getTime = () => {
    let time = new Date();
    time = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
    this.setState({ time });
  };
  renderFollowUp = () => {
    return (
      <>
        <View
          style={{
            marginTop: 80,
            borderRadius: 20,
            width: "90%",
            height: 190,
            overflow: "hidden"
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 50,
              backgroundColor: "rgba(255,255,255,0.2)"
            }}
          >
            <Text>alarm</Text>
          </View>
          <TouchableOpacity
            onPress={() => this._showDateTimePicker()}
            style={{
              height: "100%",
              alignItems: "center",
              paddingTop: 40,
              backgroundColor: "rgba(255,255,255,0.6)"
            }}
          >
            <Text style={styles.alarmText}>{this.state.time}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
            width: "90%",
            height: 52,
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 14, color: "#5C646A", fontWeight: "bold" }}>
            Mission
          </Text>
          <Text style={{ fontSize: 14, color: "#91D0ED", fontWeight: "bold" }}>
            Vibration synced
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
            width: "90%",
            height: 52,
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 14, color: "#5C646A", fontWeight: "bold" }}>
            Repeat
          </Text>
          <Text style={{ fontSize: 14, color: "#91D0ED", fontWeight: "bold" }}>
            Everyday
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
            width: "90%",
            height: 52,
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 14, color: "#5C646A", fontWeight: "bold" }}>
            Sound
          </Text>
          <Text style={{ fontSize: 14, color: "#91D0ED", fontWeight: "bold" }}>
            Vibration only
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
            width: "90%",
            height: 52,
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 14, color: "#5C646A", fontWeight: "bold" }}>
            Snooze
          </Text>
          <Text style={{ fontSize: 14, color: "#91D0ED", fontWeight: "bold" }}>
            Off
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
            width: "90%",
            height: 52,
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 14, color: "#5C646A", fontWeight: "bold" }}>
            Label
          </Text>
          <Text style={{ fontSize: 14, color: "#91D0ED", fontWeight: "bold" }}>
            Exercise time
          </Text>
        </View>
        <DateTimePicker
          mode="time"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 54,
            bottom: 0,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={() => this.setState({ page: 1, switch3: true })}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              backgroundColor: "rgba(255,255,255,0.5)"
            }}
          >
            <Text>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ page: 1 })}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              backgroundColor: "rgba(255,255,255,0.3)"
            }}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  switches = switchValues => {
    let switchValue;
    switch (switchValues) {
      case 1:
        return (
          <Switch
            value={this.state.switchValue1}
            onValueChange={value => this.setState({ switchValue1: value })}
            trackColor={{ true: "#91D0eD", false: "white" }}
            ios_backgroundColor={"#FFFFFF"}
          />
        );
        break;
      case 2:
        return (
          <Switch
            value={this.state.switchValue2}
            onValueChange={value => this.setState({ switchValue2: value })}
            trackColor={{ true: "#91D0eD", false: "white" }}
            ios_backgroundColor={"#FFFFFF"}
          />
        );

        break;
      case 3:
        return (
          <Switch
            value={this.state.switchValue3}
            onValueChange={value => this.setState({ switchValue3: value })}
            trackColor={{ true: "#91D0eD", false: "white" }}
            ios_backgroundColor={"#FFFFFF"}
          />
        );
        break;
    }
  };
  renderReceipt = (word1, word2, word3, switchValues) => {
    return (
      <View style={styles.receiptContainer}>
        <View
          style={{
            ...styles.assessmentHeadImage,
            backgroundColor: "rgba(255,255,255,0.3)"
          }}
        >
          <View
            style={{
              paddingHorizontal: 25,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%"
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.alarmText}>{word1}</Text>
              <Text style={{ ...styles.alarmText, marginLeft: 10 }}>
                {word2}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {this.switches(switchValues)}
              <Image
                source={require("../../assets/ver5/3dots.png")}
                style={{ height: 30, width: 6, marginLeft: 10 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.receiptTextContainer}>
          <View>
            <Text style={styles.receiptText}>S M T W T F S</Text>
          </View>
          <View>
            <Text style={styles.receiptText}>{word3}</Text>
          </View>
        </View>
      </View>
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
  alarmText: { fontSize: 30, color: "#5F666D", fontWeight: "bold" },

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
