USE employee_db;
INSERT INTO department(name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role(title, salary, department_id)
VALUES
("Salesperson", 80000, 1),
("Software Engineer", 120000, 2),
("Accountant", 150000, 3),
("Lawyer", 110000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("Mike", "Chan", 1, NULL),
("Ashley", "Rodriguez", 2, 1),
("Kunal", "Singh", 3, NULL),
("Tom", "Allen", 4, 2);