import React from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { useTaskStore } from '../../store';

const DeleteConfirm = ({ isOpen, onClose, task }) => {
  const { deleteTask, isLoading } = useTaskStore();

  const handleDelete = async () => {
    if (task) {
      await deleteTask(task.id);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Task"
      description={`Are you sure you want to delete "${task?.title}"? This action cannot be undone.`}
      footer={
        <>
            <Button variant="outline" onClick={onClose} disabled={isLoading}>Cancel</Button>
            <Button className="bg-destructive hover:bg-destructive/90 text-white" onClick={handleDelete} isLoading={isLoading}>
                Delete
            </Button>
        </>
      }
    />
  );
};

export default DeleteConfirm;
