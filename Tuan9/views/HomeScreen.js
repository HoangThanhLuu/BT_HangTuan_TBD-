import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";

export default function Home() {
  const listdatapopular = [
    {
      id: 1,
      title: "PHP in One Click",
      author: "Ramono Wultschnes",
      image: require("../image/Image19.png"),
      price: 59,
      rating: 4.5,
      ratingCount: 1233,
      lessons: 18,
    },
    {
      id: 2,
      title: "Python Introduction",
      author: "Ramono Wultschnes",
      image: require("../image/Image20.png"),
      price: 39,
      rating: 4.5,
      ratingCount: 1267,
      lessons: 12,
    },
    {
      id: 3,
      title: "PHP in One Click",
      author: "Ramono Wultschnes",
      image: require("../image/Image19.png"),
      price: 59,
      rating: 4.5,
      ratingCount: 1233,
      lessons: 18,
    },
  ];

  const listdatarecomments = [
    {
      id: 1,
      title: "Website Design",
      author: "Ramono Wultschnes",
      image: require("../image/Image18.png"),
      price: 59,
      rating: 4.5,
      ratingCount: 1233,
      lessons: 9,
    },
    {
      id: 2,
      title: "UX Research For Beginners",
      author: "Ramono Wultschnes",
      image: require("../image/Image21.png"),
      price: 29,
      rating: 4.5,
      ratingCount: 1782,
      lessons: 12,
    },
    {
      id: 3,
      title: "Website Design",
      author: "Ramono Wultschnes",
      image: require("../image/Image18.png"),
      price: 59,
      rating: 4.5,
      ratingCount: 1233,
      lessons: 12,
    },
  ];

  const listdataTopTeacher = [
    {
      id: 1,
      teacher: "Christian Hayer",
      school: "Stanford University",
      image: require("../image/Image21.png"),
      rating: 4.5,
      ratingCount: 1233,
    },
    {
      id: 2,
      teacher: "Dennis Sweeney",
      school: "University of California",
      image: require("../image/Image25.png"),
      rating: 4.5,
      ratingCount: 1233,
    },{
      id: 3,
      teacher: "Christian Hayer",
      school: "Stanford University",
      image: require("../image/Image26.png"),
      rating: 4.5,
      ratingCount: 1233,
    },
  ];
  const listdataCourseInspires = [
    {
      id: 1,
      title: "Digital Portrait",
      author: "Ramono Wultschnes",
      image: require("../image/Image15.png"),
      price: 67,
      rating: 4.5,
      ratingCount: 657,
      lessons: 12,
    },
    {
      id: 2,
      title: "Workspace Decor",
      author: "Ruth Dominguez",
      image: require("../image/Image23.png"),
      price: 19,
      rating: 4.5,
      ratingCount: 33,
      lessons: 17,
    },
    {
      id: 3,
      title: "Packageing Design",
      author: "Hui. Anderson",
      image: require("../image/Image24.png"),
      price: 89,
      rating: 4.5,
      ratingCount: 1233,
      lessons: 14,
    },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{ backgroundColor: "#56f", height: 120, flexDirection: "row" }}
      >
        <View style={{ marginLeft: 30, marginTop: 10 }}>
          <Text style={{ fontSize: 22, color: "white", fontWeight: 800 }}>
            Hello , Rosie!
          </Text>
          <Text style={{ fontSize: 16, color: "white", fontWeight: 500 }}>
            What do you want to learn today?
          </Text>
        </View>

        <View
          style={{
            marginLeft: "auto",
            marginRight: 20,
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <AntDesign
            name="shoppingcart"
            size={26}
            color="white"
            style={{ marginRight: 10 }}
          />
          <FontAwesome5 name="bell" size={26} color="white" />
        </View>
      </SafeAreaView>

      <View style={{ alignItems: "center" }}>
        <ScrollView
          style={{ width: "90%" }}
          showsVerticalScrollIndicator={false}
        >
          {/* image  */}
          <View style={{ marginBottom: 5 }}>
            <Image
              source={require("../image/image1.png")}
              style={{ width: "100%", height: 200 }}
              resizeMode="contain"
            />
          </View>
          {/* View Category */}
          <View style={{}}>
            {/* content category */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Categories
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </TouchableOpacity>
            </View>
            {/* button category */}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "48%" }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button17.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Business
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button18.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Code
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button19.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Movie
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ width: "48%" }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button20.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Design
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button21.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Writing
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button22.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize:16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Language
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* View popular */}
          <View style={{ marginTop: 30 }}>
            {/* content popular */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Popular Courses
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </TouchableOpacity>
            </View>
            {/* items popular */}
            <View style={{ height: 270 }}>
              <FlatList
                data={listdatapopular}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250 }}>
                    <TouchableOpacity
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 200, height: 150 }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.title}
                        </Text>
                        <FontAwesome
                          name="bookmark-o"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.author}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 600,
                          color: "rgb(83,92,233)",
                          fontSize: 16,
                        }}
                      >
                        ${item.price}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome name="star" size={24} color="#fd3" />
                        <Text style={{ fontWeight: 600 }}>
                          {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                          lessons
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          {/* View recomment for you */}
          <View style={{ marginTop: 15 }}>
            {/* content recomment */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Recommended for you
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </TouchableOpacity>
            </View>
            {/* items Recommended */}
            <View style={{ height: 300 }}>
              <FlatList
                data={listdatarecomments}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250 }}>
                    <TouchableOpacity
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 200, height: 150 }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.title}
                        </Text>
                        <FontAwesome
                          name="bookmark-o"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.author}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 600,
                          color: "rgb(83,92,233)",
                          fontSize: 16,
                        }}
                      >
                        ${item.price}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome name="star" size={24} color="#fd3" />
                        <Text style={{ fontWeight: 600 }}>
                          {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                          lessons
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          {/* View Course that inspires */}
          <View style={{ marginTop: 15 }}>
            {/* content Course that inspires */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Course that inspires
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </TouchableOpacity>
            </View>

            {/* items Course that inspires */}
            <View>
              {listdataCourseInspires.map((item) => {
                return (
                  <View style={{ marginBottom: 20 }} key={item.id}>
                    <TouchableOpacity
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                        flexDirection: "row",
                        alignItems: "center",

                        height: 150,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: "40%", height: 100 }}
                      />

                      <View
                        style={{
                          flexDirection: "column",
                          marginLeft: 10,
                          width: "58%",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: 16, fontWeight: 700 }}>
                            {item.title}
                          </Text>
                          <FontAwesome
                            name="bookmark-o"
                            size={24}
                            color="black"
                          />
                        </View>
                        <Text style={{ fontWeight: 600, color: "gray" }}>
                          {item.author}
                        </Text>
                        <Text
                          style={{
                            fontWeight: 600,
                            color: "rgb(83,92,233)",
                            fontSize: 16,
                          }}
                        >
                          ${item.price}
                        </Text>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <FontAwesome name="star" size={24} color="#fd3" />
                          <Text style={{ fontWeight: 600 }}>
                            {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                            lessons
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>


           {/* View top teacher */}
           <View style={{ marginTop: 30 }}>
            {/* content top teacher */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
              Top teacher
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </TouchableOpacity>
            </View>
            {/* items popular */}
            <View style={{ height: 270 }}>
              <FlatList
                data={listdataTopTeacher}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250 }}>
                    <TouchableOpacity
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 200, height: 150 }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.teacher}
                        </Text>
                        <FontAwesome
                          name="bookmark-o"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.school}
                      </Text>
                      
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome name="star" size={24} color="#fd3" />
                        <Text style={{ fontWeight: 600 }}>
                          {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                          lessons
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>


          <View style={{ height: 150 }} />
        </ScrollView>
      </View>
    </>
  );
}
