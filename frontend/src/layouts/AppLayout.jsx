import React from 'react'
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <h2>AppLayout</h2>
      <main className='container mx-auto'>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout