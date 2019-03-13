import React, { Component } from "react";
import { View, StyleSheet, Button, ScrollView, Text } from "react-native";

import t from "tcomb-form-native";

const Form = t.form.Form;

const Gender = t.enums({
  M: "Male",
  F: "Female"
});

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const User = t.struct({
  name: t.String,
  birthday: t.String,
  gender: Gender,
  height: t.Number,
  weight: t.Number,
  email: Email,
  password: t.String,
  confirmPassword: t.String,
  phoneNumber: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    }
  },
  textbox: {
    normal: {
      backgroundColor: "white",
      color: "black",
      fontSize: 17,
      height: 36,
      padding: 7,
      borderRadius: 4,
      borderColor: "#cccccc", // <= relevant style here
      borderWidth: 1,
      marginBottom: 5
    },

    // the style applied when a validation error occures
    error: {
      color: "#000000",
      fontSize: 17,
      height: 36,
      padding: 7,
      borderRadius: 4,
      borderColor: "#a94442", // <= relevant style here
      borderWidth: 1,
      marginBottom: 5
    }
  },
  controlLabel: {
    normal: {
      color: "white",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {
  fields: {
    birthday: {}
  },
  i18n: {
    optional: "",
    required: ""
  },
  stylesheet: formStyles
};

export default class SignUpForm extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Form ref={c => (this._form = c)} type={User} options={options} />
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              marginBottom: 40
            }}
          >
            <View
              style={{
                top: -8.5,
                borderBottomColor: "white",
                borderBottomWidth: 2,
                padding: 1,
                paddingHorizontal: 70
              }}
            />
            <Text style={{ padding: 0, color: "white" }}>OR</Text>
            <View
              style={{
                top: -8.5,
                borderBottomColor: "white",
                borderBottomWidth: 2,
                padding: 1,
                paddingHorizontal: 70
              }}
            />
          </View>
          <Button title="Next" onPress={this.handleSubmit} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#90D0ED"
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
  buttonPhone: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 30
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "200"
  },
  buttonEmail: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 84,
    borderRadius: 25
  }
});
