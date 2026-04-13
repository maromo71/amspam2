Para explicar esse código para uma turma que está vendo o Express.js pela primeira vez, uma ótima estratégia é usar a **Analogia do Restaurante**:
* O **Frontend (HTML/JS)** é o cliente sentado na mesa, fazendo pedidos.
* O **Backend (Express)** é a cozinha (o servidor), que processa os pedidos e devolve a comida.
* A **API (rotas `/tasks`)** é o garçom, que leva o pedido da mesa para a cozinha e traz o prato pronto de volta.
* O **JSON** é o idioma universal que tanto o cliente quanto a cozinha falam para não haver confusão no pedido.

### 1. O Backend (A Cozinha - Node.js + Express)

O arquivo do backend é onde criamos o nosso servidor. Ele ficará "escutando" os pedidos que chegam.

* **`const express = require('express')` e `const app = express()`:**
    Aqui estamos importando a biblioteca Express e criando a nossa aplicação. O Express é como se fosse um "gerente de restaurante" pré-fabricado. Ele facilita a criação de rotas (caminhos) para que o servidor saiba como responder aos pedidos da web, poupando o trabalho de escrever códigos complexos do zero.
* **`const tasks = []`:**
    Como ainda não estamos usando um Banco de Dados real (como MySQL ou MongoDB), esta lista (array) vazia servirá como nosso "banco de dados em memória". É importante alertar os alunos que, como é uma variável na memória RAM, **se o servidor for reiniciado, todas as tarefas serão perdidas.**
* **O problema do CORS (`const cors = require('cors')`) e `app.use(cors())`:**
    Conceito fundamental de segurança na web! O navegador (Chrome, Edge, etc.) tem uma regra de segurança nativa. Se o seu site (Frontend) está rodando no endereço `Site A`, ele é bloqueado de buscar dados no `Site B` (Backend) por padrão. O CORS (*Cross-Origin Resource Sharing*) é como um "segurança na porta da cozinha" que diz: *"Pode deixar, eu autorizo que sites de fora façam pedidos para mim"*.
* **A Rota de Leitura (`app.get`) - O Verbo GET:**
    ```javascript
    app.get('/tasks', (req, resp) => {
        resp.json(tasks)
    })
    ```
    O verbo `GET` é usado quando o cliente quer **buscar** informações. Quando alguém acessar a rota `/tasks` pedindo um `GET`, o servidor simplesmente pega o array `tasks` e o devolve no formato JSON (`resp.json()`).
* **A Rota de Criação (`app.post`) - O Verbo POST:**
    ```javascript
    app.post('/tasks', express.json(), (req, resp) => { ... })
    ```
    O verbo `POST` é usado quando o cliente quer **enviar** dados novos para o servidor salvar.
    * **`express.json()`:** É um "tradutor" (middleware). Como o frontend envia os dados em formato JSON, o servidor precisa dessa linha para conseguir ler o conteúdo do pedido (`req.body`). Sem isso, o servidor veria apenas um texto incompreensível.
    * **`resp.status(201)`:** O código 201 é o código oficial do protocolo HTTP para "Criado com Sucesso" (Created). É uma boa prática de desenvolvimento responder com o status correto.
* **Inicializando o Servidor (`app.listen`)**:
    Dizemos para a nossa aplicação ficar "acordada" na porta `3000` do computador, aguardando conexões. A porta é como se fosse o "guichê de atendimento" do nosso restaurante.

---

### 2. O Frontend (O Cliente - HTML e JavaScript)

O frontend é a interface onde o usuário digita a tarefa. A mágica acontece na tag `<script>`, onde o JavaScript do navegador conversa com o nosso servidor Express.

* **A função `fetch` (O Motoboy):**
    O `fetch` é a ferramenta moderna do JavaScript para fazer requisições de rede. Ele é o responsável por bater na porta do `http://localhost:3000/tasks` e fazer o pedido.
* **Sincronismo vs Assincronismo (`async` e `await`):**
    Conceito crucial para os alunos! O JavaScript não espera as coisas acontecerem de forma natural. Quando mandamos o `fetch` buscar as tarefas, a resposta da internet demora alguns milissegundos.
    * Se não usarmos o `await`, o código tentará desenhar a lista na tela **antes** da resposta chegar, e a tela ficará vazia.
    * O `await` diz ao JavaScript: *"Pause a execução desta função e espere o servidor responder antes de ir para a próxima linha de código"*. (Para usar o `await`, a função precisa ser marcada como `async`).
* **Buscando Tarefas (`loadTasks`):**
    A função faz um `fetch` (por padrão, usa o verbo `GET`), converte a resposta recebida de volta para um objeto JavaScript (`await response.json()`) e, em seguida, faz um laço de repetição (`forEach`) para criar os elementos `<li>` dinamicamente no HTML usando o DOM (`document.createElement`).
* **Enviando Tarefas (`addTask`):**
    Aqui, o `fetch` é um pouco mais robusto. Como queremos **salvar** um dado, precisamos configurar o pedido:
    * `method: 'POST'`: Avisamos o servidor que não queremos apenas ler, queremos gravar.
    * `headers: { 'Content-Type': 'application/json' }`: Avisamos a cozinha que a "encomenda" que estamos enviando está embalada no formato JSON.
    * `body: JSON.stringify({ descricao: value })`: Pegamos o texto que o usuário digitou no `<input>` e o transformamos em uma string JSON para que possa viajar pela rede de forma segura até o Express.

**Dica de Ouro para a Sala de Aula:**
Quando estiver demonstrando isso para os alunos, abra as **Ferramentas de Desenvolvedor (F12) no navegador**, vá para a aba **"Network" (Rede)** e mostre a eles as requisições `GET` e `POST` acontecendo em tempo real. Ver o JSON indo e voltando pela rede costuma ser o momento de "eureca" onde a ficha da comunicação entre back e front realmente cai para os iniciantes!