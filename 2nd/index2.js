class JSXDemo extends React.Component {
	render() {
		return (
			// div is needed to render multiple elements
			<div>
				<h1>My Image!</h1>
				<img src="https://images.unsplash.com/photo-1506259291727-cc30f10b0ab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1265&q=80"  />	
			</div>
            
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));