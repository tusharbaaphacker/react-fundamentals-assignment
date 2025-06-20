import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from '.src/main.jsx'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
// import UserList from './UsersList.jsx'
import UserList from './userslice.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div style={{backgroundColor : "black", padding : "20px"}}>
      <h1>react redux</h1>
      <UserList/>
    </div>
<App />
  </Provider>
)
