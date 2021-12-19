
import { wp, hp } from '../../../helpers/DimensionHelper'
import React from 'react';
import {Dimensions} from 'react-native';

const device_width = Dimensions.get("screen").width

export const styles ={
     
    icon:{
        backgroundColor: '#222'
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
        marginBottom: hp(4) ,
        borderRadius:2
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
        color: '#111',
        fontWeight:'500'
    }
};

