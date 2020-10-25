import React, { Component } from 'react';
import { Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import Style from './Style';
export default class ContenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_user: 0,
            hoten: "",
            sdt: '',
            pass: '',
            comfirmpass: '',
            dangky: false,
            status: '',
        }
    }
    _KiemTraDangKy(){
        if( this.state.sdt == '' || this.state.pass == '' ||this.state.comfirmpass == '' || this.state.hoten == ''){
            alert("Các trường không được bỏ trống!");
            return false;
        }else{
            if(this.state.pass!=this.state.comfirmpass){
                alert("Mật khẩu không kớp");
                return false;
            }
        }

        return true;
        
    }
    _DangKy() {
        // alert(this.state.sdt + "   " + this.state.pass + "    " + this.state.hoten);
        if (this._KiemTraDangKy()==true) {
            return fetch('https://nvthanhdnt.000webhostapp.com/dangky.php?sdt=' + this.state.sdt + '&hoten=' + this.state.hoten + '&pass=' + this.state.pass)
                .then((response) => response.json())
                .then((responseJson) => {

                    this.setState({
                        status: responseJson
                    }, function () {
                        alert(this.state.status);
                        if(this.state.status=="Đăng ký thành công"){
                            this.setState({dangky:false});
                        }
                    });

                })
                .catch((error) => {
                    alert('Lỗi đăng ký không thành công')
                });
        }
    }
    render() {
        if (this.state.id_user <= 0) {
            if (this.state.dangky == false)
                // Đăng nhập
                return (
                    <View style={Style.container}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <View style={Style.header_dr}><Image style={Style.Img_Back} source={require("./image/back.png")} /></View>
                        </TouchableOpacity>
                        <Image style={Style.avatar} source={require("./image/user.png")} />
                        <View style={Style.body}>
                            <TextInput placeholder='Số điện thoại' style={{ backgroundColor: '#ECE0F8', borderRadius: 5, }}
                                onChangeText={sdt => this.setState({ sdt })}
                            ></TextInput>
                            <TextInput placeholder="Mật khẩu" secureTextEntry={true} style={{ backgroundColor: '#ECE0F8', borderRadius: 5, marginTop: 5 }}
                                onChangeText={pass => this.setState({ pass })}
                            ></TextInput>
                            <TouchableOpacity style={Style.buttonContainer}>
                                <Text style={{ color: '#FFFFFF' }}>Đăng nhập</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginHorizontal: 20 }} onPress={() => this.setState({ dangky: true })} >
                                <Text style={{ color: '#08088A', fontSize: 20 }}>Đăng ký tài khoản</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            else {

                // Đăng ký
                return (
                    <View style={Style.container}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <View style={Style.header_dr}><Image style={Style.Img_Back} source={require("./image/back.png")} /></View>
                        </TouchableOpacity>
                        <Image style={Style.avatar} source={require("./image/user.png")} />
                        <View style={Style.body_dangky}>
                            <TextInput placeholder='Số điện thoại' style={{ backgroundColor: '#ECE0F8', borderRadius: 5, }}
                                onChangeText={sdt => this.setState({ sdt })}
                            ></TextInput>
                            <TextInput placeholder='Họ tên' style={{ backgroundColor: '#ECE0F8', borderRadius: 5, marginTop: 5 }}
                                onChangeText={hoten => this.setState({ hoten })}
                            ></TextInput>
                            <TextInput placeholder="Mật khẩu" secureTextEntry={true} style={{ backgroundColor: '#ECE0F8', borderRadius: 5, marginTop: 5 }}
                                onChangeText={pass => this.setState({ pass })}
                            ></TextInput>
                            <TextInput placeholder="Nhập lại mật khẩu" secureTextEntry={true} style={{ backgroundColor: '#ECE0F8', borderRadius: 5, marginTop: 5 }}
                                onChangeText={comfirmpass => this.setState({comfirmpass })}
                            ></TextInput>
                            <TouchableOpacity style={Style.buttonContainer} onPress={() => this._DangKy()}>
                                <Text style={{ color: '#FFFFFF' }}>Đăng ký</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginHorizontal: 20 }} onPress={() => this.setState({ dangky: false })} >
                                <Text style={{ color: '#08088A', fontSize: 20 }}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }
        } else {
            return (
                <View style={Style.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View style={Style.header_dr}><Image style={Style.Img_Back} source={require("./image/back.png")} /></View>
                    </TouchableOpacity>
                    <Image style={Style.avatar} source={require("./image/user.png")} />
                    <View style={Style.body}>
                        <View style={Style.bodyContent}>
                            <TouchableOpacity style={Style.buttonContainer}>
                                <Text>Lịch sử</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
    }
}

