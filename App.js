import React, {Component} from 'react';  
import {Text, View, TextInput} from 'react-native';
import About from "./components/About";  
 
export default class App extends Component {  
  constructor(props){
    super(props);
    this.state={name:"Azrael"};
    console.log("Contenu de props: ", this.props);
  }

  setChatName(pChatname){
    this.setState({name:pChatName});
    console.log("Mon chat s'appelle ", this.state.name);
  }

  render() {  
    return (  
      <View>  
        <Text>Logan vous dit:</Text>  
        <Text>Hello World!!!</Text>
        <TextInput value={this.state.name}
        onChangeText={(chatName)=>this.setChatName(chatName)}/>
        <About />
      </View>  
    );  
  }  
}