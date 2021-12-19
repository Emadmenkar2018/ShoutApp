
import { wp, hp } from '../../../helpers/DimensionHelper'

export const styles ={
    annotationContainer: {
        width: wp(150),
        height: hp(80),
        alignItems: 'center', 
        borderColor: 'rgba(0, 0, 0, 0.45)', 
        justifyContent: 'center',
        overflow: 'hidden',
    },
    imgBg:{
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    title:{
        paddingTop: hp(10), 
        fontWeight: '600', 
    }
};

