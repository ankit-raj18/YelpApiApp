import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreens from './src/screens/SearchScreens';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator (
{
  Search : SearchScreens,
  ResultsShow : ResultsShowScreen,
},

{
  initialRouteName : 'Search',
  defaultNavigationOptions : {
    title: 'BUSINESS SEARCH',

    }
},

);

export default createAppContainer(navigator);