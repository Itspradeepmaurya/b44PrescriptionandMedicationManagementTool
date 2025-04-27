import React, { useState } from 'react';
import { cn } from '../../utils/helpers';

function UserProfile() {
  const [activeTab, setActiveTab] = useState('personal');
  
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    dateOfBirth: '1980-05-15',
    allergies: 'Penicillin, Sulfa drugs',
    conditions: 'Hypertension, Type 2 Diabetes',
  });

  const [doctorInfo, setDoctorInfo] = useState({
    primaryDoctor: 'Dr. Sarah Johnson',
    primaryDoctorPhone: '(555) 987-6543',
    primaryDoctorEmail: 'dr.johnson@healthcare.com',
    specialists: [
      {
        name: 'Dr. Michael Chen',
        specialty: 'Cardiologist',
        phone: '(555) 234-5678',
        email: 'dr.chen@healthcare.com',
      },
      {
        name: 'Dr. Emily Rodriguez',
        specialty: 'Endocrinologist',
        phone: '(555) 345-6789',
        email: 'dr.rodriguez@healthcare.com',
      },
    ],
  });

  const [pharmacyInfo, setPharmacyInfo] = useState({
    primaryPharmacy: 'MedPlus Pharmacy',
    primaryPharmacyPhone: '(555) 123-4567',
    primaryPharmacyAddress: '123 Health St, Medical City, MC 12345',
    alternatePharmacy: 'City Drugs',
    alternatePharmacyPhone: '(555) 987-6543',
    alternatePharmacyAddress: '456 Wellness Ave, Medical City, MC 12345',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailReminders: true,
    pushNotifications: true,
    smsReminders: false,
    dailySummary: true,
    missedDoseAlerts: true,
    refillReminders: true,
  });

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNotificationChange = (field, value) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
      <div className="grid w-full grid-cols-4 border-b">
        <button 
          className={cn(
            "py-2 text-center text-sm font-medium",
            activeTab === 'personal' 
              ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          )}
          onClick={() => setActiveTab('personal')}
        >
          Personal Info
        </button>
        <button 
          className={cn(
            "py-2 text-center text-sm font-medium",
            activeTab === 'doctors' 
              ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          )}
          onClick={() => setActiveTab('doctors')}
        >
          Doctors
        </button>
        <button 
          className={cn(
            "py-2 text-center text-sm font-medium",
            activeTab === 'pharmacy' 
              ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          )}
          onClick={() => setActiveTab('pharmacy')}
        >
          Pharmacy
        </button>
        <button 
          className={cn(
            "py-2 text-center text-sm font-medium",
            activeTab === 'notifications' 
              ? "border-b-2 border-teal-500 text-teal-600 dark:text-teal-400" 
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          )}
          onClick={() => setActiveTab('notifications')}
        >
          Notifications
        </button>
      </div>

      {activeTab === 'personal' && (
        <div className="p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Personal Information</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage your personal information and health details</p>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                  <input
                    id="name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                    value={personalInfo.name}
                    onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                    value={personalInfo.email}
                    onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                  <input
                    id="phone"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                    value={personalInfo.phone}
                    onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium">Date of Birth</label>
                  <input
                    id="dateOfBirth"
                    type="date"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                    value={personalInfo.dateOfBirth}
                    onChange={(e) => handlePersonalInfoChange('dateOfBirth', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="allergies" className="block text-sm font-medium">Allergies</label>
                <textarea
                  id="allergies"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                  value={personalInfo.allergies}
                  onChange={(e) => handlePersonalInfoChange('allergies', e.target.value)}
                  placeholder="List any allergies to medications"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="conditions" className="block text-sm font-medium">Medical Conditions</label>
                <textarea
                  id="conditions"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                  value={personalInfo.conditions}
                  onChange={(e) => handlePersonalInfoChange('conditions', e.target.value)}
                  placeholder="List any ongoing medical conditions"
                  rows={3}
                />
              </div>
            </div>
            <div className="p-4 border-t flex justify-end">
              <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'doctors' && (
        <div className="p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Healthcare Providers</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage your doctors and healthcare providers</p>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Primary Care Physician</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="primaryDoctor" className="block text-sm font-medium">Doctor Name</label>
                    <input
                      id="primaryDoctor"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                      value={doctorInfo.primaryDoctor}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="primaryDoctorPhone" className="block text-sm font-medium">Phone Number</label>
                    <input
                      id="primaryDoctorPhone"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                      value={doctorInfo.primaryDoctorPhone}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="primaryDoctorEmail" className="block text-sm font-medium">Email</label>
                    <input
                      id="primaryDoctorEmail"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                      value={doctorInfo.primaryDoctorEmail}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Specialists</h3>
                  <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                    Add Specialist
                  </button>
                </div>

                {doctorInfo.specialists.map((specialist, index) => (
                  <div key={index} className="border p-4 rounded-md mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor={`specialist-${index}-name`} className="block text-sm font-medium">Doctor Name</label>
                        <input
                          id={`specialist-${index}-name`}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                          value={specialist.name}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`specialist-${index}-specialty`} className="block text-sm font-medium">Specialty</label>
                        <input
                          id={`specialist-${index}-specialty`}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                          value={specialist.specialty}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`specialist-${index}-phone`} className="block text-sm font-medium">Phone Number</label>
                        <input
                          id={`specialist-${index}-phone`}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                          value={specialist.phone}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`specialist-${index}-email`} className="block text-sm font-medium">Email</label>
                        <input
                          id={`specialist-${index}-email`}
                          type="email"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                          value={specialist.email}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t flex justify-end">
              <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pharmacy' && (
        <div className="p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Pharmacy Information</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage your pharmacy details for prescription refills</p>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Primary Pharmacy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="primaryPharmacy" className="block text-sm font-medium">Pharmacy Name</label>
                    <input
                      id="primaryPharmacy"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                      value={pharmacyInfo.primaryPharmacy}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="primaryPharmacyPhone" className="block text-sm font-medium">Phone Number</label>
                    <input
                      id="primaryPharmacyPhone"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                      value={pharmacyInfo.primaryPharmacyPhone}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="primaryPharmacyAddress" className="block text-sm font-medium">Address</label>
                    <input
                      id="primaryPharmacyAddress"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                      value={pharmacyInfo.primaryPharmacyAddress}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Alternate Pharmacy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="alternatePharmacy" className="block text-sm font-medium">Pharmacy Name</label>
                    <input
                      id="alternatePharmacy"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                      value={pharmacyInfo.alternatePharmacy}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="alternatePharmacyPhone" className="block text-sm font-medium">Phone Number</label>
                    <input
                      id="alternatePharmacyPhone"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                      value={pharmacyInfo.alternatePharmacyPhone}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="alternatePharmacyAddress" className="block text-sm font-medium">Address</label>
                    <input
                      id="alternatePharmacyAddress"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600"
                      value={pharmacyInfo.alternatePharmacyAddress}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t flex justify-end">
              <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Notification Settings</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Customize how you receive medication reminders and alerts</p>
            </div>
            <div className="p-4 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label htmlFor="emailReminders" className="block text-sm font-medium">Email Reminders</label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive medication reminders via email</p>
                  </div>
                  <div className="relative inline-flex items-center">
                    <input
                      type="checkbox"
                      id="emailReminders"
                      className="sr-only"
                      checked={notificationSettings.emailReminders}
                      onChange={(e) => handleNotificationChange('emailReminders', e.target.checked)}
                    />
                    <div
                      className={`${
                        notificationSettings.emailReminders ? 'bg-teal-500' : 'bg-gray-200 dark:bg-gray-700'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                      onClick={() => handleNotificationChange('emailReminders', !notificationSettings.emailReminders)}
                    >
                      <span
                        className={`${
                          notificationSettings.emailReminders ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label htmlFor="pushNotifications" className="block text-sm font-medium">Push Notifications</label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive medication reminders as push notifications</p>
                  </div>
                  <div className="relative inline-flex items-center">
                    <input
                      type="checkbox"
                      id="pushNotifications"
                      className="sr-only"
                      checked={notificationSettings.pushNotifications}
                      onChange={(e) => handleNotificationChange('pushNotifications', e.target.checked)}
                    />
                    <div
                      className={`${
                        notificationSettings.pushNotifications ? 'bg-teal-500' : 'bg-gray-200 dark:bg-gray-700'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                      onClick={() => handleNotificationChange('pushNotifications', !notificationSettings.pushNotifications)}
                    >
                      <span
                        className={`${
                          notificationSettings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label htmlFor="smsReminders" className="block text-sm font-medium">SMS Reminders</label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive medication reminders via text message</p>
                  </div>
                  <div className="relative inline-flex items-center">
                    <input
                      type="checkbox"
                      id="smsReminders"
                      className="sr-only"
                      checked={notificationSettings.smsReminders}
                      onChange={(e) => handleNotificationChange('smsReminders', e.target.checked)}
                    />
                    <div
                      className={`${
                        notificationSettings.smsReminders ? 'bg-teal-500' : 'bg-gray-200 dark:bg-gray-700'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                      onClick={() => handleNotificationChange('smsReminders', !notificationSettings.smsReminders)}
                    >
                      <span
                        className={`${
                          notificationSettings.smsReminders ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label htmlFor="dailySummary" className="block text-sm font-medium">Daily Summary</label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive a daily summary of your medication schedule</p>
                  </div>
                  <div className="relative inline-flex items-center">
                    <input
                      type="checkbox"
                      id="dailySummary"
                      className="sr-only"
                      checked={notificationSettings.dailySummary}
                      onChange={(e) => handleNotificationChange('dailySummary', e.target.checked)}
                    />
                    <div
                      className={`${
                        notificationSettings.dailySummary ? 'bg-teal-500' : 'bg-gray-200 dark:bg-gray-700'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                      onClick={() => handleNotificationChange('dailySummary', !notificationSettings.dailySummary)}
                    >
                      <span
                        className={`${
                          notificationSettings.dailySummary ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label htmlFor="missedDoseAlerts" className="block text-sm font-medium">Missed Dose Alerts</label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive alerts when you miss a scheduled dose</p>
                  </div>
                  <div className="relative inline-flex items-center">
                    <input
                      type="checkbox"
                      id="missedDoseAlerts"
                      className="sr-only"
                      checked={notificationSettings.missedDoseAlerts}
                      onChange={(e) => handleNotificationChange('missedDoseAlerts', e.target.checked)}
                    />
                    <div
                      className={`${
                        notificationSettings.missedDoseAlerts ? 'bg-teal-500' : 'bg-gray-200 dark:bg-gray-700'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                      onClick={() => handleNotificationChange('missedDoseAlerts', !notificationSettings.missedDoseAlerts)}
                    >
                      <span
                        className={`${
                          notificationSettings.missedDoseAlerts ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label htmlFor="refillReminders" className="block text-sm font-medium">Refill Reminders</label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive reminders when prescriptions need to be refilled
                    </p>
                  </div>
                  <div className="relative inline-flex items-center">
                    <input
                      type="checkbox"
                      id="refillReminders"
                      className="sr-only"
                      checked={notificationSettings.refillReminders}
                      onChange={(e) => handleNotificationChange('refillReminders', e.target.checked)}
                    />
                    <div
                      className={`${
                        notificationSettings.refillReminders ? 'bg-teal-500' : 'bg-gray-200 dark:bg-gray-700'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                      onClick={() => handleNotificationChange('refillReminders', !notificationSettings.refillReminders)}
                    >
                      <span
                        className={`${
                          notificationSettings.refillReminders ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t flex justify-end">
              <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;