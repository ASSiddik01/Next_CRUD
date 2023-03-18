import {
  getUserService,
  postUserService,
  updateUserService,
} from "./../services/user.service";

// Get API
export async function getUser(req, res, next) {
  try {
    const result = await getUserService();
    res.status(200).json({
      success: true,
      message: `Data get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data can't get`,
      error: error.message,
    });
  }
}
// Post API
export async function postUser(req, res, next) {
  try {
    const reqData = req.body;
    const result = await postUserService(reqData);
    res.status(200).json({
      success: true,
      message: `Data save successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data can't save`,
      error: error.message,
    });
  }
}
// Update API
export async function upateUser(req, res, id, next) {
  try {
    const reqData = req.body;
    const result = await updateUserService(id, reqData);
    res.status(200).json({
      success: true,
      message: `Data update successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data can't update`,
      error: error.message,
    });
  }
}
