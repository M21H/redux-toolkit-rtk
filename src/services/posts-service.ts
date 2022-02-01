import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPost } from '../models/IPost'

export const postsAPI = createApi({
	reducerPath: 'postsAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
	tagTypes: ['Post'],
	endpoints: (build) => ({
		fetchAllPosts: build.query<Array<IPost>, number>({
			query: (limit = 100) => ({
				url: '/posts',
				params: {
					_limit: limit,
				},
			}),
			providesTags: (result) => ['Post'],
		}),
		createPost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: '/posts',
				method: 'POST',
				body: post,
			}),
			invalidatesTags: ['Post'],
		}),
		updatePost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: `/posts/${post.id}`,
				method: 'PUT',
				body: post,
			}),
			invalidatesTags: ['Post'],
		}),
		deletePost: build.mutation<IPost, IPost>({
			query: (post) => ({
				url: `/posts/${post.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Post'],
		}),
	}),
})
