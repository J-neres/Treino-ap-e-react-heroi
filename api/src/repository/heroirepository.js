import {con} from "./connection.js"



export async function inserirHeroi (heroi) {
    const comando = `insert into tb_superheroi (nm_heroi, bt_voa)
    values( ?, ? );`

    const [resposta] = await con.query (comando, [heroi.nome, heroi.voa]);
    heroi.id = resposta.insertId;

    return heroi;
}

export async function alterarImagem (imagem, id) {
    const comando = 
    `update tb_superheroi 
    set img_heroi = ?
    where id_heroi = ?`;

    const [resposta] = await con.query (comando, [imagem, id]);
    return resposta.affectedRows;
}

export async function listarTodosHerois () {
    const comando = `
    select 	nm_heroi, 
            bt_voa
        from tb_superheroi`;
    const [linhas] = await con.query(comando);
    return linhas;
}

/*talvez tenha que colocar os apelidos nos campos: id_heroi    id, */
export async function listarPorID (id) {
    const comando = `
     select id_heroi,
        nm_heroi, 
        bt_voa,
        img_heroi
    from tb_superheroi
    where id_heroi = ?`;
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function listarPorNome (nome) {
    const comando = `
     select id_heroi,
        nm_heroi, 
        bt_voa
    from tb_superheroi
    where nm_heroi like ?`;
    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;
}

export async function removerHeroi (id) {
    const comando = `
    delete from tb_superheroi
        where id_heroi = ?`;

    const [resposta] = await con.query (comando, [id]);
    return resposta.affectedRows;
}

export async function alterarHeroi (id, heroi) {
    const comando = 
        `update tb_superheroi
        set nm_heroi    = "?",
            bt_voa      = ?
    where id_heroi = ?`
    const [resposta] = await con.query (comando, [heroi.nome, heroi.voa, id]);
    return resposta.affectedRows;
}









