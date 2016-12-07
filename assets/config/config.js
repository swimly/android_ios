import React from 'react';
import {} from 'react-native';
export default class Config extends React.Component{
    componentDidMount(){
        return config;
    }
}
const config=[{
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
}];