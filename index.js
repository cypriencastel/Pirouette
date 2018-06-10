import { AppRegistry } from 'react-native';
import io from 'socket.io-client';
import App from './App';
import globalVars from './globalVars';

global.socket = io(`${globalVars.remoteApi}`, {query: 'traveler=someone'});

AppRegistry.registerComponent('Pirouette', () => App);
