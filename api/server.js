/**
 * Created by dupon on 06/07/2017.
 */
const database = require('./database');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const UtilController = require('./controllers/utilController');
const console = require('./logger');
const UserController = require('./controllers/users');
const ArticleController = require('./controllers/articles');
const CommentController = require('./controllers/comments');
const cors = require('cors');
const path = require('path');

/*Mongo.collection('test').insert({a : 1}, function (err, result) {
    if (err) console.log(err);
    if (result) console.log(result);
});*/

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(cors());

router.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url, req.body);
    next();
});

router.post('/auth/signup', UserController.signUp);
router.post('/auth/login', UserController.login);
router.get('/users/', UserController.getAll);
router.get('/auth/logout/:token', UserController.logout);
router.get('/user/getById/:id', UserController.getById);
router.get('/auth/isAuth/:token', UserController.isAuth);

router.get('/articles/', ArticleController.getAll);
router.get('/article/:url', ArticleController.getByUrl);
router.post('/article/:token', ArticleController.post);
router.get('/articles/:email', ArticleController.getByUserEmail);

router.get('/article/:url/comments', CommentController.getAllByArticle);
router.post('/article/:url/comment/:token', CommentController.post);

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

database.connect('mongodb://mongo/gsm', function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.');
        console.log(err);
        process.exit(1)
    } else {
        app.listen(3000, function() {
            console.log('Listening on port 3000...')
        })
    }
});
