import { View, Text, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Bai01 = () => {
    const textAnimated = useRef(new Animated.Value(0)).current;

    const text = () => {
        Animated.timing(
            textAnimated,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false
            }
        ).start();
    }

    useEffect(() => {
        text();
    })
    return (
        <View>
            <Animated.Text style={{ opacity: textAnimated }}>Làm Mờ</Animated.Text>

        </View>
    )
}

export default Bai01