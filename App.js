import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    if (this.state.massa > 0 && this.state.altura > 0) {
      let imc = this.state.massa / (this.state.altura * this.state.altura)

      let state = this.state
      state.resultado = imc

      if (imc < 16) {
        state.resultadoText = 'Magreza leve'
      }
      else if (imc < 17) {
        state.resultadoText = 'Magreza moderada'
      }
      else if (imc < 18.5) {
        state.resultadoText = 'Magreza leve'
      }
      else if (imc < 25) {
        state.resultadoText = 'Saudável'
      }
      else if (imc < 30) {
        state.resultadoText = 'Sobrepeso'
      }
      else if (imc < 35) {
        state.resultadoText = 'Obesidade Grau I'
      }
      else if (imc < 40) {
        state.resultadoText = 'Obesidade Grau II'
      }
      else {
        state.resultadoText = 'Obesidade Grau III'
      }
          
      this.setState(state)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText} >Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado} >{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize:35} ]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
  },
  input: {
    height: 80,
    width: "50%",
    textAlign: 'center',
    fontSize: 50,
    marginTop: 40
  },
  entradas:{
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#f48b00',
    width: '100%'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize:25,
    padding: 15,
    color: '#e7e7e7',
    fontWeight: 'bold'
  },
  resultado: {
    fontSize:65,
    color: '#A29C9B',
  }
});
