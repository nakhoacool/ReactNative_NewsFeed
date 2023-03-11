import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context'
import { Entypo } from '@expo/vector-icons'
import News from './News'

const Search = () => {
  const { setSearch, searchResults, setSearchResults, darkTheme } =
    useContext(NewsContext)
  const [modalVisible, setModalVisible] = useState(false)
  const [currentNews, setCurrentNews] = useState()
  const [text, setText] = useState('')
  const [visible, setVisible] = useState(false)

  const handleModal = (result) => {
    setModalVisible(true)
    setCurrentNews(result)
  }

  return (
    <View style={{ width: '100%', position: 'relative' }}>
      <TextInput
        style={{
          ...styles.search,
          backgroundColor: darkTheme ? 'black' : 'lightgrey',
          color: darkTheme ? 'white' : 'black',
        }}
        placeholder='Search for news'
        placeholderTextColor={darkTheme ? 'white' : 'grey'}
        onChangeText={(textBox) => {
          if (textBox === '') {
            setSearchResults([])
            setVisible(false)
          }
          setText(textBox)
        }}
        onSubmitEditing={() => {
          if (text !== '') {
            setSearch(text)
            setVisible(true)
          }
        }}
      />
      {visible && (
        <View style={styles.searchResults}>
          {searchResults.slice(0, 10).map((result) => (
            <TouchableOpacity
              key={result.title}
              activeOpacity={0.7}
              onPress={() => handleModal(result)}
            >
              <Text
                style={{
                  ...styles.singleResult,
                  backgroundColor: darkTheme ? 'black' : 'white',
                  color: darkTheme ? 'white' : 'black',
                }}
              >
                {result.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            position: 'absolute',
            zIndex: 2,
            right: 0,
            margin: 10,
            marginTop: 60,
          }}
        >
          <Entypo
            name='circle-with-cross'
            size={30}
            color={darkTheme ? 'white' : 'black'}
          />
        </TouchableOpacity>
        <View style={{ height: '100%', transform: [{ scaleY: -1 }] }}>
          <News item={currentNews} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  searchResults: {
    position: 'absolute',
    zIndex: 1,
    top: 50,
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: 'black',
    elevation: 5,
  },
})

export default Search
