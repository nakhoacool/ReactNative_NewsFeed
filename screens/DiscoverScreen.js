import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native'
import { NewsContext } from '../API/Context'
import Search from '../components/Search'
import { categories, sources } from '../API/Api'
import Country from '../components/Country'
const DiscoverScreen = () => {
  const { setCategory, setSource, darkTheme } = useContext(NewsContext)
  return (
    <ScrollView>
      <View style={styles.discover}>
        <Search />
        <Text
          style={{ ...styles.subtitle, color: darkTheme ? 'white' : 'black' }}
        >
          Country
        </Text>
        <Country />
        <Text
          style={{ ...styles.subtitle, color: darkTheme ? 'white' : 'black' }}
        >
          Category
        </Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.category}
              onPress={() => setCategory(item.name)}
            >
              <Image source={{ uri: item.pic }} style={styles.categoryImage} />
              <Text
                style={{ ...styles.name, color: darkTheme ? 'white' : 'black' }}
              >
                {' '}
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text
          style={{ ...styles.subtitle, color: darkTheme ? 'white' : 'black' }}
        >
          Sources
        </Text>
        <View style={styles.sources}>
          {sources.map((item) => (
            <TouchableOpacity
              onPress={() => setSource(item.id)}
              key={item.id}
              style={styles.sourceContainer}
            >
              <Image source={{ uri: item.pic }} style={styles.sourceImage} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: '#007FFF',
    borderBottomWidth: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  categoryImage: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sourceImage: {
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  sources: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: '40%',
    borderRadius: 10,
    margin: 15,
    backgroundColor: '#cc313d',
  },
})

export default DiscoverScreen
