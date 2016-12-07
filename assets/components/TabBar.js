import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
import Iconfont from 'react-native-vector-icons/Iconfont';
let PI=1/PixelRatio.get();
export default class TabBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tab:this.props.tab
        }
    }
    setAnimationValue({value}) {
        index=value
        index=String(index).split(".")[1]=="undefined"?"":String(index).split(".")[1];
        //console.log(index);
	}
    componentDidMount(){
        this.props.scrollValue.addListener(this.setAnimationValue);
    }
    _initTab(tab,index){
        let color = this.props.activeTab == index ? "#007ACC" : "#ADADAD";
        return(
            <TouchableOpacity
                onPress={()=>{this.props.goToPage(index)}}
                key={index}
                style={[styles.flex,styles.navItem]}
            >
                <View style={[styles.flex,styles.navItem]}>
                <Iconfont name={this.state.tab[index].icon} style={[{color:color,fontSize:50*PI}]}/>
                <Text style={[{color:color,fontSize:30*PI}]}>{this.state.tab[index].name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={[styles.navBar]}>
                {this.state.tab.map((tab,index)=>this._initTab(tab,index))}
            </View>
        )
    }
}
const styles = StyleSheet.create({
  flex:{
    flex:1
  },
  icon:{
    fontFamily:"iconfont",
    fontSize:72*PI
  },
  navBar:{
    height:120*PI,
    backgroundColor:"#f9f9f9",
    flexDirection:"row",
    borderColor:"#ddd",
    borderTopWidth:1*PI
  },
  navItem:{
    justifyContent:"center",
    alignItems:"center"
  }
});