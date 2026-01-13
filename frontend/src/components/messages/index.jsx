import React from 'react'

const Messages = ({ messages, users }) => {
  return (
    <>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages?.message?.messages.map((msg) => {
          return (
            <div
              className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
            >
              <p>{msg?.message}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Messages