import React from 'react';
import ReactNative from 'react';
import { View, Text }  from 'react-native';




const CardSection = (props) => {

  return (
    <View style= {styles.containerStyle}>
    {props.children}
  </View>
  );
};

const styles = {
    containerStyle: {
      height: 75,
      opacity: 0.8,
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: 'grey',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      position: 'relative'
  }
};

export {CardSection};
