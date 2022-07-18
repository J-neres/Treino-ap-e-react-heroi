create database herois;

use herois;

create table tb_superheroi(
	id_heroi  int primary key auto_increment,
    nm_heroi  varchar(100),
    bt_voa    tinyint,
    img_heroi    blob
);

