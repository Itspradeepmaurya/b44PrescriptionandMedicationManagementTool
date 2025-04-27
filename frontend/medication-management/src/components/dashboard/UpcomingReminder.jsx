import React, { useState } from 'react';
import { Bell, Check } from 'lucide-react';
import { cn } from '../../utils/helpers';

function UpcomingReminders() {
  const [reminders, setReminders] = useState([
    {
      id: '1',
      medicationName: 'Lisinopril',
      dosage: '10mg',
      time: '8:00 AM',
      date: 'Today',
      status: 'taken',
    },
    {
      id: '2',
      medicationName: 'Atorvastatin',
      dosage: '20mg',
      time: '8:00 PM',
      date: 'Today',
      status: 'upcoming',
    },
    {
      id: '3',
      medicationName: 'Metformin',
      dosage: '500mg',
      time: '8:00 PM',
      date: 'Today',
      status: 'upcoming',
    },
    {
      id: '4',
      medicationName: 'Lisinopril',
      dosage: '10mg',
      time: '8:00 AM',
      date: 'Tomorrow',
      status: 'upcoming',
    },
    {
      id: '5',
      medicationName: 'Metformin',
      dosage: '500mg',
      time: '8:00 AM',
      date: 'Tomorrow',
      status: 'upcoming',
    },
  ]);

  const handleMarkAsTaken = (id) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, status: 'taken' } : reminder))
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Upcoming Reminders</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Your medication schedule for the next 24 hours</p>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className={cn(
                "flex items-center justify-between p-3 rounded-md border",
                reminder.status === "taken" && "bg-gray-50 border-green-200 dark:bg-gray-800 dark:border-green-900",
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    reminder.status === "upcoming"
                      ? "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300"
                      : reminder.status === "taken"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
                  )}
                >
                  {reminder.status === "taken" ? <Check className="h-5 w-5" /> : <Bell className="h-5 w-5" />}
                </div>
                <div>
                  <h4 className="font-medium">
                    {reminder.medicationName} {reminder.dosage}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {reminder.date}, {reminder.time}
                  </p>
                </div>
              </div>
              {reminder.status === "upcoming" && (
                <button 
                  className="px-3 py-1 text-sm bg-teal-500 text-white rounded-md hover:bg-teal-600"
                  onClick={() => handleMarkAsTaken(reminder.id)}
                >
                  Mark as Taken
                </button>
              )}
              {reminder.status === "taken" && (
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Taken</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingReminders;