import {createStore} from 'redux'
import { CartReducer } from './CartReducer/CartReducer'
export const store = createStore(CartReducer)