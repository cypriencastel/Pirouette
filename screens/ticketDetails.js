import React from 'react';
// import { Icon } from 'react-native-vector-icons/dist/FontAwesome';
import {
  ScrollView, View, Button, Text, StyleSheet,
  Animated, Easing, Image, TouchableOpacity, TextInput } from 'react-native';
import globalVars from '../globalVars';


const { deviceWidth, deviceHeight } = globalVars;

export default class TicketDetails extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: '07 juin 2018',
    headerTitleStyle: {
      flex: 1,
    },
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: globalVars.navyBlue,
    }
  })

  constructor(props) {
    super(props);

    this.navigation = this.props.navigation;
    this.state = {
      hide: false,
      userBidValue: '',
      animView: new Animated.ValueXY({ x: 0, y: deviceHeight })
    }
  }

  animPlay() {
    const currentY = this.state.animView.y._value;
    
    const nextY = currentY === deviceHeight ? 0 : deviceHeight;
    
    return Animated.timing(
      this.state.animView,
      {
        toValue: { x: 0, y: nextY },
        duration: 500,
        easing: Easing.in(Easing.ease)
      }
    ).start()
  }

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
    const animStyle = this.state.animView.getTranslateTransform()
    return (
      <View>
        <Animated.View style={[ animStyle, { position: 'absolute', zIndex: 1000, width: deviceWidth, height: deviceHeight, alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' } ]}>
            <TouchableOpacity
              style={{ position: 'absolute', width: 22, height: 22, top: 10, right: 10 }}
              onPress={() => this.animPlay()}
            >
              <Image style={{ width: 22, height: 22 }} source={require('../images/cross.png')} />
            </TouchableOpacity>
            <Text style={{ fontFamily: 'abrade-bold', fontSize: 16, color: globalVars.navyBlue, marginTop: 20 }}>Votre nouvelle enchère</Text>
            <TextInput
              onChangeText={(txt) => {
                this.setState({
                  userBidValue: txt
                })
              }}
              style={styles.testRaiseInput}
            />
            <TouchableOpacity
              style={styles.raiseUpBtn}
              onPress={() => this.navigation.navigate('Payment')}
            >
              <Text>Valider</Text>
            </TouchableOpacity>
        </Animated.View>
        <ScrollView>
          <View style={styles.header}>
            {departure}
            <View style={styles.tripTimeContainer}>
              <Text style={styles.tripTime}>44 min</Text>
              <View style={styles.tripTimeStroke} />
            </View>
            {arrival}
            <View style={styles.awaitingPeopleContainer}>
              <Image style={{ width: 22, height: 12, marginRight: 10 }} source={require('../images/people_icon.png')} />
              <Text style={styles.awaitingPeopleTxt}>12 personnes suivent</Text>
            </View>
          </View>
          <View>
            <View style={styles.pricingContainer}>
              <View style={{ flex: 0.5, flexDirection: 'row' }}>
                <Image style={styles.sncfLogoImg} source={require('../images/logo_sncf.png')} />
                <Text style={styles.pricingSNCFTxt}>Tarif SNCF</Text>
              </View>
              <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                <Text style={styles.pricingSNCFValue}>77,00 €</Text>
              </View>
            </View>
            <View style={styles.bidsContainer}>
              <View style={styles.highestBid}>
                <Text style={styles.highestBidTxt}>Enchère la plus haute</Text>
                <Text style={styles.highestBidValue}>22,00 €</Text>
              </View>
              <View style={styles.userBid}>
                <Text style={styles.UserBidTxt}>Votre enchère</Text>
                <Text style={styles.UserBidValue}>20,00 €</Text>
              </View>
              <View style={styles.higherOrdersContainer}>
                <Image style={{ width: 22, height: 12, marginRight: 10 }} source={require('../images/people_icon_blue.png')}  />
                <Text style={styles.higherOrdersAmount}>1 personne a une enchère supérieure</Text>
              </View>
            </View>
            <View>
              <View style={styles.remainingTimeContainer}>
                <Text style={styles.remainingTimeTxt}>Fermeture des enchères : </Text>
                <Text style={styles.remainingTimeValue}>03:12:59</Text>
              </View>
              <TouchableOpacity onPress={() => this.animPlay()} style={styles.raiseUpBtn}>
                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'abrade-bold' }}>Enchérir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quitBtn}>
                <Text style={styles.quitBtnTxt}>Quitter l'enchère</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
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
    alignItems: 'center',
    flex: 1,
    paddingLeft: 40
  },
  hourContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  city: {
    fontFamily: 'abrade-bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginRight: 10
  },
  station: {
    fontSize: 'Abrade',
    fontSize: 18,
    color: '#FFFFFF'
  },
  tripTimeContainer: {
    width: deviceWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  tripTime: {
    color: '#FFFFFF',
    fontFamily: 'Abrade',
    fontSize: 14,
    marginRight: 15
  },
  tripTimeStroke: {
    width: deviceWidth * 0.6,
    height: 1,
    borderColor: '#FFFFFF',
    marginRight: 20,
    borderWidth: 1,
  },
  awaitingPeopleContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  awaitingPeopleTxt: {
    color: '#FFFFFF',
    fontFamily: 'Abrade',
    fontSize: 14
  },
  pricingContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 58
  },
  sncfLogoImg: {
    width: 45,
    height: 23,
    marginRight: 20,
    marginLeft: 20
  },
  pricingSNCFTxt: {
    fontFamily: 'Abrade',
    fontSize: 14,
    color: globalVars.mainGrey
  },
  pricingSNCFValue: {
    marginRight: 30
  },
  bidsContainer: {
    paddingTop: 30,
    backgroundColor: '#FFFFFF',
    width: deviceWidth,
    alignItems: 'center',
    marginTop: 35,
    height: 133
  },
  highestBid: {
    flexDirection: 'row',
    width: 316,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  highestBidTxt: {
    fontFamily: 'Abrade',
    fontSize: 14,
    color: globalVars.navyBlue,
  },
  highestBidValue: {
    fontFamily: 'abrade-bold',
    color: globalVars.mainPink,
    fontSize: 36
  },
  userBid: {
    flexDirection: 'row',
    width: 316,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  UserBidTxt: {
    fontFamily: 'Abrade',
    fontSize: 18,
    color: globalVars.navyBlue
  },
  UserBidValue: {
    fontFamily: 'abrade-bold',
    fontSize: 18,
    color: globalVars.navyBlue
  },
  higherOrdersContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  remainingTimeContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center'
  },
  remainingTimeTxt: {
    fontFamily: 'Abrade',
    fontSize: 18,
    color: globalVars.darkGrey
  },
  remainingTimeValue: {
    fontFamily: 'Abrade',
    fontSize: 18,
    color: globalVars.mainPink
  },
  raiseUpBtn: {
    ...globalVars.pinkBtn,
  },
  quitBtn: {
    alignSelf: 'center',
    marginTop: 20
  },
  quitBtnTxt: {
    fontFamily: 'abrade-bold',
    fontSize: 18,
    color: globalVars.navyBlue
  },
  popUp: {
    zIndex: 1,
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: '#FFFFFF'
  },
  popUp: {
    height: 0,
    width: 0,
  },
  testRaiseInput: {
    ...globalVars.textInput
  }
});
