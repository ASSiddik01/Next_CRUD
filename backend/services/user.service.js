import User from "./../models/user.model";

// Get Data Service
export async function getUserService() {
  const result = await User.find({});
  return result;
}
// Post Data Service
export async function postUserService(reqData) {
  const data = new User(reqData);
  const result = await data.save();
  return result;
}
// Update Data Service
export async function updateUserService(id, reqData) {
  const result = await User.findByIdAndUpdate(id, reqData);
  return result;
}
