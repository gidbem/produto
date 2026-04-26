import {View, StyleSheet, Button, TextInput, Text, Alert} from 'react-native';
import {useState} from 'react';

export default function App() {

const [nomeproduto, setNomeproduto] = useState('');
const [preco, setPreco] = useState('');
const [estoque, setEstoque] = useState('');
const [codigo, setCodigo] = useState('');

const [erronome, setErronome] = useState('');
const [erropreco, setErropreco] = useState('');
const [erroestoque, setErroestoque] = useState('');
const [errocodigo, setErrocodigo] = useState('');

function gravarProduto() {
  let valido = true;

  if (nomeproduto === '') {
    setErronome('Campo obrigatório!');
    valido = false;
  } else if (nomeproduto.length < 3) {
    setErronome('Nome deve ter pelo menos 3 caracteres!');
    valido = false;
  } else {
    setErronome('');
  }

  if (preco === '') {
    setErropreco('Campo obrigatório!');
    valido = false;
  } else if (isNaN(preco.replace(',', '.')) || Number(preco.replace(',', '.')) <= 0) {
    setErropreco('Preço deve ser um número positivo maior que zero!');
    valido = false;
  } else {
    setErropreco('');
  }

  if (estoque === '') {
    setErroestoque('Campo obrigatório!');
    valido = false;
  } else if (Number(estoque) < 0) {
    setErroestoque('Quantidade não pode ser negativa!');
    valido = false;
  } else {
    setErroestoque('');
  }

  if (codigo === '') {
    setErrocodigo('Campo obrigatório!');
    valido = false;
  } else if (!/^[a-zA-Z]{3}\d{4}$/.test(codigo)) {
    setErrocodigo('Código deve ter 3 letras e 4 números! Ex: ABC1234');
    valido = false;
  } else {
    setErrocodigo('');
  }

  if (valido) {
    window.alert('Sucesso, produto gravado com sucesso!');
  }
}
  
return (
    <View style={styles.container}>

      <Text style={styles.textoproduto}>Novo Produto</Text>
      <Text>Preencha os dados do inventário</Text>

      <Text style={styles.textoproduto2}>Nome do produto</Text>
      <TextInput style={styles.nomeproduto} onChangeText={setNomeproduto}/>
      {erronome ? <Text style={styles.textoerro}>{erronome}</Text> : null}

      <View style={styles.linha}>

        <View>
          <Text style={styles.textopreco}>Preço(R$)</Text>
          <TextInput style={styles.nomepreco} keyboardType="numeric" onChangeText={setPreco}/>
          {erropreco ? <Text style={styles.textoerro}>{erropreco}</Text> : null}
        </View>

        <View>
          <Text style={styles.textoestoque}>Estoque</Text>
          <TextInput style={styles.nomeestoque} keyboardType="numeric" onChangeText={setEstoque}/>
          {erroestoque ? <Text style={styles.textoerro}>{erroestoque}</Text> : null}
        </View>

      </View>

      <View>
        <Text style={styles.textocodigo}>#Código Identificador</Text>
        <TextInput style={styles.nomecodigo} onChangeText={setCodigo}/>
        {errocodigo ? <Text style={styles.textoerro}>{errocodigo}</Text> : null}
      </View>

      <View style={styles.botaoproduto}>
        <Button title='Gravar Produto' onPress={gravarProduto}/>
      </View>

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
  },
  textoerro: {
  color: 'red',
  fontSize: 12,
  marginTop: 4,
}
});

