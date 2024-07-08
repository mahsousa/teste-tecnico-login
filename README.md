![2](https://github.com/mahsousa/teste-login/assets/32987989/6b1b311a-7a2a-4903-9fe6-44a0f97cc8f5)
![1](https://github.com/mahsousa/teste-login/assets/32987989/de85c95c-2448-4b36-b3cc-c9277d661d09)

# DESCRIÇÃO DO TESTE:

Você será responsável por criar uma tela de autenticação, onde o usuário deverá preencher dois campos, um de login e um de senha, ambos alfanuméricos. Essa tela não fará o consumo de APIs e deve fazer autenticar o usuário que inserir os dados "vendemmia" e senha "123123123". Demais usuários e senha devem ser tidos como inválidos.

Após a autenticação, o usuário deverá ver uma tela de listagem de dados de usuários cadastrados, pegos dessa API:
GET https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users
 
Se achar necessária paginação nos dados, use os parâmetros na URL "page=" para o número de página e "limit=" para o número de itens por página.

Se achar necessária a ordenação dos dados, use os parâmetros "sortBy=" com o campo a ser usado e "order=" com "asc" ou "desc" com a direção.
 
Se possível, permitir a visualização em detalhes destes usuários, utilizando a API (trocando ":id" pelo ID do usuário em questão na API anterior):
GET https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users/:id


#


## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa a aplicação no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no seu navegador.

A página será recarregada sempre que você fizer alterações.\
Você também pode ver quaisquer erros de lint no console.

### `npm run build`

Compila a aplicação para produção na pasta `build`.\
Ele agrupa o React no modo de produção e otimiza a compilação para obter o melhor desempenho.

## RODAR OS COMANDOS NO TERMINAL
npm install

CERTIFICAR-SE DE TER O NODE.JS INSTALADO
USE O CODIGO NO TERMINAL

npm run dev - Ambiente de desenvolvimento
