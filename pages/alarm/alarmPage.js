import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import AlarmSetup from "./alarmSetup";

export default class AlarmPage extends Component {
  state = {
    isDateTimePickerVisible: false
  };

  render() {
    return (
      <>
        <AlarmSetup />
      </>
    );
  }
}
