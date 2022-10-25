import icone from '../../assets/produtores/salad.png';
import logo from '../../assets/pacote.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const feira = {
  topo: {
    titulo: "Feira Livre",
    imagem: logo,
  },
  produtores: {
    titulo: "Produtores",
    lista: [
        {
          nome: "Joao Assis Ribeiro",
          imagem: icone,
          estrelas: gerarNumeroAleatorio(1,5)
        },
        {
          nome: "Pedro da Silva",
          imagem: icone,
          estrelas: gerarNumeroAleatorio(1,5)
        },
        {
          nome: "Elza Avelar",
          imagem: icone,
          estrelas: gerarNumeroAleatorio(1,5)
        },
        {
          nome: "Tereza Maria Nunes dos Santos Aloisio",
          imagem: icone,
          estrelas: gerarNumeroAleatorio(1,5)
        },
    ]
  }

}

export default feira;