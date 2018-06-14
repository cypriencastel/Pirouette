import HomeScreen from './screens/homeScreen';
import LoginScreen from './screens/loginScreen';
import PushScreen from './screens/testsPushScreen';
import { StackNavigator, createBottomTabNavigator, createStackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import BidScreen from './screens/bidScreen';
import TicketsScreen from './screens/ticketsScreen';
import AlertsScreen from './screens/alertsScreen';
import ProfilScreen from './screens/profilScreen';
import React from 'react';
import { Image } from 'react-native';
import ResultsScreen from './screens/resultsScreen';
import TicketDetails from './screens/ticketDetails';
import PaymentScreen from './screens/paymentScreen';

console.disableYellowBox = true;

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Profil: {
    screen: ProfilScreen,
    navigationOptions: {
    }
  },
  Results: {
    screen: ResultsScreen
  },
  TicketDetails: {
    screen: TicketDetails
  },
  Payment: {
    screen: PaymentScreen
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'login'
    }
  }
});

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
      },
      tabBarIcon: <Image style={{ width: 22, height: 22 }} source={require('./images/tab_search_icon.png')} />
    }
  },
  Bid: {
    screen: BidScreen,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false
      },
      tabBarIcon: <Image style={{ width: 22, height: 22 }} source={require('./images/tab_bid_icon.png')} />
    }
  },
  Tickets: {
    screen: TicketsScreen,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false
      },
      tabBarIcon: <Image style={{ width: 22, height: 22 }} source={require('./images/tab_ticket_icon.png')} />
    }
  },
  Alerts: {
    screen: AlertsScreen,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false
      },
      tabBarIcon: <Image style={{ width: 22, height: 22 }} source={require('./images/tab_alert_icon.png')} />
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false
      },
      tabBarIcon: <Image style={{ width: 22, height: 22 }} source={require('./images/tab_profil_icon.png')} />
    }
  },
});

const App = StackNavigator({
  tabs: {
    screen: Tabs
  }
}, {
  headerMode: 'none'
})

export default App;
