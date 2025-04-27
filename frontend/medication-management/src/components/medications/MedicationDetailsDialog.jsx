import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { cn } from '../../utils/helpers';

function MedicationDetailsDialog({ open, onOpenChange, medication }) {
  const [activeTab, setActiveTab] = useState('details');

  const getStatusColor = () => {
    switch (medication.status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "warning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "danger":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h2 className="text-lg font-semibold">
              {medication.name} {medication.dosage}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {medication.frequency} - {medication.timeOfDay}
            </p>
          </div>
          <div className={cn("px-2 py-1 rounded-md text-xs font-medium", getStatusColor())}>
            {medication.status === "active"
              ? "Active"
              : medication.status === "warning"
                ? "Refill Soon"
                : "Refill Now"}
          </div>
          <button 
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="grid w-full grid-cols-3 border-b">
          <button 
            className={cn(
              "py-2 text-center text-sm font-medium",
              activeTab === 'details' 
                ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
          <button 
            className={cn(
              "py-2 text-center text-sm font-medium",
              activeTab === 'schedule' 
                ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
          </button>
          <button 
            className={cn(
              "py-2 text-center text-sm font-medium",
              activeTab === 'prescription' 
                ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
            onClick={() => setActiveTab('prescription')}
          >
            Prescription
          </button>
        </div>
        
        <div className="p-4">
          {activeTab === 'details' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Instructions</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{medication.instructions}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Side Effects</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{medication.sideEffects}</p>
              </div>
            </div>
          )}
          
          {activeTab === 'schedule' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 border rounded-lg p-3">
                  <h4 className="text-sm font-medium mb-1">Next Dose</h4>
                  <p className="font-medium">{medication.nextDose}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 border rounded-lg p-3">
                  <h4 className="text-sm font-medium mb-1">Frequency</h4>
                  <p className="font-medium">{medication.frequency}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{medication.timeOfDay}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Upcoming Doses</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm py-2 border-b">
                    <span>Today, 8:00 PM</span>
                    <span className="text-gray-500 dark:text-gray-400">Evening dose</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b">
                    <span>Tomorrow, 8:00 AM</span>
                    <span className="text-gray-500 dark:text-gray-400">Morning dose</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b">
                    <span>Tomorrow, 8:00 PM</span>
                    <span className="text-gray-500 dark:text-gray-400">Evening dose</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'prescription' && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="text-gray-500 dark:text-gray-400">Prescribed by:</span>
                <span>{medication.prescribedBy}</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="text-gray-500 dark:text-gray-400">Prescription date:</span>
                <span>{medication.prescriptionDate}</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="text-gray-500 dark:text-gray-400">Refill date:</span>
                <span>{medication.refillDate}</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="text-gray-500 dark:text-gray-400">Pills remaining:</span>
                <span>{medication.pillsRemaining}</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="text-gray-500 dark:text-gray-400">Pharmacy:</span>
                <span>{medication.pharmacy}</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="text-gray-500 dark:text-gray-400">Pharmacy phone:</span>
                <span>{medication.pharmacyPhone}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MedicationDetailsDialog;