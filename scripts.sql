create table users (
	id_usuario serial PRIMARY KEY,
	name varchar(100) not null,
	email varchar(150) not null,
	password varchar(255) not null,
	role varchar(30) not null default 'owner',
	created_at timestamp default current_timestamp  //pa guardar la hora y fecha de registro
)

create table barber_services (
	id_service serial PRIMARY KEY,
	name varchar(150) not null,
	description varchar(500),
	price decimal(10,2) not null,
	created_at timestamp default current_timestamp
)



create table roles (
	id_rol serial PRIMARY KEY,
	name varchar(50) not null unique,
	description varchar(255)
)



alter table users
add column id_rol integer

update users
set id_rol = roles.id_rol
from roles
where users.role = roles.name;



alter table users
alter column id_rol set not null;


alter table users
add constraint fk_users_roles
foreign key (id_rol)
references roles(id_rol)


alter table users
drop column role;





create table clients (
	id_cliente serial PRIMARY KEY,
	name varchar(150) not null,
	telefono varchar(20) not null,
	email varchar(150),
	created_at timestamp default current_timestamp
	
)

create table barbers (
	id_barber serial PRIMARY KEY,
	id_usuario integer not null unique,
	specialty varchar(150),
	is_active boolean default true,
	created_at timestamp default current_timestamp,

	constraint fk_barbers_users
	foreign key (id_usuario)
	references users(id_usuario)
)



alter table barber_services
add constraint servicios_nombre_unico unique (name);



