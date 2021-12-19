
import { wp, hp } from '../../../helpers/DimensionHelper'
import {Dimensions} from 'react-native';

const device_width = Dimensions.get("screen").width

export const styles ={
    modalDev:{
        alignSelf: 'center', 
        justifyContent: 'flex-end', 
        width: device_width
    },
    container:{
        flex: .6, 
        backgroundColor: '#efefef', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    header:{
        height: hp(40), 
        width: '100%', 
        justifyContent: 'flex-end', 
        flexDirection: 'row', 
        backgroundColor: '#2c2c2c', 
        alignItems: 'center'
    },
    footer:{
        height: hp(40), 
        width: '100%',
        backgroundColor: '#2c2c2c'
    },
    rightIcons:{
        flexDirection: 'row', 
        alignItems: 'center', 
        height: hp(40), 
        alignSelf: 'flex-end' 
    },
    icon:{
        backgroundColor: '#2c2c2c'
    },
    commentBubble:{
        backgroundColor: '#555', 
        paddingVertical: hp(15), 
        width: '65%', 
        paddingHorizontal: wp(10) 
    },
    commentTxt:{
        color: '#fff'
    },
    avatarDev:{
        width: '30%', 
        alignItems: 'center'
    },
    avatar:{
        width: wp(45), 
        height: wp(45), 
        marginBottom: hp(4) 
    },
    commentDev:{
        marginVertical: hp(10), 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: device_width
    },
    inputTxt:{
        color:'#fff'
    },
    timeTxt:{
        color: '#111'
    }
};

