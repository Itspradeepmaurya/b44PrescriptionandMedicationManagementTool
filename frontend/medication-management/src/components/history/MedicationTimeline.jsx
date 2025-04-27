import React, { useState } from 'react';
import { Check, Clock, X, Search, Filter } from 'lucide-react';
import { cn } from '../../utils/helpers';

function MedicationTimeline() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('all');

  // This would typically come from an API or database
  const timelineEvents = [
    {
      id: '1',
      medicationName: 'Lisinopril',
      dosage: '10mg',
      date: 'Today',
      time: '8:00 AM',
      status: 'taken',
      notes: 'Taken with breakfast',
    },
    {
      id: '2',
      medicationName: 'Metformin',
      dosage: '500mg',
      date: 'Today',
      time: '8:00 AM',
      status: 'taken',
    },
    {
      id: '3',
      medicationName: 'Atorvastatin',
      dosage: '20mg',
      date: 'Yesterday',
      time: '8:00 PM',
      status: 'taken',
    },
    {
      id: '4',
      medicationName: 'Metformin',
      dosage: '500mg',
      date: 'Yesterday',
      time: '8:00 PM',
      status: 'missed',
      notes: 'Forgot to take with dinner',
    },
    {
      id: '5',
      medicationName: 'Lisinopril',
      dosage: '10mg',
      date: 'Yesterday',
      time: '8:00 AM',
      status: 'taken',
    },
    {
      id: '6',
      medicationName: 'Metformin',
      dosage: '500mg',
      date: 'Yesterday',
      time: '8:00 AM',
      status: 'taken',
    },
    {
      id: '7',
      medicationName: 'Atorvastatin',
      dosage: '20mg',
      date: '2 days ago',
      time: '8:00 PM',
      status: 'skipped',
      notes: 'Skipped due to stomach upset',
    },
  ];

  const filteredEvents = timelineEvents.filter((event) => {
    const matchesSearch = event.medicationName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || event.status === filterStatus;
    const matchesDate =
      filterDate === 'all' ||
      (filterDate === 'today' && event.date === 'Today') ||
      (filterDate === 'yesterday' && event.date === 'Yesterday') ||
      (filterDate === 'older' && event.date !== 'Today' && event.date !== 'Yesterday');

    return matchesSearch && matchesStatus && matchesDate;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'taken':
        return <Check className="h-5 w-5" />;
      case 'missed':
        return <X className="h-5 w-5" />;
      case 'skipped':
        return <Clock className="h-5 w-5" />;
      default:
        return <Check className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'taken':
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
      case 'missed':
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
      case 'skipped':
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Medication History</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Track your medication history and adherence</p>
      </div>
      <div className="p-4">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Search medications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="w-full sm:w-[180px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="taken">Taken</option>
            <option value="missed">Missed</option>
            <option value="skipped">Skipped</option>
          </select>
          <select
            className="w-full sm:w-[180px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          >
            <option value="all">All Dates</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="older">Older</option>
          </select>
        </div>

        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6 ml-3 space-y-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="relative">
              <div
                className={cn(
                  "absolute -left-8 w-6 h-6 rounded-full flex items-center justify-center",
                  getStatusColor(event.status),
                )}
              >
                {getStatusIcon(event.status)}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border p-4 rounded-md">
                <div>
                  <h4 className="font-medium">
                    {event.medicationName} {event.dosage}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {event.date}, {event.time}
                  </p>
                  {event.notes && <p className="text-sm mt-1 italic">{event.notes}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "px-2 py-1 rounded-md text-xs font-medium",
                      event.status === "taken"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : event.status === "missed"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                    )}
                  >
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {filteredEvents.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-lg font-medium">No history found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MedicationTimeline;