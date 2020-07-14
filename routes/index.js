const express = require('express');
const router = express.Router();
const cors = require('cors');

const c = require('../config');
const userController = require('./api/users');
const corsOptions = {
  origin(origin, callback) {
    callback(null, true);

    // if (c.http.whitelist.indexOf(origin) !== -1 || !origin) {
    //   callback(null, true);
    // } else {
    //   callback(new Error('Not allowed by CORS'));
    // }
  },
};

/*
 * API
 */
// router.all('/', cors(corsOptions));
// router.options('/', cors(corsOptions), (req, res) => {
//   res.send(200);
// });

router.get('/api/users', userController.listUsers);
router.get('/api/user/:id', userController.listUserById);
router.post('/api/user', userController.createUser);
router.put('/api/user/:id', userController.updateUser);
router.delete('/api/user/:id', userController.deleteUser);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
