const Contact = require("../models/contact-model");
const User = require("../models/user-model");

// Admin allUsers part
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// user Edit part

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
// User Update Logic
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserById = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updateUserById,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// user delete part

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
// Admin contacts part
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }

    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// contacts delete part

const deleteContactById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
};
