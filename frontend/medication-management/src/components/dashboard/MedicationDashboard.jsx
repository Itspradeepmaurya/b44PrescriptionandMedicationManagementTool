import React, { useState } from 'react';
import { Calendar, Clock, Plus, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import MedicationCard from './MedicationCard';
import UpcomingReminders from './UpcomingReminders';
import AdherenceChart from './AdherenceChart';
import MedicationReminderDialog from '../medications/MedicationReminderDialog';
import PrescriptionRenewalDialog from '../prescriptions/PrescriptionRenewalDialog';
import { cn } from '../../utils/helpers';

function MedicationDashboard() {
  const [reminderOpen, setReminderOpen] = useState(false);
  const [renewalOpen, setRenewalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('medications');

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <button 
            className="flex items-center px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600"
            onClick={() => setReminderOpen(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Medication
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Active Medications</h3>
            <div className="h-4 w-4 text-teal-500">
              <Plus className="h-4 w-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+1 from last month</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Today's Doses</h3>
            <div className="h-4 w-4 text-teal-500">
              <Clock className="h-4 w-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold">3/4</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">1 dose remaining</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Adherence Rate</h3>
            <div className="h-4 w-4 text-teal-500">
              <Calendar className="h-4 w-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+5% from last month</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Renewals Needed</h3>
            <div className="h-4 w-4 text-teal-500">
              <RefreshCw className="h-4 w-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Due within 7 days</p>
          </div>
          <div className="p-2">
            <button 
              className="w-full text-xs h-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={() => setRenewalOpen(true)}
            >
              Request Renewals
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
        <div className="grid w-full grid-cols-3 border-b">
          <button 
            className={cn(
              "py-2 text-center text-sm font-medium",
              activeTab === 'medications' 
                ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
            onClick={() => setActiveTab('medications')}
          >
            Current Medications
          </button>
          <button 
            className={cn(
              "py-2 text-center text-sm font-medium",
              activeTab === 'upcoming' 
                ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Reminders
          </button>
          <button 
            className={cn(
              "py-2 text-center text-sm font-medium",
              activeTab === 'adherence' 
                ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
            onClick={() => setActiveTab('adherence')}
          >
            Adherence Tracking
          </button>
        </div>
        
        {activeTab === 'medications' && (
          <div className="p-4 space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <MedicationCard
                name="Lisinopril"
                dosage="10mg"
                frequency="Once daily"
                timeOfDay="Morning"
                refillDate="May 15, 2025"
                pillsRemaining={12}
                nextDose="Today, 8:00 AM"
                status="active"
                onRenewal={() => setRenewalOpen(true)}
              />
              <MedicationCard
                name="Atorvastatin"
                dosage="20mg"
                frequency="Once daily"
                timeOfDay="Evening"
                refillDate="June 2, 2025"
                pillsRemaining={24}
                nextDose="Today, 8:00 PM"
                status="active"
                onRenewal={() => setRenewalOpen(true)}
              />
              <MedicationCard
                name="Metformin"
                dosage="500mg"
                frequency="Twice daily"
                timeOfDay="Morning & Evening"
                refillDate="May 5, 2025"
                pillsRemaining={8}
                nextDose="Today, 8:00 PM"
                status="warning"
                onRenewal={() => setRenewalOpen(true)}
              />
            </div>
            <div className="flex justify-center">
              <Link to="/medications">
                <button className="px-4 py-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  View All Medications
                </button>
              </Link>
            </div>
          </div>
        )}
        
        {activeTab === 'upcoming' && (
          <div className="p-4">
            <UpcomingReminders />
          </div>
        )}
        
        {activeTab === 'adherence' && (
          <div className="p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
              <div className="p-4 border-b">
                <h3 className="text-lg font-medium">Weekly Adherence</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Your medication adherence over the past 7 days</p>
              </div>
              <div className="p-4 pl-2">
                <AdherenceChart />
              </div>
            </div>
          </div>
        )}
      </div>

      <MedicationReminderDialog open={reminderOpen} onOpenChange={setReminderOpen} />
      <PrescriptionRenewalDialog open={renewalOpen} onOpenChange={setRenewalOpen} />
    </div>
  );
}

export default MedicationDashboard;