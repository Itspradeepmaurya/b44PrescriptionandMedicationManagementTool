import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Calendar, Home, LineChart, Menu, PlusCircle, User, X } from 'lucide-react';
import { cn } from '../../utils/helpers';
import MedicationReminderDialog from '../medications/MedicationReminderDialog';

function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [reminderOpen, setReminderOpen] = useState(false);
  const location = useLocation();

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/",
      active: location.pathname === "/",
    },
    {
      label: "Medications",
      icon: PlusCircle,
      href: "/medications",
      active: location.pathname === "/medications",
    },
    {
      label: "History",
      icon: Calendar,
      href: "/history",
      active: location.pathname === "/history",
    },
    {
      label: "Analytics",
      icon: LineChart,
      href: "/analytics",
      active: location.pathname === "/analytics",
    },
    {
      label: "Profile",
      icon: User,
      href: "/profile",
      active: location.pathname === "/profile",
    },
  ];

  return (
    <div className="h-full relative">
      {/* Sidebar for desktop */}
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-white dark:bg-gray-900 border-r">
        <div className="flex flex-col space-y-4 py-4">
          <div className="px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 mr-2 rounded-full bg-teal-500 flex items-center justify-center">
                <Bell className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-bold">MedTrack</h1>
            </Link>
          </div>
          <div className="space-y-1 px-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                to={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  route.active
                    ? "bg-teal-100 text-teal-900 dark:bg-teal-800 dark:text-teal-50"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50",
                )}
              >
                <route.icon className={cn("h-4 w-4", route.active ? "text-teal-700 dark:text-teal-300" : "")} />
                {route.label}
              </Link>
            ))}
          </div>
          <div className="px-3 mt-auto">
            <button
              className="w-full flex items-center justify-start gap-2 px-3 py-2 text-sm text-gray-500 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setReminderOpen(true)}
            >
              <Bell className="h-4 w-4" />
              <span>Set Reminder</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-900 p-4 flex flex-col">
            <div className="px-3 flex justify-between items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8 mr-2 rounded-full bg-teal-500 flex items-center justify-center">
                  <Bell className="h-4 w-4 text-white" />
                </div>
                <h1 className="text-xl font-bold">MedTrack</h1>
              </Link>
              <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-1 px-3 mt-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  to={route.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    route.active
                      ? "bg-teal-100 text-teal-900 dark:bg-teal-800 dark:text-teal-50"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50",
                  )}
                >
                  <route.icon className={cn("h-4 w-4", route.active ? "text-teal-700 dark:text-teal-300" : "")} />
                  {route.label}
                </Link>
              ))}
            </div>
            <div className="px-3 mt-auto">
              <button
                className="w-full flex items-center justify-start gap-2 px-3 py-2 text-sm text-gray-500 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => {
                  setReminderOpen(true);
                  setOpen(false);
                }}
              >
                <Bell className="h-4 w-4" />
                <span>Set Reminder</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="md:pl-72 pt-16 md:pt-4 pb-10 h-full">
        <div className="md:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 h-16 border-b bg-white dark:bg-gray-900">
          <div className="flex items-center">
            <button className="p-2 mr-2 rounded-md border border-gray-200 dark:border-gray-700" onClick={() => setOpen(true)}>
              <Menu className="h-4 w-4" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                <Bell className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-bold">MedTrack</h1>
            </Link>
          </div>
          <button className="p-2 rounded-md border border-gray-200 dark:border-gray-700" onClick={() => setReminderOpen(true)}>
            <Bell className="h-4 w-4" />
          </button>
        </div>
        <div className="px-4 md:px-8 max-w-6xl mx-auto">{children}</div>
      </main>

      {/* Medication reminder dialog */}
      <MedicationReminderDialog open={reminderOpen} onOpenChange={setReminderOpen} />
    </div>
  );
}

export default DashboardLayout;