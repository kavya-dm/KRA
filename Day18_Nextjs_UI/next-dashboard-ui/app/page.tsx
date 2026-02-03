import { Sidebar } from '@/components/Sidebar';
import { StatCard } from '@/components/StatCard';
import { DataTable } from '@/components/DataTable';
import { Button } from '@/components/ui/Button';


 // Main dashboard page
 
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
        {/* Hero CTA */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button size="lg">Create Report</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Users" value="1,245" />
          <StatCard title="Revenue" value="$9,300" />
          <StatCard title="Orders" value="320" />
        </div>

        {/* Form actions */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <div className="flex gap-2">
            <Button>Save</Button>
            <Button variant="outline">Reset</Button>
          </div>
        </div>

        {/* Table */}
        <DataTable />
      </main>
    </div>
  );
}
