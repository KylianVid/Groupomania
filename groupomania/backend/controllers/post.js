const Post = require('../models/Post');
const fs = require('fs');

exports.getAllPost = (req, res, next) => {
    Post.find()
    .then((post) => {res.status(200).json(post);})
    .catch((error) => {res.status(400).json({ error })})
}

exports.getOnePost = (req, res, next) => {
    Post.findOne({_id: req.params.id})
    .then((post) => {res.status(200).json(post);})
    .catch((error) => {res.status(404).json({ error });});
}

exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    delete postObject._id;
    delete postObject._userId;
    const post = new Post({
        ...postObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        usersLiked: [],
        likes: 0
    });
  
    post.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
}

exports.modifyPost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    delete postObject._userId;
    Post.findOne({_id: req.params.id})
        .then((post) => {
            if (post.userId !== req.auth.userId) {
                res.status(401).json({ message : 'Not authorized'});
            } else {
                console.log("==REQ.BODY== modifyPost");
                console.log(req.body);
                Post.updateOne({ _id: req.params.id}, { ...postObject, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Objet modifié!'}))
                .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {res.status(400).json({ error });});
}

exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id})
        .then(post => {
            if (post.userId !== req.auth.userId) {
                res.status(401).json({message: 'Not authorized'});
            } else {
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    post.deleteOne({_id: req.params.id})
                        .then(() => { res.status(200).json({message: 'Objet supprimé !'})})
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch( error => {
            res.status(500).json({ error });
        });
}

exports.likePost = (req, res, next) => {
    const like = req.body.like;
    delete req.body.userId;

    Post.findOne({_id: req.params.id})
        .then((post) => {
            if (post.userId === req.auth.userId) {
                res.status(401).json({ message : 'Not authorized'});
            } else {
                if( like === 1) {
                    let subtab = post.usersLiked;
                    subtab.push(req.auth.userId); 
                    Post.updateOne({_id: req.params.id}, {likes: post.likes+1, usersLiked: subtab })
                        .then(() => res.status(200).json({message : 'Objet ajouté à usersLiked'}))
                        .catch(error => res.status(401).json({ error }));
                }
                else if(like === 0){
                    if(post.usersLiked.includes(req.auth.userId)){
                        let subtab = post.usersLiked;
                        let index = post.usersLiked.findIndex((e) => e === req.auth.userId);
                        subtab.splice(index, 1);
                        Post.updateOne({_id: req.params.id}, {likes: post.likes-1, usersLiked: subtab })
                            .then(() => res.status(200).json({message : 'Objet ajouté à usersLiked'}))
                            .catch(error => res.status(401).json({ error }));
                    }
                }
                else { res.status(400).json({message : 'error input like'}) }
            }
        })
        .catch((error) => {res.status(400).json({ error });});
}