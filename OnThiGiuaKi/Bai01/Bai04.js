import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const Bai04 = () => {
    const animation = useRef(new Animated.Value(0)).current;

    // useEffect(() => {
    //     const animateBalls = () => {
    //         Animated.timing(animation, {
    //             toValue: 1,
    //             duration: 2000,
    //             useNativeDriver: true,
    //         }).start(({ finished }) => {//finished nếu hoàn thành thì true và nếu không hoàn thành thì false 
    //             console.log(finished);
    //             if (finished) {//hoàn thành
    //                 animation.setValue(0);//set cái animation về 0 và gọi animateBalls lại để thực hiện chạy liên tục
    //                 animateBalls();
    //             }
    //         });
    //     };

    //     animateBalls();//đảm bảo rằng khi component hoạt động cái animated sẽ bắt đầu ngay

    //     return () => {//unmout để đỡ tốn dữ liệu
    //         animation.stopAnimation();
    //     };
    // }, []);




    useEffect(() => {
        const animatBalls = () => {
            Animated.timing(
                animation,
                {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                    easing: Easing.linear
                }
            ).start(({ finished }) => {
                if (finished) {
                    animation.setValue(0)
                    animatBalls()
                }
            })

        }
        animatBalls()

    })

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.ball,
                    {
                        transform: [
                            {
                                translateY: animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [400, -100],
                                }),
                            },
                        ],
                        opacity: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0],
                        }),
                    },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ball: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'blue',
    },
});

export default Bai04;
