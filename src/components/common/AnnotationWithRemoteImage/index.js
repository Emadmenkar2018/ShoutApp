import React from 'react';
import {View , ImageBackground} from 'react-native'
import ShoutText from '../ShoutText'
import MapboxGL from "@react-native-mapbox-gl/maps";
import {styles} from './styles'

export default class AnnotationWithRemoteImage extends React.Component {
    
    annotationRef = null;

    render() {
        const { id, coordinate, title, showCommentsVisibility,src ,selectShout , index } = this.props;

        if(coordinate){
            return (
                <MapboxGL.PointAnnotation
                    id={id}
                    coordinate={[parseFloat(coordinate[0]), parseFloat(coordinate[1])]}
                    title={title}
                    onSelected={()=>selectShout(index)}
                    onDeselected={() => showCommentsVisibility(false)}
                    ref={ref => (this.annotationRef = ref)}>
                    <View style={styles.annotationContainer}>
                         <ImageBackground
                            source={src?.src}
                            style={styles.imgBg}
                            resizeMode="center"
                            onLoad={() => this.annotationRef.refresh()}
                        >  
                            <ShoutText style={styles.title} fontSize={1.6}>{title}</ShoutText>
                        </ImageBackground>  
                    </View>
                </MapboxGL.PointAnnotation>
            );
        }
       
    }
}