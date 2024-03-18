import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');//lấy từ theo window

const Bai06 = () => {
    const [mouseAnimation] = useState(new Animated.Value(width));
    const [catAnimation] = useState(new Animated.Value(height));

    useEffect(() => {
        startAnimations();
    }, []);

    const startAnimations = () => {
        Animated.timing(mouseAnimation, {
            toValue: -100,
            duration: 5000,
            useNativeDriver: false,
        }).start();

        Animated.timing(catAnimation, {
            toValue: -100,
            duration: 6000,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../assets/chuot.jpg')}
                style={[styles.mouse, { left: mouseAnimation }]}
            />
            <Animated.Image
                source={require('../assets/meo.png')}
                style={[styles.cat, { bottom: catAnimation }]}
            />

            {/* <Image source={require('../assets/chuot.jpg')} style={[styles.mouse,]} />
            <Image source={require('../assets/meo.png')} style={[styles.cat,]} /> */}


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mouse: {
        width: 80,
        height: 50,
        position: 'absolute',
        top: height / 2 - 25,
        transform: [{ scaleX: 1 }]
    },
    cat: {
        width: 50,
        height: 100,
        position: 'absolute',
        backgroundColor: 'white'
        ,
        right: 20,
    },
});

export default Bai06;
