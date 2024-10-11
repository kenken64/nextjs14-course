In Next.js 14, layouts are defined using layout.tsx files, and they are a great way to organize shared parts of your user interface, such as navigation bars, sidebars, or footers. Layouts are reusable, and they can be nested, which makes it easier to create consistent UI across different parts of your application.

Below are more examples of how to effectively use layout routes in Next.js 14, covering various scenarios including nested layouts, shared layouts, and dynamic layouts.

Example Directory Structure for Multiple Layouts
In this example, the application includes a global layout that applies to all pages and multiple nested layouts for specific sections such as Dashboard and Profile.

```
app/
  layout.tsx              // Global layout for all pages
  page.tsx                // Landing page ('/')
  dashboard/
    layout.tsx            // Dashboard-specific layout
    page.tsx              // Dashboard page ('/dashboard')
    settings/
      page.tsx            // Dashboard Settings page ('/dashboard/settings')
  profile/
    layout.tsx            // Profile-specific layout
    page.tsx              // Profile main page ('/profile')
    edit/
      page.tsx            // Profile Edit page ('/profile/edit')
```

Step-by-Step Layout Examples

1. Global Layout (app/layout.tsx)
This layout is the root layout and applies to every page in the application.

// app/layout.tsx

```
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Next.js App',
  description: 'A demonstration of Next.js layout routing',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Global Header</h1>
          <nav>
            <a href="/" className="mr-4">Home</a>
            <a href="/dashboard" className="mr-4">Dashboard</a>
            <a href="/profile">Profile</a>
          </nav>
        </header>
        <main className="min-h-screen p-6">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 My App</p>
        </footer>
      </body>
    </html>
  );
}
```

{children}: Renders the page content that this layout wraps.
Header and Footer are defined globally and are available across all routes.

2. Dashboard Layout (app/dashboard/layout.tsx)
This layout is specific to the dashboard section. It adds a sidebar that is common to all dashboard-related pages.


// app/dashboard/layout.tsx
```
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
```
Sidebar Navigation: The sidebar contains navigation links for the dashboard.
{children} renders pages like /dashboard and /dashboard/settings.

3. Profile Layout (app/profile/layout.tsx)
This layout is specific to the profile section and includes a custom header just for profile-related pages.


// app/profile/layout.tsx
```
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
```

The Profile Header is shown on all profile-related pages (/profile and /profile/edit).
The children prop renders the content for each page nested within the profile section.
Page Examples Using Layouts
4. Landing Page (app/page.tsx)
This is the main landing page, wrapped by the root layout.

// app/page.tsx
```
export default function HomePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Welcome to My App!</h2>
      <p>This is the main landing page.</p>
    </div>
  );
}
```

Global Header and Footer from the Root Layout will be displayed here.

5. Dashboard Main Page (app/dashboard/page.tsx)
This is the main dashboard page.


// app/dashboard/page.tsx
```
export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Home</h2>
      <p>Welcome to the dashboard!</p>
    </div>
  );
}
```
Wrapped by the Dashboard Layout, which includes the sidebar.

6. Dashboard Settings Page (app/dashboard/settings/page.tsx)
Settings page within the dashboard.

tsx
Copy code
// app/dashboard/settings/page.tsx
export default function SettingsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <p>Manage your settings here.</p>
    </div>
  );
}
Also wrapped by the Dashboard Layout, displaying the sidebar.
7. Profile Main Page (app/profile/page.tsx)
The main profile page for the user.

tsx
Copy code
// app/profile/page.tsx
export default function ProfilePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p>View your profile details here.</p>
    </div>
  );
}
Wrapped by the Profile Layout, which includes a profile-specific header.
8. Profile Edit Page (app/profile/edit/page.tsx)
Allows the user to edit their profile.

tsx
Copy code
// app/profile/edit/page.tsx
export default function EditProfilePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <p>Edit your profile information here.</p>
    </div>
  );
}
Also wrapped by the Profile Layout, reusing the profile header.
Key Concepts of Layouts in Next.js 14
Global Layout (app/layout.tsx):

Applied to the entire application.
Ideal for components like headers and footers that need to be present on every page.
Section-Specific Layouts (app/[section]/layout.tsx):

Layouts specific to a folder or section within the application.
Nested layouts wrap only the pages within their folder.
For example, Dashboard Layout wraps only pages under /dashboard.
Nested Layouts:

Layouts can be nested, meaning that child layouts will inherit from parent layouts.
For instance, the Dashboard Layout will also include any elements defined in the Root Layout.
Consistent Look and Feel:

Using layouts ensures a consistent look and feel across similar sections of your application.
For example, the dashboard section has a consistent sidebar navigation.
Summary
Layouts (layout.tsx) are an essential part of Next.js 14 for creating shared page structures.
Root Layout (app/layout.tsx) is applied globally.
Section-Specific Layouts (e.g., app/dashboard/layout.tsx) are used for certain parts of the app to provide a custom layout for those pages.
Layouts allow you to easily reuse UI elements, such as headers, sidebars, and footers, without duplicating code.
Each page is wrapped by its respective layout, which provides a more organized and consistent way to manage application design.
This structure is incredibly powerful for building scalable applications that require different sections with specific layout designs. Let me know if you have more questions or need more specific examples!