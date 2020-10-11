import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../utils/index";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from "native-base";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function WeatherDetails({ currentWeather, unitsSystem }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitsSystem === "metric"
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} miles/h`;

  return (
    <Container style={{ flexDirection: "row", padding: 10, left: 5 }}>
      <Content style={{ flexDirection: "row" }}>
        <Content style={{ flex: 1, marginLeft: 10 }}>
          <Card
            style={{
              flex: 1,
              width: 165,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <CardItem>
              <Left>
                <FontAwesome5
                  name="temperature-low"
                  size={30}
                  color={PRIMARY_COLOR}
                />
                <Body>
                  <Text>Feels like :</Text>
                  <Text style={styles.textSecondary}>{feels_like} °</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Content style={{ flex: 1, marginLeft: 10 }}>
          <Card
            style={{
              flex: 1,
              width: 165,
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            <CardItem>
              <Left>
                <MaterialCommunityIcons
                  name="water"
                  size={30}
                  color={PRIMARY_COLOR}
                />
                <Body>
                  <Text>Humidity :</Text>
                  <Text style={styles.textSecondary}>{humidity} %</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Content>
      <Content style={{ flexDirection: "row" }}>
        <Content style={{ flex: 1, marginLeft: 10 }}>
          <Card
            style={{
              flex: 1,
              width: 165,
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            <CardItem>
              <Left>
                <MaterialCommunityIcons
                  name="weather-windy"
                  size={30}
                  color={PRIMARY_COLOR}
                />
                <Body>
                  <Text>Wind Speed :</Text>
                  <Text style={styles.textSecondary}>{windSpeed}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Content style={{ flex: 1, marginLeft: 10 }}>
          <Card
            style={{
              flex: 1,
              width: 165,
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            <CardItem>
              <Left>
                <MaterialCommunityIcons
                  name="speedometer"
                  size={30}
                  color={PRIMARY_COLOR}
                />
                <Body>
                  <Text>Pressure :</Text>
                  <Text style={styles.textSecondary}>{pressure} hPa</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Content>
    </Container>

    // <View style={styles.weatherDetails}>
    //   <View style={styles.weatherDetailsRow}>
    //     <View
    //       style={{
    //         ...styles.weatherDetailsBox,
    //         borderRightWidth: 1,
    //         borderRightColor: BORDER_COLOR,
    //       }}
    //     >
    //       <View style={styles.weatherDetailsRow}>
    //         <FontAwesome5
    //           name="temperature-low"
    //           size={25}
    //           color={PRIMARY_COLOR}
    //         />
    //         <View style={styles.weatherDetailsItems}>
    //           <Text>Feels like :</Text>
    //           <Text style={styles.textSecondary}>{feels_like} °</Text>
    //         </View>
    //       </View>
    //     </View>
    //     <View style={styles.weatherDetailsBox}>
    //       <View style={styles.weatherDetailsRow}>
    //         <MaterialCommunityIcons
    //           name="water"
    //           size={30}
    //           color={PRIMARY_COLOR}
    //         />
    //         <View style={styles.weatherDetailsItems}>
    //           <Text>Humidity :</Text>
    //           <Text style={styles.textSecondary}>{humidity} %</Text>
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    //   <View
    //     style={{
    //       ...styles.weatherDetailsRow,
    //       borderTopWidth: 1,
    //       borderTopColor: BORDER_COLOR,
    //     }}
    //   >
    //     <View
    //       style={{
    //         ...styles.weatherDetailsBox,
    //         borderRightWidth: 1,
    //         borderRightColor: BORDER_COLOR,
    //       }}
    //     >
    //       <View style={styles.weatherDetailsRow}>
    //         <MaterialCommunityIcons
    //           name="weather-windy"
    //           size={30}
    //           color={PRIMARY_COLOR}
    //         />
    //         <View style={styles.weatherDetailsItems}>
    //           <Text>Wind Speed :</Text>
    //           <Text style={styles.textSecondary}>{windSpeed}</Text>
    //         </View>
    //       </View>
    //     </View>
    //     <View style={styles.weatherDetailsBox}>
    //       <View style={styles.weatherDetailsRow}>
    //         <MaterialCommunityIcons
    //           name="speedometer"
    //           size={30}
    //           color={PRIMARY_COLOR}
    //         />
    //         <View style={styles.weatherDetailsItems}>
    //           <Text>Pressure :</Text>
    //           <Text style={styles.textSecondary}>{pressure} hPa</Text>
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 25,
  },
  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 50,
    height: 100,
  },
  weatherDetailsItems: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textSecondary: {
    fontSize: 15,
    color: SECONDARY_COLOR,
    fontWeight: "700",
    margin: 7,
  },
});
