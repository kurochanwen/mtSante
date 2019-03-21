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
import PainDescription from "./pain/painDescription";
import BookingMap from "./booking/bookingMap";
import TransitionMap from "./transition/transitionMap";
import Mountain from "./mountain/mountain";
import GoalPage from "./goalPage/goalPage";

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
      screen: Mountain
    },
    GoalPage: {
      screen: GoalPage
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const MainNavigator = createAppContainer(RootStack);

export default MainNavigator;
