import * as types from "../actionTypes";
import { Shouts } from '../../data/Shouts'
import { USER_POINTS, CREATE_SHOUT_POINT } from '../../appConfig'

const initialState = {
    shout: {},
    location: {},
    userPoints: USER_POINTS,
    shoutsArrData: Shouts,
    isLoading: false,
    error: null,
}


const shouts = (state = initialState, action) => { 
    switch (action.type) {

        //MODIFY SHOUTS
        case types.MODIFY_SHOUT:
            return {
                ...state,
                shoutsArrData: action.payload
            };

        case types.CREATE_SHOUT:
            return {
                ...state,
                shoutsArrData: action.payload,
                userPoints : state.userPoints - CREATE_SHOUT_POINT
            };


        case types.ADD_COMMENT:
            let commentObj = action?.payload?.options
            let shoutIndex = action?.payload?.index
            // let newCommentsshoutsArr = [...state.shoutsArrData[shoutIndex].comments, commentObj]
            let newCommentsshoutsArr = [commentObj, ...state.shoutsArrData[shoutIndex].comments ]
            return {
                ...state,
                shoutsArrData: state.shoutsArrData.map((item, index) => {
                    if (index === shoutIndex) {
                        let newItem = {
                            ...item,
                            comments: newCommentsshoutsArr
                        }
                        return newItem
                    }
                    else {
                        return item
                    }
                })
            };
 
        default:
            return state;
    }
};

export default shouts;
