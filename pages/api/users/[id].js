import User from "@/backend/models/user.model";
import DBConnect from "@/backend/utils/dbConnect";
import { async } from "./../../../backend/services/user.service";
const dataControllers = require("../../../backend/controllers/user.controller");
export default async function handler(req, res) {
  DBConnect();
  const { method } = req;
  const { id } = req.query;
  console.log(id);
  switch (method) {
    //   operation by id
    case "GET":
      try {
        const result = await User.findById(id);

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
      break;
    case "PUT":
      try {
        const result = await User.updateOne(
          { _id: id },
          { $set: req.body },
          { runValidators: true }
        );
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
      break;
    case "DELETE":
      try {
        const result = await User.deleteOne({ _id: id });
        res.status(200).json({
          success: true,
          message: `Data delete successfully`,
          data: result,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: `Data can't delete`,
          error: error.message,
        });
      }
      break;
    default:
      //   res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed `);
      break;
  }
}
