import { StyleSheet } from "react-native";

const style = StyleSheet.create({ 
    userContainer :{ 
        flexDirection:'row'
    },

    userTextContainer :{
        justifyContent:'center', 
        marginLeft:10,
        // backgroundColor:'red'
        },


        user :{
            flexDirection:'row', 
            alignItems:'center',
            justifyContent:'space-between'
        },

        username: { 
            color:'#000',
            fontSize:16,
            fontWeight:'500',
        },
        location : { 
            color:'#79869F',
            fontSize:12,
            marginTop:5,
            marginLeft:-3,
        },

        postImage : { 
            alignItems:'center',
            marginTop:20,
            // marginBottom:20
            marginVertical:20
        },
        userPostContainer : { 
            marginTop:35,
            borderBottomWidth:1,
            paddingBottom:20,
            borderBottomColor:'#EFF2F6'
        }
});

export default style;