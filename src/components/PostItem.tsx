import React from 'react'
import { IPost } from '../models/IPost'

interface IPostItem {
	post: IPost
	onRemove: (post: IPost) => void
	onUpdate: (post: IPost) => void
}

const PostItem: React.FC<IPostItem> = ({ post, onRemove, onUpdate }) => {
	const handleRemove = (e: React.MouseEvent) => {
		e.stopPropagation()
		onRemove(post)
	}

	const handleUpdate = (e: React.MouseEvent) => {
    e.stopPropagation()
    const title = window.prompt() || ''
		onUpdate({ ...post, title })
	}

	return (
		<div onClick={handleUpdate} style={{ border: '1px solid', padding: 10, margin: 10 }}>
			<b>
				{post.id}: {post.title}
			</b>
			<div>{post.body}</div>
			<button onClick={handleRemove}>delete</button>
		</div>
	)
}

export default PostItem
