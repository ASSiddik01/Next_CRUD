import User from "@/backend/models/user.model";
import DBConnect from "@/backend/utils/dbConnect";
export default async function handler(req, res) {
  DBConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const result = await User.find({});
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
    case "POST":
      try {
        const data = new User(req.body);
        const result = await data.save();
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
      break;
      break;
    default:
      //   res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed `);
      break;
  }
}
