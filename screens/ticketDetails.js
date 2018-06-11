import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import globalVars from '../globalVars';


const { deviceWidth, deviceHeight } = globalVars;

export default class TicketDetails extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: '07 juin 2018',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: globalVars.navyBlue,
    }
  })
  renderHourStation(hour, city, station) {
    return (
      <View style={styles.timetable}>
        <View style={styles.hourContainer}>
          <Text style={styles.hour}>{hour}</Text>
        </View>
        <View style={styles.stationContainer}>
          <Text style={styles.city}>{city}</Text><Text style={styles.station}>{station}</Text>
        </View>
      </View>
    );
  }
  render() {
    const departure = this.renderHourStation('17h46', 'Paris', 'Gare de Lyon');
    const arrival = this.renderHourStation('18h27', 'Lyon', 'Lyon Part-Dieu');
    return (
      <ScrollView>
        <View style={styles.header}>
          {departure}
          {arrival}
          <View><Text>12 personnes suivent</Text></View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 152,
    width: deviceWidth,
    backgroundColor: globalVars.navyBlue
  },
  timetable: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1
  },
  hourContainer: {
  },
  hour: {
    fontFamily: 'Abrade',
    fontSize: 20,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderColor: globalVars.mainPink,
    color: '#FFFFFF'
  },
  stationContainer: {
    flexDirection: 'row'
  },
  city: {
    fontSize: 'abrade-bold',
    fontSize: 20,
    color: '#FFFFFF'
  },
  station: {
    fontSize: 'Abrade',
    fontSize: 18,
    color: '#FFFFFF'
  }
});
