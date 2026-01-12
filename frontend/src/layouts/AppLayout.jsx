import React from 'react'
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <main className="container mx-auto  ">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout