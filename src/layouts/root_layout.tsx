import Navbar from '@/components/custom/Navbar';
import Footer from '@/components/custom/Footer';
import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center items-center w-full">
        <div className="flex w-full max-w-6xl">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
