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
    return paragrafos;
}

function limpaPalavra(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g, '').toLowerCase();
}

function verificarPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(/\s+/); // separa por espaço em branco
    const resultado = {};
    listaPalavras.forEach(palavra => {
        if (palavra.lenght>=3){
        
        const palavraLimpa = limpaPalavra(palavra);
        const limpa = limpaPalavra(palavra);
        if (!limpa) return; // ignora strings vazias após limpeza
        resultado[limpa] = (resultado[limpa] || 0) + 1; // se existir soma 1, se não existir atribui 1
        }
    });
    console.log(resultado);
}
