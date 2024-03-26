import { View, Text, Image, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";

const Bai05 = () => {
    const imageShiper = useRef(new Animated.Value(-100)).current;
    const textScale = useRef(new Animated.Value(0)).current;
    const textColor = useRef(new Animated.Value(0)).current;
    const imageMiTom = useRef(new Animated.Value(0)).current;

    //animated image
    useEffect(() => {
        Animated.loop(
            //để thực hiện các animation theo thứ tự tuần tự:
            Animated.sequence([
                Animated.timing(imageShiper, {
                    toValue: 900,
                    duration: 5000,
                    useNativeDriver: true,
                    //di chuyển đều đặn tịnh tuyến
                    easing: Easing.linear,
                }),
                Animated.timing(imageShiper, {
                    toValue: -100,
                    duration: 5000,
                    useNativeDriver: true,
                    easing: Easing.cubic,
                }),
            ])
        ).start();
    }, []);

    //text và color
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                //để thực hiện các animated tuần tự
                Animated.parallel([
                    //cho phép sử dụng nhiều animated cùng lúc
                    Animated.timing(textScale, {
                        toValue: 1,
                        duration: 3000,
                        useNativeDriver: true,
                        easing: Easing.linear,
                    }),
                    Animated.timing(textColor, {
                        toValue: 1,
                        duration: 3000,
                        useNativeDriver: true,
                        easing: Easing.linear,
                    }),
                ]),
                Animated.parallel([
                    //cho phép sử dụng nhiều animated cùng lúc
                    Animated.timing(textScale, {
                        toValue: 0,
                        duration: 3000,
                        useNativeDriver: true,
                        easing: Easing.linear,
                    }),
                    Animated.timing(textColor, {
                        toValue: 0,
                        duration: 3000,
                        useNativeDriver: true,
                        easing: Easing.linear,
                    }),
                ]),
            ])
        ).start();
    }, []);
    //hình ảnh tỏ lên
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    imageMiTom,
                    {
                        toValue: 1,
                        duration: 2000,
                        useNativeDriver: true,
                        easing: Easing.ease
                    },

                ),
                Animated.timing(
                    imageMiTom,
                    {
                        toValue: 0,
                        duration: 2000,
                        useNativeDriver: true,
                        easing: Easing.ease
                    }
                )
            ])).start();
    }, []);
    return (
        <View
            style={{
                flex: 1,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* shiper khi chạy trên trục x thì không cần đầu vào và đầu ra interpolate */}
            <Animated.Image
                source={require("./assets/shipper.jpg")}
                style={[
                    { width: 100, height: 100, transform: [{ translateX: imageShiper }] },
                ]}
            />

            <Animated.Text
                style={{
                    transform: [{ scale: textScale }],
                    color: textColor.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["red", "yellow"],
                    }),
                }}
            >
                Phóng To Nhỏ
            </Animated.Text>

            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <Animated.Image source={require("./assets/icon.png")} style={{ width: 100, height: 100, transform: [{ scale: imageMiTom }] }} />
                <Animated.Image source={require("./assets/icon.png")} style={{ width: 100, height: 100, transform: [{ scale: imageMiTom }] }} />

                <Animated.Image source={require("./assets/icon.png")} style={{ width: 100, height: 100, transform: [{ scale: imageMiTom }] }} />


            </View>
        </View>
    );
};

export default Bai05;
