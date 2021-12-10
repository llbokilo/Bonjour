import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import About from "./About";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Arwen" };
    console.log("(c)Nom du chat:", this.state.name);
  }
  setChatName(pChatName) {
    this.setState({ name: pChatName });
    console.log("(s)mon chat s'apellerions", this.state.name);
  }
  render() {
    return (
      <View>
        <Text>Le bonjour de mon félin {this.state.name}.</Text>
        <TextInput
          value={this.state.name}
          onChangeText={(chatName) => this.setChatName(chatName)}
        />
        <About />
      </View>
    );
  }
}
