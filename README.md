1. Clonar o repositório

   https://github.com/RaissaMacedo/jota-news-frontend

2. Navegar até o diretório do projeto

   cd jota-news-frontend

3. Instalar as dependências

   npm install

4. Rodar a aplicação

   npm start

A aplicação será iniciada e estará disponível em http://localhost:3000.

Funcionalidades
1. Login
Permite que os administradores se autentiquem e acessem a área restrita do dashboard.
O login é feito com email e senha, e o token é armazenado no localStorage.
2. Dashboard
Área restrita onde os administradores podem visualizar, editar e excluir notícias.
A lista de notícias é carregada dinamicamente via chamada à API backend.
3. Publicação de Notícias
Os administradores podem criar novas notícias através de um formulário.
Cada notícia pode conter título, conteúdo e uma imagem associada.
4. Área Pública
As notícias publicadas ficam visíveis para todos os usuários, permitindo que leiam as notícias.
5. PrivateRoute
Componente que protege as rotas da área administrativa. Se o usuário não estiver logado, ele será redirecionado para a página de login.

Rotas
A aplicação possui as seguintes rotas:

/ - Página inicial, onde os leitores podem ver a lista de notícias.
/login - Página de login, onde os administradores podem se autenticar.
/dashboard - Área restrita para administração das notícias.
/register - Página de registro de novos usuários (a ser implementada).
/news/:id - Página de detalhes de uma notícia específica.
Contribuições
Faça um fork deste repositório.
Crie uma branch para sua modificação (git checkout -b feature/nova-funcionalidade).
Comite suas alterações (git commit -am 'Adicionando nova funcionalidade').
Faça o push para a branch (git push origin feature/nova-funcionalidade).
Envie um Pull Request.
