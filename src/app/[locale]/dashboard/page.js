"use client";

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
// import { useTranslations } from 'next-intl'; // Removed unused import

export default function DashboardPage() {
  // const t = useTranslations('Dashboard'); // Removed unused variable

  // Placeholder data for projects
  const projects = [
    { id: 1, name: 'Project Alpha', status: 'In Progress', lastUpdated: '2024-10-25' },
    { id: 2, name: 'Beta Initiative', status: 'Completed', lastUpdated: '2024-10-20' },
    { id: 3, name: 'Gamma Task', status: 'Pending Review', lastUpdated: '2024-10-26' },
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">User Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar/Profile Section (Placeholder) */}
        <div className="md:col-span-1">
          <Card>
            <h2 className="text-xl font-bold mb-4">Profile</h2>
            <p className="text-gray-600">Welcome, User!</p>
            {/* Add profile details and settings link here */}
            <Button variant="lavender" className="mt-4 w-full">Edit Profile</Button>
          </Card>
          <Card className="mt-4">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <Button variant="peach" className="w-full mb-2">New Transcription Job</Button>
            <Button variant="skyBlue" className="w-full">View Billing</Button>
          </Card>
        </div>

        {/* Main Content: Project Dashboard */}
        <div className="md:col-span-2">
          <Card>
            <h2 className="text-xl font-bold mb-4">My Projects</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <Card key={project.id} className="bg-white hover:shadow-lg transition-shadow duration-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-lg text-purple-700">{project.name}</h3>
                      <p className="text-sm text-gray-500">Last Updated: {project.lastUpdated}</p>
                    </div>
                    <div className="text-right">
                      <span 
                        className={`px-3 py-1 rounded-full text-xs font-medium 
                          ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                            project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                            'bg-yellow-100 text-yellow-800'}`}
                      >
                        {project.status}
                      </span>
                      <Button size="sm" variant="lavender" className="mt-2 ml-auto block">View Details</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

