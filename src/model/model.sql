create table faculties(
	id varchar(2) primary key,
	name varchar(50),
	created_at timestamp with time zone,
	updated_at timestamp with time zone
);

create table programs(
	id varchar(2) primary key,
	name varchar(50),
	faculties_id varchar(50),
	created_at timestamp with time zone,
	updated_at timestamp with time zone
);
ALTER TABLE programs ADD CONSTRAINT fk_faculties_id FOREIGN KEY (faculties_id) REFERENCES faculties(id);

create table students(
	id varchar(4) primary key,
	name varchar(100),
	semester int,
    year INT,
	gender boolean,
	address varchar(100),
	faculties_id varchar,
	programs_id varchar,
	npm varchar,
	created_at timestamp with time zone,
	updated_at timestamp with time zone
);
ALTER TABLE students ADD CONSTRAINT fk_faculties_id FOREIGN KEY (faculties_id) REFERENCES faculties(id);
ALTER TABLE students ADD CONSTRAINT fk_programs_id FOREIGN KEY (programs_id) REFERENCES programs(id);



