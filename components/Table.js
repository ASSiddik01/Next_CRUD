import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "@/redux/features/api/apiSlice";
import { toggle } from "@/redux/features/form/formSlice";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";

export default function Table() {
  const { isLoading, isError, data } = useGetUsersQuery();

  const users = data?.data;
  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-700">
        {users.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ _id, name, avatar, email, salary, date, status }) {
  const [deleteUser, { isSuccess, data }] = useDeleteUserMutation();
  const dispatch = useDispatch();
  return (
    <tr className="bg-gray-700 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img src={avatar || "#"} alt="" />
        <span className="text-center ml-2 font-semibold">
          {name || "Unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span className="bg-green-500 text-white px-5 py-1 rounded-full">
            {status || "Unknown"}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor">
          <BiEdit
            onClick={() =>
              dispatch(
                toggle({ _id, name, avatar, email, salary, date, status })
              )
            }
            size={25}
            color={"rgb(34,197,94)"}
          ></BiEdit>
        </button>
        <button onClick={() => deleteUser(_id)} className="cursor">
          <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}
