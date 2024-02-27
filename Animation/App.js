import React, { useState } from "react";
import { View, TouchableOpacity, Animated, Text } from "react-native";

const App = () => {
  const [animation] = useState(new Animated.Value(0)); // Initial value for opacity animation

  const handleButtonClick = () => {
    // Animation sequence
    Animated.sequence([
      //nó thực hiện nhận một chuỗi các hoạt ảnh hoặc hiệu

      Animated.timing(animation, {
        //được sử dụng để xác định chuỗi hoạt ảnh
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true, // Improves performance
      }),
    ]).start();
  };

  Animated.sequence([
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }),
  ]);

  const interpolatedColorAnimation = animation.interpolate({
    //tạo hiệu ứng thay đổi màu sắc
    inputRange: [0, 1],
    outputRange: ["rgba(255,255,255,1)", "rgba(255,0,0,1)"], // Example color change
  });

  const animatedStyle = {
    backgroundColor: interpolatedColorAnimation,
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View style={[{ padding: 10, borderRadius: 5 }, animatedStyle]}>
        <TouchableOpacity onPress={handleButtonClick}>
          <View style={{ padding: 10 }}>
            <Text>Click Me!</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default App;
