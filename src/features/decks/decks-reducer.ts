import { DeckType } from './decks-api.ts'

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS':
      return { ...state, decks: action.decks }
    case 'ADD_DECK' :
      return { ...state, decks: [action.deck,...state.decks] }
    default:
      return state
  }
}

type DecksActions =
  | ReturnType<typeof setDecksAC>
  | ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: DeckType[]) => ({ type: 'SET_DECKS', decks } as const)

export const addDeckAC = (deck: DeckType) => ({ type: 'ADD_DECK', deck } as const)


