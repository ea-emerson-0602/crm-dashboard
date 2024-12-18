import React, { useState } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';

const FilterableTable = () => {
  const initialData = [
    { id: 1, name: 'Winfield Asher', topic: 'Cafe A360 for commercial use', status: 'New', created: '4/01/2024 12:00 PM' },
    { id: 2, name: 'Jack Love', topic: 'Upgrading service plan', status: 'New', created: '3/30/2024 7:45 AM' },
    { id: 3, name: 'Harrison Curtis', topic: 'Issue with throughput on ExpressoMaster', status: 'New', created: '3/29/2024 3:30 PM' },
    { id: 4, name: 'Jermaine Barrett', topic: 'New master in distribution facility', status: 'New', created: '3/25/2024 11:05 AM' },
    { id: 5, name: 'Gerald Stephens', topic: 'Concerns on current machines', status: 'New', created: '3/21/2024 4:50 PM' },
    { id: 6, name: 'Halle Griffiths', topic: 'Expanding business', status: 'New', created: '3/21/2024 10:20 AM' },
    { id: 7, name: 'Rachel Michael', topic: 'Addressing service concerns', status: 'New', created: '3/19/2024 1:15 PM' },
    { id: 8, name: 'Alex Baker', topic: 'Premium coffee beans', status: 'New', created: '3/17/2024 8:00 AM' },
    { id: 9, name: 'Lila Patel', topic: 'Cafe A360 bulk rate', status: 'New', created: '3/11/2024 2:45 PM' },
    { id: 10, name: 'Jane Reyes', topic: 'Improving cost per cup', status: 'New', created: '3/10/2024 9:40 AM' },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Handle search/filter
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = initialData.filter(item => 
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.topic.toLowerCase().includes(term.toLowerCase()) ||
      item.created.toLowerCase().includes(term.toLowerCase())
    );
    setData(filtered);
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  return (
    <div className="w-full max-w-5xl p-4 bg-white rounded-lg">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Sort, filter and search with Copilot"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b text-sm text-gray-600">
            <th className="pb-2 pr-4 w-8">
              <input type="checkbox" className="rounded" />
            </th>
            <th className="pb-2 text-left font-medium" onClick={() => handleSort('name')}>
              <div className="flex items-center gap-2">
                Name
                <div className="flex flex-col">
                  <ChevronUp className={`w-3 h-3 ${sortConfig.key === 'name' && sortConfig.direction === 'ascending' ? 'text-blue-600' : 'text-gray-400'}`} />
                  <ChevronDown className={`w-3 h-3 -mt-1 ${sortConfig.key === 'name' && sortConfig.direction === 'descending' ? 'text-blue-600' : 'text-gray-400'}`} />
                </div>
              </div>
            </th>
            <th className="pb-2 text-left font-medium" onClick={() => handleSort('topic')}>
              <div className="flex items-center gap-2">
                Topic
                <div className="flex flex-col">
                  <ChevronUp className={`w-3 h-3 ${sortConfig.key === 'topic' && sortConfig.direction === 'ascending' ? 'text-blue-600' : 'text-gray-400'}`} />
                  <ChevronDown className={`w-3 h-3 -mt-1 ${sortConfig.key === 'topic' && sortConfig.direction === 'descending' ? 'text-blue-600' : 'text-gray-400'}`} />
                </div>
              </div>
            </th>
            <th className="pb-2 text-left font-medium">Status reason</th>
            <th className="pb-2 text-left font-medium" onClick={() => handleSort('created')}>
              <div className="flex items-center gap-2">
                Created on
                <div className="flex flex-col">
                  <ChevronUp className={`w-3 h-3 ${sortConfig.key === 'created' && sortConfig.direction === 'ascending' ? 'text-blue-600' : 'text-gray-400'}`} />
                  <ChevronDown className={`w-3 h-3 -mt-1 ${sortConfig.key === 'created' && sortConfig.direction === 'descending' ? 'text-blue-600' : 'text-gray-400'}`} />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b last:border-b-0 hover:bg-gray-50">
              <td className="py-3 pr-4">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="py-3">{item.name}</td>
              <td className="py-3">{item.topic}</td>
              <td className="py-3">{item.status}</td>
              <td className="py-3">{item.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterableTable;