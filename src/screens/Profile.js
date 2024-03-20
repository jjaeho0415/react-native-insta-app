import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = () => {
  let circles = [];
  let numberOfCircles = 10;

  for (let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}
          />
        )}
      </View>,
    );
  }

  return (
    <SafeAreaView style={{width: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="jun"
          accountName="Jun"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="300"
          following="35"
          post="458"
        />
      </View>
      <ProfileButton
        id={0}
        name="jun"
        accountName="Jun"
        profileImage={require('../../assets/images/userProfile.jpeg')}
      />

      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{fontSize: 40, color: 'black'}}>
          {circles}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
