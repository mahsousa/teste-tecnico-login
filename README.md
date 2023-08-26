# DESCRIÇÃO DO TESTE:

Você será responsável por criar uma tela de autenticação, onde o usuário deverá preencher dois campos, um de login e um de senha, ambos alfanuméricos. Essa tela não fará o consumo de APIs e deve fazer autenticar o usuário que inserir os dados "vendemmia" e senha "123123123". Demais usuários e senha devem ser tidos como inválidos.

Após a autenticação, o usuário deverá ver uma tela de listagem de dados de usuários cadastrados, pegos dessa API:
GET https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users
 
Se achar necessária paginação nos dados, use os parâmetros na URL "page=" para o número de página e "limit=" para o número de itens por página.

Se achar necessária a ordenação dos dados, use os parâmetros "sortBy=" com o campo a ser usado e "order=" com "asc" ou "desc" com a direção.
 
Se possível, permitir a visualização em detalhes destes usuários, utilizando a API (trocando ":id" pelo ID do usuário em questão na API anterior):
GET https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users/:id


#


# Introdução ao Create React App

Este projeto foi iniciado com o [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa a aplicação no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no seu navegador.

A página será recarregada sempre que você fizer alterações.\
Você também pode ver quaisquer erros de lint no console.

### `npm test`

Inicia o executor de testes no modo interativo.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila a aplicação para produção na pasta `build`.\
Ele agrupa o React no modo de produção e otimiza a compilação para obter o melhor desempenho.

O build é minificado e os nomes dos arquivos incluem os hashes.\
Sua aplicação está pronta para ser implantada!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação unilateral. Depois de usar o `eject`, você não poderá voltar atrás!**

Se você não está satisfeito com a ferramenta de compilação e as escolhas de configuração, pode usar o `eject` a qualquer momento. Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc.) diretamente para o seu projeto, dando a você controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por conta própria.

Você não precisa necessariamente usar o `eject`. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.

## Saiba Mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulte a [documentação do React](https://reactjs.org/).

### Divisão de Código

Esta seção foi movida para: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Análise do Tamanho do Pacote

Esta seção foi movida para: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle_size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle_size)

### Criando um Progressive Web App

Esta seção foi movida para: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuração Avançada

Esta seção foi movida para: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Implantação

Esta seção foi movida para: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Falha em `npm run build` ao minificar

Esta seção foi movida para: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
