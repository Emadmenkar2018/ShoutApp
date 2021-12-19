import React from "react";
import { Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import PropTypes from "prop-types";
import { hp } from "../../../helpers/DimensionHelper";

 const ShoutText = (props) => {
  return (
    <Text
      testID="ShoutText"
      style={[styles.textStyle, props.style, { marginTop: props.numberOfLines > 1 ? hp(15) : hp(0) ,fontSize  :  RFPercentage(props?.fontSize ?props.fontSize:10 )}]}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={'tail'}
      onPress={props.onPress}
    >
      {props.children}
    </Text>
  );
}

const styles = {
  textStyle: {
    fontSize: 12,
  },
};
export default ShoutText


ShoutText.propTypes = {
  style: PropTypes.object,
  numberOfLines: PropTypes.number,
  fontSize: PropTypes.number,
  onPress: PropTypes.func,
  children: PropTypes.node,
};
