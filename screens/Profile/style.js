import { StyleSheet } from "react-native";

const style = StyleSheet.create({ 
    profileImage : { 
        width: 110,
        height: 110, 
        },
    profileImageContainer : { 
        // flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'10%'
    },
    profileImageContent : { 
        borderWidth:1,
        borderColor:'#0150EC',
        padding:4,
        borderRadius:110
    },
    userName : { 
       textAlign:'center',
       marginTop:30,
       fontWeight:'400',
       fontSize:20,
    },
    statAmount : { 
        fontSize:20,
        color:'#022150',
        textAlign:'center'
    },
    statType : { 
        fontSize:16,
        color:'#79869F',
    },
    statContainer : { 
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:40,
        marginTop:30,
        borderBottomWidth:1,
        borderColor:'#E9EFF1',
        paddingBottom:30
    },
    statBorder : { 
        borderRightWidth:1,
        borderColor:'#E9EFF1'
    }    

});


export default style;