import { Context, createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Store } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import { reducer, RootState } from "./reducers"

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true })