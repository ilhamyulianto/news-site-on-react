import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';
import Swiper from 'react-native-swiper';

class Homepage extends Component {
  navigateToListArticle = () => {
    this.props.navigation.navigate('Article');
  };

  renderProfileSection() {
    const fullName = "Ilham Yulianto";
    const nim = "1203210058";
    const prodi = "Informatika - 2021"

    return (
      <View style={{ alignItems: 'center', marginTop: 150 }}>
        <Image source={require('../assets/profile.jpg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 200 / 2,
            borderWidth: 1,
            borderColor: '#FFFFFF',
            position: 'absolute',
            zIndex: 4
          }}
        />
        <View style={{ marginTop: 100 }}>
          <Text style={styles.nama}>{fullName}</Text>
          <Text style={styles.desc}>{nim}</Text>
          <Text style={styles.desc}>{prodi}</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:300 }}>
            <Image source={require('../assets/logoif.png')}
              style={{
                resizeMode: 'contain',
                width: 100,
                height: 50,
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  renderContactSection() {
    const address = "Kapas Madya, Surabaya";
    const kampus = "Tel-U Surabaya Campus";

    return (
      <View style={{ marginLeft: 75, marginTop: 300 }}>
        <View style={styles.Listsosmed}>
          <View style={styles.iconstyles}>
            <Icon name="whatsapp" size={25} color="#212121" />
          </View>
          <View style={styles.content}>
            <Text style={styles.keterangan}>+62-812-3199-9428</Text>
          </View>
        </View>
        <View style={styles.Listsosmed}>
          <View style={styles.iconstyles}>
            <Icon name="home" size={25} color="#212121" />
          </View>
          <View style={styles.content}>
            <Text style={styles.keterangan}>{address}</Text>
          </View>
        </View>
        <View style={styles.Listsosmed}>
          <View style={styles.iconstyles}>
            <Icon name="user-graduate" size={25} color="#212121" />
          </View>
          <View style={styles.content}>
            <Text style={styles.keterangan}>{kampus}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderSocialMediaSection() {
    return (
      <View style={{ flexDirection: 'row', marginTop: 400, marginHorizontal: 30 }}>
        <TouchableOpacity
          style={styles.betweenicons}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/ilham-yulianto-100234234/')}>
          <Icon name="linkedin" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.betweenicons}
          onPress={() => Linking.openURL('https://www.instagram.com/iy.lham/')}
        >
          <Icon name="instagram" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.betweenicons}
          onPress={() => Linking.openURL('https://github.com/ilhamyulianto')}
        >
          <Icon name="github" size={25} color="black" />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style='auto' />

        <Swiper loop={false} showsPagination={false}>
          {/* Section 1: Profile */}
          <ImageBackground
            source={require('../assets/newspaper.jpg')}
            style={{ flex: 1 }}
            resizeMode={'cover'}
          >
            {this.renderProfileSection()}
          </ImageBackground>

          {/* Section 2: Contact */}
          <ImageBackground
            source={require('../assets/newspaper.jpg')}
            style={{ flex: 1 }}
            resizeMode={'cover'}
          >
            {this.renderContactSection()}
          </ImageBackground>

          {/* Section 3: Social Media */}
          <ImageBackground
            source={require('../assets/newspaper.jpg')}
            style={{ flex: 1 }}
            resizeMode={'cover'}
          >
            {this.renderSocialMediaSection()}
          </ImageBackground>
        </Swiper>

        {/* Custom Floating Button */}
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={this.navigateToListArticle}
        >
          <Text style={styles.floatingButtonText}>List Article</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nama: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
  },
  Listsosmed: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  keterangan: {
    fontWeight: 'bold',
  },
  content: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
  },
  iconstyles: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  betweenicons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignSelf: 'center',
  },
  floatingButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Homepage;
