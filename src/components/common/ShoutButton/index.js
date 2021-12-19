import React from "react";
import {   TouchableOpacity } from "react-native";
import ShoutText from '../ShoutText'
import PropTypes from 'prop-types'

const ShoutButton = ({
    title,
    onPress,
    style,
    disabled,
    onFocus,
    titleStyle,
    children,
    ...props
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}
            disabled={disabled}
            onFocus={onFocus}
            {...props}
        >
            {children}
            {/* <ShoutText style={titleStyle} fontSize={2}>
                {title}
            </ShoutText> */}
        </TouchableOpacity>
    );
};

export default ShoutButton;
 
ShoutButton.propTypes = {
    /**
     *style of the TouchableOpacity "Button"
     */
     style: PropTypes.object, 

     /**
     * Title that took place inside the Button
     */
     title: PropTypes.string,

    /**
     * style of the Text inside the Button
     */
     titleStyle: PropTypes.object, 

    /**
     * Represent the func when onPress is called
     */
     onPress: PropTypes.func, 

    /**
     *Represent if the button should be disabled or no
     */
     disabled: PropTypes.bool, 

    /**
     * Represent the func when onFocus is called
    */
     onFocus: PropTypes.func, 
 

}
