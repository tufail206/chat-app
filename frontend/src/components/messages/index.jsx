import React from 'react'

const Messages = ({messages,currentUsers}) => {
    console.log("messages ,in message", messages);
    console.log("current users ,in message", currentUsers);
  return (
    <>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {/* Sender */}
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Me */}
        <div
          className="max-w-[70%] ml-auto bg-green-100 p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hi!
            LoremipsumdolorsitametconsecteturadipisicingelitVeryVeryVeryLongText
          </p>
        </div>
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>{" "}
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>{" "}
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>{" "}
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>{" "}
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>{" "}
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          className="max-w-[70%] ml-auto bg-green-100 p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hi!
            LoremipsumdolorsitametconsecteturadipisicingelitVeryVeryVeryLongText
          </p>
        </div>
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>{" "}
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>{" "}
        <div
          className="max-w-[70%] bg-white p-3 rounded-2xl shadow 
                    break-words break-all whitespace-pre-wrap"
        >
          <p>
            Hello 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Messages