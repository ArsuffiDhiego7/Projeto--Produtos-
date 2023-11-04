import React, { useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { StyleSheet } from 'react-native';


const TelaCadastro = ({navigation}) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');

  const salvarProduto = () => {
    console.log('Produto salvo com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text>Cadastro de Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nomeProduto}
        onChangeText={(text) => setNomeProduto(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Produto"
        value={descricaoProduto}
        onChangeText={(text) => setDescricaoProduto(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço do Produto"
        value={precoProduto}
        onChangeText={(text) => setPrecoProduto(text)}
      />
      <Button title="Salvar Produto" onPress={salvarProduto} />
      <Button title="Voltar para Principal" onPress={() => navigation.navigate('TelaPrincipal')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 30,
  },
});

export default TelaCadastro;
