import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  AsyncStorage
} from "react-native";
import { Button } from "native-base";
import Carousel from "react-native-snap-carousel";

const persons = [
  {
    name: "Aaron Fitzgerald",
    position: "Orthopedic physical therapist",
    comments: "19",
    speciality:
      "injury or illness that affets your bones, joints, muscle, tendons, or ligaments",
    picture: require("../../assets/stock-photo/maleS.png")
  },
  {
    name: "Olivia Calson",
    position: "Physiotherapist",
    comments: "13",
    speciality: "orthopaedics and sports rehabilitation",
    picture: require("../../assets/stock-photo/OliviaS.png")
  },
  {
    name: "Carla Donovan",
    position: "Geriatric Physical therapist",
    comments: "32",
    speciality:
      "Arthritis, osteoporosis, Alzheimer's disease, and joint soreness for elderly patients",
    picture: require("../../assets/stock-photo/CarlaS.png")
  }
];

export default class BookingMap extends Component<Props> {
  state = {
    personel: true,
    pageOpacity: 1,
    opacity: 1,
    selected: "",
    page: 1,
    description: 1
  };

  handleRenders = () => {
    switch (this.state.page) {
      case 1:
        return this.renderMap();
        break;
      case 2:
        return this.renderLocation();
        break;
      case 3:
        return this.renderPersonel();
        break;
    }
  };

  renderStars = () => (
    <View style={styles.starContainer}>
      <Image
        style={styles.star}
        source={require("../../assets/Icons/Red-Star-PNG-Image-34934.png")}
        resizeMode={"contain"}
      />
      <Image
        style={styles.star}
        source={require("../../assets/Icons/Red-Star-PNG-Image-34934.png")}
        resizeMode={"contain"}
      />
      <Image
        style={styles.star}
        source={require("../../assets/Icons/Red-Star-PNG-Image-34934.png")}
        resizeMode={"contain"}
      />
      <Image
        style={styles.star}
        source={require("../../assets/Icons/Red-Star-PNG-Image-34934.png")}
        resizeMode={"contain"}
      />
      <Image
        style={styles.star}
        source={require("../../assets/Icons/Red-Star-PNG-Image-34934.png")}
        resizeMode={"contain"}
      />
    </View>
  );

  _storeData = async data => {
    try {
      await AsyncStorage.setItem("THERAPIST", JSON.stringify(data));
    } catch (error) {
      console.warn(error);
    }
  };

  handleChangePage = () => {
    let data = {
      therapist: persons[this.state.description].name,
      therapistPicture: persons[this.state.description].picture
    };

    this._storeData(data);
    this.props.navigation.navigate("TransitionAgenda");
  };

  renderAgenda = () => (
    <View
      style={{
        position: "absolute",
        left: 42,
        top: 40
      }}
    >
      <Image
        style={{
          width: 296,
          height: 623
        }}
        source={require("../../assets/stock-photo/agenda.jpg")}
        resizeMode={"contain"}
      />
      <Image
        style={{
          top: -42,
          width: 296,
          height: 129
        }}
        source={require("../../assets/stock-photo/agenda2.jpg")}
      />

      <View
        style={{
          top: -320,
          left: 45,
          width: 243,
          height: 51,
          backgroundColor: "rgba(146,208,236,1)",
          borderRadius: 25,
          justifyContent: "center"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              ...styles.smallerText,
              color: "white",
              marginHorizontal: 20
            }}
          >
            1:00~2:25 pm available
          </Text>
          <Button
            style={{
              height: 22,
              backgroundColor: "rgba(225,225,225,.5)",
              paddingTop: 0,
              paddingBottom: 0,
              paddingHorizontal: 18,
              borderRadius: 25,
              textAlign: "center"
            }}
            onPress={() => this.handleChangePage()}
          >
            <Text style={{ fontSize: 10, color: "rgba(127,130,132,1)" }}>
              Book
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.picture}
          style={{ height: 150, width: 150, borderRadius: 10 }}
        />
      </View>
    );
  };

  renderPersonel = () => (
    <View>
      <View style={{ opacity: this.state.pageOpacity }}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/backgrounds/Mt.Sante-01.png")}
        />

        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255,255,255,.6)"
          }}
        >
          <View style={{ marginTop: 60, alignItems: "center" }}>
            <Carousel
              data={persons}
              renderItem={this._renderItem}
              sliderWidth={420}
              itemWidth={150}
              firstItem={1}
              inactiveSlideScale={0.8}
              inactiveSlideOpacity={1}
              onSnapToItem={slideIndex =>
                this.setState({ description: slideIndex })
              }
            />
            <View style={{ alignItems: "center" }}>
              <Text style={{ ...styles.buttonText, marginTop: 5 }}>
                {persons[this.state.description].name}
              </Text>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline",
                  marginBottom: 5
                }}
              />
              {this.renderStars()}
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                {persons[this.state.description].comments} comments
              </Text>
            </View>
          </View>

          <View
            style={{
              ...styles.propertyContainer,
              marginLeft: 40
            }}
          >
            <Text style={{ ...styles.buttonText }}>Speciality</Text>
            <Text
              style={{
                ...styles.smallerText,
                textDecorationLine: "underline",
                marginLeft: 30,
                width: 220
              }}
            >
              {persons[this.state.description].speciality}
            </Text>
          </View>

          <View style={{ position: "absolute", bottom: 45, marginLeft: 40 }}>
            <Text
              style={{
                ...styles.buttonText,
                marginBottom: 15
              }}
            >
              Check Schedule
            </Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{
                  height: 300,
                  width: 300,
                  marginBottom: 20,
                  borderRadius: 10
                }}
                source={require("../../assets/stock-photo/calendar1.jpg")}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <View>
                <Button
                  style={{ ...styles.button }}
                  onPress={() =>
                    this.state.selected
                      ? this.setState({ pageOpacity: 0.6 })
                      : null
                  }
                >
                  <Text style={styles.buttonText}>Confirm</Text>
                </Button>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              position: "absolute",
              backgroundColor: this.state.selected,
              height: 30,
              width: 30,
              borderRadius: 25,
              bottom: 125,
              left: 175
            }}
            onPress={() => {
              this.setState({
                selected: "rgba(146,208,236,.6)"
              });
            }}
          />
        </View>
      </View>
      {this.state.pageOpacity === 0.6 ? this.renderAgenda() : null}
    </View>
  );

  renderLocation = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/backgrounds/Mt.Sante-01.png")}
      />

      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255,255,255,.6)"
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              width: 376,
              height: 170
            }}
            source={require("../../assets/Icons/sgphead.png")}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              style={styles.headshot}
              source={require("../../assets/stock-photo/6561_img3.jpg")}
            />
          </View>
          <View>
            <Image
              style={{ ...styles.headshot, marginHorizontal: 20 }}
              source={require("../../assets/stock-photo/6561_img8.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.headshot}
              source={require("../../assets/stock-photo/o.jpg")}
            />
          </View>
        </View>
        <View style={{ marginLeft: 40, marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text style={{ ...styles.buttonText, marginRight: 34 }}>
              Rating
            </Text>
            {this.renderStars()}
            <Text
              style={{
                ...styles.smallerText,
                textDecorationLine: "underline",
                marginLeft: 20
              }}
            >
              75 reviews
            </Text>
          </View>

          <View style={styles.propertyContainer}>
            <Text style={{ ...styles.buttonText, marginRight: 20 }}>
              Address
            </Text>
            <View>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                366 Adelaide Street W Suite 403
              </Text>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                Toronto, ON M5V 1R9
              </Text>
            </View>
          </View>

          <View style={styles.propertyContainer}>
            <Text style={{ ...styles.buttonText, marginRight: 42 }}>Price</Text>
            <Text style={styles.buttonText}>$$$</Text>
            <Text
              style={{
                ...styles.smallerText,
                textDecorationLine: "underline",
                marginLeft: 30
              }}
            >
              $83 on average
            </Text>
          </View>

          <View style={styles.propertyContainer}>
            <Text style={{ ...styles.buttonText, marginRight: 25 }}>
              Service
            </Text>
            <View>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                Acupuncture, Massage Therapy,
              </Text>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                Physical Therapy
              </Text>
            </View>
          </View>

          <View style={{ ...styles.propertyContainer, marginBottom: 65 }}>
            <Text style={{ ...styles.buttonText, marginRight: 35, top: -60 }}>
              Hours
            </Text>
            <View>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline",
                  marginBottom: 20
                }}
              >
                By appointment only
              </Text>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                Mon{"     "} 7:30 am - 7:00 pm
              </Text>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                Tue{"      "} 7:30 am - 7:00 pm
              </Text>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                Wed{"     "} 7:30 am - 7:00 pm
              </Text>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                Thu{"      "} 7:30 am - 7:00 pm
              </Text>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                Fri{"        "} 7:30 am - 4:00 pm
              </Text>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                Sat{"      "} Closed
              </Text>
              <Text
                style={{
                  ...styles.smallerText,
                  textDecorationLine: "underline"
                }}
              >
                Sun{"     "} Closed
              </Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <View>
            <Button
              style={styles.button}
              onPress={() => this.setState({ page: 3 })}
            >
              <Text style={styles.buttonText}>Book Now</Text>
            </Button>
          </View>
        </View>
      </View>
    </>
  );

  renderMap = () => (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/backgrounds/Mt.Sante-01.png")}
      />
      <View
        style={{
          paddingTop: 80,
          paddingBottom: 16.5,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          height: 33
        }}
      >
        <View
          style={{
            height: 33,
            width: "33%",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            backgroundColor: "rgba(255,255,255,.6)"
          }}
        >
          <Text style={styles.buttonText}>Nearest</Text>
        </View>
        <View
          style={{
            height: 33,
            width: "33%",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            backgroundColor: "rgba(255,255,255,.3)"
          }}
        >
          <Text style={styles.buttonText}>Highest Rated</Text>
        </View>
        <View
          style={{
            height: 33,
            width: "33%",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            backgroundColor: "rgba(255,255,255,.2)"
          }}
        >
          <Text style={styles.buttonText}>Recommended</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 633,
          backgroundColor: "rgba(255,255,255,.6)",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          style={{ height: 609, width: 326 }}
          source={require("../../assets/stock-photo/map.png")}
        />
        <Image
          style={styles.marker}
          source={require("../../assets/Icons/map-marker.png")}
        />
        <TouchableOpacity
          style={styles.location}
          onPress={() => this.setState({ page: 2 })}
        >
          <Image
            style={{
              width: 90,
              height: 40,
              borderRadius: 20
            }}
            source={require("../../assets/Icons/sgpmap.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          height: 33
        }}
      >
        <View
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,.6)",
            height: 33
          }}
        >
          <Text>Map</Text>
        </View>
        <View
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,.3)",
            height: 33
          }}
        >
          <Text>List</Text>
        </View>
      </View>
    </>
  );

  render() {
    const { pain, painSelect, painColor } = this.state;
    return <View style={styles.container}>{this.handleRenders()}</View>;
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 2000,
    position: "absolute",
    top: 0,
    left: 0
  },
  propertyContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center"
  },
  marker: {
    width: 36,
    height: 45,
    position: "absolute",
    top: 500,
    left: 43
  },
  starContainer: {
    width: 90,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  star: {
    width: 13,
    height: 13,
    opacity: 0.6
  },
  headshot: {
    width: 120,
    height: 120
  },
  location: {
    position: "absolute",
    top: 540,
    left: 20
  },
  container: {
    position: "relative",
    flex: 1
  },
  welcome: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "white"
  },
  leftRightContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  leftText: {
    color: "white",
    fontSize: 10
  },
  rightText: {
    color: "white",
    fontSize: 10
  },
  painOuter: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1
  },
  painInner: {
    borderRadius: 25,
    margin: 5
  },
  painText: {
    top: 15,
    color: "white",
    textAlign: "center",
    fontSize: 10
  },
  button: {
    backgroundColor: "rgba(255,255,255,.5)",
    height: 40,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    color: "rgba(127,130,132,1)"
  },

  smallerText: {
    fontSize: 12,
    color: "rgba(127,130,132,1)"
  },
  painCircle: {
    width: 25,
    height: 25,
    borderRadius: 25
  }
});
