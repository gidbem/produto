import {View, StyleSheet, Button, TextInput, Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

        <Text style={styles.textoproduto}>Novo Produto</Text>
        <Text>Preencha os dados do inventário</Text>

      <Text style={styles.textoproduto2}>Nome do produto</Text>

        <TextInput style={styles.nomeproduto}
        />
      
      <Text style={styles.textopreco}>Preço(R$)</Text>

        <TextInput style={styles.nomepreco}
        />
      
        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  textoproduto: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 250
  },
  nomeproduto: {
    marginTop: 4,
    marginRight: 10,
    width: 300,
    height: 40,
    borderWidth: 2,
    borderRadius: 9

  },
  textoproduto2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 170,
    marginTop: 30
  },
  textopreco: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 230,
    marginTop: 10
  },
  nomepreco: {
    marginTop: 4,
    marginRight: 190,
    width: 120,
    height: 40,
    borderWidth: 2,
    borderRadius: 9
  }
});
