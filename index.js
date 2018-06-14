import { AppRegistry, AsyncStorage } from 'react-native';
import PushNotification from 'react-native-push-notification';
import io from 'socket.io-client';
import App from './App';
import globalVars from './globalVars';

global.socket = io(`${globalVars.localIP}`);

AsyncStorage.getItem('userInfos').then(userInfo => {
  global.socket.emit('updateSocketID', userInfo);
  console.log(global.socket);
  
})

global.socket.on('api:higherBid', (txt) => {
  PushNotification.localNotificationSchedule({
    message: txt, // (required)
    date: new Date(Date.now())
  });
})

AppRegistry.registerComponent('Pirouette', () => App);
