/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [numColumns, setNumColumns] = useState(1);
  const [dummyValues, setDummyValues] = useState([
    {name: 'Manish', value: '1'},
    {name: 'Navjot', value: '1'},
    {name: 'Raghu', value: '1'},
    {name: 'Ganesh', value: '1'},
    {name: 'Mukesh', value: '1'},
    {name: 'Suresh', value: '1'},
    {name: 'Manish', value: '1'},
    {name: 'Navjot', value: '1'},
    {name: 'Raghu', value: '1'},
    {name: 'Ganesh', value: '1'},
    {name: 'Mukesh', value: '1'},
    {name: 'Suresh', value: '1'},
  ]);

  const renderGrid = dummyValues => {
    const items = dummyValues.map((val, index) => (
      <View style={{padding: 5, margin: 5}}>
        <Text>{val.name}</Text>
      </View>
    ));

    const rows = [];
    let i = 0;

    while (i < items.length) {
      rows.push(
        <View
          key={i}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          {items.slice(i, i + numColumns)}
        </View>,
      );
      i += numColumns;
    }

    return rows;
  };

  const onIncNumCount = () => {
    setNumColumns(state => {
      return state < dummyValues.length ? ++state : state;
    });
  };

  const onDecNumCount = () => {
    setNumColumns(state => {
      return state > 1 ? --state : state;
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: 10, 
          padding: 10,
        }}>
        <Text style={{ alignSelf: 'center', fontSize: 16}}>
          number of Columns : {numColumns}
        </Text>
        <TouchableOpacity onPress={() => onIncNumCount()}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Inc +</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDecNumCount()}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Dec -</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{margin: 10, padding: 10, flex: 1}}>
        {renderGrid(dummyValues)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
