import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'

import LoadingScreen from './LoadingScreen'

import Welcome from './Auth/Welcome'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'

import Home from './Home/Home'
import HomeSub from './Home/HomeSub'
import RankingMall from './Mall/RankingMall'
import FavorMall from './Mall/FavorMall'
import MallSub from './Mall/MallSub'
import MallThird from './Mall/MallThird'
import Search from './Search/Search'
import SearchSub from './Search/SearchSub'
import MyPage from './MyPage/MyPage'
import MyPageSub from './MyPage/MyPageSub'
import More from './More/More'
import MoreSub from './More/MoreSub'

import Onboarding from './Onboarding/Onboarding'

import ProductSearch from './ProductSearch/ProductSearch'
import ProductSearchSub from './ProductSearch/ProductSearchSub'

import NotificationTabBarIcon from './Components/NotificationTabBarIcon'


const AuthStackNavigator = createStackNavigator({
  Welcome: { screen: Welcome },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
})

const HomeStack = createStackNavigator({
  Main: { screen: Home },
  Sub: { screen: HomeSub }
}, {
  initialRouteName: "Main",
  defaultNavigationOptions: {
    title: "Your App"
  }
})

const RankingStack = createStackNavigator({
  Main: { screen: RankingMall },
  Sub: { screen: MallSub}
}, {
  initialRouteName: "Main",
  defaultNavigationOptions: {
    header: null
  }
})

const FavorStack = createStackNavigator({
  Main: { screen: FavorMall },
  Third: { screen: MallThird },
  Sub: { screen: MallSub }
}, {
  initialRouteName: "Main",
  defaultNavigationOptions: {
    header: null
  }
})

const TabScreen = createMaterialTopTabNavigator({
  Ranking: { screen: RankingStack, navigationOptions: {
    tabBarLabel: '쇼핑몰 랭킹'
  } },
  Favor: { screen: FavorStack, navigationOptions: {
    tabBarLabel: '즐겨찾기'
  } }
}, {
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: '#ddd',
    style: {
      backgroundColor: 'white'
    },
    indicatorStyle: {
      borderBottomColor: 'red',
      borderBottomWidth: 2
    }
  }
})

const MallStack = createStackNavigator({
  TabScreen: { screen: TabScreen, navigationOptions: ({navigation}) => ({
    headerRight: (
      <TouchableOpacity style={{paddingRight: 10}} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} onPress={()=> navigation.navigate("ProductSearch")} >
        <Icon name="md-search" size={28} />
      </TouchableOpacity>
    ),
    headerStyle: {

    }
  }) }
}, {
  initialRouteName: "TabScreen",
  defaultNavigationOptions: {
    title: "Your App"
  }
})

const SearchStack = createStackNavigator({
  Main: { screen: Search },
  Sub: { screen: SearchSub }
}, {
  initialRouteName: "Main",
  defaultNavigationOptions: {
    title: "Your App"
  }
})

const MyPageStack = createStackNavigator({
  Main: { screen: MyPage },
  Sub: { screen: MyPageSub }
}, {
  initialRouteName: "Main",
  defaultNavigationOptions: {
    title: "Your App"
  }
})

const MoreStack = createStackNavigator({
  Main: { screen: More },
  Sub: { screen: MoreSub }
}, {
  initialRouteName: "Main",
  defaultNavigationOptions: {
    title: "Your App"
  }
})


const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: '홈'
    }
  },
  Mall: {
    screen: MallStack,
    navigationOptions: {
      tabBarLabel: '쇼핑몰'
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: '상품검색'
    }
  },
  MyPage: {
    screen: MyPageStack,
    navigationOptions: {
      tabBarLabel: '내상품'
    }
  },
  More: {
    screen: MoreStack,
    navigationOptions: {
      tabBarLabel: '더보기'
    }
  }
}, {
  initialRouteName: 'Home',
  order: ['Home', 'Mall', 'Search', 'MyPage', 'More'],

  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if(routeName === 'Home') {
        return (<Icon name="md-home" color={tintColor} size={24} />)
      } else if (routeName === 'Mall') {
        return (<Icon name="md-shirt" color={tintColor} size={24} />)
      } else if (routeName === 'Search') {
        return (<Icon name="md-search" color={tintColor} size={24} />)
      } else if (routeName === 'MyPage') {
        return (<View><Icon name="md-heart-empty" color={tintColor} size={24} /><NotificationTabBarIcon /></View>)
      } else if (routeName === 'More') {
        return (<Icon name="ios-more" color={tintColor} size={24} />)
      }
    }

  }),
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: { screen: AppTabNavigator,
    navigationOptions: {
      header: null
    }

   },
  ProductSearch: { screen: ProductSearch },
  ProductSearchSub: { screen: ProductSearchSub }
})

const SwitchContainer = createSwitchNavigator({
  AuthLoading: LoadingScreen,
  Auth: AuthStackNavigator,
  App: AppStackNavigator,
  Onboarding: Onboarding
})

const AppContainer = createAppContainer(SwitchContainer)

export default AppContainer
