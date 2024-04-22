import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Card, Header, Image} from 'react-native-elements';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";


export default function App() {

    const [categories, setCategories] = React.useState([
        {id: 1, name: "Business", image: require("./images/Button 17.png")},
        {id: 2, name: "Code", image: require("./images/Button 18.png")},
        {id: 3, name: "Design", image: require("./images/Button 19.png")},
        {id: 4, name: "Writing", image: require("./images/Button 20.png")},
        {id: 5, name: "Movie", image: require("./images/Button 21.png")},
        {id: 6, name: "Language", image: require("./images/Button 22.png")},
    ])

    const [courses, setCourses] = React.useState([
        {
            id: 1,
            name: "PHP in on click",
            image: require("./images/Image 19.png"),
            price: 20,
            rate: 4.5,
            lession: 10,
            subribers: 1000,
        },
        {
            id: 2,
            name: "Python introduction",
            image: require("./images/Image 20.png"),
            price: 20,
            rate: 4.5,
            lession: 10,
            subribers: 1000,
        },
    ])

    const [recomends, serRecomends] = React.useState([
        {
            id: 1,
            name: "Website design",
            image: require("./images/Image 18.png"),
            price: 20,
            rate: 4.5,
            lession: 10,
            subribers: 1000,
        },
        {
            id: 2,
            name: "UX Research",
            image: require("./images/Image 22.png"),
            price: 20,
            rate: 4.5,
            lession: 10,
            subribers: 1000,
        },
    ])

    const [inspries, setinspries] = React.useState([
        {
            id: 1,
            name: "Digital Marketing",
            image: require("./images/Image 24.png"),
            price: 20,
            rate: 4.5,
            lession: 10,
            subribers: 1000,
        },
        {
            id: 2,
            name: "workspace design",
            image: require("./images/Image 23.png"),
            price: 20,
            rate: 4.5,
            lession: 10,
            subribers: 1000,
        },
    ])

    const renderHeader = () => {
        return (
            <View
                style={{
                    width: "100%",
                    height: 100,
                    backgroundColor: "#3498db",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 15,
                }}
            >
                <View style={{width: 220}}>
                    <Text style={{color: "white", fontSize: 26, fontWeight: 'bold'}}>Hello, Roise!</Text>
                    <Text style={{color: "white", fontSize: 16}}>What do you want learn today?</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 60,
                    alignItems: "center",
                    marginTop: 15
                }}>
                    <MaterialIcons name='local-grocery-store' color={"white"} size={25}/>
                    <FontAwesome5Icon name='bell' color={"white"} size={25}/>
                </View>
            </View>
        )
    }

    const renderImage = () => {
        return (
            <View
                style={{
                    padding: 15,
                }}
            >
                <Image
                    source={{uri: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
                    style={{
                        width: "100%",
                        height: 200,
                        borderRadius: 10,
                    }}
                />
            </View>
        )
    }

    const renderCategories = () => {
        return (
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                }}
            >
                {
                    categories.map((category, index) => {
                        return (
                            <View
                                key={category.id}
                                style={{
                                    margin: 5,
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    marginTop: 10,
                                    flexDirection: "row",
                                    borderWidth: 1,
                                    borderColor: "gray",
                                    padding: 10,
                                    borderRadius: 10,
                                    width: 180,
                                }}>
                                <Image source={category.image} style={{width: 40, height: 40}}/>
                                <Text style={{fontSize: 16, fontWeight: "600", marginLeft: 15}}>{category.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }

    const renderRecomend = () => {
        return (
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 15,
                        marginTop: 10,

                    }}
                >
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>Recomended for you</Text>
                    <Text style={{fontSize: 16, color: "gray"}}>View more</Text>
                </View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={recomends}
                    renderItem={({item}) => {
                        return (
                            <Card>
                                <Image source={item.image} style={{width: 200, height: 150, borderRadius: 10}}/>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: 15,
                                    }}
                                >
                                    <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.name}</Text>
                                    <Feather name={"bookmark"} size={25}/>
                                </View>
                                <Text style={{fontSize: 16, color: "gray"}}>Ramono Wultschner</Text>
                                <Text style={{fontSize: 16, color: "#9b59b6", fontWeight: "bold"}}>${item.rate}</Text>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginTop: 5,
                                    alignItems: "center"
                                }}>
                                    <View style={{flexDirection: "row"}}>
                                        <FontAwesome name="star" color="orange" size={16}/>
                                        <Text style={{marginLeft: 5}}>{item.rate}</Text>
                                        <Text style={{marginLeft: 5}}>({item.subribers})</Text>
                                    </View>
                                    <Text>{item.price} lession</Text>
                                </View>
                            </Card>
                        )
                    }}
                />
            </View>
        )
    }

    const renderCourses = () => {
        return (
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 15,
                        marginTop: 10,

                    }}
                >
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>Popular course</Text>
                    <Text style={{fontSize: 16, color: "gray"}}>View more</Text>
                </View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={courses}
                    renderItem={({item}) => {
                        return (
                            <Card>
                                <Image source={item.image} style={{width: 200, height: 150, borderRadius: 10}}/>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: 15,
                                    }}
                                >
                                    <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.name}</Text>
                                    <Feather name={"bookmark"} size={25}/>
                                </View>
                                <Text style={{fontSize: 16, color: "gray"}}>Ramono Wultschner</Text>
                                <Text style={{fontSize: 16, color: "#9b59b6", fontWeight: "bold"}}>${item.rate}</Text>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginTop: 5,
                                    alignItems: "center"
                                }}>
                                    <View style={{flexDirection: "row"}}>
                                        <FontAwesome name="star" color="orange" size={16}/>
                                        <Text style={{marginLeft: 5}}>{item.rate}</Text>
                                        <Text style={{marginLeft: 5}}>({item.subribers})</Text>
                                    </View>
                                    <Text>{item.price} lession</Text>
                                </View>
                            </Card>
                        )
                    }}
                />
            </View>
        )
    }

    const renderInspires = () => {
        return (
            <>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 15,
                        marginTop: 10,

                    }}
                >
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>Popular course</Text>
                    <Text style={{fontSize: 16, color: "gray"}}>View more</Text>
                </View>
                <FlatList
                    contentContainerStyle={{
                        marginTop: 10,
                        paddingHorizontal: 15,
                        height: 330
                    }}
                    data={inspries}
                    renderItem={({item}) => {
                        return (
                            <View style={{
                                width: "100%",
                                height: 150,
                                borderWidth: 1,
                                padding: 15,
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 15,
                                borderRadius: 10,
                                borderColor: "gray",
                            }}>
                                <Image source={item.image} style={{width: 120, height: 120}}/>
                                <View
                                    style={{
                                        marginLeft: 15,
                                        justifyContent: "space-between",
                                        // borderWidth: 1,
                                        width: 220,
                                        height: "100%"
                                    }}
                                >
                                    <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.name}</Text>
                                    <Text style={{fontSize: 16, color: "gray"}}>Ramono Wultschner</Text>
                                    <Text style={{fontSize: 16, color: "#9b59b6", fontWeight: "bold"}}>${item.rate}</Text>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        marginTop: 5,
                                        alignItems: "center"
                                    }}>
                                        <View style={{flexDirection: "row"}}>
                                            <FontAwesome name="star" color="orange" size={16}/>
                                            <Text style={{marginLeft: 5}}>{item.rate}</Text>
                                            <Text style={{marginLeft: 5}}>({item.subribers})</Text>
                                        </View>
                                        <Text>{item.price} lession</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    }/>
            </>

        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {renderHeader()}
                {renderImage()}
                {renderCategories()}
                {renderCourses()}
                {renderRecomend()}
                {renderInspires()}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
