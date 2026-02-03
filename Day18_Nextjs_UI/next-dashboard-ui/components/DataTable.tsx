import { Button } from './ui/Button';


// Table showing actions via Button
export function DataTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-semibold mb-3">Recent Users</h3>

      <table className="w-full text-sm">
        <tbody>
          {['Kavya', 'Shyla', 'Punith'].map((name) => (
            <tr key={name} className="border-b last:border-none">
              <td className="py-2">{name}</td>
              <td className="py-2 text-right space-x-2">
                <Button size="sm" variant="outline">
                  Edit
                </Button>
                <Button size="sm" loading>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
