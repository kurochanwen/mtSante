import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground
} from "react-native";
import _ from "lodash";
import { Button } from "native-base";

import t from "tcomb-form-native";

const Form = t.form.Form;

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const User = t.struct({
  name: t.String,
  birthday: t.String,
  height: t.Number,
  weight: t.Number,
  email: Email,
  password: t.String,
  confirm: t.String,
  phoneNumber: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      paddingLeft: 10,
      alignItems: "center",
      flexDirection: "row",
      marginBottom: 10
    },
    error: {
      paddingLeft: 10,
      alignItems: "center",
      flexDirection: "row",
      marginBottom: 10
    }
  },
  textboxView: {
    normal: {
      flex: 1,
      paddingRight: 10
    },
    error: {
      flex: 1,
      paddingRight: 10
    }
  },
  textbox: {
    normal: {
      marginLeft: 10,
      backgroundColor: "white",
      color: "black",
      fontSize: 14,
      height: 20,
      padding: 7,
      paddingVertical: 0,
      borderRadius: 25,
      marginBottom: 5,
      opacity: 0.5
    },

    // the style applied when a validation error occures
    error: {
      marginLeft: 10,
      backgroundColor: "white",
      color: "black",
      fontSize: 14,
      height: 20,
      padding: 7,
      paddingVertical: 0,
      borderRadius: 25,
      borderColor: "#a94442", // <= relevant style here
      borderWidth: 1,
      marginBottom: 5
    }
  },
  controlLabel: {
    normal: {
      color: "white",
      fontSize: 14,
      marginBottom: 7,
      fontWeight: "600"
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 14,
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
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/backgrounds/Mt.Sante-01.png")}
        />
        <ScrollView>
          <View
            style={{
              paddingTop: 80,
              paddingVertical: 20,
              paddingHorizontal: 20
            }}
          >
            <Text style={styles.welcome}>
              Alright! Let's us get to know more about you
            </Text>
          </View>
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

          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <View>
              <Button style={styles.button} onPress={this.handleSubmit}>
                <Text>Next</Text>
              </Button>
            </View>
          </ScrollView>
        </ScrollView>
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
    justifyContent: "center",
    alignItems: "center"
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
  button: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 30,
    opacity: 0.5
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "200"
  }
});
