import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App'; // Import the main App component, which includes TodoWrapper

describe('Todo Integration Tests', () => {
    test('add, edit, complete, and delete a todo', () => {
        render(<App />);

        // Step 1: Add a new todo item
        const input = screen.getByPlaceholderText(/What is the task today?/i);
        const addButton = screen.getByRole('button', { name: /Add Task/i });
        
        fireEvent.change(input, { target: { value: 'Complete integration tests' } });
        fireEvent.click(addButton);

        // Verify the new todo item is added
        const todoItem = screen.getByText(/Complete integration tests/i);
        expect(todoItem).toBeInTheDocument();

        // Step 2: Mark the todo item as complete
        fireEvent.click(todoItem); // Toggling completion by clicking on the text
        expect(todoItem).toHaveClass('completed');

        // Step 3: Edit the todo item
        const editButton = screen.getByLabelText('edit');
        fireEvent.click(editButton);
        

        const editInput = screen.getByPlaceholderText(/Update task/i);
        fireEvent.change(editInput, { target: { value: 'Updated integration test task' } });
        
        const submitEditButton = screen.getAllByText(/Add Task/i)[1]; // Adjust the index based on button order
        fireEvent.click(submitEditButton);

        

        // Verify the todo item text has been updated
        const updatedTodoItem = screen.getByText(/Updated integration test task/i);
        expect(updatedTodoItem).toBeInTheDocument();

        // Step 4: Delete the todo item
        const deleteButton = screen.getByLabelText('delete');
        fireEvent.click(deleteButton);

        // Verify the todo item is deleted
        expect(screen.queryByText(/Updated integration test task/i)).not.toBeInTheDocument();
    });
});