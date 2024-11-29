import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoWrapper } from '../../components/TodoWrapper';

describe('TodoWrapper Component - Integration Tests', () => {
    test('successfully adds and completes a todo task', () => {
        render(<TodoWrapper />);

        const input = screen.getByPlaceholderText(/What is the task today?/i);
        const addButton = screen.getByRole('button', { name: /Add Task/i });

        // Add a todo task
        fireEvent.change(input, { target: { value: 'Complete Task' } });
        fireEvent.click(addButton);

        const task = screen.getByText(/Complete Task/i);
        expect(task).toBeInTheDocument();

        // Mark the task as complete
        fireEvent.click(task);
        expect(task).toHaveClass('completed'); // Check if it has the 'completed' class
    });

    test('fails to complete a non-existent task', () => {
        render(<TodoWrapper />);

        // Attempt to select a non-existent task
        const nonExistentTask = screen.queryByText(/Non-existent Task/i);

        expect(nonExistentTask).toBeNull(); // Ensure no task is found
    });
});