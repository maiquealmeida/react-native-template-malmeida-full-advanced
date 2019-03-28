import React from "react";

import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const Main = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Bem-vindo ao Template Avançado!</Text>
    <Text style={styles.instructions}>
      Essa é a tela principal da sua aplicação =)
    </Text>
    <Text style={styles.instructions}>Você pode editar a tela no arquivo:</Text>
    <Text style={[styles.instructions, styles.fileName]}>
      src/pages/Main/index.js
    </Text>
  </View>
);

export default Main;
