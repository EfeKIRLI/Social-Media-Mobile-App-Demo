import React from "react";
import PropTypes from "prop-types";
import { View,Text, Image } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import style from "../UserPost/style";


const UserPost = (props) => { 
    return (
        <View style={style.userPostContainer}>
          <View style={style.user} >
            <View style={style.userContainer}> 
            <UserProfileImage 
              profileImage={props.profileImage} 
              imageDimensions={48} 
            />
            <View style={style.userTextContainer} >
              <Text style={style.username}>
                {props.firstName} {props.lastName}
              </Text>
            {props.location && (
            <Text style={style.location}> {props.location}</Text>
            )} 
            </View>  

           </View>
          <FontAwesome name={'ellipsis-h'} color={'#79869F'} size={24}  
        />
          </View>
          <View style={style.postImage} > 
            <Image source={props.image} />
         </View>
         <View style={{marginLeft:20,flexDirection:'row'}}>   
            <View style={{flexDirection:'row',alignItems:'center'}} >
                <FontAwesome name={'heart'} color={'#79869F'} />
                <Text style={{marginLeft:3, color:'#79869F'}}> {props.likes} </Text>
            </View>

            <View style={{flexDirection:'row',alignItems:'center', marginLeft:27}} >
                <FontAwesome name='envelope' color={'#79869F'} />
                <Text style={{marginLeft:3, color:'#79869F'}}> {props.comments} </Text>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginLeft:27}} >
                <FontAwesome name={'bookmark'} color={'#79869F'} />
                <Text style={{marginLeft:3, color:'#79869F'}}> {props.bookmarks} </Text>
            </View>

         </View>
        </View>
    )
}

UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      location: PropTypes.string,
      image: PropTypes.any.isRequired,
      profileImage:PropTypes.any.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      bookmarks:PropTypes.number.isRequired,
      
};

export default UserPost;
