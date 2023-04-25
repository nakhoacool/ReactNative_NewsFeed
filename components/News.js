import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../API/Context'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const News = ({ item }) => {
  const { darkTheme } = useContext(NewsContext)
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{
          uri:
            item.urlToImage ??
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_104524470_stock-vector-no-image-available-icon-flat-vector-illustration.html&psig=AOvVaw0QZ2Z2Q4Z2QZ2Z2QZ2Z2QZ2&ust=1629789858664000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4Z2Z2PICFQAAAAAdAAAAABAD',
        }}
        style={{ height: '45%', resizeMode: 'cover', width: windowWidth }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? '#282C35' : 'white',
        }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text
            style={{ ...styles.title, color: darkTheme ? 'white' : 'black' }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
        <Text
          style={{ ...styles.content, color: darkTheme ? 'white' : 'black' }}
        >
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? 'white' : 'black' }}>
          Writtten by{' '}
          <Text style={{ fontWeight: 'bold' }}>{item.author ?? 'unknown'}</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  content: { fontSize: 18, paddingBottom: 10 },
})

export default News
