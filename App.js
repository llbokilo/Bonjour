import React, { Component } from "react";
import { Text, View } from "react-native";
import About from "./components/About";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Waaaaaaaaaah</Text>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Maison" component={Home} />
            <Tab.Screen name="A Propos" component={About} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
