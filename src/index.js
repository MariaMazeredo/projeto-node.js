const fs = require('fs'); // file system

const caminhoArquivo = process.argv; // mostra o caminho do arquivo
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    if (erro) {
        console.error('Erro ao ler o arquivo:', erro.message);
        return;
    }
    verificarPalavrasDuplicadas(texto);
});

// criar um array de palavras
// contar as ocorrências
// criar um objeto com o resultado

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n'); // separa por quebra de linha
}

function verificarPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(/\s+/); // separa por espaço em branco
    const resultado = {};
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1; // se existir soma 1, se não existir atribui 1
    });
    console.log(resultado);
}