import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import MedicationCard from '../dashboard/MedicationCard';
import MedicationReminderDialog from './MedicationReminderDialog';
import PrescriptionRenewalDialog from '../prescriptions/PrescriptionRenewalDialog';

function MedicationList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [renewalOpen, setRenewalOpen] = useState(false);
  const [reminderOpen, setReminderOpen] = useState(false);

  // This would typically come from an API or database
  const medications = [
    {
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      timeOfDay: 'Morning',
      refillDate: 'May 15, 2025',
      pillsRemaining: 12,
      nextDose: 'Today, 8:00 AM',
      status: 'active',
    },
    {
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily',
      timeOfDay: 'Evening',
      refillDate: 'June 2, 2025',
      pillsRemaining: 24,
      nextDose: 'Today, 8:00 PM',
      status: 'active',
    },
    {
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      timeOfDay: 'Morning & Evening',
      refillDate: 'May 5, 2025',
      pillsRemaining: 8,
      nextDose: 'Today, 8:00 PM',
      status: 'warning',
    },
    {
      name: 'Amlodipine',
      dosage: '5mg',
      frequency: 'Once daily',
      timeOfDay: 'Morning',
      refillDate: 'May 20, 2025',
      pillsRemaining: 15,
      nextDose: 'Tomorrow, 8:00 AM',
      status: 'active',
    },
    {
      name: 'Levothyroxine',
      dosage: '75mcg',
      frequency: 'Once daily',
      timeOfDay: 'Morning',
      refillDate: 'April 30, 2025',
      pillsRemaining: 3,
      nextDose: 'Tomorrow, 8:00 AM',
      status: 'danger',
    },
  ];

  const filteredMedications = medications.filter((medication) => {
    const matchesSearch = medication.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === 'all' ||
      (filterStatus === 'active' && medication.status === 'active') ||
      (filterStatus === 'refill' && (medication.status === 'warning' || medication.status === 'danger'));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
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
          <option value="all">All Medications</option>
          <option value="active">Active</option>
          <option value="refill">Needs Refill</option>
        </select>
        <button
          className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          onClick={() => setReminderOpen(true)}
        >
          Add Medication
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredMedications.map((medication, index) => (
          <MedicationCard
            key={index}
            name={medication.name}
            dosage={medication.dosage}
            frequency={medication.frequency}
            timeOfDay={medication.timeOfDay}
            refillDate={medication.refillDate}
            pillsRemaining={medication.pillsRemaining}
            nextDose={medication.nextDose}
            status={medication.status}
            onRenewal={() => setRenewalOpen(true)}
          />
        ))}
      </div>

      {filteredMedications.length === 0 && (
        <div className="text-center py-10">
          <h3 className="text-lg font-medium">No medications found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}

      <MedicationReminderDialog open={reminderOpen} onOpenChange={setReminderOpen} />
      <PrescriptionRenewalDialog open={renewalOpen} onOpenChange={setRenewalOpen} />
    </div>
  );
}

export default MedicationList;