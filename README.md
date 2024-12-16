# Atividade 7

Este repositório contém um conjunto de atividades práticas desenvolvidas para praticar conceitos do React. 

## Atividades

### 1. **Contador Simples**
- **Descrição:** Um contador com botões para incrementar e decrementar o valor exibido.
- **Destaques:** Uso de `useState` e lógica condicional para impedir que o valor seja menor que zero.

### 2. **Alteração de Cor de Fundo**
- **Descrição:** Um botão que altera a cor de fundo da página ao ser clicado.
- **Destaques:** Uso de `useState` para armazenar a cor e `useEffect` para atualizar o estilo do fundo.
- **Desafio:** Geração de cores aleatórias.

### 3. **Lista de Tarefas (To-Do List)**
- **Descrição:** Uma aplicação para adicionar e remover tarefas, com opção de marcar como concluídas e filtrar tarefas pendentes.
- **Destaques:** Manipulação de listas com `useState` e renderização condicional.

### 4. **Temporizador com useEffect**
- **Descrição:** Um temporizador que conta o tempo em segundos e pode ser pausado ou reiniciado.
- **Destaques:** Uso de `useEffect` para gerenciar o ciclo de vida do temporizador.

### 5. **Filtro de Lista**
- **Descrição:** Filtragem de uma lista de nomes com base no texto digitado pelo usuário.
- **Destaques:** Uso de `useState` para armazenar o valor do filtro e manipulação de arrays com `map`.
- **Desafio:** Ignorar maiúsculas e minúsculas ao filtrar.

### 6. **Formulário de Registro Simples**
- **Descrição:** Um formulário com campos de nome, e-mail e senha, exibindo uma mensagem de boas-vindas após o envio.
- **Destaques:** Validação de campos obrigatórios e exibição condicional de mensagens.

### 7. **Aplicação de Requisição de Dados Simples**
- **Descrição:** Exibição de uma lista de posts obtidos de uma API pública.
- **Destaques:** Uso de `useEffect` para realizar requisições e estado para gerenciar o carregamento e recarregamento de dados.

### 8. **Galeria de Imagens com Visualização Detalhada**
- **Descrição:** Uma galeria simples com modal para exibição detalhada das imagens selecionadas.
- **Destaques:** Gerenciamento de estado com `useState` para imagens selecionadas e renderização condicional do modal.

### 9. **Timer com Intervalo e Alerta**
- **Descrição:** Um timer com contagem regressiva ajustável pelo usuário, exibindo um alerta ao final.
- **Destaques:** Uso de `useEffect` para gerenciar intervalos e lógica de pausa e reinício do timer.

### 10. **Componentes com Tabs Navegáveis**
- **Descrição:** Interface de tabs que exibe conteúdos diferentes ao clicar nas abas.
- **Destaques:** Gerenciamento do estado da aba ativa e aplicação de efeitos visuais.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
react-atividade-7/
├── src/
│   ├── components/          # Componentes individuais para cada atividade
│   ├── styles/              # Estilos individuais para cada atividade
│   ├── App.js               # Página principal com menu para acessar as atividades
│   └── index.js             # Ponto de entrada da aplicação
├── public/                  # Arquivos públicos
├── package.json             # Dependências e scripts do projeto
└── README.md                # Documentação do projeto
```

## Requisitos

- Node.js versão 14 ou superior
- Gerenciador de pacotes npm

## Instruções de Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:Felipe-Cordeiro-98/atividade-7-praticando-conceitos-essenciais-do-reactjs.git
   cd atividade-7-praticando-conceitos-essenciais-do-reactjs
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação no navegador em [http://localhost:5173](http://localhost:5173).

## Como Testar as Atividades

Na página principal da aplicação contém links para acessar cada atividade individualmente. Clique no link correspondente para testar a funcionalidade.
