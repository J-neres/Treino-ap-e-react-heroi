use herois;

insert into tb_superheroi (nm_heroi, bt_voa)
				values( 'Miranha', false );
                
select nm_heroi, bt_voa, img_heroi
from tb_superheroi
where nm_heroi like '%h%';

update tb_superheroi 
    set img_heroi = 'storage/heroi/sphjkerttt.jpg'
    where id_heroi = 2;
    
select 	nm_heroi, 
		bt_voa,
		img_heroi
	from tb_superheroi;