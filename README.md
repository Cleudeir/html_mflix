
# html_mflix                
## project structure
```                    
html_mflix/
    styles.css
    README.md
    script.js
    index.html                
```
## Propósito e Descrição do Projeto

Este projeto desenvolve uma interface web para exibir e reproduzir filmes.  Ele busca dados de filmes de uma API (`http://localhost:5000/api/movies`), permitindo aos usuários procurar filmes por título e visualizar informações básicas.  Clicar em um cartão de filme inicia uma solicitação para a URL do filme, abrindo-o em uma nova aba do navegador.  O projeto utiliza HTML, CSS e JavaScript.

## Dependências

* Nenhuma dependência específica mencionada no documento fornecido.

## Como Instalar

1. Clonar este repositório.
2. (Se aplicável, dependendo das dependências) Instalar as dependências.
3. (Se aplicável) Criar um arquivo `.env` com as configurações necessárias.
4. Executar a aplicação.

## Como Usar

1. Navegar para a página web.
2. Procurar por filmes usando o campo de busca (se disponível).
3. Clicar em um cartão de filme para abrir o filme em uma nova aba.


## Arquitetura

A arquitetura consiste em uma interface front-end (HTML, CSS, JavaScript) que se comunica com uma API back-end (`http://localhost:5000`) para buscar dados de filmes e URLs de redirecionamento.

## Pipeline

1. **Busca de Dados:** A aplicação busca dados de filmes na API `/api/movies`.
2. **Renderização:** Os dados são renderizados como cards de filmes.
3. **Busca da URL do Filme (ao clicar):** Ao clicar em um card, busca-se a URL do filme na API `/api/movie`.
4. **Redirecionamento:** O usuário é redirecionado para a URL do filme em uma nova aba.
5. **Tratamento de Erros:**  Mecanismos de tratamento de erros estão em vigor para lidar com falhas na busca de dados.  (Detalhes não especificados).
                
                