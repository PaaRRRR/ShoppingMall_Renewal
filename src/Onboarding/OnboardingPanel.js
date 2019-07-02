import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import OnboardingUIOne from '../Components/OnboardingComponents/OnboardingUIOne';
import OnboardingUITwo from '../Components/OnboardingComponents/OnboardingUITwo';
import OnboardingUIThree from '../Components/OnboardingComponents/OnboardingUIThree';

const OnboardingPanel = ({
  textInputValue,
  textInputFnc,
  tags,
  card,
  selectLike,
  selectDislike,
  skip,
  onKeySelector }) => (

  <View style={styles.container}>
    <OnboardingUIOne
      textInputValue={textInputValue}
      textInputFnc={textInputFnc}
    />
    <OnboardingUITwo
      card={card}
      skip={skip}
      selectDislike={selectDislike}
      selectLike={selectLike}
    />
    <OnboardingUIThree
      tags={tags}
      onKeySelector={onKeySelector}
      skip={skip}
    />
  </View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
})


export default OnboardingPanel
