import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Ball = ({ delay }) => {
    const position = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(position, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                    delay: delay // Độ trễ của animation
                }),
                Animated.timing(position, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true,
                })
            ])
        ).start();
    }, []);

    return (
        <Animated.View style={[styles.ball, { transform: [{ translateY: position.interpolate({ inputRange: [0, 1], outputRange: [400, 0] }) }] }]} >
            <Text>sdf</Text>
        </Animated.View>
    );
};

export default Ball