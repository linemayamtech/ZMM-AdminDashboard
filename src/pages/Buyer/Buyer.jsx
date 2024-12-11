import React from 'react';

const Buyer = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Company Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Phone Number</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Location</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'LBIN256347', status: 'Active', company: 'Emayam techn...', email: 'abucr3@gmail.com', phone: '6383516899', location: 'INDIA', color: 'green-500' },
              { id: 'LBIN256347', status: 'Deactivate', company: 'Emayam techn...', email: 'abucr3@gmail.com', phone: '6383516899', location: 'INDIA', color: 'red-500' },
              { id: 'LBIN256347', status: 'On Hold', company: 'Emayam techn...', email: 'abucr3@gmail.com', phone: '6383516899', location: 'INDIA', color: 'gray-500' },
              { id: 'LBIN256347', status: 'Premium', company: 'Emayam techn...', email: 'abucr3@gmail.com', phone: '6383516899', location: 'INDIA', color: 'yellow-500' },
              { id: 'LBIN256347', status: 'Active', company: 'Emayam techn...', email: 'abucr3@gmail.com', phone: '6383516899', location: 'INDIA', color: 'green-500' },
            ].map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700 border">{row.id}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border">
                  <span className={`inline-block px-3 py-1 text-xs font-medium text-white bg-${row.color} rounded-full`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 border">{row.company}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border">{row.email}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border">{row.phone}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border">{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Buyer;
