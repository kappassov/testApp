import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.app}>
          <Image
            style={styles.appIcon2}
            source={require("./assets/target.png")}
          />
        </View>
        <Text style={styles.appTitle}>ТЕСТ</Text>
        <View style={styles.app}>
          <Image
            style={styles.appIcon1}
            source={require("./assets/user.png")}
          />
        </View>
      </View>

      <View style={styles.containerOld}>
        <Image source={require("./assets/soldier.png")} style={styles.logo} />
        <Text style={styles.text}>
          Пройдите тест и узнайте насколько Вы сильны в начальной военной
          подготовке.
        </Text>
        <Text style={styles.textSmall}>
          Будьте уверены, что готовы пройти тест и нажмите кнопку "Начать тест"
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("ScreenB")}
        >
          <Text style={styles.btnText}>НАЧАТЬ ТЕСТ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        <View style={styles.tab1}>
          <Image style={styles.tabIcon} source={require("./assets/news.png")} />
          <Text style={styles.tabText}>Новости</Text>
        </View>
        <View style={styles.tab1}>
          <Image
            style={styles.tabIcon}
            source={require("./assets/gallery.png")}
          />
          <Text style={styles.tabText}>Фото</Text>
        </View>
        <View style={styles.tab1}>
          <Image style={styles.tabIcon} source={require("./assets/home.png")} />
          <Text style={styles.tabText}>Главная</Text>
        </View>
        <View style={styles.tab1}>
          <Image
            style={styles.tabIcon}
            source={require("./assets/cinema.png")}
          />
          <Text style={styles.tabText}>Видео</Text>
        </View>
        <View style={styles.tab1}>
          <Image
            style={styles.tabIcon}
            source={require("./assets/test_active.png")}
          />
          <Text style={styles.tabTextActive}>Тест</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16.0,
    elevation: 24,
  },
  tab1: {
    backgroundColor: "#ffff",
    width: 50,
    height: 50,
    flex: 1,
  },
  tabIcon: {
    height: 25,
    width: 25,
    alignSelf: "center",
    top: 7,
  },
  tabText: {
    fontSize: 10,
    color: "#AEAEAE",
    alignSelf: "center",
    top: 10,
  },
  tabTextActive: {
    fontSize: 10,
    color: "#0F3834",
    alignSelf: "center",
    top: 10,
  },
  appBar: {
    flex: 1,
    backgroundColor: "#0F3834",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.0,
    elevation: 24,
    height: 60,
    width: 400,
  },
  app: {
    padding: 20,
  },
  appIcon1: {
    width: 22,
    height: 22,
    alignSelf: "center",
    top: 5,
    right: 10,
  },
  appIcon2: {
    width: 22,
    height: 22,
    alignSelf: "center",
    top: 5,
    left: 10,
  },
  appTitle: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    top: 5,
  },
  containerOld: {
    backgroundColor: "white",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    top: 20,
    height: 200,
  },
  btn: {
    //borderRadius: 8,
    shadowColor: "#000",
    color: "#007AFF",
    fontSize: 16,
    backgroundColor: "#0F3834",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F3834",
    borderWidth: 0.5,
    //borderColor: "#fff",
    height: 50,
    width: 300,
    borderRadius: 8,
    marginBottom: 68,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16.0,
    elevation: 24,
    bottom: 25,
  },
  logo: {
    width: 300,
    height: 270,
    marginTop: 40,
    marginBottom: 32,
  },
  text: {
    fontSize: 20,
    color: "#0F3834",
    width: 300,
    height: 80,
    marginBottom: 8,
    bottom: 10,
  },
  textSmall: {
    fontSize: 16,
    color: "#AEAEAE",
    width: 300,
    height: 80,
    bottom: 15,
  },
  btnText: {
    fontSize: 16,
    //fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginLeft: 100,
  },
});
