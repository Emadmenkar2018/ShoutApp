import React, { useEffect, useRef, useState } from 'react'
import { Alert, Image, View } from 'react-native'
import { ShoutText, CommentModal, CreateShoutModal, ShoutButton } from '@common/index'
import AnnotationWithRemoteImage from '@common/AnnotationWithRemoteImage'
import { styles } from './style.js'
import MapboxGL from "@react-native-mapbox-gl/maps";
import { modifyShout, addCommentToShout, createNewShout } from '@actions/shouts'
import { useSelector, useDispatch } from 'react-redux';
import { ImagesBackgrounds } from '../../../data/ImagesBackgrounds'
import moment from 'moment';
import { CREATE_SHOUT_POINT } from '../../../appConfig';

MapboxGL.setAccessToken("sk.eyJ1IjoiZW1hZG1lbiIsImEiOiJja3g2NHl1d24yYmhqMnFvYjBkMDU1YTJqIn0._BxdTHkg8DCdrqgrZPPq7A");


const Home = () => {
    const dispatch = useDispatch()

    const map = useRef()
    const _carousel = useRef()
    const MapboxGLRef = useRef()

    let _scaleIn = null;
    let _scaleOut = null;

    const { shoutsArrData } = useSelector(state => state.shouts);
    const { userPoints } = useSelector(state => state.shouts);
    const [shouts, setshouts] = useState([])
    const [userLocation, setuserLocation] = useState({})
    const [activeAnnotationIndex, setactiveAnnotationIndex] = useState(-1)
    const [previousActiveAnnotationIndex, setpreviousActiveAnnotationIndex] = useState(-1)
    const [commentsVisibility, setCommentsVisibility] = useState(false)
    const [shoutText, setshoutText] = useState("")
    const [creatingShoutVisibility, setcreatingShoutVisibility] = useState(false)
    const [selectedShoutIndex, setSelectedShoutIndex] = useState("")


    /**
   * Set the backgrounds of shouts 
   * 
  */


    useEffect(() => {
        if (shoutsArrData.length > 0) {
            let newShouts = shoutsArrData.map((item, index) => {
                let sourceUrl = ""
                ImagesBackgrounds.images.map((img, imgIndex) => {
                    if (img.title.includes(item.src)) {
                        sourceUrl = imgIndex
                    }
                })
                return {
                    ...item,
                    src: ImagesBackgrounds.images[sourceUrl]
                }
            })
            setshouts(newShouts)
        }
    }, [shoutsArrData])



    /**
    * Set The index of the selected carousel item
    * @param {String} selectedIndex
    */

    const selectShout = (selectedIndex) => {
        setSelectedShoutIndex(selectedIndex)
        setCommentsVisibility(true)
    }



    /**
     * Set The Shouts near to the uesr Location
     * 
     */

    useEffect(() => {
        if (userLocation?.longitude) {
            let i = 0.0100
            let newShouts = []
            newShouts = shoutsArrData.map(item => {
                let newCoordinatesArr = []
                newCoordinatesArr[0] = parseFloat((userLocation.longitude + i).toFixed(4))
                newCoordinatesArr[1] = parseFloat((userLocation.latitude + i).toFixed(4))
                item.coordinates = newCoordinatesArr
                i = i + 0.0150
                return item
            })
            dispatch(modifyShout(newShouts))
        }
    }, [userLocation])


    /**
     * Dispatch create Shout action to the store 
     * 
     */
    const renderAnnotations = () => {
        const items = [];
        for (let i = 0; i < shouts?.length; i++) {
            const animationStyle = {};
            if (i === activeAnnotationIndex) {
                animationStyle.transform = [{ scale: _scaleIn }];
            } else if (i === previousActiveAnnotationIndex) {
                animationStyle.transform = [{ scale: _scaleOut }];
            }

            items.push(
                <AnnotationWithRemoteImage
                    key={`pointAnnotation${i}`}
                    id={`pointAnnotation${i}`}
                    index={i}
                    selectShout={selectShout}
                    src={shouts[i].src}
                    showCommentsVisibility={setCommentsVisibility}
                    coordinate={shouts[i].coordinates}
                    title={shouts[i].title}
                />,
            );
        }

        return items;
    }


    /**
   * Dispatch create Shout action to the store 
   * 
  */
    const createShout = () => {
        if (userPoints > CREATE_SHOUT_POINT) {
            if (shoutText.length > 0 && userLocation.latitude) {

                let newshoutObj = {
                    id: shouts.length,
                    title: shoutText,
                    src: ImagesBackgrounds.images[_carousel.current.currentIndex].title,
                    coordinates: [userLocation?.longitude, userLocation?.latitude],
                    comments: []
                }
                let newshoutsArr = [...shouts, newshoutObj]
                dispatch(createNewShout(newshoutsArr))
                setcreatingShoutVisibility(false)
            }
            else {
                Alert.alert('Enter Shout Name')
            }
        }
        else {
            Alert.alert('You Dont Have Enough Points')
        }
    }


    /**
   * Dispatch add comment action to the store 
   * 
   * @param {String} commentTxt
  */
    const enterComment = (commentTxt) => {
        let commentObj = {
            "id": shoutsArrData[selectedShoutIndex].comments.length + 1,
            "body": commentTxt,
            "author_icon": "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
            "timestamp": moment(new Date()),
        }
        dispatch(addCommentToShout(commentObj, selectedShoutIndex))
    }


    const handleUserLocationChange = (d) => {
        setuserLocation({ longitude: d?.coords?.longitude, latitude: d?.coords?.latitude })
    }

    return (
        <View style={styles.dev}>
            <View style={styles.mapContainer}>
                <MapboxGL.MapView ref={map} style={{ flex: 1 }}>

                    <MapboxGL.Camera
                        zoomLevel={9}
                        followUserLocation
                        ref={MapboxGLRef}
                    />

                    <MapboxGL.UserLocation onUpdate={handleUserLocationChange} renderMode='native' androidRenderMode='compass' />

                    {renderAnnotations()}

                    <View style={styles.btnDev}>

                        <View style={styles.countDev}>

                            <ShoutButton style={styles.createShoot}>
                                <ShoutText fontSize={4} style={{ color: '#555' }}>{userPoints}</ShoutText>
                            </ShoutButton>

                        </View>

                        {!creatingShoutVisibility &&
                            <ShoutButton onPress={() => setcreatingShoutVisibility(true)} style={styles.createShoot}>
                                <Image style={styles.shoutImg} tintColor="#fff" source={require('../../../assets/img/pngegg.png')} />
                            </ShoutButton>
                        }

                    </View>

                </MapboxGL.MapView>

            </View>

            <CreateShoutModal
                shoutText={shoutText}
                createShout={createShout}
                setshoutText={setshoutText}
                creatingShoutVisibility={creatingShoutVisibility}
                setcreatingShoutVisibility={setcreatingShoutVisibility}
                _carousel={_carousel}
            />

            <CommentModal
                data={shouts[selectedShoutIndex]}
                commentsVisibility={commentsVisibility}
                setCommentsVisibility={setCommentsVisibility}
                enterComment={enterComment}
            />

        </View >
    )

}

export default Home

Home.propTypes = {
}