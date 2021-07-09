import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import HeaderTitle from '../components/HeaderTitle'
import ItemSeparator from '../components/ItemSeparator'

interface Casas {
  casa: string
  data: string[]
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin'
    ]
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman'
    ]
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama'
    ]
  }
]

const SectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <SectionList
        ItemSeparatorComponent={() => <ItemSeparator />}
        keyExtractor={(item, index) => item + index}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 70 }}>
            <HeaderTitle title={`Total: ${casas.length}`} />
          </View>
        )}
        ListHeaderComponent={() => <HeaderTitle title="Section list" />}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: '#ffffff' }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        sections={casas}
        SectionSeparatorComponent={() => <ItemSeparator />}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default SectionListScreen
