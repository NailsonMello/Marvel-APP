import React from 'react'
import { FlatList } from 'react-native'

import Hero from '../../organisms/Hero'
import Loading from '../../atoms/Loading'

const Heroes = ({ data, listStorage, loading, pagination }) => {
    return (
        <FlatList
            data={data}
            style={{ width: '100%', marginTop: 10, flex:1 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            onEndReached={pagination}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<Loading load={loading} />}
            renderItem={({ item: hero }) => <Hero hero={hero} listStorage={listStorage} />}
        />
    )
}

export default Heroes