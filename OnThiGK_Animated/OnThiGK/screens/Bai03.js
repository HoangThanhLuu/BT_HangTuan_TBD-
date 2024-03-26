import { View, Text, Animated, Easing, TouchableOpacity, Input, TextInput } from 'react-native'
import React, { useEffect, useRef } from 'react'
///quả chuông lắc,Hình tròn tự xoay vòng liên tục
//Dòng text đổi màu từ Green đến Red, lặp đi lặp lại liên tục.

const Bai03 = () => {
    const bellAnimated = useRef(new Animated.Value(0)).current;
    const circleAnimated = useRef(new Animated.Value(0)).current;
    const textAnimated = useRef(new Animated.Value(0)).current;

    const loginAnimated = useRef(new Animated.Value(0)).current;
    const passWordAnimated = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        // Lặp lại animation lắc của quả chuông
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    bellAnimated,
                    {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }
                ),
                Animated.timing(
                    bellAnimated,
                    {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }
                )
            ])
        ).start();



        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    circleAnimated,
                    {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                        easing: Easing.linear

                    }
                ),
                Animated.timing(
                    circleAnimated,
                    {
                        toValue: 0,
                        duration: 2,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }
                )


            ])
        ).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    textAnimated,
                    {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                        easing: Easing.linear

                    }
                ),
                Animated.timing(
                    circleAnimated,
                    {
                        toValue: 0,
                        duration: 2,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }
                )


            ])
        ).start();
    }, []);


    const handleShowButtonPress = () => {
        Animated.timing(
            loginAnimated,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.linear

            }
        ).start();

        Animated.timing(
            passWordAnimated,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.linear

            }
        ).start();


    }

    const handleCancelButtonPress = () => {
        Animated.timing(
            loginAnimated,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.linear

            }
        ).start();

        Animated.timing(
            passWordAnimated,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.linear

            }
        ).start();
    }
    return (
        <View>
            {/* Hình ảnh của quả chuông */}
            <Animated.Image
                source={require('../assets/icon.png')}
                style={{ width: 100, height: 100, transform: [{ translateX: bellAnimated.interpolate({ inputRange: [0, 1], outputRange: [-10, 10] }) }] }}
            />

            {/* Hình ảnh của quả chuông */}
            <Animated.View
                style={{ width: 100, height: 100, backgroundColor: 'red', transform: [{ rotate: circleAnimated.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] }) }] }}
            />

            <Animated.Text style={{ fontSize: 20, fontWeight: '700', color: textAnimated.interpolate({ inputRange: [0, 1], outputRange: ["green", "red"] }) }}>Doi Mau</Animated.Text>



            <Animated.View style={{ width: 200, height: 20, borderWidth: 1, opacity: loginAnimated }}>
                <TextInput placeholder='Login' style={{ flex: 1 }} />
            </Animated.View>

            <Animated.View style={{ width: 200, height: 20, borderWidth: 1, opacity: passWordAnimated }}>
                <TextInput placeholder='password' style={{ flex: 1 }} />
            </Animated.View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>



                <TouchableOpacity onPress={handleShowButtonPress}>
                    <Text style={{
                        fontSize: 20,
                        color: 'blue',
                        textDecorationLine: 'underline',
                        marginVertical: 5,
                    }}>Show</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                        fontSize: 20,
                        color: 'blue',
                        textDecorationLine: 'underline',
                        marginVertical: 5,
                    }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancelButtonPress}>
                    <Text style={{
                        fontSize: 20,
                        color: 'blue',
                        textDecorationLine: 'underline',
                        marginVertical: 5,
                    }}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Bai03;
