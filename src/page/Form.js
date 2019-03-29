import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export class formCadastro extends Component {
    render() {    
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextInput
                        placeholder="Nome" 
                        placeholderTextColor='#fff' 
                    />
                    <TextInput 
                        placeholder="E-mail" 
                        placeholderTextColor='#fff' 
                    />

                </View>
                <View style={{ flex: 1 }}>
                    <Button 
                        title="Enviar" 
                        color="#115E54" 
                    />
                </View>
            </View>
        );
    }
}

export default formCadastro