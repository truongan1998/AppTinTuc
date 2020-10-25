
import { View, Image, TouchableHighlight } from 'react-native';
import { Searchbar } from 'react-native-paper';
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import View_TimKiem from './View_TimKiem';
import Style from './Style';
import Home from './Home_Tab';
import ContentComponent from './ContenComponent';
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  _TimKiem = () => {
    if (this.state.tk_timkiem != "")
      this.props.navigationProps.navigate("View_TimKiem", { tk_timkiem: this.state.tk_timkiem });
    else{
      alert("Không được bỏ trống");
    }
  };
  state = {
    tk_timkiem: '',
  };
  render() {
    const { tk_timkiem } = this.state;
    return (

      <View style={{ flexDirection: 'row' }}>
        <TouchableHighlight onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/profile.png')}
            style={{ width: 35, height: 35, marginLeft: 5,marginTop:5 }}
          />
        </TouchableHighlight>
        <Searchbar
          style={Style.InPutTimKiem}
          icon={({ size, color }) => (
            <Image
              source={require('./image/search.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          )}
          clearIcon={({ size, color }) => (
            <Image
              source={require('./image/clear.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          )}
          placeholder="Search"
          value={tk_timkiem}
          onChangeText={query => { this.setState({ tk_timkiem: query }); }}
          onIconPress={this._TimKiem.bind(this)}
        />
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      // title: 'Tin tức',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0B5345',
      },
      headerTintColor: '#fff',

    }),

  },
  View_TimKiem: {
    screen: View_TimKiem
  }



});


const App = createDrawerNavigator(
  {

    Home: {
      screen: FirstActivity_StackNavigator,
    },
    
  },
  {
    contentComponent:ContentComponent,
    drawerWidth: 355
  }

)
export default createAppContainer(App);