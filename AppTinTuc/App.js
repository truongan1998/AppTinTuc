import React from 'react';
import { createAppContainer} from 'react-navigation';
import Home from './src/Home';
import Drawer from './src/Drawer';
import { createDrawerNavigator } from 'react-navigation-drawer';

const App= createDrawerNavigator(
  {
    
    Drawer:{
      screen:Drawer
      },
    Home:{
      screen:Home
    },
    
  
},
  
  {
    drawerPosition:'right',
    drawerBackgroundColor:'red',
    drawerWidth:150
  }
  )
export default createAppContainer(App);