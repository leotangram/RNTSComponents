import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import HeaderTitle from '../components/HeaderTitle'
import ItemSeparator from '../components/ItemSeparator'
import { ThemeContext } from '../context/themeContext/ThemeContext'

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
  const {
    theme: { colors }
  } = useContext(ThemeContext)

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
        renderItem={({ item }) => (
          <Text style={{ color: colors.text }}>{item}</Text>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: colors.background }}>
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
