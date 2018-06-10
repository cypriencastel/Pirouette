import React from 'react';
import { View, Text, Button } from 'react-native';


export default class ProfilScreen extends React.Component {
  componentDidMount() {
    this.socket = global.socket;
    
    console.log(this.socket);
  }
  render() {
    return (
      <View>
        <Text>profil screen</Text>
        <Button title="go to login" onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    );
  }
}
