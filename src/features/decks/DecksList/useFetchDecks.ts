import { useAppDispatch } from '../../../app/store.ts'
import { useSelector } from 'react-redux'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect } from 'react'
import { getDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useSelector(selectDecks)

  useEffect(() => {
    dispatch(getDecksTC())
  }, [dispatch])

  return {
    decks
  }
}