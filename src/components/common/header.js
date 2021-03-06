//import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';

//make a component
const Header = (props) => {

    const { textStyle, viewStyle} = styles;

    return (
    <View style={viewStyle}>
        <Text style = {textStyle}>{props.headerText}</Text>
    </View>

    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        //elevation: 3
      //  paddingTop: 15,
      //  shadowOffset: {width: 0, height: 2},
      //  shadowOpacity: 0.8

    },

    textStyle: {
        fontSize: 20
    }
};

//make the component available to other parts of the app
export { Header };