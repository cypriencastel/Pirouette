import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import globalVars from '../globalVars';

const { deviceWidth, deviceHeight } = globalVars

export default class ResultTicket extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.navigation.navigate('TicketDetails', {navigation: this.navigation})} style={ styles.container }>
        <View style={ styles.leftBox }>
          <View style={{ alignItems: 'center', justifyContent: 'center' }} >
            <View style={ styles.circle } />
            <View style={ styles.dashes } />
            <View style={ styles.circle } />
          </View>
          <View style={ styles.timesContainer } >
            <Text style={styles.time}>12H45</Text>
            <Text style={styles.time}>14H56</Text>
          </View>
          <View>

          </View>
        </View>
        <View style={ styles.rightBox }>
          <View style={styles.ticketStatus} >
            <Text style={styles.trainStatus}>Train complet</Text>
            <Text style={styles.bidStatus}>Enchères closes</Text>
          </View>
          <View style={ styles.prices } >
            <Image style={{ width: 31, height: 16, marginRight: 10 }} source={ require('../images/logo_sncf.png') } />
            <Text style={ styles.sncfPrice }>77€</Text>
            <View style={styles.pirouettePrice}>
              <Text style={{ fontFamily: 'abrade-bold', fontSize: 20, color: 'white' }}>55€</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftBox: {
    flex: 0.25,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightBox: {
    flex: 0.66,
    flexDirection: 'column',
  },
  ticketStatus: {
    height: 50,
    marginRight: 15,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  trainStatus: {
    color: globalVars.navyBlue,
    fontFamily: 'abrade-bold',
    fontSize: 12
  },
  bidStatus: {
    color: globalVars.navyBlue,
    fontFamily: 'abrade-bold',
    fontSize: 13
  },
  prices: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  sncfPrice: {
    fontFamily: 'Abrade',
    fontSize: 14,
    color: globalVars.mainGrey,
    marginRight: 20
  },
  pirouettePrice: {
    backgroundColor: globalVars.navyBlue,
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth * 0.25,
    height: 40
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: globalVars.navyBlue
  },
  dashes: {
    height: 26,
    width: 2,
    borderColor: globalVars.mainGrey,
    borderWidth: 2,
    borderStyle: 'dashed'
  },
  timesContainer: {
    justifyContent: 'space-between',
    height: 100,
    paddingVertical: 18
  },
  time: {
    color: globalVars.mainPink,
    fontFamily: 'abrade-bold',
    fontSize: 16
  }
});
