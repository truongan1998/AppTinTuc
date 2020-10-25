import React from 'react';
import {View, Text} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ThoiSu from './ThoiSu';
import TheThao from './TheThao';
import GiaiTri from './GiaiTri';
import KhoaHoc from './KhoaHoc';
import SucKhoe from './SucKhoe';
// import { DrawerActions } from 'react-navigation-drawer';

const App = createBottomTabNavigator(
  {
    Tab_ThoiSu:{
      screen:ThoiSu,
      navigationOptions:{
        title:'Thời sự'
      }
    },
    Tab_TheThao:{
      screen:TheThao,
      navigationOptions:{
        title:'Thể thao'
      }
    },
    Tab_GiaiTri:{
      screen:GiaiTri,
      navigationOptions:{
        title:'Giải trí',
      
      }
    },
    Tab_KhoaHoc:{
      screen:KhoaHoc,
      navigationOptions:{
        title:'Khoa học'
      }
    },
    Tab_SucKhoe:{
      screen:SucKhoe,
      navigationOptions:{
        title:'Sức khỏe'
      }
    },
  },
  {
    initialRouteName:'Tab_ThoiSu',
    tabBarOptions:{
      labelStyle: {
        fontSize: 14,
        marginBottom:20,
        
      },
      activeTintColor: '#BA4A00',
      
      // showIcon:,
      tabStyle: {backgroundColor:'#0B5345'},
    }
  },
  
  );
export default createAppContainer(App);