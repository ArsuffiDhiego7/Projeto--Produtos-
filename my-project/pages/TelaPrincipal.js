import React from "react";  
import { View, Text, Image, Button, StyleSheet } from "react-native";

const TelaPrincipal = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.produtoContainer}>
                <Image
                source={require('./src/sofa1.jpg')}
                style={styles.imagemProduto}
                />
                <Text>Sofá Retratil</Text>
                <Text>Sofá São José 6 lugares retrátil e reclinável/ Cor cinza</Text>
            </View>

            <View style={styles.produtoContainer}>
            <Image 
                source={require('./src/sofa2.jpg')}
                style={styles.imagemProduto}    
                />
            <Text>Sofá Retrátil</Text>
            <Text>Sofá Pescara 8 lugares retrátil e reclinável/ Cor branco</Text>
            </View>

            <View style={styles.produtoContainer}>
                <Image 
                source={require('./src/sofa3.jpg')}
                style={styles.imagemProduto}    
                />
                <Text>Sofá Mobiliário</Text>
                <Text>Sofá Safra 2 lugares normal/ Cor branco</Text>
            </View>

            <View style={styles.produtoContainer}>
                <Image 
                source={require('./src/sofa4.jpg')}
                style={styles.imagemProduto}    
                />
                <Text>Sofá Cama</Text>
                <Text>Sofá Cama casal/ Cor azul</Text>
            </View>
            <Button title="Ir para Cadastro" onPress={() => navigation.navigate('TelaCadastro')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    produtoContainer: {
      marginBottom: 20,
    },
    imagemProduto: {
      width: 200,
      height: 200,
    },
  });

export default TelaPrincipal;