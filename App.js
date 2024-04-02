import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity,Animated } from 'react-native';

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  const opacity = useState(new Animated.Value(1))[0];
  const scale = useState(new Animated.Value(1))[0];

  const handlePressIn = () => {
    setIsHovered(true);
    animate(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
    animate(false);
  };

  const animate = (isHovered) => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: isHovered ? 0.5 : 1,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.spring(scale, {
        toValue: isHovered ? 1.1 : 1,
        friction: 4,
        tension: 30,
        useNativeDriver: true
      })
    ]).start();
  };
  const handlePress = () => {
    alert('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.heading}>REACT NATIVE</Text>
        <Text>We are happy to learn how to use React Native in expo-cli</Text>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={1} // This disables the default opacity effect
        >
          <Image
            source={require("./assets/pexels-clint.jpg")}
            style={[
              styles.image,
              isHovered && styles.hoveredImage // Apply hover styles when isHovered is true
            ]}
          />
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttext}>Press Me</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:4,
    padding:3
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginLeft:50
    
  },
  hoveredImage: {
    // Add hover styles here
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    transform: [{ translateX: 20 }, { translateY: -20 }],
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    textAlign:"center",
    
  },
  buttext:{
    textAlign:"center",
    color:"#fff"
  },
  heading:{
    textAlign:"center",
    marginBottom:3,
    color:"blue",
    fontSize:20,
    fontWeight:"900"

  }
});
