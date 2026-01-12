import React from "react";

const Sidebar = ({ fullName, _id, profile_photo }) => {
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
          {profile_photo ? (
            <img
              src={profile_photo}
              alt={fullName?.[0]}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="font-semibold text-gray-700">
              {fullName?.[0]?.toUpperCase()}
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
            title={fullName}
          >
            {fullName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
