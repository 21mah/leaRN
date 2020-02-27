import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./screens/HomeScreen.js";
import CreateBlogScreen from "./screens/CreateBlogScreen";
import DetailScreen from "./screens/DetailScreen";

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null } },
  CreateBlog: { screen: CreateBlogScreen, navigationOptions: { header: null } },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: { header: null }
  }
});

export default createAppContainer(AppNavigator);
