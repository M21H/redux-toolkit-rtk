import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postsAPI } from '../services/posts-service'
import usersSlice from './reducers/user-slice'

const rootReducer = combineReducers({ users: usersSlice, [postsAPI.reducerPath]: postsAPI.reducer })

const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsAPI.middleware),
		devTools: true,
	})
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
