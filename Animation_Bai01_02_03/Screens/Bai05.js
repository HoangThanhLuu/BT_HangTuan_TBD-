import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';

const Bai05 = () => {
    const [shipperAnimation] = useState(new Animated.Value(-100));
    const [textAnimation] = useState(new Animated.Value(-100));
    const [foodAnimations] = useState([
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0)
    ]);

    useEffect(() => {
        startAnimations();
    }, []);

    const startAnimations = () => {
        // Shipper animation
        Animated.loop(
            Animated.timing(shipperAnimation, {
                toValue: 400,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ).start();

        // Text animation
        Animated.loop(
            Animated.sequence([
                Animated.timing(textAnimation, {
                    toValue: -4,
                    duration: 1000,
                    useNativeDriver: false
                }),
                Animated.timing(textAnimation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false
                })
            ])
        ).start();

        // Food animations
        foodAnimations.forEach((foodAnimation, index) => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(foodAnimation, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: false
                    }),
                    Animated.timing(foodAnimation, {
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: false
                    })
                ])
            ).start();
        });
    };

    const interpolateText = textAnimation.interpolate({
        inputRange: [1, 1.2],
        outputRange: ['black', 'red']
    });

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../assets/shipper.jpg')}
                style={[styles.shipper, { left: shipperAnimation }]}
            />
            <Text style={[styles.text, { color: interpolateText }]}>Shopee cái gì cũng có...</Text>
            <View style={styles.foodContainer}>
                <Animated.Image
                    source={require('../assets/icon.png')}
                    style={[styles.food, styles.miTom, { transform: [{ scale: foodAnimations[0] }] }]}
                />
                <Animated.Image
                    source={require('../assets/favicon.png')}
                    style={[styles.food, styles.coca, { transform: [{ scale: foodAnimations[1] }] }]}
                />
                <Animated.Image
                    source={require('../assets/adaptive-icon.png')}
                    style={[styles.food, styles.banh, { transform: [{ scale: foodAnimations[2] }] }]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shipper: {
        position: 'absolute',
        bottom: 50,
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    foodContainer: {
        flexDirection: 'row',
    },
    food: {
        width: 100,
        height: 100,
        marginHorizontal: 10,
    },
    miTom: {
        tintColor: 'blue',
    },
    coca: {
        tintColor: 'brown',
    },
    banh: {
        tintColor: 'green',
    },
});

export default Bai05;
