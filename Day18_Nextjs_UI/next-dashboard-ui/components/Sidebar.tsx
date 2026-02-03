import { Button } from './ui/Button';


// Sidebar uses Button for navigation
export function Sidebar() {
  return (
    <aside className="w-64 bg-white p-4 shadow-md hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>

      <nav className="space-y-2">
        <Button variant="outline">Overview</Button>
        <Button variant="outline">Users</Button>
        <Button variant="outline">Settings</Button>
      </nav>
    </aside>
  );
}
