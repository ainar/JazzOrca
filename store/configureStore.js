import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux";
import { playerState } from './reducers/playerStateReducer'
import { history } from './reducers/historyReducer'
import { persistCombineReducers } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['history'] // only navigation will be persisted
}
const loggerMiddleware = createLogger()

export default createStore(
    persistCombineReducers(
        rootPersistConfig,
        { playerState, history }
    ),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)