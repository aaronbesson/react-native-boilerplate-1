import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { Hamburger, Settings } from '../components/icons';
import Colors from '../styles/Colors';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="user-circle" size={25} color={tintColor} />
    ),
    headerStyle: {
      backgroundColor: Colors.PINK_100,
    },
    headerTitle: 'Profile',
    headerTitleStyle: {
      color: Colors.WHITE,
    },
    headerLeft: <Hamburger onPress={() => navigation.navigate('DrawerOpen')} />,
    headerRight: <Settings onPress={() => navigation.navigate('Settings')} />,
  })

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: Colors.WHITE,
  },
});

export default ProfileScreen;
