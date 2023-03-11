import React, { useContext, useState, useRef } from 'react'
import { Dimensions, View, StyleSheet, FlatList } from 'react-native'
import { NewsContext } from '../API/Context'
import News from '../components/News'

const NewsScreen = () => {
  const {
    news: { articles },
    flatList,
  } = useContext(NewsContext)

  const windowHeight = Dimensions.get('window').height

  return (
    <View style={styles.carousel}>
      {articles && (
        <FlatList
          data={articles}
          renderItem={({ item }) => <News item={item} />}
          keyExtractor={(item) => item.url}
          inverted={true}
          showsVerticalScrollIndicator={false}
          snapToInterval={windowHeight}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          windowSize={41}
          updateCellsBatchingPeriod={51}
          onEndReached={() => {
            flatList.current.scrollToIndex({ index: 0 })
          }}
          onEndReachedThreshold={0}
          ref={flatList}
        />
      )}
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: 'black',
  },
})
