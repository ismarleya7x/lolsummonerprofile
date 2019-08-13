import React, { useState } from 'react';
import { Alert, View, KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import api from '../services/api';
import Logo from '../assets/logo.png';

export default function Search({ navigation }) {
  const [summoner, setSummoner] = useState('');



  async function handleSearch() {

    if (summoner == '') {
      return Alert.alert('Informe o nome do invocador');
    }

    const response = await api.get(`/lol/summoner/v4/summoners/by-name/${summoner}`, { headers: { 'X-Riot-Token': 'API_KEY_GOES_HERE' } }).then(data =>{
      return data;
    }).catch(error =>{
      return Alert.alert('Nenhum invocador encontrado');
    });
    const { id } = response.data;

    handleSearchData(id);
  }

  async function handleSearchData(id) {
    const response = await api.get(`/lol/league/v4/entries/by-summoner/${id}`, { headers: { 'X-Riot-Token': 'API_KEY_GOES_HERE' } });
    
    const summonerData = response.data

    navigation.navigate('Invocador', { summonerData })
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
    >
      <Image source={Logo} />

      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder="Informe o Invocador"
        placeholderTextColor="#999"
        value={summoner}
        onChangeText={setSummoner}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Procurar</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.infoText}>Developed for learning porpuse.</Text>
      </View>

    </KeyboardAvoidingView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 15
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#660000',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  },
  infoText:{
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic'
  }

})