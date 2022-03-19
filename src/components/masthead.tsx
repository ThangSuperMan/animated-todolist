import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const Masthead = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/masthead.png')}
      />
      <Text style={styles.text}>What's up, Thang!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 280,
    marginBottom: 12
  },
  image: {
    width: '100%',
    height: '100%'
  },
  text: {
    position: 'absolute',
    fontSize: 28,
    color: '#ffffff',
    bottom: 10,
    left: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  }
})

export default Masthead;
