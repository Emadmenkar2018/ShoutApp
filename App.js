
import React, { useEffect  } from "react";
import { StyleSheet, View, Text, StatusBar, PermissionsAndroid ,Alert} from "react-native";
import HomeStack from "./src/components/partials/Navigation";
import { Provider } from "react-redux";
import store from "./src/store";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from "src/theme";
import { ModalPortal } from 'react-native-modals';
import Geolocation from '@react-native-community/geolocation';


const STATUSBAR_HEIGHT = StatusBar.currentHeight;


const App = () => {
 

  let watchID = null;
 

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        // getOneTimeLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // getOneTimeLocation();
          } else {
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  // const getOneTimeLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     //Will give you the current location
  //     (position) => {
  //       const currentLongitude = JSON.stringify(position.coords.longitude);
  //       const currentLatitude = JSON.stringify(position.coords.latitude);
  //       console.log('currentLongitude',currentLongitude)
  //       console.log('currentLatitude',currentLatitude)
  //         setLocation({longitude:currentLongitude, latitude:currentLatitude}) 
  //     },
  //     (error) => {
  //       // setLocationStatus(error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 30000,
  //       maximumAge: 1000
  //     },
  //   );
  // };


  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );


  return (
    <Provider store={store}>
      <MyStatusBar backgroundColor={Colors.PRIMARY_DARK} barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer fallback={<Text>Loading...</Text>}>
          <HomeStack />
        </NavigationContainer>
        <ModalPortal />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
})