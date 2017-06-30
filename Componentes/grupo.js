import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';

export default class Integrante extends Component{
	render(){
		return(
			<View>
				{/*<Text style={{color:'white'}}> //Otra Manera*/}
				<Text style={estiloSalIni.texto}>
					{this.props.name}
				</Text>			
			</View>
		);
	}
}

const estiloSalIni = StyleSheet.create({
	texto:{
		color: 'white',
		fontWeight: 'bold',
		fontSize:20,
	}
});