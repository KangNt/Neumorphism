import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Slider, ScrollView } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const gray = "#91A1BD";

export default function App() {


  const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2 },
              style
            ]}>
            {children}
          </View>
        </View>
      </View>
    )
  }

  return (

    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView style={{ alignSelf: "stretch" }}>
          <View style={{ marginHorizontal: 32, marginTop: 20 }}>
            <View style={styles.topContainer}>
              <NeuMorph size={48}>
                <AntDesign name="arrowleft" size={20} color={gray} style={{marginLeft:12}} />
              </NeuMorph>

              <View>
                <Text style={styles.playing}>PLAYING NOW</Text>
              </View>
              <NeuMorph size={48}>
                <Entypo name="menu" size={24} color={gray}  style={{marginLeft:10}}/>
              </NeuMorph>

            </View>
            <View style={styles.songArtContainer}>
              <NeuMorph size={270}>
                <Image source={require("./assets/cropk.jpeg")} style={styles.songArt} />
              </NeuMorph>

            </View>
            <View style={styles.songArtContainer}>
              <Text style={styles.title}>Lost It </Text>
              <Text style={styles.artist}>Mt.Catlin Ft.Kang</Text>

            </View>

            <View style={styles.trackContainer}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.time}>1:23</Text>
                <Text style={styles.time}>3:50</Text>
              </View>

              <Slider
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#8AAAFF"
                thumbTintColor="#7B9BFF"
              />
            </View>

            <View style={styles.controlsContainer}>
              <NeuMorph size={60}>
                <Ionicons name="ios-rewind" size={24} color={gray} style={{marginLeft:15}} />
              </NeuMorph>

              <NeuMorph size={60} style={{ backgroundColor: "#8AAAFF", borderColor: "#8AAAFF" }}>
                <Ionicons name="ios-pause" size={24} color="#ffffff" style={{marginLeft:22}} />
              </NeuMorph>


              <NeuMorph size={60}>
                <Ionicons name="ios-fastforward" size={24} color={gray} style={{marginLeft:18}} />
              </NeuMorph>
            </View>

          </View>
        </SafeAreaView>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems: "center"
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inner: {
    backgroundColor: "#DEE9F7",
    alignContent: "center",
    justifyContent: "center",
    borderColor: "#E2ECFD",
    borderWidth: 1
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#FBFFFF"

  },
  bottomShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD"
  },
  playing: {
    color: gray,
    fontWeight: "800"
  },
  songArtContainer: {
    marginVertical: 23,
    alignItems: "center",

  },
  songArt: {
    width: 270,
    height: 270,
    borderRadius: 150,
    borderColor: "#D7E1F3",
    borderWidth: 10
  },
  songContainer: {
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "#6C7A93",
    fontWeight: "600",
  },
  artist: {
    fontSize: 14,
    marginTop: 6,
    color: gray,
    fontWeight: "500",
  },
  trackContainer: {
    marginTop: -12,
    marginBottom: 30
  },
  time: {
    fontWeight: 10,
    color: gray,
    fontWeight: "700"
  },

  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }

});
