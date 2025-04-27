import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

function MedicationReminderDialog({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    medicationName: '',
    dosage: '',
    frequency: 'once-daily',
    timeOfDay: 'morning',
    instructions: '',
    startDate: '',
    endDate: '',
    pillCount: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the medication data
    console.log('Medication data:', formData);
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h2 className="text-lg font-semibold">Add New Medication</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter the details of your medication to set up reminders.
            </p>
          </div>
          <button 
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="medicationName" className="block text-sm font-medium">
                  Medication Name
                </label>
                <input
                  id="medicationName"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                  value={formData.medicationName}
                  onChange={(e) => handleChange('medicationName', e.target.value)}
                  placeholder="e.g., Lisinopril"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="dosage" className="block text-sm font-medium">
                  Dosage
                </label>
                <input
                  id="dosage"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                  value={formData.dosage}
                  onChange={(e) => handleChange('dosage', e.target.value)}
                  placeholder="e.g., 10mg"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="frequency" className="block text-sm font-medium">
                  Frequency
                </label>
                <select
                  id="frequency"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                  value={formData.frequency}
                  onChange={(e) => handleChange('frequency', e.target.value)}
                >
                  <option value="once-daily">Once Daily</option>
                  <option value="twice-daily">Twice Daily</option>
                  <option value="three-times-daily">Three Times Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="as-needed">As Needed</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="timeOfDay" className="block text-sm font-medium">
                  Time of Day
                </label>
                <select
                  id="timeOfDay"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                  value={formData.timeOfDay}
                  onChange={(e) => handleChange('timeOfDay', e.target.value)}
                >
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                  <option value="bedtime">Bedtime</option>
                  <option value="morning-evening">Morning & Evening</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="startDate" className="block text-sm font-medium">
                  Start Date
                </label>
                <input
                  id="startDate"
                  type="date"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                  value={formData.startDate}
                  onChange={(e) => handleChange('startDate', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="endDate" className="block text-sm font-medium">
                  End Date (Optional)
                </label>
                <input
                  id="endDate"
                  type="date"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                  value={formData.endDate}
                  onChange={(e) => handleChange('endDate', e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="pillCount" className="block text-sm font-medium">
                Pill Count
              </label>
              <input
                id="pillCount"
                type="number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                value={formData.pillCount}
                onChange={(e) => handleChange('pillCount', e.target.value)}
                placeholder="Number of pills in prescription"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="instructions" className="block text-sm font-medium">
                Special Instructions
              </label>
              <textarea
                id="instructions"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                value={formData.instructions}
                onChange={(e) => handleChange('instructions', e.target.value)}
                placeholder="e.g., Take with food, avoid grapefruit juice"
                rows={3}
              />
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Save Medication
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MedicationReminderDialog;