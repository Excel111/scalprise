import React, { useState, useEffect } from 'react';
import { contactAPI, servicesAPI, testimonialsAPI } from '../api/api';
import ContactSubmissions from '../components/admin/ContactSubmissions';
import ServicesManager from '../components/admin/ServicesManager';
import TestimonialsManager from '../components/admin/TestimonialsManager';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [contacts, setContacts] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [contactsRes, servicesRes, testimonialsRes] = await Promise.all([
        contactAPI.getAll(),
        servicesAPI.getAll(),
        testimonialsAPI.getAll()
      ]);
      
      setContacts(contactsRes.data);
      setServices(servicesRes.data);
      setTestimonials(testimonialsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/admin/login';
  };

  const tabs = [
    { id: 'contacts', label: 'Contact Submissions', count: contacts.length },
    { id: 'services', label: 'Services', count: services.length },
    { id: 'testimonials', label: 'Testimonials', count: testimonials.length }
  ];

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    switch (activeTab) {
      case 'contacts':
        return <ContactSubmissions contacts={contacts} onRefresh={fetchData} />;
      case 'services':
        return <ServicesManager services={services} onRefresh={fetchData} />;
      case 'testimonials':
        return <TestimonialsManager testimonials={testimonials} onRefresh={fetchData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                Welcome, {localStorage.getItem('username')}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;