const User = require('./../../models/User');
const crudWrapper = require('./../services/crud');
const validator = require('./../services/validations');
exports.listUsers = async (req, res) => {
  try {
    return res.status(200).send(await crudWrapper.list(User));
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

exports.listUserById = async (req, res) => {
  try {
    return res
      .status(200)
      .send({ user: await crudWrapper.listById(User, req) });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    if (!validator.emailValidation(req.body.email))
      return res.status(400).send({ message: 'Invalid email id.' });
    await crudWrapper.create(User, req);
    return res.status(200).send({ message: 'User created successfully.' });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await crudWrapper.update(User, req);
    return res.status(200).send({ message: 'User updated successfully.' });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    return res.status(200).send({ user: await crudWrapper.delete(User, req) });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};
