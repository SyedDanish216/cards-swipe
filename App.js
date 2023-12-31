import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Swiper from "react-native-deck-swiper";
const colors = {
  red: '#EC2379',
  green: '#008000'
};
export default function App() {
  return (
    <View style={styles.container}>
      <Swiper
        animateOverlayLabelsOpacity
        animateCardOpacity
        disableTopSwipe
        disableBottomSwipe
        stackSeparation={18}
        overlayLabels={{
            left: {
              title:         <Entypo name="cross" size={34} color="white" />,
              style: {
                label: {
                  backgroundColor: colors.red,
                  borderColor: colors.red,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 30
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20
                }
              }
            },
            right: {
              title: <AntDesign name="check" size={34} color="white" />,
              style: {
                label: {
                  backgroundColor: colors.green,
                  borderColor: colors.green,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 30
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20
                }
              }
            }
          }}
        cards={["#EC2379","#008000","#00FF00","#20B2AA","#006400","#808000","#6B8E23"
        ]}
        renderCard={(card) => {
          return (
            <View style={styles.card} backgroundColor={card}>
              {/* <Text style={styles.text}>{card}</Text> */}
            </View>
          );
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        cardIndex={0}
        backgroundColor={"#4FD0E9"}
        stackSize={3}
      >
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    paddingBottom:50
  },
  card: {
     flex: 0.8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E8E8E8"

  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
});
