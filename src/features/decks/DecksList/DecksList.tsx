import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { decksApi } from '../decks-api.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDecks } from '../decks-selectors.ts'
import { useSelector } from 'react-redux'
import { getDecksTC } from '../decks-thunks.ts'
import { useFetchDecks } from './useFetchDecks.ts'

export const DecksList = () => {

  const {decks} = useFetchDecks()

  return <ul className={s.list}>
    {
      decks.map(deck =>
      <DeckItem key={deck.id} deck={deck} />)
    }
  </ul>
}
