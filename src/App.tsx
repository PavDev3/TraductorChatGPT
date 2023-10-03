import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useReducer } from 'react'

// 1. Creamos el estado inicial
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Creamos el reducer
function reducer (state, action) {
  const { type } = action
  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }
}

function App () {
  // 3. Utilizamos el reducer con el estado inicial y el reducer creado.
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Google Translate</h1>
    </div>
  )
}

export default App
