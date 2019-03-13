import {
  createAppContainer,
  createStackNavigator,
  navigationOptions
} from "react-navigation";
import HomeScreen from "./homePage/homePage";
import SignUp from "./signUp/signUp";
import SignUpForm from "./signUp/signUpForm";

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
    }
  },
  {
    initialRouteName: "SignUpForm",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const MainNavigator = createAppContainer(RootStack);

export default MainNavigator;
