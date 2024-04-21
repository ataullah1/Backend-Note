const AllUser = () => {
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
                <th className="py-2 pl-1 bg-fuchsia-300">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full text-left">
                <td className="bg-teal-200 px-2">01</td>
                <td className=" pl-1 bg-red-200">Md Ataullah</td>
                <td className=" pl-1 bg-green-200">ataullahm100@gmail.com</td>
                <td className=" pl-1 bg-blue-200">01719199967</td>
                <td className=" pl-1 bg-red-400">Bangladesh</td>
                <td className=" pl-1 bg-pink-100">10-03-2004</td>
                <td className=" pl-1 bg-fuchsia-300 text-center">
                  <button></button>
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
