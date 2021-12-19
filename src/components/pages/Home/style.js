import { Dimensions } from 'react-native'
import { wp, hp } from '../../../helpers/DimensionHelper'

const device_height = Dimensions.get("screen").height
const device_width = Dimensions.get("screen").width
export const styles = {
    dev: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        width: device_width
    },
    mapContainer:{
        width: device_width, 
        height: device_height 
    },
    map: {
        height: 800,
        width: 400,
    },
    container: {
        flex: 1,
        paddingHorizontal: wp(30),
        backgroundColor: '#EEEEEE'
    },
    loadingContainer: {
        width: '100%',
        height: hp(200),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(15),
        borderRadius: wp(30)
    },
    counter: {
        width: wp(60),
        height: wp(60),
        borderRadius: wp(40),
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: wp(10),
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,1)'
    },
    createShoot: {
        width: wp(75),
        height: wp(75),
        borderRadius: wp(40),
        backgroundColor: 'rgba(0,0,0,.3)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: wp(10),
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,.5)',
        marginBottom: hp(100)
    },
    mapPinLayer: {
        iconAllowOverlap: true,
        iconAnchor: 'bottom',
        iconSize: 1.0,
        // iconImage: exampleIcon,
    },
    customCalloutText: {
        color: 'black',
        fontSize: 16,
    },
    calloutContainerStyle: {
        backgroundColor: 'white',
        width: 60,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnDev: {
        height: device_height,
        width: device_width,
        justifyContent: 'space-between'
    },
    countDev: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    shoutImg: {
        width: wp(40),
        height: wp(40),
        tintColor: "#fff"
    }
}