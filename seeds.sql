-- Insert sample data into department table
INSERT INTO department (name) VALUES
  ('Engineering'),
  ('Sales'),
  ('Finance');

-- Insert sample data into role table
INSERT INTO role (title, salary, department_id) VALUES
  ('Software Engineer', 80000.00, 1),
  ('Sales Representative', 60000.00, 2),
  ('Financial Analyst', 70000.00, 3);

-- Insert sample data into employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Bob', 'Johnson', 3, 1);
