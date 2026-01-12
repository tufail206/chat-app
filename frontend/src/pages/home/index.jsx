import React from "react";
import { useGetUsersQuery } from "../../api/auth-api";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { FaSignOutAlt } from "react-icons/fa";
import { logout ,setSelectedUser} from "../../store/slices/auth";
import { useDispatch ,useSelector } from "react-redux";
import Messages from "../../components/messages";
import { useGetMessagesQuery } from "../../api/message-api";

const Home = () => {
  const { currentData } = useGetUsersQuery();
  const { selectedUser } = useSelector((s) => s.auth);
  const { messages, isLoading } = useGetMessagesQuery({},
    { skip: !selectedUser }
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const activeUser = currentData?.users?.[0];
console.log("me--",)
  return (
    <div className=" flex bg-gray-100">
      {/* SIDEBAR */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r">
        {/* Search */}
        <div className="p-3 border-b">
          <input
            type="search"
            placeholder="Search user..."
            className="w-full p-2 rounded-lg border outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* User List */}
        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <p className="p-4 text-center text-gray-500">Loading...</p>
          ) : (
            currentData?.users?.map((user) => (
              <Sidebar key={user._id} {...user} />
            ))
          )}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 p-3 text-red-500 border-t hover:bg-red-50"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </aside>

      {/* CHAT AREA */}
      <main className="flex-1 flex flex-col h-screen">
        {/* Chat Header */}
        <header className="flex items-center justify-between px-4 py-3 bg-white border-b shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
              {activeUser?.fullName?.[0]?.toUpperCase()}
            </div>
            <div>
              <p className="font-semibold">
                {activeUser?.fullName || "Select a user"}
              </p>
              <p className="text-sm text-green-500">online</p>
            </div>
          </div>
        </header>
        {console.log("messages",messages)}
        <Messages messages={messages} users={currentData} />
        {/* Message Input */}
        <div className="p-3 bg-white border-t flex gap-2 shrink-0">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Send
          </button>
        </div>
      </main>
    </div>
  );
};

export { Home as Component };
