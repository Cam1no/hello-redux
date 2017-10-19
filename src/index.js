import registerServiceWorker from './registerServiceWorker';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addTodo } from './actions'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!'))
