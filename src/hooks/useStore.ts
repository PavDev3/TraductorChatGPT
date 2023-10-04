import { AUTO_LANGUAGE } from '../constants'
import { type Language, type Action, type State, type FromLanguage } from '../types'
import { useReducer } from 'react'

// 1. Creamos el estado inicial
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Creamos el reducer
function reducer (state: State, action: Action) {
  const { type, payload } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    if (state.fromLanguage === AUTO_LANGUAGE) return state
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

export function useStore () {
  // 3. Utilizamos el reducer con el estado inicial y el reducer creado.
  const [
    {
      fromLanguage,
      toLanguage,
      fromText,
      result,
      loading
    }, dispatch] = useReducer(reducer, initialState)

  // 4. Creamos las funciones que modifican el estado
  // Dispatch = Ordenar una acción y dar un contenido
  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }
  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setToResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  console.log({ fromLanguage })
  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setToResult
  }
}
