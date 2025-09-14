import React, { useState } from 'react';
import { testimonialsAPI } from '../../api/api';

const TestimonialsManager = ({ testimonials, onRefresh }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({});
  const [isCreating, setIsCreating] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    company: '',
    message: ''
  });

  const handleEdit = (testimonial) => {
    setIsEditing(testimonial._id);
    setEditData({
      name: testimonial.name,
      company: testimonial.company || '',
      message: testimonial.message
    });
  };

  const handleSave = async (id) => {
    try {
      await testimonialsAPI.update(id, editData);
      setIsEditing(null);
      onRefresh();
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(null);
    setEditData({});
  };

  const handleCreate = async () => {
    try {
      await testimonialsAPI.create(newTestimonial);
      setNewTestimonial({ name: '', company: '', message: '' });
      setIsCreating(false);
      onRefresh();
    } catch (error) {
      console.error('Error creating testimonial:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await testimonialsAPI.delete(id);
        onRefresh();
      } catch (error) {
        console.error('Error deleting testimonial:', error);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Testimonials Management</h2>
        <div className="flex space-x-4">
          <button
            onClick={onRefresh}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Refresh
          </button>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Add Testimonial
          </button>
        </div>
      </div>

      {/* Create Testimonial Modal */}
      {isCreating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Add New Testimonial</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company (optional)</label>
                <input
                  type="text"
                  value={newTestimonial.company}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, company: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  value={newTestimonial.message}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsCreating(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreate}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="bg-white rounded-lg shadow p-6">
            {isEditing === testimonial._id ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    value={editData.company}
                    onChange={(e) => setEditData({ ...editData, company: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    value={editData.message}
                    onChange={(e) => setEditData({ ...editData, message: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSave(testimonial._id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <img 
                        src="https://placehold.co/48x48" 
                        alt={`Profile of ${testimonial.name}`} 
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      {testimonial.company && (
                        <p className="text-blue-600">{testimonial.company}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.message}"</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(testimonial)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsManager;