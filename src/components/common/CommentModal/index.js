import React, { useRef, useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent, View, TouchableHighlight } from 'react-native';
import { hp, wp } from '../../../helpers/DimensionHelper';
import { Input, Icon } from 'react-native-elements';
import { ShoutCommentBubble, ShoutList } from '@common';
import { styles } from './styles'
import Modal from 'react-native-modal';

const CommentModal = (props) => {

    const { setCommentsVisibility, commentsVisibility, data, enterComment } = props
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [comment, setcomment] = useState("");
    const flatList = useRef()

     /**
     * set the margin bottom state to e.endCoordinates.height when keyboard is hide
     * 
     * @param  e represents KeyboardEvent
     */

    function onKeyboardDidShow(e: KeyboardEvent) {
        setKeyboardHeight(e.endCoordinates.height);
    }

    /**
     * set the margin bottom state to 0 when keyboard is hide
     * 
     */

    function onKeyboardDidHide() {
        setKeyboardHeight(0);
    }

  /**
     * add listener when keyboard is opened
     * 
     */
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
        return () => {
            Keyboard.removeAllListeners('keyboardDidShow', onKeyboardDidShow);
            Keyboard.removeAllListeners('keyboardDidHide', onKeyboardDidHide);
        };
    }, []);


    /**
     * render the Carousel Item with CallBack hook
     * 
     * @param {Object} item
     */

    const renderItem = React.useCallback(
        ( {item} ) => <ShoutCommentBubble item={item} />,
        []
    );

    /**
     * call send comment from the main page 
     * 
     */
    const doComment = () => {
        if(comment){
            Keyboard.dismiss()
            setKeyboardHeight(0)
            enterComment(comment)
            setcomment("")
        }
    }


    /**
     * render the icons in the input  
     * 
     */

    const rightIcons = () => {
        return (
            <View style={styles.rightIcons}>

                <Icon name="emoji-emotions" type="material" containerStyle={{ ...styles.icon, marginRight: wp(10) }} color="#fff" />

                <Icon onPress={doComment} name="send" type="material" containerStyle={{ ...styles.icon }} color="#fff" />

            </View>
        )
    }


    /**
     * render the comment input field
     * 
     */

    const listFooterComponent = () => {
        return (
            <View style={{ ...styles.footer, marginBottom: keyboardHeight }}>

                <Input
                    style={{ alignItems: 'center' }}
                    placeholder="Type a message here"
                    // onFocus={() => flatList?.current?.scrollToEnd()}
                    placeholderTextColor={"#fff"}
                    inputContainerStyle={{ borderBottomWidth: 0, }}
                    inputStyle={styles.inputTxt}
                    rightIcon={rightIcons}
                    value={comment}
                    onChangeText={setcomment}
                />
            </View>
        )
    }


    const ITEM_HEIGHT = hp(100)
    const getItemLayout  = React.useLayoutEffect((data,index) => ({
            length: ITEM_HEIGHT, 
            offset : ITEM_HEIGHT* index,
            index
        })
    , []);


    return (
        <Modal
            isVisible={commentsVisibility}
            useNativeDriver={true}
            onTouchOutside={() => setCommentsVisibility(false)}
            onSwipeOut={() => setCommentsVisibility(false)}
            style={styles.modalDev}
            avoidKeyboard={false}
            onBackdropPress={() => setCommentsVisibility(false)}
            onRequestClose={() => {
                setCommentsVisibility(false)
            }}
        >

            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableHighlight onPress={() => setCommentsVisibility(false)}>
                        <Icon name='clear' type="material" size={wp(20)} color="#fff" />
                    </TouchableHighlight>
                </View>

                <ShoutList
                    data={data?.comments}
                    ref={flatList}
                    renderItem={renderItem}
                    removeClippedSubviews={false}
                    getItemLayout={getItemLayout}
                />

                {listFooterComponent()}

            </View>

        </Modal>
    )
}

export default CommentModal