import {alterarHeroi, alterarImagem, inserirHeroi, listarPorID, listarPorNome, listarTodosHerois, removerHeroi} from '../repository/heroirepository.js'

import multer from 'multer'
import { Router } from 'express';

const server = Router();

const upload = multer({dest: 'storage/imagemHerois'})


server.post('/inserir', async (req, resp) => {
    try{
        const novoHeroi = req.body;

        if (!novoHeroi.nome)
            throw new Error ('Nome do heroi é obrigatório');

        if (novoHeroi.voa == undefined)
            throw new Error ('É obrigatório informar se o heroi voa');

        const heroiInserido = await inserirHeroi(novoHeroi);

        resp.send(heroiInserido);
    }catch(err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.put ('/alterarimagem/:id/imgaranha', upload.single('imgaranha'), async (req, resp) => {
     try {
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);

        if (resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();

     }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
     }
     
 })

 server.get ('/listartodos', async (req, resp) => {
     try{
         const resposta = await listarTodosHerois();
         resp.send(resposta)
     }
     catch (err) {
         resp.status(400).send({
             erro: err.message
         })
     }
 } )

server.get ('/listarpornome/busca', async (req, resp) => {
    try{
        const {nome} = req.query;
        const resposta = await listarPorNome(nome);

        if (resposta.length == 0)
            resp.status(404).send([]);
        else
        resp.send(resposta);

    }catch {
        resp.status(400).send({
            erro:       err.message
        })
    }
})

 server.get ('/listarporid/:id', async (req, resp) => {
    try{
        const {id} = req.params;
        const resposta = await listarPorID(id);

        if (!resposta)
            resp.status(404).send('Herói não encontrado')
        else
        resp.send(resposta)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
} )

server.delete('/removerheroi/:id', async (req, resp) => {
    try{
        const {id} = req.params;
        const resposta = await removerHeroi(id);

        if (resposta != 1)
            throw new Error('Herói não pôde ser removido.');
        
        resp.status(204).send(); 
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
} )

server.put ('/alterarheroi/:id', async (req, resp) => {
    try{
        const {id} = req.params;
        const heroi = req.body;

        
        if (!heroi.nome)
            throw new Error ('Nome do heroi é obrigatório');

        if (heroi.voa == undefined)
            throw new Error ('É obrigatório informar se o heroi voa');

        const resposta = await alterarHeroi(id, heroi)

        if (resposta != 1)
            throw new Error('Herói não pôde seralterado.');

        resp.status(204).send();
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;

