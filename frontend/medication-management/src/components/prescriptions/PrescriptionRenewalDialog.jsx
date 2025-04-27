import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

function PrescriptionRenewalDialog({ open, onOpenChange }) {
  const [selectedMedications, setSelectedMedications] = useState([]);
  const [notes, setNotes] = useState('');
  const [pharmacy, setPharmacy] = useState('default');

  const medications = [
    { id: 'med1', name: 'Lisinopril 10mg', refillDate: 'May 15, 2025', pillsRemaining: 12 },
    { id: 'med2', name: 'Metformin 500mg', refillDate: 'May 5, 2025', pillsRemaining: 8 },
    { id: 'med3', name: 'Atorvastatin 20mg', refillDate: 'June 2, 2025', pillsRemaining: 24 },
  ];

  const handleCheckboxChange = (medicationId) => {
    setSelectedMedications((prev) =>
      prev.includes(medicationId) ? prev.filter((id) => id !== medicationId) : [...prev, medicationId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the renewal request
    console.log('Renewal request:', { selectedMedications, notes, pharmacy });
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h2 className="text-lg font-semibold">Request Prescription Renewals</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Select the medications you need to renew and submit your request.
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
          <div className="space-y-4">
            <div className="space-y-4">
              <label className="block text-sm font-medium">Select Medications</label>
              {medications.map((medication) => (
                <div key={medication.id} className="flex items-center space-x-2 border p-3 rounded-md">
                  <input
                    type="checkbox"
                    id={medication.id}
                    checked={selectedMedications.includes(medication.id)}
                    onChange={() => handleCheckboxChange(medication.id)}
                    className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <div className="grid gap-1.5 leading-none w-full">
                    <div className="flex justify-between w-full">
                      <label
                        htmlFor={medication.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {medication.name}
                      </label>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{medication.pillsRemaining} pills left</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Refill date: {medication.refillDate}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="pharmacy" className="block text-sm font-medium">
                Preferred Pharmacy
              </label>
              <select
                id="pharmacy"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                value={pharmacy}
                onChange={(e) => setPharmacy(e.target.value)}
              >
                <option value="default">MedPlus Pharmacy (Default)</option>
                <option value="walgreens">Walgreens</option>
                <option value="cvs">CVS Pharmacy</option>
                <option value="walmart">Walmart Pharmacy</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="notes" className="block text-sm font-medium">
                Notes for Doctor (Optional)
              </label>
              <textarea
                id="notes"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special instructions or changes to discuss?"
                rows={3}
              />
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              disabled={selectedMedications.length === 0}
            >
              Submit Renewal Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PrescriptionRenewalDialog;