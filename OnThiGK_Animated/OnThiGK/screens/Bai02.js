import { View, Text, TouchableOpacity, Animated, Easing, PanResponder } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Bai02 = () => {

    const [animated, setAnimated] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

    const handleAnimated = () => {
        Animated.timing(
            animated,
            {
                toValue: { x: 110, y: 0 },
                duration: 3000,
                useNativeDriver: true,
                easing: Easing.linear
            }
        ).start()
    }
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                { dx: pan.x, dy: pan.y }

            ]),

            onPanResponderRelease: () => {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                }).start();
            }
        })
    ).current;



    const stopAnimated = () => {
        animated.stopAnimation();

    }

    const reasetAnimated = () => {
        animated.setValue({ x: 0, y: 0 })
    }
    return (
        <View style={{ width: '100%', height: '100%', borderWidth: 1, flex: 1, justifyContent: 'center', alignItems: 'center' }}>


            <Animated.View style={{ width: 100, height: 100, backgroundColor: "red", transform: [{ translateX: animated.x, translateY: animated.y }] }}  {...panResponder.panHandlers}></Animated.View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>



                <TouchableOpacity onPress={handleAnimated}>
                    <Text style={{
                        fontSize: 20,
                        color: 'blue',
                        textDecorationLine: 'underline',
                        marginVertical: 5,
                    }}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={stopAnimated}>
                    <Animated.Text style={{
                        fontSize: 20,
                        color: 'blue',
                        textDecorationLine: 'underline',
                        marginVertical: 5,
                    }}>Stop</Animated.Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={reasetAnimated}>
                    <Text style={{
                        fontSize: 20,
                        color: 'blue',
                        textDecorationLine: 'underline',
                        marginVertical: 5,
                    }}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Bai02