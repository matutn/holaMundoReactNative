import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import Imagen from './Componentes/imagen';
import SaludoInicial from './Componentes/SaludoInicial';
import Blink from './Componentes/teamtitila';
import Integrante from './Componentes/grupo';

export default class holaMundo extends Component {
  
  constructor(){
    super();
    
    this.state = { 
      cantClicks: 0,
      palabra: 'veces'
    };
  }
  
  cuandoClickeo = () => {
    this.setState({
      cantClicks: this.state.cantClicks + 1
    });
  }

  resetearClickeo = () => {
    this.setState({
      cantClicks: 0
    })
  }

  render(){
    return (
      <View style={styles.container}>
        
        <Imagen/>
        
        <SaludoInicial/>

        <Text style={styles.instructions}>
          ESTE ES
        </Text>

        <Blink text='El Team'/>
        <Blink text='503' />
{/*     <Text style={styles.instructions2}>
          El Team{'\n'}
          503
        </Text>
*/}
{/*        <Integrante name='Pablo'/>
        <Integrante name='Paula'/>
        <Integrante name='Carla'/>
        <Integrante name='Gabriel'/>
        <Integrante name='Matías'/>*/}

        <TouchableHighlight 
          style = {styles.button1} 
          onPress={ () => { this.cuandoClickeo() } }>
          
          <Text style = {styles.buttonText}> 
            Apretame
          </Text>
        
        </TouchableHighlight>

        <Text style={styles.instructions}>
          {this.state.cantClicks} {this.state.palabra}
        </Text>
        
        <Button
          onPress = { () => { this.resetearClickeo() }}
          title ='Resetear'
          color = 'blue'
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA0A0A',
  },
  instructions: {
    textAlign: 'center',
    fontSize: 25,
    color: '#00ec02',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  button1:{
    height: 60,
    width: 160,
    backgroundColor: '#0000ff',
    borderColor: '#0000ff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText:{
    fontSize:27,
    color:'white',
    textAlign:'center',
  }
});

AppRegistry.registerComponent('holaMundo', () => holaMundo);
