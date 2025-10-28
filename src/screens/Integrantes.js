import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Integrantes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>👥 Equipe do Projeto</Text>

      <View style={styles.card}>
        <Image source={require('../assets/integrante2.png')} style={styles.img} />
        <Text style={styles.nome}>Guilherme D</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/integrante3.png')} style={styles.img} />
        <Text style={styles.nome}>Matheus Costantino</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  card: { alignItems: 'center', marginBottom: 20 },
  img: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  nome: { fontSize: 18, fontWeight: '600' }
});
