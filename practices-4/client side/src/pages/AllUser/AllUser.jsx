import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

const AllUser = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center py-5">All User List</h1>
        <div className="w-full md:w-8/12 mx-auto bg-yellow-500  rounded-xl p-7">
          <table className="w-full">
            <thead>
              <tr className="w-full text-left border-b-2 border-white">
                <th className="bg-teal-200 py-2 px-2">No</th>
                <th className="py-2 pl-1 bg-red-200">Name</th>
                <th className="py-2 pl-1 bg-green-200">Email</th>
                <th className="py-2 pl-1 bg-blue-200">Number</th>
                <th className="py-2 pl-1 bg-red-400">Country</th>
                <th className="py-2 pl-1 bg-pink-100">DOB</th>
                <th className="py-2 px-3 text-center bg-fuchsia-300">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full text-left">
                <td className="bg-teal-200 px-2">01</td>
                {edit ? (
                  <td>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className=" w-full bg-red-200 pl-1 outline-none border border-red-200"
                    />
                  </td>
                ) : (
                  <td className=" pl-1 bg-red-200">Md Ataullah</td>
                )}
                {edit ? (
                  <td>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className=" w-full bg-green-200 pl-1 outline-none border border-green-200"
                    />
                  </td>
                ) : (
                  <td className=" pl-1 bg-green-200">ataullahm100@gmail.com</td>
                )}
                {edit ? (
                  <td>
                    <input
                      type="number"
                      placeholder="Number"
                      name="number"
                      className=" w-full bg-blue-200 pl-1 outline-none border border-blue-200"
                    />
                  </td>
                ) : (
                  <td className=" pl-1 bg-blue-200">01719199967</td>
                )}
                {edit ? (
                  <td>
                    <input
                      type="text"
                      placeholder="Country"
                      name="country"
                      className=" w-full bg-red-400 pl-1 outline-none border border-red-400"
                    />
                  </td>
                ) : (
                  <td className=" pl-1 bg-red-400">Bangladesh</td>
                )}
                {edit ? (
                  <td>
                    <input
                      type="date"
                      placeholder="Date of birth"
                      name="birth"
                      className=" w-full bg-pink-100 pl-1 outline-none border border-pink-100"
                    />
                  </td>
                ) : (
                  <td className=" pl-1 bg-pink-100">10-03-2004</td>
                )}
                <td className="px-3 bg-fuchsia-300 text-center">
                  <button onClick={() => setEdit(!edit)} className="text-lg flex items-center justify-center mx-auto">
                    {edit ? (
                      <span className="text-green-400">
                        <FaCheck />
                      </span>
                    ) : (
                      <BiEdit />
                    )}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
