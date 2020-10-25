import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Image,TouchableHighlight } from 'react-native';
import Style from './Style';
import ChiTietTin from './ChiTietTin';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

 class GiaiTri extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      isRefreshing:false
    }
  }
  // Lọc nội dung  
  _LocNoiDung(text) {
    var str = text;
    while (str.indexOf("@start/Image/") > 0) {
      var st = str.indexOf("@start/Image/");
      var end = str.indexOf("@end/Image/");
      str = str.replace(str.slice(st, end + 12), "")

    }
    return str;
  }
  // Loại bỏ header
  static navigationOptions = {
    header: null,
    };
  // Vuốt từ trên xuống refrest trang
  handleRefresh = () => {
    this.setState({
        refreshing: true,
    }, () => {
        this.componentDidMount();
    })
  }
  // Đọc dữ liệu từ web
  componentDidMount(){
    return fetch('https://nvthanhdnt.000webhostapp.com/select.php?lt=Giải trí')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console("Lỗi sever");
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <TouchableHighlight onPress={() => this.props.navigation.navigate("Page_ChiTiet",{id:item.key})}>
                <View style={Style.view_tin_fl}>
                    <Image style={Style.img_tin} source={{uri:item.anh_tieude}}/>
                    <Text style={Style.tieude_tin}>{item.tieude}</Text>
                    {/* {let a = {item.noidung}} */}
                    <Text ellipsizeMode={'tail'} numberOfLines={3}>{this._LocNoiDung(item.noidung)}</Text>
                    <Text>Thời gian: {item.thoigian}</Text>
                </View>
          </TouchableHighlight>
          }
          refreshing={this.state.isRefreshing}
          onRefresh ={this.handleRefresh}
        />
      </View>
    );
  }
}

const N_ChiTietTin= createStackNavigator(
  {
    Page_GiaiTri:{
      screen:GiaiTri
    },
    Page_ChiTiet:{
      screen:ChiTietTin
    }
  }
)
export default createAppContainer(N_ChiTietTin);