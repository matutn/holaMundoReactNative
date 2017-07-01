import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, Alert, ScrollView, Image} from 'react-native';
import Imagen from './Componentes/imagen';
import SaludoInicial from './Componentes/SaludoInicial';
import Blink from './Componentes/teamtitila';
import Integrante from './Componentes/grupo';

var Fondo = require('./imagenes/blueBack.jpg');

/*style={styles.container}*/

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

  _cuandoMantengo = () => {
    /*Alert.alert('Atajo Aceptado');*/
    this.setState({
      cantClicks: this.state.cantClicks + 10
    });

  }

  resetearClickeo = () => {
    this.setState({
      cantClicks: 0
    })
  }

  render(){
    return (
      <ScrollView>
        <View>
      
          <Image 
           style={ {flex:1, width: null, height: null, resizeMode: 'cover'} }
           source={Fondo}
           >

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

            <View style = {{ marginBottom:50 }}>
            </View>

            <TouchableHighlight 
              style = {styles.button1} 
              onPress={ () => { this.cuandoClickeo() } }
              onLongPress= { () => { this._cuandoMantengo() }}
              >
              
              <Text style = {styles.buttonText}> 
                Apretame
              </Text>
            
            </TouchableHighlight>

            <Text style={styles.instructions}>
              {this.state.cantClicks} {this.state.palabra}
            </Text>
            
{/*            <Button
              onPress = { () => { this.resetearClickeo() }}
              title ='Resetear'
              color = 'blue'
            />*/}

            <TouchableHighlight 
              style = {styles.button2} 
              onPress={ () => { this.resetearClickeo() } }
              >
              
              <Text style = {styles.buttonText2}> 
                Resetear
              </Text>
            
            </TouchableHighlight>

            </Image>
        </View>
      </ScrollView>
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
/*  background:{
    flex:1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },*/
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
    button2:{
    height: 50,
    width: 110,
    backgroundColor: '#0000ff',
    borderColor: '#0000ff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 80
  },
  buttonText:{
    fontSize:27,
    color:'white',
    textAlign:'center',
  },
    buttonText2:{
    fontSize:18,
    color:'white',
    textAlign:'center',
  }
});

AppRegistry.registerComponent('holaMundo', () => holaMundo);
