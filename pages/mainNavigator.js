import React, { Component } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from "react-native";
import { Container, Content, Header, Body, Icon } from "native-base";
import {
  createAppContainer,
  createStackNavigator,
  navigationOptions,
  createDrawerNavigator,
  DrawerItems,
  createMaterialTopTabNavigator
} from "react-navigation";
import HomeScreen from "./homePage/homePage";
import SignUp from "./signUp/signUp";
import SignUpForm from "./signUp/signUpForm";
import GenderPage from "./genderPage/genderPage";
import PainPage from "./pain/pain";
import PainDescription from "./pain/painDescription";
import BookingMap from "./booking/bookingMap";
import TransitionMap from "./transition/transitionMap";
import TransitionAfterAgenda from "./transition/transitionAfterAgenda";
import Mountain from "./mountain/mountain";
import GoalPage from "./goalPage/goalPage";
import GoalPage1 from "./goalPage/goalPage1";
import GoalPage2 from "./goalPage/goalPage2";
import AlarmPage from "./alarm/alarmPage";
import ResultsPage from "./results/resultsPage";
import ReviewSteps from "./review/reviewSteps";
import ReviewMain from "./review/reviewMain";

class CustomDrawerContentComponent extends Component {
  state = {
    firstName: "",
    lastName: "",
    gender: ""
  };
  componentDidMount = () => {
    this._retrieveData();
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("USERDATA");
      if (value !== null) {
        let user = JSON.parse(value);
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender
        });
      }
    } catch (error) {
      console.warn(error);
    }
  };
  showGender = () => {
    if (this.state.gender === "male") {
      return (
        <>
          <Image
            source={require("../assets/ver5/malehead.png")}
            style={{ height: 60, width: 60, marginTop: 10 }}
          />
          <Text style={{ textAlign: "center" }}>{this.state.firstName}</Text>
        </>
      );
    }
    if (this.state.gender === "female")
      return (
        <>
          <Image
            source={require("../assets/ver5/femalehead.png")}
            style={{ height: 60, width: 60, marginTop: 10 }}
          />
          <Text style={{ textAlign: "center" }}>{this.state.firstName}</Text>
        </>
      );
  };
  render = () => {
    return (
      <Container
        style={{ borderRadius: 25, backgroundColor: "rgba(255,255,255,.8)" }}
      >
        <Header
          style={{
            height: 150,
            backgroundColor: "rgba(255,255,255,.9)",
            borderBottomWidth: 0
          }}
        >
          <Body>
            <Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "90%",
                  marginTop: 10
                }}
              >
                <View>{this.showGender()}</View>
                <View style={{ paddingHorizontal: 15, alignItems: "center" }}>
                  <Text style={{ fontSize: 12, color: "#5C646A" }}>
                    Next follow up in
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        paddingHorizontal: 15,
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#5C646A"
                      }}
                    >
                      7
                    </Text>
                    <Text style={{ fontSize: 8, color: "#5C646A" }}>days</Text>
                  </View>

                  <View style={{ paddingHorizontal: 15, alignItems: "center" }}>
                    <Text style={{ fontSize: 12, color: "#5C646A" }}>
                      Longest streak
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          paddingHorizontal: 15,
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "#5C646A"
                        }}
                      >
                        7
                      </Text>
                      <Text style={{ fontSize: 8, color: "#5C646A" }}>
                        days
                      </Text>
                    </View>
                  </View>

                  <View style={{ paddingHorizontal: 15, alignItems: "center" }}>
                    <Text style={{ fontSize: 12, color: "#5C646A" }}>
                      Rent earned
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          paddingHorizontal: 15,
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "#5C646A"
                        }}
                      >
                        15
                      </Text>
                      <Text style={{ fontSize: 8, color: "#5C646A" }}>CAD</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Content>
          </Body>
        </Header>
        <Content>
          <DrawerItems {...this.props} />

          <View style={styles.drawerContainer}>
            <Text style={styles.drawerText}>Settings</Text>
          </View>
        </Content>
      </Container>
    );
  };
}

const Tabs = createMaterialTopTabNavigator(
  {
    Spring: {
      screen: GoalPage,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Desert: {
      screen: GoalPage2,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Winter: {
      screen: GoalPage1,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { swipeEnabled: true, initialRouteName: "Spring" }
);

// Drawer Navigator
const Drawer = createDrawerNavigator(
  {
    Result: {
      screen: ResultsPage,
      navigationOptions: {
        drawerLabel: () => "Journey Overview"
      }
    },

    BookingMap: {
      screen: BookingMap,
      navigationOptions: {
        drawerLabel: () => "Book Appointment"
      }
    },
    Alarm: {
      screen: AlarmPage,
      navigationOptions: {
        drawerLabel: () => "Alarm/ Timer Set Up"
      }
    },
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        drawerLabel: () => null
      }
    },
    ReviewHome: {
      screen: ReviewMain,
      navigationOptions: {
        drawerLabel: () => "Physiotherapy History"
      }
    },
    DrawerHome: {
      screen: Mountain,
      navigationOptions: {
        drawerLabel: () => "My Device"
      }
    }
  },
  {
    initialRouteName: "DrawerHome",
    contentComponent: CustomDrawerContentComponent,
    drawerBackgroundColor: "rgba(255,255,255,0)",
    contentOptions: {
      itemsContainerStyle: {
        paddingVertical: 0,
        backgroundColor: "rgba(255,255,255,.8)"
      },
      itemStyle: { paddingLeft: 25 },
      labelStyle: {
        fontWeight: "300",
        margin: 16,
        fontSize: 20,
        color: "#5C646A"
      }
    }
  }
);

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    SignUp: {
      screen: SignUp
    },
    SignUpForm: {
      screen: SignUpForm
    },
    GenderPage: {
      screen: GenderPage
    },
    PainPage: {
      screen: PainPage
    },
    PainDescription: {
      screen: PainDescription
    },
    BookingMap: {
      screen: BookingMap
    },
    TransitionMap: {
      screen: TransitionMap
    },
    Mountain: {
      screen: Drawer
    },
    TransitionAgenda: TransitionAfterAgenda,
    Review: ReviewSteps
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const styles = StyleSheet.create({
  drawerContainer: {
    flexDirection: "row",
    paddingLeft: 25,
    backgroundColor: "rgba(255,255,255,.8)"
  },
  drawerText: {
    margin: 16,
    fontSize: 20,
    color: "#5C646A",
    fontWeight: "300"
  }
});

const MainNavigator = createAppContainer(RootStack);

export default MainNavigator;
