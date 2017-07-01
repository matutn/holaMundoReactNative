import React, {Component} from 'react';
import {
	Image
} from 'react-native';

export default class Imagen extends Component{
	render(){
		return (
			<Image 
			 style={{width: 200, height: 200, alignSelf: 'center', marginBottom:10, marginTop: 30}}
			 source={require('../imagenes/logoUtn.png')}
			 />
		);

	}
}