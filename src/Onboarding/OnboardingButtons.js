import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import ColorText from '../Components/ColorText'
import BottomFullButton from '../Components/BottomFullButton';

const buttonLabel = ["다음", "취향 등록하기", "키워드 선택하기"];

const OnboardingButtons = ({ totalItems, currentIndex, movePrevious, moveNext, moveFinal, isDone, favNums, keyNums }) => {

  const labelingButton = () => {

    if(currentIndex === 0) {
      return (
        <BottomFullButton
          onPress={ moveNext }
        >
          {buttonLabel[currentIndex]}
        </BottomFullButton>
      )
    } else if (currentIndex === 1) {
      return (
        <BottomFullButton
          onPress={ moveNext }
        >
          <ColorText wantedColor="#f61b65">{favNums}개 </ColorText>{buttonLabel[currentIndex]}
        </BottomFullButton>
      )
    } else if (currentIndex === 2) {
      return (
        <BottomFullButton
          onPress={ moveFinal }
        >
          <ColorText wantedColor="#f61b65">{keyNums}개 </ColorText>{buttonLabel[currentIndex]}
        </BottomFullButton>
      )
    }
  }

  return (
    <View style={ styles.container }>

      {labelingButton()}

    </View>
)}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black'
  }
})

export default OnboardingButtons
