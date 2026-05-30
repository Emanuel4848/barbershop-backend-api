create table users (
	id_usuario serial PRIMARY KEY,
	name varchar(100) not null,
	email varchar(150) not null,
	password varchar(255) not null,
	role varchar(30) not null default 'owner',
	created_at timestamp default current_timestamp  //pa guardar la hora y fecha de registro
)

