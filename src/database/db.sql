create table profesor (
	id_profesor SERIAL ,
	telefono_profesor varchar(9),
	nombre_profesor varchar(25),
	apellido_profesor varchar(25),
	despacho_profesor varchar(25),
    grado_profesor varchar(25),    
    primary key (id_profesor)
);


create table publicacion(
    id_publicacion SERIAL ,
    titulo_publicacion varchar(25),
    id_profesor int,
    primary key (id_publicacion),
    foreign key (id_profesor) references profesor (id_profesor)
);

create table publicacionRevista(    
    volumen_publicacionRevista SERIAL ,
    numero_publicacionRevista int,
    fecha_inicio_publicacionRevista date,
    fecha_fin_publicacionRevista date,
    id_publicacion int not null,
    primary key (id_publicacion),
    foreign key (id_publicacion) references publicacion(id_publicacion)     
);

create table publicacionCongreso(
    tipo_congreso_publicacionCongreso varchar(25),
    editorial_publicacionCongreso varchar(25),
    fecha_inicio_publicacionCongreso date,
    fecha_fin_publicacionCongreso date,
    id_publicacion int not null ,
    primary key (id_publicacion),
    foreign key (id_publicacion) references publicacion(id_publicacion)     
);

create table proyecto (    
    id_proyecto SERIAL ,
    id_investigatorPrincipal int not null ,
    nombre_proyecto varchar(25),
    presupuesto_proyecto float,
    programa_financia_proyecto varchar(25),
    fecha_inicio_proyecto date,
    fecha_fin_proyecto date,
    primary key (id_proyecto),
    foreign KEY (id_investigatorPrincipal) references profesor(id_profesor)
);

create table trabajo (
    id_proyecto int not null ,
    id_profesor int not null ,
    fecha_inicio_trabajo date,
    fecha_fin_trabajo date,
    foreign key (id_proyecto) references proyecto(id_proyecto),
    foreign key (id_profesor) references profesor(id_profesor)
);

