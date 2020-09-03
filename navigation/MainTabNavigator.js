import React from 'react'
import PropTypes from 'prop-types'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import AddCard from '../components/AddCard'
import AddDeck from '../components/AddDeck'
import DeckView from '../components/DeckView'
import DeckList from '../components/DeckList'
import Settings from '../components/Settings'
import QuizList from '../components/QuizList'
import { lightPurp, orange, white, black, gray } from '../utils/colors'


const routeConfigs = {
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
    }
  }
};

const tabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? orange : black,
    inactiveTintColor: Platform.OS === 'ios' ? orange : black,
    marginBottom: 16,
    style: {
      backgroundColor: Platform.OS === 'ios' ? gray : white,
      shadowColor: 'rgba(0,0,0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1
    },
    showIcon: true
  }
};


const Tabs = createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig);

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: {
        header: null
      }
    },
    DeckView: {
      screen: DeckView,
      navigationOptions: {
        headerTintColor: black,
        headerStyle: {
          backgroundColor: gray,
          marginBottom: 16,
        },
        title: 'Deck View'
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: lightPurp
        },
        headerTitleStyle: {
          justifyContent: 'center',
          textAlign: 'center'
        },
        title: 'Add Card'
      }
    },
    QuizList: {
      screen: QuizList,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: lightPurp
        },
        title: 'QuizList'
      }
    }
  },
  { headerLayoutPreset: 'center' }
);

export default MainNavigator;