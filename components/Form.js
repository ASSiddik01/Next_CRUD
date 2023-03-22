import UpdateUserForm from "./updateUserForm";
import AddUserForm from "./addUserForm";
import { useSelector } from "react-redux";

export default function Form() {
  const flag = true;

  const status = useSelector((state) => state.form.status);

  return (
    <div className="container mx-auto py-5">
      {status ? <UpdateUserForm /> : <AddUserForm />}
    </div>
  );
}
