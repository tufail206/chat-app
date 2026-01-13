import React from "react";
import { setSelectedUser } from "../../store/slices/auth";
import { useDispatch } from "react-redux";
const Sidebar = ({user}) => {
  const dispatch=useDispatch()
    const handleSetConverSation=(u)=>{
      dispatch(setSelectedUser(u));
    }
  return (
    <div className="px-2">
      <div
        className="flex items-center gap-3 p-2 rounded-lg cursor-pointer 
                   hover:bg-gray-200 transition"
      >
        {/* Avatar */}
        <div
          className="relative w-10 h-10 rounded-full bg-gray-300 
                        flex items-center justify-center shrink-0"
        >
          {user?.profile_photo ? (
            <img
              src={user?.profile_photo}
              alt={user?.fullName?.[0]}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="font-semibold text-gray-700">
              {user?.fullName?.[0]?.toUpperCase()}
            </span>
          )}

          {/* Online Indicator */}
          <span
            className="absolute bottom-0 right-0 w-2.5 h-2.5 
                           bg-green-500 border-2 border-white rounded-full"
          />
        </div>

        {/* Name */}
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-medium text-gray-800 truncate"
            title={user?.fullName}
            onClick={()=>handleSetConverSation(user)}
          >
            {user?.fullName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
