import { StyleSheet} from 'react-native'
const Style = StyleSheet.create({
   view_tin_fl:{
    flex:2,
    flexDirection:'column',
    padding:10,
    borderBottomWidth:0.5,
    borderBottomColor:'black',
   //  backgroundColor:'#5D6D7E',
    marginTop:20,
   },
   img_tin:{
    flex:1, 
    height: 240
   },
   tieude_tin:{
    fontSize:20,
    flex:1,

   },

   img_chitiet:{
      height: 230,
     },
   view_chitiet:{
      flexDirection:'column',
      padding:10,
     
   },
   view_anh:{
      
   },
   TextNoiDung:{
      marginTop:20
   },
   Img_Back:{
      
      width:30,
      height:30,
      marginTop:10,
   },
   header:{
      margin:10,
      fontSize:20,
      
   },
   footer:{
      paddingBottom:10,
      marginLeft:230,
   },
   InPutTimKiem:{
      marginLeft:20,
      height: 40,
      width:290,
      backgroundColor:'#E0F8EC'
   },
   header_dr:{
      backgroundColor: "#0B3B39",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:80
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:50,
      margin:20
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:320,
      borderRadius:30,
      backgroundColor: "#0B610B",
      
    },
    body_dangky:{
       margin:10
    }
});
export default Style;