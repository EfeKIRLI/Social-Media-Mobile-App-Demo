import React from "react";
import style from "../ProfileTabContent/style";
import { ScrollView,Image,View } from "react-native";

const ProfileTabContent = () => { 
    return (
     
    <ScrollView showsHorizontalScrollIndicator={false} style={style.profileTabContentContainer}>
        <View style={style.profileTabContent}>
        <Image 
        resizeMode={'contain'}
        style={style.image} 
        source={require('../../assets/images/default_post.png')} />
        <Image 
        resizeMode={'contain'}
        style={style.image} 
        source={require('../../assets/images/default_post.png')} />
        <Image 
        resizeMode={'contain'}
        style={style.image} 
        source={require('../../assets/images/default_post.png')} />
        <Image 
        resizeMode={'contain'}
        style={style.image} 
        source={require('../../assets/images/default_post.png')} />
        <Image 
        resizeMode={'contain'}
        style={style.image} 
        source={require('../../assets/images/default_post.png')} />
        <Image 
        resizeMode={'contain'}
        style={style.image} 
        source={require('../../assets/images/default_post.png')} />
        <Image 
        resizeMode={'contain'}
        style={style.image} 
        source={require('../../assets/images/default_post.png')} />
        <Image 
        resizeMode={'contain'}
        style={style.image} 
        source={require('../../assets/images/default_post.png')} />
        <Image 
        resizeMode={'contain'}
        style={style.image} 
        source={require('../../assets/images/default_post.png')} />
        <Image 
        resizeMode={'contain'}
        style={style.image} 
        source={require('../../assets/images/default_post.png')} />
        </View>
    </ScrollView>
    ) ;
};

export default ProfileTabContent;  