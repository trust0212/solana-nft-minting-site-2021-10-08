import { compose, createStore, applyMiddleware } from 'redux'

import createRootReducer from './reducer';

const identity = (v) => v

const getDevTools = () => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof window === 'object' && !!window.devToolsExtension) {
      return window.devToolsExtension()
    }
    return identity
  }
  return identity
}

export default function buildStore(history, reduxState = undefined) {
  const store = createStore(
    createRootReducer(history),
    reduxState,
    
  )

  return store
}
