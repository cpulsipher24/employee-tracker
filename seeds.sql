-- Insert sample data into department table
INSERT INTO department (id, name) VALUES
  (1, 'Engineering'),
  (2, 'Sales'),
  (3, 'Finance');

-- Insert sample data into role table
INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'Software Engineer', 80000.00, 1),
  (2, 'Sales Representative', 60000.00, 2),
  (3, 'Financial Analyst', 70000.00, 3);

-- Insert sample data into employee table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'John', 'Doe', 1, NULL),
  (2, 'Jane', 'Smith', 2, 1),
  (3, 'Bob', 'Johnson', 3, 1);