import axios from 'axios'
import React, { createContext, useState, useEffect, useRef } from 'react'
import { getNewsAPI, getSourceAPI, getSearchAPI } from './Api.js'

export const NewsContext = createContext()

const Context = ({ children }) => {
  const flatList = useRef()

  const [news, setNews] = useState([])
  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')
  const [index, setIndex] = useState(0)
  const [source, setSource] = useState()
  const [darkTheme, setDarkTheme] = useState(true)

  const [search, setSearch] = useState()
  const [searchResults, setSearchResults] = useState([])

  const [value, setValue] = useState({
    value: 'us',
    label: 'USA',
  })

  const fetchNews = async () => {
    try {
      const { data } = await axios.get(getNewsAPI(category, country))
      setNews(data)
      setIndex(1)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchNewsReset = async (resetCat, resetCountry) => {
    try {
      const { data } = await axios.get(getNewsAPI(resetCat, resetCountry))
      setNews(data)
      setCategory(resetCat)
      setCountry(resetCountry)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchNewsFromSource = async () => {
    try {
      const { data } = await axios.get(getSourceAPI(source))
      setNews(data)
      setIndex(1)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchSearchResults = async () => {
    try {
      const { data } = await axios.get(getSearchAPI(search))
      setSearchResults(data.articles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [category, country])

  useEffect(() => {
    fetchNewsFromSource()
  }, [source])

  useEffect(() => {
    fetchSearchResults()
  }, [search])

  return (
    <NewsContext.Provider
      value={{
        news,
        fetchNews,
        fetchNewsReset,
        index,
        setIndex,
        searchResults,
        setSearchResults,
        flatList,
        setCategory,
        setSource,
        setSearch,
        darkTheme,
        setDarkTheme,
        setCountry,
        value,
        setValue,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export default Context
