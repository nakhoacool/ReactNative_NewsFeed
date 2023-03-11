import React, { useContext, useState } from 'react'
import { View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { NewsContext } from '../API/Context'
import DiscoverScreen from '../screens/DiscoverScreen'
import NewsScreen from '../screens/NewsScreen'
import TopNav from './TopNav'

const Tabs = () => {
  const layout = useWindowDimensions()
  const {index, setIndex} = useContext(NewsContext)
  const [routes] = useState([
    { key: 'first', title: 'Discover' },
    { key: 'second', title: 'News' },
  ])

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  })

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNav index={index} setIndex={setIndex} />}
    />
  )
}

export default Tabs
