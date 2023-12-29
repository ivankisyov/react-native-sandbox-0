import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import CounterScreen from "./src/screens/CounterScreen";
import SquareScreen from "./src/screens/SquareScreen";
import ColorsScreen from "./src/screens/ColorsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    Square: SquareScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "IvanApp",
    },
  }
);

export default createAppContainer(navigator);
