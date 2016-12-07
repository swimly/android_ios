import React from 'react';
import {
    Text,
    View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import RouteView from './RouteView';
import TabBar from '../components/TabBar';
import TabView_1 from './TabView_1';
import TabView_2 from './TabView_2';
import TabView_3 from './TabView_3';
import TabView_4 from './TabView_4';
export default class MainView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tabs:[{
                name:"首页",
                icon:"home",
                view:<TabView_1/>
            },{
                name:"通讯录",
                icon:"Contact",
                view:<TabView_2/>
            },{
                name:"动态",
                icon:"dongtai2",
                view:<TabView_3/>
            },{
                name:"我的",
                icon:"my",
                view:<TabView_4/>
            }]
        }
    }
    _initView(tab,i){
        return(
            <RouteView key={i} view={tab.view}/>
        )
    }
    render(){
        return(
            <ScrollableTabView
                tabBarPosition="bottom"
                renderTabBar={()=><TabBar tab={this.state.tabs}/>}
            >
                {this.state.tabs.map((tab,i)=>this._initView(tab,i))}
            </ScrollableTabView>
        )
    }
}
// <RouteView view={<TabView_1/>}/>