import { IPost } from '../models/IPost'
import { postsAPI } from '../services/posts-service'
import PostItem from './PostItem'

const PostsContainer = () => {
	const { data: posts, isLoading, error } = postsAPI.useFetchAllPostsQuery(100)
	const [createPost, {}] = postsAPI.useCreatePostMutation()
	const [deletePost, {}] = postsAPI.useDeletePostMutation()
	const [updatePost, {}] = postsAPI.useUpdatePostMutation()

	const handleCreate = async () => {
		const title = window.prompt()
		await createPost({ title, body: title } as IPost)
	}

	const handleRemove = (post: IPost) => deletePost(post)

	const handleUpdate = (post: IPost) => updatePost(post)

	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{error ? <h1>Error</h1> : <button onClick={handleCreate}>Add post</button>}
			{posts && posts.map((post) => <PostItem key={post.id} post={post} onRemove={handleRemove} onUpdate={handleUpdate} />)}
		</div>
	)
}

export default PostsContainer
