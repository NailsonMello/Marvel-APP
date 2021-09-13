import React from 'react'
import { FlatList } from 'react-native'

import Hero from '../../organisms/Hero'

const Favorites = ({data}) => {
    return (
        <FlatList
            data={data}
            style={{ width: '100%', marginTop: 10, flex: 1 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({ item: hero }) => <Hero hero={hero} listStorage={data} />}
        />
    )
}

export default Favorites