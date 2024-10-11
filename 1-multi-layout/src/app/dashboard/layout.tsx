import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-100 p-4">
        <h2 className="font-bold text-lg mb-4">Dashboard Sidebar</h2>
        <nav>
          <ul>
            <li><a href="/dashboard">Dashboard Home</a></li>
            <li><a href="/dashboard/settings">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}