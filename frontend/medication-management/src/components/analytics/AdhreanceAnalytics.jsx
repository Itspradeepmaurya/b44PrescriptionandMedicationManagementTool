import React, { useState } from 'react';
import { cn } from '../../utils/helpers';
import AdherenceChart from '../dashboard/AdherenceChart';
import MonthlyAdherenceChart from './MonthlyAdherenceChart';
import MedicationComparisonChart from './MedicationComparisonChart';

function AdherenceAnalytics() {
  const [activeTab, setActiveTab] = useState('weekly');

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Overall Adherence</h3>
          </div>
          <div>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+5% from last month</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Doses Taken</h3>
          </div>
          <div>
            <div className="text-2xl font-bold">124/135</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Last 30 days</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Streak</h3>
          </div>
          <div>
            <div className="text-2xl font-bold">14 days</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Current perfect streak</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Best Medication</h3>
          </div>
          <div>
            <div className="text-2xl font-bold">Lisinopril</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">98% adherence</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
        <div className="grid w-full grid-cols-3 border-b">
          <button 
            className={cn(
              "py-2 text-center text-sm font-medium",
              activeTab === 'weekly' 
                ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
            onClick={() => setActiveTab('weekly')}
          >
            Weekly View
          </button>
          <button 
            className={cn(
              "py-2 text-center text-sm font-medium",
              activeTab === 'monthly' 
                ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly View
          </button>
          <button 
            className={cn(
              "py-2 text-center text-sm font-medium",
              activeTab === 'medications' 
                ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            )}
            onClick={() => setActiveTab('medications')}
          >
            By Medication
          </button>
        </div>
        
        {activeTab === 'weekly' && (
          <div className="p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg">
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
        
        {activeTab === 'monthly' && (
          <div className="p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg">
              <div className="p-4 border-b">
                <h3 className="text-lg font-medium">Monthly Adherence</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Your medication adherence over the past 30 days</p>
              </div>
              <div className="p-4 pl-2">
                <MonthlyAdherenceChart />
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'medications' && (
          <div className="p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg">
              <div className="p-4 border-b">
                <h3 className="text-lg font-medium">Adherence by Medication</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Compare adherence rates across your medications</p>
              </div>
              <div className="p-4 pl-2">
                <MedicationComparisonChart />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
          <div className="p-4 border-b">
            <h3 className="text-lg font-medium">Adherence Insights</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">AI-powered insights based on your medication patterns</p>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="p-4 border rounded-md bg-teal-50 dark:bg-teal-950 border-teal-200 dark:border-teal-800">
                <h4 className="font-medium text-teal-700 dark:text-teal-300 mb-2">Evening Dose Pattern</h4>
                <p className="text-sm text-teal-600 dark:text-teal-400">
                  You're more likely to miss your evening doses on weekends. Consider setting an additional reminder for
                  Saturday and Sunday evenings.
                </p>
              </div>
              <div className="p-4 border rounded-md bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Metformin Adherence</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Your adherence to Metformin has improved by 15% this month. Keep up the good work!
                </p>
              </div>
              <div className="p-4 border rounded-md bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
                <h4 className="font-medium text-yellow-700 dark:text-yellow-300 mb-2">Refill Prediction</h4>
                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                  Based on your usage patterns, you'll need to refill Lisinopril in approximately 12 days, which is 3
                  days before your scheduled refill date.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-sm">
          <div className="p-4 border-b">
            <h3 className="text-lg font-medium">Adherence Badges</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Achievements for consistent medication adherence</p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 border rounded-md">
                <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-2">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-medium text-center">Perfect Week</h4>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">7 days of perfect adherence</p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-md">
                <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-2">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-medium text-center">Consistency King</h4>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">30 days of 90%+ adherence</p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-2">
                  <span className="text-2xl">🔄</span>
                </div>
                <h4 className="font-medium text-center">Early Bird</h4>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">Take all morning doses on time for 14 days</p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-md bg-gray-50 dark:bg-gray-800">
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-2">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className="font-medium text-center">Perfect Month</h4>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">30 days of perfect adherence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdherenceAnalytics;