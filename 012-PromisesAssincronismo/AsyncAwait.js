
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');

async function buscarArquivo() {

    try {
        const arquivo = await fs.promises.readFile(filePath);

        const textoArquivo = arquivo.toString('utf8');

        const linhas = textoArquivo.split('\n').slice(1);

        const listaDeTarefas = linhas.map((linha) => {
            const [nome, feito] = linha.split(';');
            return {
                nome,
                feito: feito.trim() === "true"
            };
        });

        console.log(listaDeTarefas);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log('Finalizou!')
    }

};

buscarArquivo();