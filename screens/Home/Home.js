import 'react-native-gesture-handler';
// import React from "react";
import React, { useEffect, useState } from "react";
import {FlatList, SafeAreaView, Text, Touchable, TouchableOpacity, View} from "react-native";
import Title from "../../components/Title/Title";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import globalStyle  from "../../assets/styles/globalStyle";
import style from '../../screens/Home/style';
// import { useFonts } from "expo-font";
import UserStory from "../../components/UserStory/UserStory";
import UserPost from "../../components/UserPost/UserPost";
import { UseFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import globalStyle from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/Routes';
// import { NavigationContainer } from "@react-navigation/native";
// import { getFontFamily } from "./assets/fonts/helper";
// import * as Font from 'expo-font';


const Home = ({navigation}) => {
  const userStories = [ 
    {
      firstName:'Joseph',
      id:1,
      profileImage: require('../../assets/images/default_profile.png'),

    },
    {
      firstName:'Angel',
      id:2,
      profileImage: require('../../assets/images/default_profile.png'),

    },
    {
      firstName:'White',
      id:3,
      profileImage: require('../../assets/images/default_profile.png'),

    },
    {
      firstName:'Olivier',
      id:4,
      profileImage: require('../../assets/images/default_profile.png'),

    },
    {
      firstName:'Nata',
      id:5,
      profileImage: require('../../assets/images/default_profile.png'),

    },
    {
      firstName:'Nicolas',
      id:6,
      profileImage: require('../../assets/images/default_profile.png'),

    },
    {
      firstName:'Nino',
      id:7,
      profileImage: require('../../assets/images/default_profile.png'),

    },
    {
      firstName:'Johny',
      id:8,
      profileImage: require('../../assets/images/default_profile.png'),

    },
    {
      firstName:'Adam',
      id:9,
      profileImage: require('../../assets/images/default_profile.png'),

    },
  ];
  const userPosts = [ 
    { 
      firstName: 'Allison',
      lastName: 'Becker', 
      location: 'Boston, MA',
      likes:1201, 
      comments:24,
      bookmarks:55,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id:1 ,
    },
    { 
      firstName: 'jennifer',
      lastName: 'wilkson', 
      location: 'worcester, MA',
      likes:1501, 
      comments:44,
      bookmarks:85 , 
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id:2 ,
    },
    { 
      firstName: 'adam',
      lastName: 'spera', 
      location: 'worcester, MA',
      likes:1666, 
      comments:99,
      bookmarks:65 , 
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id:3 ,
    },
    { 
      firstName: 'nata',
      lastName: 'vache', 
      location: 'new york, MA',
      likes:250, 
      comments:19,
      bookmarks:32 , 
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id:4 ,
    },
    { 
      firstName: 'nicolas',
      lastName: 'namoradze', 
      location: 'berlin, germany',
      likes:798, 
      comments:79,
      bookmarks:45 , 
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id:5 ,
    },
    
  ]
  const userStoriesPageSize = 4; 
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderData, SetUserStoriesRenderData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false)



  // const userPostPageSize = 2; 
  // const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  // const [userPostRenderData, SetUserPostRenderData] = useState([]);
  // const [isLoadingUserPost, setIsLoadingUserPost] = useState(false)

const pagination = (database, currentPage, pageSize) => { 
  const startIndex = (currentPage - 1 ) * pageSize;
  const endIndex = startIndex + pageSize; 
  if (startIndex >= database.length ) { 
      return [];
  }
  return database.slice(startIndex ,endIndex);
}

useEffect(()=> { 
  setIsLoadingUserStories(true);
  const getInitialData = pagination(userStories, userStoriesCurrentPage, userStoriesPageSize);
  SetUserStoriesRenderData(getInitialData);
  setIsLoadingUserStories(false)
},[])



  return (
    
    <SafeAreaView style={globalStyle.backgroundWhite}  >
     <StatusBar backgroundColor={'blue'} />
      <View>
        <FlatList 
        ListHeaderComponent={<>
         <View style={style.header}>
      <Title title={'Let’s Explore sszz '} />
        <TouchableOpacity style={style.messageIcon} 
        onPress={() =>{navigation.navigate(Routes.Profile)}
         } 
         >
          <FontAwesome name={'envelope'} color={'#898DAE'} size={20}/>
          <View style={style.messageNumberContainer} >
            <Text style={style.messageNumber}>2</Text>
          </View> 
        </TouchableOpacity>
      </View>
      <View style={style.userStoryContainer}>
        <FlatList 
        onEndReachedThreshold={0.5}
        onEndReached={() => { 
          console.log('you have reached the end')
          if (isLoadingUserStories) {
            return;
          }
          setIsLoadingUserStories(true)
          const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1 , userStoriesPageSize
          );
          if (contentToAppend.length > 0) {
            setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
            SetUserStoriesRenderData(prev => [...prev, ...contentToAppend])
          }
          setIsLoadingUserStories(false)
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={userStoriesRenderData} 
        renderItem={({item}) =>
         <UserStory 
        firstName={item.firstName} 
        profileImage={item.profileImage} /> }/> 
      </View>
        </>}
        data={userPosts} 
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
        <View style={style.userPostContainer} >
        <UserPost
        firstName={item.firstName}
        lastName={item.lastName}
        image={item.image}
        likes={item.likes}
        comments={item.comments}
        bookmarks={item.bookmarks}
        profileImage={item.profileImage}
        location={item.location}
        // userData={item}
          />
        </View>
         )}
        />
      </View>
    </SafeAreaView>
    
    
  );
};

export default Home ;


