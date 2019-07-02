import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  AsyncStorage
} from 'react-native'

import OnboardingButtons from './OnboardingButtons';
import OnboardingPanel from './OnboardingPanel';
import OnboardingProgress from './OnboardingProgress';

const { width, height } = Dimensions.get('window');

const OnboardingContentLength = 3;

const popularTags = [
  "롱원피스", "유니크", "쉬폰미니원피스", "벚꽃놀이패션", "러블리",
  "모던시크", "트위드가디건", "데일리패션", "레트로", "오피스룩",
  "반팔블라우스", "스트랩백", "핀턱원피스", "새틴", "리본블라우스",
  "자켓원피스", "h라인스커트", "연보라", "연청바지", "스퀘어프릴",
  "카라반팔", "크롭니트", "보트넥", "레이스뷔스티에" ];

const tags = popularTags.map(cur=> ({
  name: "#" + cur,
  isSelected: false
}))

const cardItems = [
  {
    img: require("../../imgs/debby-hudson-537200-unsplash.jpg"),
    title: '심플베이직',
    desc: '편하지만 스타일리쉬하게!',
    isLiked: "start"
  },
  {
    img: require("../../imgs/riccardo-trimeloni-609369-unsplash.jpg"),
    title: '레트로',
    desc: '고풍스러운 멋',
    isLiked: "start"
  },
  {
    img: require("../../imgs/raul-varzar-604390-unsplash.jpg"),
    title: '댄디스타일',
    desc: '깔끔하고 멋있게!',
    isLiked: "start"
  },
  {
    img: require("../../imgs/parker-burchfield-224850-unsplash.jpg"),
    title: '캐쥬얼',
    desc: '캐쥬얼하고 깔끔하다!',
    isLiked: "start"
  },
  {
    img: require("../../imgs/artem-maltsev-1372856-unsplash.jpg"),
    title: '슈트핏',
    desc: '잘 차려입은 슈트핏',
    isLiked: "start"
  }
]

class Onboarding extends React.Component {

  constructor(props) {
    super(props);
    this.moveNext = this.moveNext.bind(this);
    this.movePrevious = this.movePrevious.bind(this);
    this.transitionToNextPanel = this.transitionToNextPanel.bind(this);
    this.moveFinal = this.moveFinal.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.selectDislike = this.selectDislike.bind(this);
    this.selectLike = this.selectLike.bind(this);
    this.textInputFnc = this.textInputFnc.bind(this);

    this.favNums = 0;
    this.keyNums = 0;

    this.state = {
      yearOfBirth: '',
      currentIndex: 0,
      isDone: false,
      pan: new Animated.Value(0),
      tags: tags,
      cardItems: cardItems
    };
  }

  textInputFnc(value) {
    this.setState({ yearOfBirth: value })
  }

  movePrevious() {
    this.transitionToNextPanel(this.state.currentIndex - 1);
  }

  moveNext() {
    this.transitionToNextPanel(this.state.currentIndex + 1);
  }


  moveFinal = async () => {


    this.setState({ isDone: true });

    const data = {
      yearOfBirth: this.state.yearOfBirth,
      tags: this.state.tags.filter(cur => cur.isSelected),
      cardItems: this.state.cardItems.filter(cur => cur.isLiked === true)
    }

    let userToken = await AsyncStorage.getItem("userToken")
    userToken = JSON.parse(userToken);

    let newUserToken = {...userToken, isBeginner: false}

    await AsyncStorage.setItem("userToken", JSON.stringify(newUserToken))

    this.props.navigation.navigate('AuthLoading');
  }

  transitionToNextPanel(nextIndex) {

    Animated.timing(this.state.pan, {
      toValue: nextIndex * width * -1,
      duration: 300
    }).start(()=> {
      this.setState({
        currentIndex: nextIndex
      });
    });
  }

  toggleSelect(item) {
    const newTags = this.state.tags.map(cur => {
      if(cur.name === item) {
        if(cur.isSelected) {
          this.keyNums--;
          if(this.keyNums <= 0) {
            this.keyNums = 0;
          }
        } else {
          this.keyNums++;
        }


        return {...cur, isSelected: !cur.isSelected}
      } else {
        return cur
      }
    })
    this.setState({ tags: newTags })
  }

  selectDislike(item) {
    const newCards = this.state.cardItems.map(cur => {
      if(cur.title === item) {

        if(cur.isLiked === true) {
          this.favNums--;
          if(this.favNums <= 0) {
            this.favNums = 0;
          }
        }

        return {...cur, isLiked: false}
      } else {
        return cur
      }
    })
    this.setState({ cardItems: newCards })
  }

  selectLike(item) {
    const newCards = this.state.cardItems.map(cur => {
      if(cur.title === item) {

        if(cur.isLiked === true) {
          //do nothing
        } else {
          this.favNums++;
        }

        return {...cur, isLiked: true}
      } else {
        return cur
      }
    })
    this.setState({ cardItems: newCards })
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.panelContainer,
            { width: width * OnboardingContentLength },
            {
              transform: [{
                translateX: this.state.pan
              }]
            }
          ]}
        >
          <OnboardingPanel
            textInputValue={this.state.yearOfBirth}
            textInputFnc={this.textInputFnc}
            tags={this.state.tags}
            card={ this.state.cardItems }
            selectLike={this.selectLike}
            selectDislike={this.selectDislike}
            skip={this.moveFinal}
            onKeySelector={this.toggleSelect}
          />
        </Animated.View>

        <OnboardingProgress
            totalItems={OnboardingContentLength}
            pan={this.state.pan}
          />

          <OnboardingButtons
            totalItems={OnboardingContentLength}
            currentIndex={this.state.currentIndex}
            movePrevious={this.movePrevious}
            moveNext={this.moveNext}
            moveFinal={this.moveFinal}
            isDone={this.state.isDone}
            favNums= {this.favNums}
            keyNums= {this.keyNums}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  panelContainer: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default Onboarding
