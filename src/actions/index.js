import {
  TOGGLE_LIKES,
  TOGGLE_FAVORITES,
  CREATE_FOLDER,
  REMOVE_FOLDER,
  TOGGLE_FLIP,
  REMOVE_MY_ITEM,
  REMOVE_ALL_MY_ITEM } from './actionTypes'

export const toggleLikes = (name, item) => ({
  type: TOGGLE_LIKES,
  name,
  item
})

export const toggleFavorites = (shoppingMall) => ({
  type: TOGGLE_FAVORITES,
  shoppingMall
})

export const createFolder = (name, date, malls) => ({
  type: CREATE_FOLDER,
  name,
  date,
  malls
})

export const removeFolder = (name) => ({
  type: REMOVE_FOLDER,
  name
})

export const toggleFlip = (name) => ({
  type: TOGGLE_FLIP,
  name
})

export const removeMyItem = (name) => ({
  type: REMOVE_MY_ITEM,
  name
})

export const removeAllMyItem = () => ({
  type: REMOVE_ALL_MY_ITEM
})
