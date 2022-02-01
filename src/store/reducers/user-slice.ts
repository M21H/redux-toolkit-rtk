import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { fetchUsers } from '../actions/user-actions'

interface InitState {
	users: Array<IUser>
	isLoading: boolean
	error: string
	count: number
}

const initState: InitState = {
	users: [],
	isLoading: false,
	error: '',
	count: 0,
}

export const usersSlice = createSlice({
	name: 'user',
	initialState: initState,
	reducers: {
		usersFetching(state, action) {
			state.isLoading = true
		},
	},
	extraReducers: {
		[fetchUsers.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
			// state.users = action.payload
		},
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<Array<IUser>>) => {
			state.isLoading = false
			state.error = ''
			state.users = action.payload
		},
    [fetchUsers.rejected.type]: (state) => {
			state.isLoading = false
			state.error = 'Error'
			// state.users = action.payload
		},
	},
})

export default usersSlice.reducer
