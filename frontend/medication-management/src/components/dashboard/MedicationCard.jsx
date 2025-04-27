import React, { useState } from 'react';
import { Check, Clock, RefreshCw } from 'lucide-react';
import { cn } from '../../utils/helpers';
import MedicationDetailsDialog from '../medications/MedicationDetailsDialog';

function MedicationCard({
  name,
  dosage,
  frequency,
  timeOfDay,
  refillDate,
  pillsRemaining,
  nextDose,
  status,
  onRenewal,
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [taken, setTaken] = useState(false);

  const getStatusColor = () => {
    switch (status) {
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

  const getProgressColor = () => {
    if (pillsRemaining <= 5) return "bg-red-500";
    if (pillsRemaining <= 10) return "bg-yellow-500";
    return "bg-teal-500";
  };

  const progressPercentage = (pillsRemaining / 30) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm overflow-hidden">
      <div className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {dosage} - {frequency}
            </p>
          </div>
          <div className={cn("px-2 py-1 rounded-md text-xs font-medium", getStatusColor())}>
            {status === "active" ? "Active" : status === "warning" ? "Refill Soon" : "Refill Now"}
          </div>
        </div>
      </div>
      <div className="px-4 pb-2">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Time of day:</span>
            <span className="font-medium">{timeOfDay}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Next dose:</span>
            <span className="font-medium">{nextDose}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Refill date:</span>
            <span className="font-medium">{refillDate}</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Pills remaining:</span>
              <span className="font-medium">{pillsRemaining}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className={cn("h-2 rounded-full", getProgressColor())} 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 flex justify-between border-t">
        <button
          className={cn(
            "px-3 py-1 rounded-md text-sm flex items-center",
            taken 
              ? "border border-green-500 text-green-500" 
              : "bg-teal-500 text-white hover:bg-teal-600"
          )}
          onClick={() => setTaken(!taken)}
        >
          {taken ? (
            <>
              <Check className="mr-1 h-4 w-4" />
              Taken
            </>
          ) : (
            <>
              <Clock className="mr-1 h-4 w-4" />
              Take Now
            </>
          )}
        </button>
        <div className="flex gap-2">
          <button 
            className="p-1 rounded-md border hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={onRenewal}
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button 
            className="px-3 py-1 rounded-md border text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setDetailsOpen(true)}
          >
            Details
          </button>
        </div>
      </div>
      <MedicationDetailsDialog
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        medication={{
          name,
          dosage,
          frequency,
          timeOfDay,
          refillDate,
          pillsRemaining,
          nextDose,
          status,
          instructions: "Take with food. Avoid grapefruit juice.",
          sideEffects: "May cause dizziness, headache, or nausea.",
          prescribedBy: "Dr. Sarah Johnson",
          prescriptionDate: "January 15, 2025",
          pharmacy: "MedPlus Pharmacy",
          pharmacyPhone: "(555) 123-4567",
        }}
      />
    </div>
  );
}

export default MedicationCard;