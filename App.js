import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { StatusBar, View } from 'react-native'
import * as Font from 'expo-font'
import Routes from './src/routes'
import store from './src/config/store'

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          'Roboto_400Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
          'Roboto_500Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
          'Roboto-LightItalic': require('./src/assets/fonts/Roboto-LightItalic.ttf'),
          'Roboto_BoldItalic': require('./src/assets/fonts/Roboto-BoldItalic.ttf'),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  if (!isLoadingComplete) {
    return null
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 40 : 0
      }}
    >
      <StatusBar
        animated={true}
        translucent={false}
        backgroundColor='rgba(255,0,0,0.7)'
        barStyle="light-content"
      />
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  )
}
export default App