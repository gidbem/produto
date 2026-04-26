import {View, StyleSheet, Button, TextInput, Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.textoproduto}>Novo Produto</Text>
      <Text>Preencha os dados do inventário</Text>

      <Text style={styles.textoproduto2}>Nome do produto</Text>
      <TextInput style={styles.nomeproduto} />

      <View style={styles.linha}>

        <View>
          <Text style={styles.textopreco}>Preço(R$)</Text>
          <TextInput style={styles.nomepreco} keyboardType="numeric" />
        </View>

        <View>
          <Text style={styles.textoestoque}>Estoque</Text>
          <TextInput style={styles.nomeestoque} keyboardType="numeric" />
        </View>

      </View>

      <View>
      <Text style={styles.textocodigo}>#Código Identificador</Text>
      <TextInput style={styles.nomecodigo}/>
      </View>

    <View style={styles.botaoproduto}>
      <Button title='Gravar Produto'/></View>  
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
    marginTop: 10
  },
  nomepreco: {
    marginTop: 4,
    width: 170,
    height: 40,
    borderWidth: 2,
    borderRadius: 9
  },
  textoestoque: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  nomeestoque: {
    marginTop: 4,
    width: 120,
    height: 40,
    borderWidth: 2,
    borderRadius: 9
  },
  textocodigo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 100
  },
  nomecodigo: {
    marginTop: 4,
    width: 300,
    height: 40,
    borderWidth: 2,
    borderRadius: 9
  },
  linha: {
    flexDirection: 'row',
    gap: 12
  },
  botaoproduto: {
    width: 300,
    marginTop: 30,
    borderRadius: 9,
    overflow: 'hidden'
  }
});