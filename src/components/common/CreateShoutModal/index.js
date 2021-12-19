
import React from 'react';
import { ImageBackground, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { wp } from '../../../helpers/DimensionHelper';
import { Input, Icon } from 'react-native-elements';
const device_width = Dimensions.get("screen").width
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
import { styles } from './styles';
import { ImagesBackgrounds } from '../../../data/ImagesBackgrounds'

const CreateShoutModal = (props) => {
    const { setcreatingShoutVisibility, creatingShoutVisibility, shoutText, setshoutText, _carousel, createShout } = props

    /**
     * render the Carousel Item
     * 
     * @param {Object} item
     */
    
    const _renderCarouselItem = (item) => {

        return (
            <ImageBackground resizeMode="stretch" style={styles.bg} source={item.item.src}>

                <Input
                    containerStyle={styles.inputContainer}
                    style={{ borderWidth: 0 }}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    inputStyle={styles.input}
                    value={shoutText}
                    onChangeText={setshoutText}
                    placeholder={'Enter Shout Name'}
                />

            </ImageBackground>
        )
    }


    return (
        <Modal
            isVisible={creatingShoutVisibility}
            useNativeDriver={true}
            onTouchOutside={() => setcreatingShoutVisibility(false)}
            onSwipeOut={() => setcreatingShoutVisibility(false)}
            style={{ width: device_width }}
            onBackdropPress={() => setcreatingShoutVisibility(false)}
            onRequestClose={() => {
                setcreatingShoutVisibility(false)
            }}
        >
            <View style={styles.dev}>
                <TouchableOpacity style={styles.header} >

                    <Icon containerStyle={styles.iconContainer} onPress={() => setcreatingShoutVisibility(false)} name='clear' type="material" size={wp(20)} color="#fff" />

                </TouchableOpacity>

                <View style={styles.carouselDev}>
                    <Carousel
                        style={styles.carousel}
                        ref={_carousel}
                        data={ImagesBackgrounds.images}
                        renderItem={_renderCarouselItem}
                        sliderWidth={Dimensions.get('screen').width}
                        itemWidth={Dimensions.get('screen').width - wp(150)}
                    />
                </View>

                <TouchableOpacity onPress={createShout} style={styles.createBtn}>
                    <Image style={styles.img} tintColor="#fff" source={require('../../../assets/img/thu.png')} />
                </TouchableOpacity>

            </View>
        </Modal>
    )
}

export default CreateShoutModal