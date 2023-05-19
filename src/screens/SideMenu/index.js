import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {Title, Drawer} from 'react-native-paper';

export default function SideMenu(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{width: '100%', height: 100, marginTop: 20}}>
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Sambaza Cashless</Title>
              </View>
            </View>
          </View>

          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={require('../../../assets/home.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    tintColor: 'black',
                    height: 25,
                  }}
                />
              )}
              onPress={() => props.navigation.navigate('Home')}
              labelStyle={{
                color: 'black',
                fontSize: 14,
                left: -20,
                fontFamily: 'MontserratAlternates-Medium',
              }}
              label="Home"
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={require('../../../assets/profile.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    tintColor: 'black',
                    height: 25,
                  }}
                />
              )}
              labelStyle={{
                color: 'black',
                fontSize: 14,
                left: -20,
                fontFamily: 'MontserratAlternates-Medium',
              }}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('ProfileScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={require('../../../assets/settings.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    tintColor: 'black',
                    height: 25,
                  }}
                />
              )}
              labelStyle={{
                color: 'black',
                fontSize: 14,
                left: -20,
                fontFamily: 'MontserratAlternates-Medium',
              }}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={require('../../../assets/info.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    tintColor: 'black',
                    height: 25,
                  }}
                />
              )}
              labelStyle={{
                color: 'black',
                fontSize: 14,
                left: -20,
                fontFamily: 'MontserratAlternates-Medium',
              }}
              label="About"
              onPress={() => {
                props.navigation.navigate('About');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#282828',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'MontserratAlternates-Medium',

    fontSize: 14,
  },
  imgIn: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textIn: {
    paddingLeft: 6,
    marginTop: 40,
  },
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  dates: {},

  saveBtn: {
    marginTop: 20,
    width: 100,
  },
  descr: {
    marginTop: 40,

    borderRadius: 50,
  },

  header: {
    height: 50,
    backgroundColor: 'gray',
  },
  common: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: 'rgba(0,0,0,0.012)',
  },
});
