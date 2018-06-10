import HomeScreen from './screens/homeScreen';
import LoginScreen from './screens/loginScreen';
import PushScreen from './screens/testsPushScreen';
import { StackNavigator, createBottomTabNavigator, createStackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import BidScreen from './screens/bidScreen';
import TicketsScreen from './screens/ticketsScreen';
import AlertsScreen from './screens/alertsScreen';
import ProfilScreen from './screens/profilScreen';

console.disableYellowBox = true;

const tabRoutes = {
  home: {
    screen: HomeScreen
  },
  bid: {
    screen: BidScreen,
  },
  tickets: {
    screen: TicketsScreen
  },
  alerts: {
    screen: TicketsScreen
  },
  profil: {
    screen: ProfilScreen
  }
};

const stackRoutes = {
  home: { screen: TabNavigator(tabRoutes, {
    tabBarPosition: 'bottom'
  }) },
  bid: { screen: BidScreen },
  tickets: { screen: TicketsScreen },
  alerts: { screen: TicketsScreen },
  profil: { screen: ProfilScreen }
};

const App = StackNavigator(stackRoutes, {
  headerMode: 'none'
})


// StackNavigator(
//   {
//     Home: { screen: HomeScreen },
//     LoginView: { screen: LoginView }
//   },
//   navigationOptions: { header:{ visible: false }});

// const App = TabNavigator(tabRoutes, {
//   tabBarComponent: TabBarBottom,
//   tabBarPosition: 'bottom',
//   showIcon: true,
//   tabBarOptions: {
//     activeTintColor: '#e91e63',
//     labelStyle: {
//       fontSize: 12,
//     },
//     style: {
//       backgroundColor: 'blue',
//       justifyContent: 'center'
//     },
//   },
//   animationEnabled: false,
//   swipeEnabled: false,
// });

export default App;
