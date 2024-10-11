import { ReactNode } from 'react';

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="bg-purple-500 text-white p-4">
        <h2 className="text-xl font-semibold">Profile Header</h2>
        <nav>
          <a href="/profile" className="mr-4">Profile Home</a>
          <a href="/profile/edit">Edit Profile</a>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}