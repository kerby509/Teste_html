CREATE TABLE usuario(
  id INTEGER,
  nome VARCHAR (50),
  salario FLOAT


);

CREATE TABLE curso (
  id INTEGER not null,
  id_usuario INT,
  email VARCHAR (50),
  preco FLOAT,
  FOREIGN KEY(id_usuario) REFERENCES usuario(id)


);


