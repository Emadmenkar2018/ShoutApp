import * as types from "../actionTypes";
 
/**
     * Modify Shouts Action
     * 
     * @param {Object} options
     */

//
export const modifyShout = (options) => {
    return {
        type: types.MODIFY_SHOUT,
        payload: options,
    }
    
};

/**
     * Add Comment To Shout Action
     * 
     * @param {Object} options
     * @param {Number} index
     */

export const addCommentToShout = (options,index) => {
    return {
        type: types.ADD_COMMENT,
        payload: {options,index},
    }
    
};

/**
     * Create New Shout Action
     * 
     * @param {Object} options
     */

export const createNewShout = (options) => {
    return {
        type: types.CREATE_SHOUT,
        payload: options,
    }
    
};
 