DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department {
    id INT NOT NULL,
    name VARCHAR(30);
};

CREATE TABLE role {
    FOREIGN KEY (id) REFERENCES department(id),
    title VARCHAR(30);
    salary DECIMAL NOT NULL;
    department_id INT NOT NULL;
};

CREATE TABLE employee {
    FOREIGN KEY (id) REFERENCES department(id),
    first_name VARCHAR(30);
    last_name VARCHAR(30);
    role_id INT NOT NULL;
    manager_id INT;
}