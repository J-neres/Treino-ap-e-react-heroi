import {con} from "./connection.js"



export async function inserirHeroi (heroi) {
    const comando = `insert into tb_superheroi (nm_heroi, bt_voa)
    values( 'Homem de Ferro', true );`

    const [resposta] = await con.query (comando, [heroi.nome, heroi.voa]);
    heroi.id = resposta.insertId;

    return heroi;
}






