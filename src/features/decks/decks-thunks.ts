import { Dispatch } from 'redux'
import { AddDeckParams, decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const getDecksTC = () => (dispatch: Dispatch) => {
  decksApi.getDecks()
    .then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
}

export const addDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
  return decksApi.addDeck(params)
    .then((res) => {
      dispatch(addDeckAC(res.data))
    })
}

