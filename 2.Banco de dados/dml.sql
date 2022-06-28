use herois;

insert into tb_superheroi (nm_heroi, bt_voa)
				values( 'Homem de Ferro', true );
                
select nm_heroi, bt_voa
from tb_superheroi
where nm_heroi like '%h%';