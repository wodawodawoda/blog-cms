import Comment from '../models/comment';
import Post from '../models/post'

export function getComments(req, res) {
	console.log('Received GET request')
	Comment.find()
		.then(comments => res.send(comments))
		.catch(err => res.send(err))
}

export function getPostComments(req, res) {
	console.log('Received GET request')
	Comment.find({post: req.params.post})
		.then(comments => res.send(comments))
		.catch(err => res.send(err))
}


export function addComment(req, res) {
	console.log('POST add comment')
	try {
		const { username, content, avatar, post=req.params.id } = req.body
		const comments = {username, content, avatar, post}
		Comment.create(comments)
			.then(comment => {
				Post.update({_id: req.params.id}, {$addToSet: {comments: comment}})
					.then(raw => res.send(comment))
					.catch(err => res.send(403, err))
			})
			.catch(err => res.send(err))
	} catch (err) {
		res.send(err)
	}
}

export function addResponseComment(req, res) {
	try {
		const { username, content, avatar } = req.body
		const comments = {username, content, avatar}
		Comment.create(comments)
			.then(comment => {
				Comment.update({_id: req.params.id}, {$addToSet: {response: comment}})
					.then(updated => {
						res.send(comment)
					})
					.catch(err => console.log(err))
			})
			.catch(err => res.send(err))
	} catch (err) {
		res.send(err)
	}
}