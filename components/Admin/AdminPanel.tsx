import React, { useState, useEffect } from 'react';
import { Project, ProjectCategory } from '../../types';

// Firebase functions with fallback
const getProjects = async (): Promise<Project[]> => {
  try {
    const firebaseModule = await import('../../firebase/projects');
    return await firebaseModule.getProjects();
  } catch (error) {
    console.log('Using fallback data - no projects available');
    return [];
  }
};

const addProject = async (project: Omit<Project, 'id'>): Promise<string> => {
  try {
    const firebaseModule = await import('../../firebase/projects');
    return await firebaseModule.addProject(project);
  } catch (error) {
    console.log('Mock addProject:', project);
    return 'mock-id';
  }
};

const updateProject = async (id: string, project: Partial<Project>): Promise<void> => {
  try {
    const firebaseModule = await import('../../firebase/projects');
    return await firebaseModule.updateProject(id, project);
  } catch (error) {
    console.log('Mock updateProject:', id, project);
  }
};

const deleteProject = async (id: string): Promise<void> => {
  try {
    const firebaseModule = await import('../../firebase/projects');
    return await firebaseModule.deleteProject(id);
  } catch (error) {
    console.log('Mock deleteProject:', id);
  }
};

const uploadImage = async (file: File, path: string): Promise<string> => {
  try {
    const firebaseModule = await import('../../firebase/projects');
    return await firebaseModule.uploadImage(file, path);
  } catch (error) {
    console.log('Mock uploadImage:', file.name, path);
    return URL.createObjectURL(file);
  }
};

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: ProjectCategory.GRAPHIC_DESIGN,
    imageUrl: '',
    projectUrl: '',
    gallery: [] as string[],
    isHighlight: false,
    description: ''
  });

  // Load projects
  useEffect(() => {
    if (isOpen) {
      loadProjects();
    }
  }, [isOpen]);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingProject) {
        await updateProject(editingProject.id, formData);
      } else {
        await addProject(formData);
      }
      
      await loadProjects();
      resetForm();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Error saving project');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(id);
        await loadProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('Error deleting project');
      }
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      imageUrl: project.imageUrl,
      projectUrl: project.projectUrl || '',
      gallery: project.gallery || [],
      isHighlight: project.isHighlight || false,
      description: project.description || ''
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: ProjectCategory.GRAPHIC_DESIGN,
      imageUrl: '',
      projectUrl: '',
      gallery: [],
      isHighlight: false,
      description: ''
    });
    setEditingProject(null);
    setShowForm(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const url = await uploadImage(file, `projects/${Date.now()}_${file.name}`);
        setFormData(prev => ({ ...prev, imageUrl: url }));
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Error uploading image');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Admin Panel - Manage Projects</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar - Project List */}
          <div className="w-1/3 border-r overflow-y-auto">
            <div className="p-4">
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600"
              >
                Add New Project
              </button>
              
              {loading ? (
                <div className="text-center py-4">Loading...</div>
              ) : (
                <div className="space-y-2">
                  {projects.map(project => (
                    <div key={project.id} className="border rounded p-3 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{project.title}</h3>
                          <p className="text-xs text-gray-500">{project.category}</p>
                          {project.isHighlight && (
                            <span className="text-xs bg-yellow-200 px-2 py-1 rounded">Featured</span>
                          )}
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleEdit(project)}
                            className="text-blue-500 hover:text-blue-700 text-xs"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(project.id)}
                            className="text-red-500 hover:text-red-700 text-xs"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Content - Form */}
          <div className="flex-1 overflow-y-auto">
            {showForm && (
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as ProjectCategory }))}
                      className="w-full border rounded px-3 py-2"
                    >
                      <option value={ProjectCategory.GRAPHIC_DESIGN}>Graphic Design</option>
                      <option value={ProjectCategory.DESIGN_POD}>Design POD</option>
                      <option value={ProjectCategory.UX_UI_DESIGN}>UX/UI Design</option>
                      <option value={ProjectCategory.DEVELOPER}>Developer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Main Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full border rounded px-3 py-2"
                    />
                    {formData.imageUrl && (
                      <img src={formData.imageUrl} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Project URL (optional)</label>
                    <input
                      type="url"
                      value={formData.projectUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, projectUrl: e.target.value }))}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Description (optional)</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full border rounded px-3 py-2 h-20"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isHighlight"
                      checked={formData.isHighlight}
                      onChange={(e) => setFormData(prev => ({ ...prev, isHighlight: e.target.checked }))}
                      className="mr-2"
                    />
                    <label htmlFor="isHighlight" className="text-sm font-medium">
                      Featured Project (Show in highlights)
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : (editingProject ? 'Update' : 'Add')} Project
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
