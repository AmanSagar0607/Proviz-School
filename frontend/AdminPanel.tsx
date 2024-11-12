import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Application {
  _id: string;
  name: string;
  email: string;
  phone: string;
  statement: string;
  createdAt: string;
}

export default function AdminPanel() {
  const [applications, setApplications] = useState<Application[]>([])

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/applications')
        if (response.ok) {
          const data = await response.json()
          setApplications(data)
        } else {
          console.error('Failed to fetch applications')
        }
      } catch (error) {
        console.error('Error fetching applications:', error)
      }
    }

    fetchApplications()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel - Applications</h1>
      <ScrollArea className="h-[600px]">
        {applications.map((application) => (
          <Card key={application._id} className="mb-4">
            <CardHeader>
              <CardTitle>{application.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Email:</strong> {application.email}</p>
              <p><strong>Phone:</strong> {application.phone}</p>
              <p><strong>Statement:</strong> {application.statement}</p>
              <p><strong>Submitted:</strong> {new Date(application.createdAt).toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </div>
  )
}