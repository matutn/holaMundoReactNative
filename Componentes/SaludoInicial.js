import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';

export default class SaludoInicial extends Component{
	render(){
		return(
			<View>
				{/*<Text style={{color:'white'}}> //Otra Manera*/}
				<Text style={estiloSalIni.texto}>
					¡HOLA MUNDO!
				</Text>			
			</View>
		);
	}
}

const estiloSalIni = StyleSheet.create({
	texto:{
		color: 'white',
		fontWeight: 'bold',
		fontSize:50,
	}
});