import React from 'react';
import  {View ,Image } from 'react-native';
import  ShoutText from "../ShoutText"
import {styles} from './styles'
import moment from 'moment'

const ShoutCommentBubble = (props) => {
    const {item} =props

    return (
        <View style={styles.commentDev}>

            <View style={styles.avatarDev}>

                <Image source={{ uri: item?.author_icon }} style={styles.avatar} />

                <ShoutText fontSize={1.4} style={styles.timeTxt}>{moment(item?.timestamp).format("YYYY.MM.DD")}</ShoutText>

            </View>

            <View style={styles.commentBubble}>
                <ShoutText fontSize={1.5} style={styles.commentTxt} >{item?.body}</ShoutText>
            </View>

        </View>
    )
}

export default ShoutCommentBubble