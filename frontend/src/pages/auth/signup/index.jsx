import React, { useState } from 'react'

const Signup = () => {
    const [user, setUser] = useState({
      username: "",
      fullName: "",
      password: "",
      conform_password: "",
      gender: "",
    });
  return (
    <div>Signup</div>
  )
}

export  {Signup as Component}