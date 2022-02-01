import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../../models/IUser'
import { AppDispatch } from '../store'

// export const fetchUser = () => async (dispatch: AppDispatch) => {
// 	try {
// 		const { data } = await axios.get<Array<IUser>>('https://jsonplaceholder.typicode.com/users')
// 		console.log(data)
// 	} catch (e) {}
// }

export const fetchUsers = createAsyncThunk('users/fetchAll', async (_, { dispatch, rejectWithValue }) => {
	try {
		const { data } = await axios.get<Array<IUser>>('https://jsonplaceholder.typicode.com/users')
		return data
	} catch (e) {
		return rejectWithValue('Cannot fetch users')
	}
})
