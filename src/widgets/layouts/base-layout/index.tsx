import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/features/header';
import { Footer } from '@/features/footer';

export const BaseLayout: FC = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <main className='flex flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
