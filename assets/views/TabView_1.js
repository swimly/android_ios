import React from 'react';
import {
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';
export default class TabView_1 extends React.Component{
    render(){
        return(
            <View>
                <TouchableNativeFeedback>
                    <View style={[{padding:50,backgroundColor:"red"}]}>
                        <Text>000000000000</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}