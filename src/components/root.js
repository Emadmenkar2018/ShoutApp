import React from "react";
import { connect } from "react-redux";
import { View, StatusBar } from "react-native";

import Navigation from "./partials/Navigation";

const Root = () => {
  return (
    <View style={{ flex: 1, alignItems: "stretch" }}>
      <StatusBar barStyle="light-content" />
      <Navigation/>
    </View>
 );
};
   

export default connect(mapStateToProps,mapDispatchToProps)(Root);
