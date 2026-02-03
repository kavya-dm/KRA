import { Button } from './ui/Button';

// Dashboard stat card component
 
interface StatCardProps {
  title: string;
  value: string;
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>

      {/* Button reused inside card */}
      <Button size="sm" variant="outline">
        View Details
      </Button>
    </div>
  );
}
