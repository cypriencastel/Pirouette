import React from 'react';
import { View, TouchableOpacity, Text, Button, Image, TextInput, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';
import DatePicker from 'react-native-datepicker';
import io from 'socket.io-client';
import moment from 'moment';
import localization from 'moment/locale/fr';
import globalVars from '../globalVars';
// import * as PushNotificationConf from '../utils/pushNotifConf'; 

const { deviceWidth, deviceHeight } = globalVars;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: 'lalala'
    }
  }

  componentWillMount() {
    console.log(globalVars.localIP);
    
    this.socket = global.socket;
    console.log(this.socket);
    
  }

  componentDidMount() {
    PushNotification.localNotificationSchedule({
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + (5 * 1000)) // in 5 secs
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.searchField}>
          <Text style={styles.searchTitle}>Recherche</Text>
          <View style={styles.inputsContainer}>
            <View style={{ justifyContent: 'space-around' }}>
              <View style={styles.inputArea}>
                <Text style={styles.inputPrefix}>De</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Gare de départ"
                  placeholderTextColor="#FFFFFF"
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ from: text })}
                />
              </View>
              <View style={styles.inputArea}>
                <Text style={styles.inputPrefix}>À</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Gare d'arrivée"
                  placeholderTextColor="#FFFFFF"
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ to: text })}
                />
              </View>
            </View>
            <Image resizeMode="contain" style={{ width: 30, height: 136 }} source={require('../images/fromto.png')} />
          </View>
        </View>
        <View style={styles.dateTimeContainer}>
          <View style={{ alignSelf: 'center', width: deviceWidth * 0.7, borderRadius: 5, borderWidth: 1, borderColor: globalVars.mainGrey, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{padding: 15, fontWeight: '500', color: globalVars.navyBlue, fontFamily: 'Brandon Grotesque' }} >Le</Text>
            <DatePicker
              style={{flex: 1}}
              date={this.state.date}
              mode="date"
              placeholder="selectionnez la date"
              format="LL"
              showIcon={false}
              minDate="08-06-2018"
              confirmBtnText="OK"
              cancelBtnText="Annuler"
              customStyles={{
                dateInput: {
                  borderWidth: 0
                },
                placeholderText: {
                  textAlign: 'center',
                  color: globalVars.mainGrey,
                  width: '100%'
                }
              }}
              onDateChange={date => {
                date = moment(date)._i;
                
                return this.setState({date: date});
              }}
            />
            <View style={{ padding: 15 }}>
              <Image style={{ width: 19, height: 19 }} source={require('../images/calendar_icon.png')} />
            </View>
          </View>
          <View style={{ alignSelf: 'center', width: deviceWidth * 0.7, borderRadius: 5, borderWidth: 1, borderColor: globalVars.mainGrey, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{padding: 15, fontWeight: '500', color: globalVars.navyBlue, fontFamily: 'Brandon Grotesque' }} >À partir de</Text>
            <DatePicker
              style={{flex: 1}}
              date={this.state.hour}
              mode="time"
              placeholder="selectionnez l'heure"
              format="LT"
              showIcon={false}
              confirmBtnText="OK"
              cancelBtnText="Annuler"
              customStyles={{
                dateInput: {
                  borderWidth: 0
                },
                placeholderText: {
                  textAlign: 'center',
                  color: globalVars.mainGrey,
                  width: '100%'
                }
              }}
              onDateChange={hour => {
                hour = moment(hour)._i;
                console.log(hour);
                
                return this.setState({hour: hour});
              }}
            />
            <View style={{ padding: 15 }}>
              <Image style={{ width: 19, height: 19 }} source={require('../images/time_icon.png')} />
            </View>
          </View>
        </View>
        <View>
            <Text style={{ textAlign: 'center' }}>
              Pour la première fois,{"\n"}
              rechercher les trains complets !
            </Text>
            <TouchableOpacity
              style={styles.searchBtn}
              onPress={() => this.props.navigation.navigate('Results')}
            >
              <Text style={styles.searchBtnTxt}>Rechercher</Text>
            </TouchableOpacity>
          </View>
        {/* <Text style={styles.btn}>{this.state.txt}</Text>
        <Button title="launch socket" />
        <Button title="go to login" style={styles.btn} onPress={() => this.props.navigation.navigate('Login', { socket: this.socket })} />
        <Button title="go to push" style={styles.btn} onPress={() => this.props.navigation.navigate('Push', { socket: this.socket })} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchField: {
    backgroundColor: globalVars.navyBlue,
    width: deviceWidth,
    height: 227
  },
  searchTitle: {
    textAlign: 'center',
    fontFamily: "abrade-bold",
    fontSize: 20,
    paddingVertical: 20,
    color: '#FFFFFF'
  },
  inputsContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  inputArea: {
    width: deviceWidth * 0.7,
    backgroundColor: '#275488',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5
  },
  inputPrefix: {
    color: '#FFFFFF',
    fontFamily: 'Brandon Grotesque',
    maxWidth: 60,
    paddingHorizontal: 10,
    fontWeight: '500'
  },
  input: {
    flex: 1,
    color: '#FFFFFF'
  },
  dateTimeContainer: {
    width: deviceWidth,
    height: 170,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn: {
    fontFamily: "abrade-bold",
    fontSize: 20,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  searchBtn: {
    backgroundColor: globalVars.mainPink,
    width: deviceWidth * 0.8,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  searchBtnTxt: {
    color: '#FFFFFF',
    fontFamily: 'agenda-bold',
    fontWeight: '800'
  }
});
