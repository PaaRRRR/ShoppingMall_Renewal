import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions
} from 'react-native'


const { width, height } = Dimensions.get('window');

const BAR_WIDTH = 250;
const COMPLETION_BAR_BORDER_COLOR = '#f61b65';
const COMPLETION_BAR_BG_COLOR = 'transparent';
const COMPLETION_BAR_STATUS_BG_COLOR = '#f61b65';

const computeCompletionBarWidth = (itemCount, barWidth, deviceWidth, pan) => {
  const inputRange = [];
  const outputRange = [];
  for(let i = itemCount - 1; i >= 0; i -= 1) {
    inputRange.push(deviceWidth * i * -1);
    outputRange.push(barWidth * ((i + 1) / itemCount));
  }

  if(outputRange.length < 2) {
    inputRange.push(inputRange[inputRange.length - 1]);
    outputRange.push(outputRange[outputRange.length - 1]);
  }

  return {
    width: pan.interpolate({
      inputRange,
      outputRange
    })
  }
}

const OnboardingProgress = ({ totalItems, pan }) => (
  <View style={styles.container}>
    <View style={styles.bar}>
      <Animated.View style={[styles.status, computeCompletionBarWidth(totalItems, BAR_WIDTH, width, pan)]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    paddingLeft: 20,
    top: 30,
    left: 0,
    right: 0
  },
  bar: {
    borderRadius: 6,
    height: 10,
    borderWidth: 1,
    borderColor: COMPLETION_BAR_BORDER_COLOR,
    backgroundColor: COMPLETION_BAR_BG_COLOR,
    marginHorizontal: 20,
    width: BAR_WIDTH,
    overflow: 'hidden',
    flexDirection: 'row'
  },
  status: {
    backgroundColor: COMPLETION_BAR_STATUS_BG_COLOR,
    height: 8
  }
})

export default OnboardingProgress;
