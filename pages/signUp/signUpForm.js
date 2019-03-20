import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  AsyncStorage
} from "react-native";
import _ from "lodash";
import { Button } from "native-base";
import { phoneHelpers, dateHelper } from "./phoneHelper";

import t from "tcomb-form-native";

const Form = t.form.Form;

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const User = t.struct({
  firstName: t.String,
  middleName: t.maybe(t.String),
  lastName: t.String
});
const Birthday = t.struct({
  birthday: t.maybe(t.String)
});
const Height = t.struct({
  height: t.maybe(t.Number)
});
const Weight = t.struct({
  weight: t.maybe(t.Number)
});
const Gender = t.struct({
  gender: t.maybe(t.String)
});
const User2 = t.struct({
  email: t.maybe(t.String),
  password: t.maybe(t.String),
  confirm: t.maybe(t.String),
  phoneNumber: t.maybe(t.String)
});

const HealthCare = t.struct({
  healthCardNumber: t.maybe(t.String),
  UHIP_number: t.maybe(t.String),
  other: t.maybe(t.String)
});

const FamilyDoctor = t.struct({
  firstName: t.maybe(t.String),
  middleName: t.maybe(t.String),
  lastName: t.maybe(t.String),
  contactNumber: t.maybe(t.String),
  email: t.maybe(t.String)
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
      justifyContent: "center",
      paddingRight: 10,
      marginLeft: 10,
      backgroundColor: "rgba(255,255,255,.5)",
      height: 20,
      padding: 7,
      paddingVertical: 0,
      borderRadius: 25,
      marginBottom: 5
    },
    error: {
      flex: 1,
      paddingRight: 10,
      borderColor: "#a94442",
      borderWidth: 1,
      backgroundColor: "rgba(255,255,255,.5)",
      justifyContent: "center",
      paddingRight: 10,
      marginLeft: 10,
      height: 20,
      padding: 7,
      paddingVertical: 0,
      borderRadius: 25,
      marginBottom: 5
    },
    notEditable: {
      flex: 1,
      justifyContent: "center",
      paddingRight: 10,
      marginLeft: 10,
      backgroundColor: "rgba(255,255,255,.5)",
      height: 20,
      padding: 7,
      paddingVertical: 0,
      borderRadius: 25,
      marginBottom: 5
    }
  },
  textbox: {
    normal: {
      color: "white",
      fontSize: 16
    },
    notEditable: {
      fontSize: 16,
      color: "white"
    },

    // the style applied when a validation error occures
    error: {
      color: "white",
      fontSize: 16
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
const shortStyle = {
  ...formStyles,
  textboxView: {
    normal: {
      ...formStyles.textboxView.normal,
      width: 110,
      flex: 0
    },
    error: {
      ...formStyles.textboxView.error,
      width: 110,
      flex: 0
    },
    notEditable: {
      ...formStyles.textboxView.notEditable,
      width: 110,
      flex: 0
    }
  }
};

const options = {
  fields: {
    gender: {
      editable: false
    },
    phoneNumber: {
      placeholder: "(xxx) xxx - xxxx",
      factory: t.form.Textbox,
      transformer: phoneHelpers,
      placeholderTextColor: "white"
    },
    contactNumber: {
      placeholder: "(xxx) xxx - xxxx",
      factory: t.form.Textbox,
      transformer: phoneHelpers,
      placeholderTextColor: "white"
    }
  },
  i18n: {
    optional: "",
    required: ""
  },
  stylesheet: formStyles
};
const optionShortStyle = {
  ...options,
  fields: {
    ...options.fields,
    birthday: {
      placeholder: "yyyy/mm/dd",
      factory: t.form.Textbox,
      transformer: dateHelper,
      placeholderTextColor: "white"
    },
    height: {
      placeholder: "cm",
      placeholderTextColor: "white"
    },
    weight: {
      placeholder: "kg",
      placeholderTextColor: "white"
    }
  },
  stylesheet: shortStyle
};

export default class SignUpForm extends Component {
  _storeData = async data => {
    try {
      await AsyncStorage.setItem("USERDATA", JSON.stringify(data));
    } catch (error) {
      console.warn(error);
    }
  };
  handleSubmit = () => {
    const userValue = this._formUser.getValue();
    const gender = this._formGender.getValue();
    let data;
    if (userValue && gender) {
      data = {
        firstName: userValue.firstName,
        lastName: userValue.lastName,
        gender: gender.gender
      };
      this._storeData(data);
      this.props.navigation.navigate("PainPage");
    }
  };
  renderAND = () => (
    <View
      style={{
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 40,
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
      <Text style={{ padding: 0, color: "white" }}>AND</Text>
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
  );

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
              paddingTop: 100
            }}
          >
            <Text style={styles.welcome2}>
              Alright! Let's us get to know more about you
            </Text>
          </View>
          <Form ref={c => (this._formUser = c)} type={User} options={options} />
          <Form
            ref={c => (this._formBday = c)}
            type={Birthday}
            options={optionShortStyle}
          />
          <Form
            ref={c => (this._formGender = c)}
            type={Gender}
            options={optionShortStyle}
            value={{ gender: this.props.navigation.state.params.gender }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Form
              ref={c => (this._formHeight = c)}
              type={Height}
              options={optionShortStyle}
            />
            <Form
              ref={c => (this._formWidth = c)}
              type={Weight}
              options={optionShortStyle}
            />
          </View>
          <Form
            ref={c => (this._formUser2 = c)}
            type={User2}
            options={options}
          />
          {this.renderAND()}
          <Text style={styles.welcome2}>
            And a little bit about your healthcare information
          </Text>
          <Form
            ref={c => (this._formHealth = c)}
            type={HealthCare}
            options={options}
          />
          {this.renderAND()}
          <Text style={styles.welcome2}>
            And your family doctors information
          </Text>
          <Form
            ref={c => (this._formFDoc = c)}
            type={FamilyDoctor}
            options={options}
          />
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
    color: "white",
    marginBottom: 30
  },
  button: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 40,
    opacity: 0.5
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "200"
  }
});
