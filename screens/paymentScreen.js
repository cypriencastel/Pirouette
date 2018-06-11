import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Switch } from 'react-native';
import globalVars from '../globalVars';


const { deviceWidth, deviceHeight } = globalVars;

export default class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      registerCard: false
    }
  }

  handleSwitch() {
    this.setState({
      registerCard: !this.state.registerCard
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Numéro de carte</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.ti} placeholder="**** **** **** ****" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date d'éxpiration</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput underlineColorAndroid="transparent" style={[styles.ti, {width: deviceWidth * 0.35}]} placeholder="Mois" />
              <TextInput underlineColorAndroid="transparent" style={[styles.ti, {width: deviceWidth * 0.35}]} placeholder="Année" />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Titulaire de la carte</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.ti} placeholder="Nom Prénom"/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>CCV</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.ti} placeholder="***"/>
          </View>
          <View style={[styles.inputContainer, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
            <Text>Enregistrer ce moyen de paiement</Text>
            <Switch onValueChange={() => this.handleSwitch()} value={this.state.registerCard} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30
  },
  label: {
    fontFamily: 'abrade-bold',
    fontSize: 16,
    color: globalVars.navyBlue
  },
  ti: {
    borderWidth: 1.5,
    borderRadius: 5,
    width: deviceWidth * 0.8,
    borderColor: globalVars.mainGrey
  }
});
