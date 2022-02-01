import PostsContainer from './components/PostsContainer'

const App = () => {
	return (
		<div className='App'>
			{/* {JSON.stringify(users)}
			<button onClick={() => dispatch(getUsers)}>inc</button> */}
			<PostsContainer />
		</div>
	)
}

export default App
