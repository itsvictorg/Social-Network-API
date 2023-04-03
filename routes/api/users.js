const router = require('express').Router();

const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

//get all users
router.route('/').get(getAllUsers);

//get one user by id
router.route('/:id').get(getUserById);

//create user
router.route('/').post(createUser);

//update user by id
router.route('/:id').put(updateUser);

//delete user by id
router.route('/:id').delete(deleteUser);

//add friend
router.route('/:userId/friends/:friendId').post(addFriend);

//remove friend
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;