import React from 'react';
import Search from '../../../ui/Dashboard/Search';
import Button from '../../../ui/button';

export default function CandidateA() {
  const candidates = [
    { name: 'John Doe', email: 'john.doe@example.com', address: '123 Rue Exemple' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', address: '456 Avenue Exemple' },
    { name: 'Paul Dupont', email: 'paul.dupont@example.com', address: '789 Boulevard Exemple' },
    { name: 'John Doe', email: 'john.doe@example.com', address: '123 Rue Exemple' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', address: '456 Avenue Exemple' },
    { name: 'Paul Dupont', email: 'paul.dupont@example.com', address: '789 Boulevard Exemple' },
    { name: 'John Doe', email: 'john.doe@example.com', address: '123 Rue Exemple' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', address: '456 Avenue Exemple' },
    { name: 'Paul Dupont', email: 'paul.dupont@example.com', address: '789 Boulevard Exemple' },
    { name: 'John Doe', email: 'john.doe@example.com', address: '123 Rue Exemple' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', address: '456 Avenue Exemple' },
    { name: 'Paul Dupont', email: 'paul.dupont@example.com', address: '789 Boulevard Exemple' },
    { name: 'John Doe', email: 'john.doe@example.com', address: '123 Rue Exemple' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', address: '456 Avenue Exemple' },
    { name: 'Paul Dupont', email: 'paul.dupont@example.com', address: '789 Boulevard Exemple' },
  ];

  return (
    <div>
      <div className="w-full p-4 flex items-center justify-between">
        <p className="font-medium">Liste récente</p>
        <div className="flex gap-2">
          <Search />
          <Button className="whitespace-nowrap">+ Ajouter une candidate</Button>
        </div>
      </div>

      {/* Tableau des candidats */}
      <div className="p-4">
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom
              </th>
              <th className="px-4 py-2 border-b bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-2 border-b bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Adresse
              </th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="px-4 py-2 border-b text-sm text-gray-700">{candidate.name}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{candidate.email}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{candidate.address}</td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
      </div>
    </div>
  );
}
