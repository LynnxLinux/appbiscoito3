import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
 
export default function Home({ navigation }) {
  // Estados
  const [textoFrase, setTextoFrase] = useState('Frase aqui');
  const [img, setImg] = useState(require('../assets/biscoito 1.png'));
 
  // Array de frases
  const frases = [
    'Sorte é estar preparado quando a oportunidade aparece.',
    'Um passo de cada vez leva longe.',
    'Acredite no seu potencial!',
    'O sucesso começa com um pensamento positivo.',
    'Grandes coisas levam tempo.',
    'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    'Não importa o quão devagar você vá, desde que não pare.',
    'A energia que você coloca no mundo é a mesma que o mundo devolve.',
    'Foque no progresso, não na perfeição.',
    'Fracasso não é o fim, é apenas o início de um aprendizado.',
    'A persistência realiza o impossível.',
    'Sonhe grande, comece pequeno, mas comece.',
    'Você é o autor da sua própria história.',
    'Desafios são oportunidades disfarçadas.',
    'Não compare seu capítulo 1 com o capítulo 20 de alguém.',
    'Nada floresce sem um pouco de chuva.',
    'O medo é um convite para crescer.',
    'Olhe para frente, é lá que sua vida acontece.',
    'Cada esforço de hoje constrói o seu amanhã.',
    'A melhor versão de você ainda está por vir.'
  ];
 
  // Função para quebrar o biscoito
  function quebrarBiscoito() {
    let num = Math.floor(Math.random() * frases.length);
    setTextoFrase('"' + frases[num] + '"');
    setImg(require('../assets/biscoito aberto.png'));
  }
 
  // Função para resetar o biscoito
  function resetarBiscoito() {
    setTextoFrase('Frase aqui');
    setImg(require('../assets/biscoito 1.png'));
  }
 
  return (
    <View style={estilos.container}>
      <Image source={img} style={estilos.img} />
 
      <Text style={estilos.textoFrase}>{textoFrase}</Text>
 
      {/* Botão para quebrar o biscoito */}
      <TouchableOpacity style={estilos.botao} onPress={quebrarBiscoito}>
        <Text style={estilos.btnTexto}>Abrir Biscoito</Text>
      </TouchableOpacity>
 
      {/* Botão para resetar */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#999', marginTop: 15 }]}
        onPress={resetarBiscoito}
      >
        <Text style={estilos.btnTexto}>Resetar</Text>
      </TouchableOpacity>
 
      {/* Botão para navegar para a tela Sobre */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#666', marginTop: 15 }]}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={estilos.btnTexto}>Ir para Sobre</Text>
      </TouchableOpacity>
 
      {/* Botão para navegar para a tela Integrantes */}
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#444', marginTop: 15 }]}
        onPress={() => navigation.navigate('Integrantes')}
      >
        <Text style={estilos.btnTexto}>Ir para Integrantes</Text>
      </TouchableOpacity>
    </View>
  );
}
 
// Estilos
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 18,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 200,
    height: 45,
    backgroundColor: '#dd7b22',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
 