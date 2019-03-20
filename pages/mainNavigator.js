import {
  createAppContainer,
  createStackNavigator,
  navigationOptions
} from "react-navigation";
import HomeScreen from "./homePage/homePage";
import SignUp from "./signUp/signUp";
import SignUpForm from "./signUp/signUpForm";
import GenderPage from "./genderPage/genderPage";
import PainPage from "./pain/pain";

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
    }
  },
  {
    initialRouteName: "PainPage",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const MainNavigator = createAppContainer(RootStack);

export default MainNavigator;
