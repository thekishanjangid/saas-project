import React, { useEffect, useState } from 'react';
import DataTable from '../components/table/DataTable';
import { useTaskStore, getFilteredTasks } from '../store';
import { useUiStore, useAuthStore } from '../store';
import { canUser } from '../utils/permissionUtils';
import { PERMISSIONS } from '../config/permissionsConfig';
import Button from '../components/ui/Button';
import { Plus } from 'lucide-react';
import Drawer from '../components/ui/Drawer';
import TaskForm from '../components/tasks/TaskForm';
import DeleteConfirm from '../components/tasks/DeleteConfirm';

const Home = () => {
  const { tasks, isLoading, fetchTasks, transitionTaskStatus } = useTaskStore();
  const { activeTab, setActiveTab, activeFilter, setActiveFilter, assigneeFilter } = useUiStore();
  const { user } = useAuthStore(); // Get current user
  
  // Local state for CRUD UI
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleCreate = () => {
    setEditingTask(null);
    setIsDrawerOpen(true);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsDrawerOpen(true);
  };

  const handleDelete = (task) => {
    setDeletingTask(task);
  };

  const handleStatusChange = async (taskId, newStatus) => {
    await transitionTaskStatus(taskId, newStatus);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setEditingTask(null);
  };

  const columns = [
    { key: 'title', label: 'Task Name' },
    { key: 'type', label: 'Type' },
    { key: 'status', label: 'Status' },
    { key: 'dueDate', label: 'Due Date' },
    { key: 'labels', label: 'Labels' },
    { key: 'assignedTo', label: 'Assignee' },
  ];

  // Centralized Filter Logic
  const filteredTasks = getFilteredTasks(tasks, user, { 
    activeTab, 
    activeFilter, 
    assigneeFilter 
  });

  return (
    <div className="h-full flex flex-col">
      {/* Header Actions */}
      <div className="flex items-center justify-between mb-6">
        <div>
           <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
           <p className="text-muted-foreground">Manage and track your team's work.</p>
        </div>
        <Button onClick={handleCreate}>
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-0 bg-card border border-border rounded-xl flex flex-col shadow-sm">
        {/* Toolbar */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex gap-2">
            {['all', 'draft', 'in_review', 'approved', 'completed', 'overdue'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors capitalize ${
                  activeTab === tab 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {tab.replace('_', ' ')}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
             <select 
                className="h-8 rounded-md border border-input bg-background px-2 text-xs"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
             >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
             </select>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 min-h-0">
          <DataTable 
            columns={columns}
            data={filteredTasks} 
            loading={isLoading}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        </div>
      </div>

      {/* Drawers & Modals */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        title={editingTask ? 'Edit Task' : 'New Task'}
      >
        <TaskForm 
            task={editingTask} 
            onClose={handleCloseDrawer} 
        />
      </Drawer>

      <DeleteConfirm 
        isOpen={!!deletingTask}
        onClose={() => setDeletingTask(null)}
        task={deletingTask}
      />
    </div>
  );
};

export default Home;
