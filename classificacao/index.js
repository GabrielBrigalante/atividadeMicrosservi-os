const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const preferencial = 60;

const funcoes = {
    CliClassificado: (Clinte) => {
        Clinte.status =
            Clinte.idade >= preferencia ?
            "preferencial" :
            "comum";

        axios.post("http://localhost:10000/eventos", {
            tipo: "ClienteClassificado",
            dados: {
                cont: Clinte.cont,
                nome: Clinte.nome,
                end: Clinte.end,
                idade: Clinte.idade,
                status: Clinte.status,
                quantIngressos: Clinte.quantIngressos
            }
        });
    },
};

app.post('/eventos', (req, res) =>{
    try{
        fencoes[req.body.tipo](req.body.dados)
    }catch(erro){

    }
    res.status(200).send({ msg: "Ok" });
 });

app.listen(7000, () => console.log ("Classificação. Porta 7000"));