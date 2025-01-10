import {
  fetchAllUsers,
  fetchUserById,
  createNewUser,
  updateUserInfo,
  updateUserPassword,
  deleteUserByUserId,
} from "../models/users.js";

export async function getAllUsers(req, res) {
  try {
    const users = await fetchAllUsers();

    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

export async function getUserById(req, res) {
  try {
    const id = req.params.id;
    const user = await fetchUserById(id);

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

export async function postUser(req, res) {
  try {
    // 5 arguments
    // first name
    let fName = req.body.fName;

    // last name
    let lName = req.body.lName;

    // email
    let mail = req.body.email;

    // password
    let password = req.body.pw;

    // date joined
    let date = new Date();
    let correctDateFormat =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate();

    const postNewUser = await createNewUser(
      fName,
      lName,
      mail,
      password,
      correctDateFormat
    );

    res.status(201).json({
      status: "success",
      data: postNewUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

export async function updateUserInfoById(req, res) {
  try {
    // 4 arguments again
    // id
    let id = req.params.id;

    // updated first name
    let updatefName = req.body.fName;

    // updated last name
    let updatelName = req.body.lName;

    // email
    let updateMail = req.body.email;

    let patchUser = await updateUserInfo(
      id,
      updatefName,
      updatelName,
      updateMail
    );

    res.status(200).json({
      status: "success",
      data: patchUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

// Not working properly as first name is NOT NULL
// not sure why name is null as there should already be info filled out

export async function updateUserPasswordById(req, res) {
  try {
    // just 2 arguments
    // id
    let id = req.params.id;

    // updated password
    let updatePw = req.params.pw;

    let patchUserPw = await updateUserPassword(id, updatePw);

    res.status(200).json({
      status: "success",
      data: patchUserPw,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
