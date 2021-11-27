import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';
const App = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);
  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://reqres.in/api/users')
      .then(function (res) {
        setState(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log(e);
      });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingTop: 40 }}>
              <Image
                source={{ uri: item.avatar }}
                style={{ width: 100, height: 100 }}
              />
              <Text>
                {item.id}
                {item.email},{item.first_name},{item.last_name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
});
export default App;