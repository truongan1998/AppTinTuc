import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Style from './Style';
console.disableYellowBox = true;
export default class GiaiTri extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      anh_tieude: '',
      tieude: '',
      tacgia: '',
      // tách từ nội dung thành ảnh và nội dung
      listData: [{ key: 0, Anh: { alt: "", src: "" }, ND: '' }]
    }
  }
  static navigationOptions = {
    header: null,

  };

  // tách nội dung thành listData
  _CovertContent(Text) {
    var str = Text;
    var i = 1;
    let list = [];
    while (str.indexOf("@start/Image/") >= 0) {
      var temp_nd = str.slice(0, str.indexOf("@start/Image/"));
      str = str.replace(temp_nd, "");
      var temp_image = str.slice(0, str.indexOf("@end/Image/") + 12);
      str = str.replace(temp_image, "");

      var temp_src = temp_image.slice(temp_image.indexOf("https:/"), temp_image.indexOf("#@#"));
      var temp_alt = temp_image.slice(temp_image.indexOf("#@#") + 3, temp_image.indexOf("@end/Image/"));
      if (temp_src == "") temp_src = this.state.anh_tieude;
      let item = { key: i, ND: temp_nd, Anh: { alt: temp_alt, src: temp_src } };
      list.push(item);
      i++;
    }
    if (str > "") {
      let item = { key: i, ND: str, Anh: { alt: "Tin mới", src: this.state.anh_tieude } };
      list.push(item);
    }
    this.setState({ listData: list });
  }

  _XuongDong(Text){
      var str = Text;
      var arrstr = str.split(". ");
      for(var i=0;i<arrstr.length;i=i+3){
        arrstr[i] =" \n\n"+arrstr[i];
      }
      return arrstr.toString().replace(', \n','.\n\n');
  }

  componentDidMount() {
    return fetch('https://nvthanhdnt.000webhostapp.com/chitiet.php?id=' + this.props.navigation.getParam('id', 0))
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          tacgia: responseJson.tacgia,
          tieude: responseJson.tieude,
          anh_tieude: responseJson.anh_tieude
        }, function () {
          this._CovertContent(responseJson.noidung);
        });

      })
      .catch((error) => {
        // console("Lỗi mạng");
      });
  }


  


  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (

      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.listData}
          ListHeaderComponent={<Text style={Style.header}>{this.state.tieude}</Text>}
          ListFooterComponent={<Text style={Style.footer}>{this.state.tacgia}</Text>}
          renderItem={({ item }) =>
            <View  style={Style.view_chitiet}>
               <View style={Style.view_anh}>
                  <Image style={Style.img_chitiet} source={{uri:item.Anh.src}}/>
                  <Text>{item.Anh.alt}</Text>
               </View>
               <Text style={Style.TextNoiDung}>{this._XuongDong(item.ND)}</Text>
               <Text ></Text>

            </View>

          }
        />

      </View>
    );


  }
}


