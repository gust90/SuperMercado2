import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, CheckBox, TouchableOpcity} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

export class Form extends Component{
constructor(){
    super()
    this.state={
        name: '',
        nameValidate:true,
        password:''
    }
}

validate(text, type){
    alph=/^[a-zA-Z]+$/
    if(type=='username'){
        if(alph.test(text)){
            this.setState({
                nameValidate:true,
            })
        } 
        else{
            this.setState({
                nameValidate:false,
            })
        }   
    
    }
}
render(){
    return(
        <View style={styles.container}>
            <TextInput style={[styles.inputStyle,!this.state.nameValidate? style.error:null]}
            onChengeText={(text)=>validate(text, 'username')}
            pacleholder="Username"
            />
            <TextInput style={styles.inputStyle} placeholder="Password"/>
            <TouchableOpcity>     
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpcity> 
            <TouchableOpcity>     
                <Text style={styles.btnTextSignUp}>Request Login</Text>
            </TouchableOpcity>    
        </View>
        );
    }
}
export default Form

var styles = StyleSheet.create({
    container:{
        backgroundColor:'#000001',
        flex:1,
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
    },
    inputStyle: {
        backgroundColor: '#000001',
        marginBottom:15,
        fontSize:20,
        paddingLeft:15
    },
    btnTetx:{
        backgroundColor: '#000001',
        paddingBottom:10,
        paddingTop:10,
        fontSize:18,
        marginTop:25,
        color:'#000001',
        textAlign: 'center'
    },
    btnTextSignUp:{
        fontSize:16,
        color: '#000001',
        marginTop:70,
        textAlign:'center'
    },
    error:{
        borderWidth:3,
        borderColor:'red',

    }


})