import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
export default class RouteView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            view:this.props.view
        }
    }
    render(){
        return(
            <View style={[styles.flex]}>
                {this.state.view}
            </View>
        )
    }
}
const styles=StyleSheet.create({
    flex:{
        flex:1
    }
})