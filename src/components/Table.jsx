import Avatar from "../assets/Avatar.png";
const Table = () => {
  const thead = [
    {
      colName: "✅Profile",
    },
    {
      colName: "✅Name",
    },
    {
      colName: "✅Status",
    },
  ];
  const tbody = [
    {
      Avatar: Avatar,
      Name: "Sivabalan",
      Status: "Active",
    },
    {
      Avatar: Avatar,
      Name: "Sudharsan",
      Status: "Inactive",
    },
    {
      Avatar: Avatar,
      Name: "Sriram",
      Status: "Active",
    },
  ];
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl text-center font-bold mb-4 ">👤User Information</h2>
      <table className=" min-w-full  border-2 border-collapse border-gray-600">
        <thead>
          <tr>
            {thead.map((heading, index) => (
              <th key={index} className="border-2  border-gray-600 px-4 py-2">
                {heading.colName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody >
          {tbody.map((body, index) => (
            <tr key={index} className="text-center">
              <td className="border-2 border-gray-600 px-4 py-2">
                <img
                  width={50}
                  height={50}
                  src={body.Avatar}
                  className="mx-auto block"
                  alt="User Profile Img"
                />
              </td>
              <td className="border-2 border-gray-600 px-4 py-2">{body.Name}</td>
              <td
                className={`border-2 border-gray-600 px-4 py-2 ${
                  body.Status == "Active" ? "text-green-600" : "text-red-600"
                } `}
              >
                {body.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
