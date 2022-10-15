var express = require("express");

var restaurantController = require('./controllers/restaurantController');
var commentController = require('./controllers/commentController');
var userController = require('./controllers/userController');
var explicitController = require('./controllers/explicitController');
var reportedController = require('./controllers/reportedController');

var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/restaurants').get(restaurantController.getAllRestaurants);
app.route('/Searchrestaurants').post(restaurantController.searchRestaurants);


app.route('/comments').get(commentController.getAllComments);
app.route('/DESCsortcomments').get(commentController.getDescSortedComments);
app.route('/ASCsortcomments').get(commentController.getAscSortedComments);

app.route('/Postcomment').post(commentController.addComment);
app.route('/Updatecomment/:id').put(commentController.updateComment);
app.route('/Deletecomment/:id').delete(commentController.deleteComment);
app.route('/reportedComments/:username').get(commentController.getReportedComments);
app.route('/reportComment/:id').post(reportedController.addReportedComment);
app.route('/updateFlagged/:id').put(commentController.updateFlagged);

app.route('/users').get(userController.getAllUsers);
app.route('/Updateuser/:id').put(userController.updateUser);
app.route('/Adduser').post(userController.addUser);
app.route('/Deleteuser/:id').delete(userController.deleteUser);
app.route('/login').post(userController.loginUser);

app.route('/explicits').get(explicitController.getAllExplicits);
app.route('/Checkexplicits/:review').get(explicitController.checkExplicits);


app.listen(8080, "127.0.0.1");
console.log("web server running @ http://127.0.0.1:8080");