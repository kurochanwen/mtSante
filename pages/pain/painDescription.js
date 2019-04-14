import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  AsyncStorage,
  Image
} from "react-native";
import _ from "lodash";
import { Button } from "native-base";
import { phoneHelpers, dateHelper } from "../signUp/phoneHelper";

import t from "tcomb-form-native";

const Form = t.form.Form;

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const Description = t.struct({
  q1: t.maybe(t.String),
  q2: t.maybe(t.String),
  q3: t.maybe(t.String),
  q4: t.maybe(t.String),
  q5: t.maybe(t.String)
});
const Note = t.struct({
  notes: t.maybe(t.String)
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      paddingLeft: 10,
      marginBottom: 15
    },
    error: {
      paddingLeft: 10,
      marginBottom: 15
    }
  },
  textboxView: {
    normal: {
      justifyContent: "center",
      marginRight: 25,
      marginLeft: 25,
      backgroundColor: "rgba(255,255,255,.5)",
      height: 30,
      padding: 7,
      borderRadius: 5,
      marginBottom: 5
    },
    error: {
      borderColor: "#a94442",
      borderWidth: 1,
      backgroundColor: "rgba(255,255,255,.5)",
      justifyContent: "center",
      marginRight: 25,
      marginLeft: 25,
      height: 30,
      padding: 7,
      borderRadius: 5,
      marginBottom: 5
    }
  },
  textbox: {
    normal: {
      color: "white",
      fontSize: 14
    },
    notEditable: {
      fontSize: 14,
      color: "white"
    },

    // the style applied when a validation error occures
    error: {
      color: "white",
      fontSize: 14
    }
  },
  controlLabel: {
    normal: {
      marginLeft: 25,
      color: "white",
      fontSize: 14,
      marginBottom: 7,
      fontWeight: "600"
    },
    // the style applied when a validation error occours
    error: {
      marginLeft: 25,
      color: "red",
      fontSize: 14,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};
const noteStyles = {
  ...formStyles,
  textboxView: {
    normal: {
      marginRight: 25,
      marginLeft: 25,
      backgroundColor: "rgba(255,255,255,.5)",
      height: 100,
      padding: 5,
      borderRadius: 5,
      marginBottom: 5
    },
    error: {
      borderColor: "#a94442",
      borderWidth: 1,
      backgroundColor: "rgba(255,255,255,.5)",
      marginRight: 25,
      marginLeft: 25,
      height: 100,
      padding: 5,
      borderRadius: 5,
      marginBottom: 5
    }
  }
};

const options = {
  fields: {
    q1: {
      label: "How did you injured yourself?"
    },
    q2: {
      label: "How long have you been having the pain?"
    },
    q3: {
      label: "Diagnosis (If you had before)"
    },
    q4: {
      label: "Treatments (If you had before)"
    },
    q5: {
      label: "Previous surgeries (If you had before)"
    },
    notes: {
      multiline: true
    }
  },
  i18n: {
    optional: "",
    required: ""
  },
  stylesheet: formStyles
};

const noteOption = {
  ...options,
  stylesheet: noteStyles
};

export default class PainDescription extends Component {
  state = {
    transition: false
  };
  handleTransition = () => {
    if (!this.state.transition) {
      return this.renderForm();
    } else {
      return this.transitionPage();
    }
  };
  transitionPage = () => (
    <View style={{ alignItems: "center" }}>
      <View style={styles.centerContainer}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.icon}
            source={require("../../assets/Icons/appointment.png")}
          />
        </View>
        <Text style={styles.welcome1}>All right!</Text>
        <Text style={styles.welcome2}>
          it's time to book your first appointment!
        </Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: "20%" }}>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("BookingMap")}
            >
              <Text style={styles.buttonText}>Yes</Text>
            </Button>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.underText}>Not now</Text>
      </View>
    </View>
  );
  renderForm = () => (
    <>
      <View style={{}}>
        <Text style={styles.welcome}>Let's get more detailed now</Text>
      </View>
      <Form
        ref={c => (this._formDescription = c)}
        type={Description}
        options={options}
      />
      <Form ref={c => (this._formNote = c)} type={Note} options={noteOption} />
      <View style={{ alignItems: "center" }}>
        <View>
          <Button
            style={styles.button}
            onPress={() => this.setState({ transition: true })}
          >
            <Text>Next</Text>
          </Button>
        </View>
      </View>
    </>
  );
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/backgrounds/Mt.Sante-01.png")}
        />
        {this.handleTransition()}
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
    justifyContent: "center"
  },
  welcome: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    marginBottom: 50
  },
  centerContainer: {
    height: 300,
    width: 250,
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: "rgba(255,255,255,.7)",
    borderRadius: 35
  },
  welcome1: {
    fontSize: 16,
    textAlign: "left",
    marginVertical: 15,
    color: "#666666"
  },
  welcome2: {
    fontSize: 16,
    textAlign: "left",
    color: "#666666"
  },
  icon: {
    marginVertical: 10,
    height: 80,
    width: 80
  },
  underText: {
    paddingTop: 20,
    fontSize: 16,
    color: "white",
    textDecorationLine: "underline"
  },
  buttonText: {
    fontSize: 16
  },
  button: {
    backgroundColor: "#FFFFFF",
    height: 40,
    paddingHorizontal: 38,
    borderRadius: 25,
    opacity: 0.5
  }
});
