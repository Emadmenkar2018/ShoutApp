import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";



const ShoutList = React.forwardRef((props, ref) => {

  const keyExtractor = React.useCallback(
    (item, index) => index.toString(),
    [],
  )

  return (
    <FlatList
      testID={props?.testID}
      ref={ref}
      getItemLayout={props.getItemLayout}
      // style={[props.style]} 
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={props?.data}
      ListFooterComponent={props?.ListFooterComponent}
      renderItem={(item, key) => props?.renderItem(item, key)}
      keyExtractor={keyExtractor}
      refreshControl={props?.refreshControl}
      onEndReached={props?.onEndReached}
      onEndReachedThreshold={props?.onEndReachedThreshold}
      removeClippedSubviews={false}

    />


  );
})

export default ShoutList

ShoutList.propTypes = {
  /**
    *Style of the FlatList
    */
  style: PropTypes.object,

  /**
   *Data List
   */
  data: PropTypes.array,

  /**
   *testID 
   */
  testID: PropTypes.string,

  /**
  *Function to render the flatlist item 
  */
  renderItem: PropTypes.func.isRequired,

};
