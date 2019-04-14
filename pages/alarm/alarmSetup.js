import React, { Component } from "react";
import { Text, TouchableOpacity, View, Switch } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class AlarmSetup extends Component {
  state = {
    isDateTimePickerVisible: false,
    switchValue: false
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ paddingTop: 100 }}
          onPress={this._showDateTimePicker}
        >
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <Switch
          value={this.state.switchValue}
          onValueChange={value => this.setState({ switchValue: value })}
          trackColor={{ true: "#91D0eD" }}
        />
        <DateTimePicker
          mode="time"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}
