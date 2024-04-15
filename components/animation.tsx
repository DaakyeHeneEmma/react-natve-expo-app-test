import React, { useState, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const LoadingOverlay = () => {
  const [spinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={styles.overlay}>
      <Animated.View style={[styles.circle, { transform: [{ rotate }] }]}>
        {/* You can place an icon or element here to be animated */}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 50, // Adjust top position as needed
    left: '50%', // Center horizontally
    marginLeft: -25, // Center based on circle size (adjust if size changes)
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent background (optional)
    padding: 10, // Add padding around the circle
    borderRadius: 5, // Rounded corners for aesthetics
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 50 / 2,
  },
});

export default LoadingOverlay;
