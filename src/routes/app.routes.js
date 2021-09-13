import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Favorites from '../pages/Favorites'

const AppStack = createStackNavigator()

const AppRoute = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Detail" component={Detail} />
            <AppStack.Screen name="Favorites" component={Favorites} />
        </AppStack.Navigator>
    )
}

export default AppRoute