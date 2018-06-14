import { Dimensions } from 'react-native';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const navyBlue = '#0F3868';
const mainGrey = '#979797';
const darkGrey = '#4A4A4A';
const mainPink = '#FC136C';


const globalVars = {
  localIP: 'http://192.168.0.22:8080',
  api: 'http://localhost:8080',
  remoteApi: 'https://pirouette-server.herokuapp.com',
  deviceWidth: deviceWidth,
  deviceHeight: deviceHeight,
  navyBlue: navyBlue,
  mainGrey: mainGrey,
  darkGrey: darkGrey,
  mainPink: mainPink,
  pinkBtn: {
    backgroundColor: '#FC136C',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: deviceWidth * 0.8,
    height: 50,
    borderRadius: 5,
  },
  textInput: {
    borderWidth: 1.5,
    borderRadius: 5,
    width: deviceWidth * 0.8,
    borderColor: mainGrey
  }
};

export default globalVars;
