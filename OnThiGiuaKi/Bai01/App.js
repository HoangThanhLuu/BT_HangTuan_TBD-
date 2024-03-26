// import React, { useEffect, useRef } from "react";
// import { View, Text, Animated } from "react-native";

// const App = () => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true
//       }
//     ).start(); // Bắt đầu animation
//   }, []);

//   return (
//     <View
//       style={{
//         flex: 1,
//         width: "100%",
//         height: "100%",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <Text style={{ fontSize: 20 }}>Hello World</Text>
//       </Animated.View>
//     </View>
//   );
// };

// export default App;


///bài 02
// import React, { useState, useRef } from "react";
// import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";


// const App = () => {
//   const [animated, setAnimated] = useState(new Animated.ValueXY({ x: 0, y: 0 }))
//   // const animatedValueRef = useRef({x:0,y:0})

//   const startAnimated = () => {
//     Animated.timing(
//       animated,
//       {
//         toValue: { x: 300, y: 0 },
//         duration: 2000,
//         useNativeDriver: true

//       }
//     ).start();
//   }
//   const stopAnimated = () => {
//     animated.stopAnimation();
//   }
//   const reasetAnimated = () => {
//     animated.setValue({ x: 0, y: 0 });
//   }


//   return (

//     <View style={styles.container}>
//       <Animated.View style={[styles.shape, { transform: [{ translateX: animated.x, translateY: animated.y }] }]} />
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={startAnimated}>
//           <Animated.Text>Start</Animated.Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={stopAnimated} >
//           <Animated.Text>Stop</Animated.Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={reasetAnimated} >
//           <Animated.Text>Restart</Animated.Text>
//         </TouchableOpacity>
//       </View>
//     </View>


//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   shape: {
//     width: 100,
//     height: 100,
//     backgroundColor: "red",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//     margin: 5,
//   },
// });
// export default App



//Bài 03 --------
// import { View, Text, Animated } from 'react-native'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [colorAnimated] = useState(new Animated.Value(0));

//   const changeColor = () => {
//     Animated.timing(
//       colorAnimated,
//       {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true

//       }
//     ).start();
//   }
//   useEffect(() => {
//     changeColor();//gọi lại hàm sau lược render đầu tiên
//   })
//   //cho phép ánh xạ đầu vào và đầu ra(chỉ nhận một đối tượng)
//   const color = colorAnimated.interpolate(
//     {
//       inputRange: [0, 1],
//       outputRange: ["black", "orange"]

//     }
//   );

//   return (
//     <View>
//       <Animated.Text style={{ color: color, fontSize: 25, fontWeight: '600' }}>Doi Mau</Animated.Text>
//     </View>
//   )
// }

// export default App

//câu 4:
// import React, { useEffect, useRef } from 'react';
// import { View, Text, Image, StyleSheet, Animated } from 'react-native';

// const App = () => {
//   const shipperPosition = useRef(new Animated.Value(-100)).current;
//   const textScale = useRef(new Animated.Value(1)).current;
//   const foodSize = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(
//         shipperPosition,
//         {
//           toValue: 400,
//           duration: 2000,
//           useNativeDriver: true,
//           delay: 500
//         }
//       )
//     ).start();

//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(
//           textScale,
//           {
//             toValue: 1.2,
//             duration: 1000,
//             useNativeDriver: true
//           }
//         ),
//         Animated.timing(
//           textScale,
//           {
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: true
//           }
//         )
//       ])
//     ).start();

//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(
//           foodSize,
//           {
//             toValue: 1,
//             duration: 2000,
//             useNativeDriver: true
//           }
//         ),
//         Animated.timing(
//           foodSize,
//           {
//             toValue: 0,
//             duration: 2000,
//             useNativeDriver: true
//           }
//         )
//       ])
//     ).start();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.Image
//         source={require('./assets/adaptive-icon.png')}
//         style={[styles.shipper, { transform: [{ translateX: shipperPosition }] }]}
//       />
//       <Animated.Text style={[styles.text, { transform: [{ scale: textScale }] }]}>Shopee cái gì cũng có...</Animated.Text>
//       <View style={styles.foodContainer}>
//         <Animated.Image
//           source={require('./assets/favicon.png')}
//           style={[styles.food, { transform: [{ scale: foodSize }] }]}
//         />
//         <Animated.Image
//           source={require('./assets/icon.png')}
//           style={[styles.food, { transform: [{ scale: foodSize }] }]}
//         />
//         <Animated.Image
//           source={require('./assets/splash.png')}
//           style={[styles.food, { transform: [{ scale: foodSize }] }]}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   shipper: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   foodContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '70%',
//   },
//   food: {
//     width: 80,
//     height: 80,
//   },
// });

// export default App;


import { View, Text } from 'react-native'
import React from 'react'
import Bai05 from './Bai05'
import Bai04 from './Bai04'

const App = () => {
  return (
    <View style={{ width: "100%", height: '100%' }}>
      {/* <Bai05 /> */}
      <Bai04 />
    </View>
  )
}

export default App