
import { wp, hp } from '../../../helpers/DimensionHelper'
import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


export const styles = {
    dev:{
        height: '100%', 
        justifyContent: 'space-between', 
        width: '90%' 
    },
    header:{
        height: hp(100), 
        alignSelf: 'flex-end', 
        flexDirection: 'row'
    },
    inputContainer:{
        paddingVertical: hp(5), 
        borderWidth: 0
    },
    carouselDev:{
        justifyContent: 'center', 
        height: hp(200) 
    },
    iconContainer:{
        alignSelf: 'center' 
    },
    bg: {
        width: Dimensions.get('screen').width - wp(150),
        height: hp(100),
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        paddingVertical: hp(5), 
        textAlign: 'center', 
        marginTop: hp(25), 
        borderWidth: 0, 
        fontSize: RFPercentage(1.7) 
    },
    createBtn:{
        width: wp(75),
        height: wp(75),
        borderRadius: wp(40),
        backgroundColor: 'rgba(0,0,0,.3)',
        justifyContent: 'center',
        margin: wp(10),
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,.5)', 
        marginBottom: hp(10), 
        alignItems: 'center',
    },
    img:{
        width: wp(40), 
        height: wp(40), 
        tintColor: "#fff" 
    },
    carousel:{
        alignSelf: 'center', 
        backgroundColor: '#fff'
    }
};

