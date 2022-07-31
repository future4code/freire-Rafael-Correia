<h1 align="center">Projeto LabEddit</h1>

### Uma rede social onde o usuário pode fazer login ou criar uma conta para criar posts e interagir com posts de outros usuários, por meio de comentários e  curtidas. O projeto é desenvolvido baseado em mobile first e faz requisições com uma API .

### LINK SURGE
https://labbeddit-rafaelc.surge.sh

### O que funciona: 
- Todas as páginas verificam se o usuário já fez o login e fazem o redirecionamento de acordo
- Os formulários das páginas de login e cadastro são funcionais e mostram notificações e loading para as requisições
- A página de feed possui um formulário para criar post e renderiza o post após a criação. Também mostra uma lista com os posts de outros usuário que é atualizada sempre que chega no último elemento
- Cada post possui botões de curtir e descurtir que podem ser clicados e fazem uma requisição para aumentar/diminuir o número
- O usuário pode clicar no post( nome do usuário que postou, Conteudo do post ou botão de comentários) para se redirecionar para a página de detalhes do post
- Na página de Detalhes o usuário pode criar um comentário para o post e interagir com os comentários existentes

### O que não funciona
- O botão de curtida dos posts e comentários não o número de curtidas automaticamente, após atualizar a página os votos são atualizados mas o botão de curtida volta ao estado original e o mesmo usuário pode curtir novamente.
- Algumas requisições não possuem loading
- Na página de detalhes o post não é mostrado novamente, apenas os comentários

### Imagens
![image](https://user-images.githubusercontent.com/95589176/182035268-3a9dc738-1373-4bf7-afd7-983a48f009eb.png)
![image](https://user-images.githubusercontent.com/95589176/182035287-c79191f8-c36b-4272-a3c7-d736b7bc8011.png)
![image](https://user-images.githubusercontent.com/95589176/182035319-c2c30be0-fa6f-43e3-98bf-02c756345ba7.png)
![image](https://user-images.githubusercontent.com/95589176/182035346-cc3463d8-62c6-4039-8249-965ebb47892c.png) 
