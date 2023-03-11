import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { country } from '../API/Api'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { NewsContext } from '../API/Context'
const Country = () => {
  const { setCountry, darkTheme, value, setValue } = useContext(NewsContext)
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color='black'
            name='Safety'
            size={20}
          />
        )}
      </View>
    )
  }

  return (
    <Dropdown
      style={{
        ...styles.dropdown,
        backgroundColor: darkTheme ? 'white' : 'lightgrey',
      }}
      placeholderStyle={{ ...styles.placeholderStyle }}
      selectedTextStyle={{ ...styles.selectedTextStyle }}
      inputSearchStyle={{ ...styles.inputSearchStyle }}
      iconStyle={styles.iconStyle}
      data={country}
      search
      maxHeight={300}
      labelField='label'
      valueField='value'
      placeholder='Select item'
      searchPlaceholder='Search...'
      value={value}
      onChange={(item) => {
        setValue(item.value)
        setCountry(item.value)
      }}
      renderLeftIcon={() => (
        <Entypo style={styles.icon} name='globe' size={20} color='black' />
      )}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: 350,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})

export default Country
