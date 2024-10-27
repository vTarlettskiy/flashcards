import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<GetDecksResponseType>('/v2/decks')
  },
  addDeck(params: AddDeckParams) {
    return instance.post<DeckType>('/v1/decks', params )
  }
}

export type AddDeckParams = {
  name: string
}

type AuthorType = {
  id: string
  name: string
}

export type DeckType = {
  isFavorite: boolean
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

type GetDecksResponseType = {
  items: DeckType[]
  pagination: PaginationType
}
