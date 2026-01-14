import React, { memo, useCallback, useMemo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setSelectedUser } from "../../store/slices/auth";

const Sidebar = ({ user }) => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((s) => s.auth.selectedUser, shallowEqual);

  // Memoize callback so it doesn't recreate on each render
  const handleSetConversation = useCallback(() => {
    dispatch(setSelectedUser(user));
  }, [dispatch, user]);

  // Memoize whether this user is active
  const isActive = useMemo(
    () => selectedUser?._id === user._id,
    [selectedUser?._id, user._id]
  );

  return (
    <div className="px-2 space-y-2">
      <div
        onClick={handleSetConversation}
        className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition ${
          isActive ? "bg-gray-500 text-white" : ""
        }`}
      >
        {/* Avatar */}
        <div className="relative w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shrink-0">
          {user?.profile_photo ? (
            <img
              src={user.profile_photo}
              alt={user?.fullName?.[0]}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="font-semibold text-gray-700">
              {user?.fullName?.[0]?.toUpperCase()}
            </span>
          )}
          {/* Online indicator */}
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
        </div>

        {/* Name */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate" title={user?.fullName}>
            {user?.fullName}
          </p>
        </div>
      </div>
    </div>
  );
};

// Memoize Sidebar so it only re-renders if `user` or `selectedUser` changes
export default memo(Sidebar);
