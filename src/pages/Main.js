import React, { useState, useEffect } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'

import Logo from '../assets/logo.png';
import IRON from '../assets/IRON.png';
import BRONZE from '../assets/BRONZE.png';
import SILVER from '../assets/SILVER.png';
import GOLD from '../assets/GOLD.png';
import PLATINUM from '../assets/PLATINUM.png';
import DIAMOND from '../assets/DIAMOND.png';
import MASTER from '../assets/MASTER.png';
import GRANDMASTER from '../assets/GRANDMASTER.png';
import CHALLENGER from '../assets/CHALLENGER.png';
import next from '../assets/next.png';

export default function pages({ navigation }) {
  const [summonerData, setSummonerData] = useState(navigation.state.params.summonerData)
  

  function handleLogout() {
    navigation.navigate('Pesquisa');
  }

  function reorderData() {
    const newArray = [];
    summonerData.map(summ => newArray.push(summ))

    const firstItem = newArray[0]
    newArray.shift();
    newArray.push(firstItem)

    setSummonerData(newArray)
  }

  function returnTier(tier) {
    switch (tier) {
      case 'IRON':
        return IRON;
        break;
      case 'BRONZE':
        return BRONZE;
        break;
      case 'SILVER':
        return SILVER;
        break;
      case 'GOLD':
        return GOLD;
        break;
      case 'PLATINUM':
        return PLATINUM;
        break;
      case 'DIAMOND':
        return DIAMOND;
        break;
      case 'MASTER':
        return MASTER;
        break;
      case 'GRANDMASTER':
        return GRANDMASTER;
        break;
      case 'CHALLENGER':
        return CHALLENGER;
        break;

    }
  }

  return (
    <SafeAreaView style={styles.containter}>
      <TouchableOpacity onPress={handleLogout}>
        <Image style={styles.logo} source={Logo} />
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        {summonerData.length === 0
          ? <Text style={styles.empty}>Sem dados para exibição</Text>
          : summonerData.map((summon, index) => (
            <View key={summon.queueType} style={[styles.card, { zIndex: summonerData.length - index }]}>
              <Image source={returnTier(summon.tier)} style={styles.emblem} />
              <View style={styles.footer}>
                <Text style={styles.summonerName}>{summon.summonerName}</Text>
                <Text style={styles.rank}>{summon.tier} {summon.rank}</Text>
                <Text style={styles.rank}>{summon.leaguePoints}  ptos</Text>
                <Text style={styles.queueType}>{summon.queueType}</Text>
                <View style={styles.winlose}>
                  <Text style={styles.win}>Vitórias: {summon.wins}</Text>
                  <Text style={styles.lose}>Derrotas: {summon.losses}</Text>
                </View>
              </View>
            </View>
          ))
        }
      </View>
      {summonerData.length > 1
        && (
          <View style={styles.buttonsContainer} >
            <TouchableOpacity style={styles.button} onPress={reorderData}>
              <Image source={next} />
            </TouchableOpacity>
          </View>
        )}
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 800,
  },
  card: {
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f5f5f5',
  },
  emblem: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    height: '25%',
    width: '100%'
  },
  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginTop: 25
  },
  summonerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  rank: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999',
    textAlign: 'center'
  },
  queueType: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#999',
    textAlign: 'center'
  },
  winlose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  win: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center'
  },
  lose: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center'
  },
  empty: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#999',
    textAlign: 'center'
  },
  logo: {
    marginTop: 20
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    //backgroundColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
})
