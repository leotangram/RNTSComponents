import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import HeaderTitle from '../components/HeaderTitle'

interface Casas {
  casa: string
  data: string[]
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin']
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman']
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama']
  }
]

const SectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: '#ffffff' }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        sections={casas}
        stickySectionHeadersEnabled
      />
    </View>
  )
}

export default SectionListScreen
