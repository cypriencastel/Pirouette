import React from 'react';
import { View, TouchableOpacity, Text, Button, Image, TextInput, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';
import DatePicker from 'react-native-datepicker';
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
      message: 'coucou', // (required)
      date: new Date(Date.now() + 2000)
    });

    global.socket.on('msg', (txt) => {
      console.log('socket msg');
      
      PushNotification.localNotificationSchedule({
        message: txt, // (required)
        date: new Date(Date.now() + 2000)
      });
    })

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
              date={this.state.datetime}
              mode="datetime"
              placeholder="selectionnez la date"
              // format="LL"
              showIcon={false}
              minDate={new Date()}
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
              onDateChange={datetime => {
                
                datetime = moment(datetime).format();
                datetime = datetime.split('+')[0];
                
                return this.setState({datetime: datetime});
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
              mode="datetime"
              placeholder="selectionnez l'heure"
              showIcon={false}
              minDate={new Date()}
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
              onDateChange={datetime => {
                datetime = moment(datetime).format();
                datetime = datetime.split('+')[0];
                
                return this.setState({datetime: datetime});
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
            onPress={() => this.props.navigation.navigate('Results', { navigation: this.props.navigation, from: this.state.from, to: this.state.to, datetime: this.state.datetime, })}
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
