# 🧮 Sistema Matemático em Node.js

[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D%2014.0.0-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript%20ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Uma aplicação modular em **Node.js** desenvolvida para realizar operações aritméticas fundamentais e resolução de equações do segundo grau através da **Fórmula de Bhaskara**.

O projeto demonstra a aplicação de boas práticas em arquitetura de código Node.js, utilizando modularização com o padrão **CommonJS** (`require` e `module.exports`), validação de exceções matemáticas (como divisão por zero e raízes não reais) e formatação amigável dos resultados via console.

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Como Executar](#-como-executar)
- [Documentação das Funções](#-documentação-das-funções)
  - [Módulo Calculadora](#1-módulo-calculadora-calculadorajs)
  - [Módulo Bhaskara](#2-módulo-bhaskara-bhaskarajs)
- [Exemplo de Saída no Terminal](#-exemplo-de-saída-no-terminal)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Licença](#-licença)

---

## 📖 Visão Geral

O **Sistema Matemático** foi construído com foco na **reutilização de código** e **separação de responsabilidades**. Cada módulo possui uma função bem definida no sistema:

- **Calculadora**: Fornece operações de soma, subtração, multiplicação e divisão com tratamento para erro de divisão por zero.
- **Bhaskara**: Calcula o valor de $\Delta$ (Delta) e determina as raízes reais ($x_1$ e $x_2$) de uma equação quadrática ($ax^2 + bx + c = 0$).
- **Índice (Ponto de Entrada)**: Integra os módulos e executa uma bateria de testes demonstrativos no terminal.

---

## ✨ Funcionalidades

- [x] **Operações Aritméticas Básicas**:
  - Adição ($a + b$)
  - Subtração ($a - b$)
  - Multiplicação ($a 	imes b$)
  - Divisão ($a \div b$) com prevenção contra divisão por zero.
- [x] **Resolução de Equação do 2º Grau (Bhaskara)**:
  - Cálculo do discriminante $\Delta = b^2 - 4ac$.
  - Validação de coeficiente $a 
eq 0$.
  - Tratamento para $\Delta < 0$ (raízes não reais).
  - Cálculo das raízes $x_1 = rac{-b + \sqrt{\Delta}}{2a}$ e $x_2 = rac{-b - \sqrt{\Delta}}{2a}$.
- [x] **Exibição Formatada**: Utilização de `console.table` para apresentar resultados tabulados de forma clara e profissional.

---

## 📁 Estrutura do Projeto

```text
sistema-matematico/
├── index.js          # Ponto de entrada da aplicação (orquestrador e testes)
├── calculadora.js    # Módulo com as funções aritméticas básicas
├── bhaskara.js       # Módulo com a lógica da fórmula de Bhaskara
└── README.md         # Documentação completa do projeto
```

---

## 🚀 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão 14.0.0 ou superior).
- **[Git](https://git-scm.com/)** (opcional, para clonar o repositório).

Para verificar se o Node.js está instalado, execute no terminal:

```bash
node -v
```

---

## 🛠️ Como Executar

1. **Clone o repositório** (ou baixe os arquivos em seu ambiente local):
   ```bash
   git clone https://github.com/seu-usuario/sistema-matematico.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd sistema-matematico
   ```

3. **Execute a aplicação**:
   ```bash
   node index.js
   ```

---

## 📚 Documentação das Funções

### 1. Módulo Calculadora (`calculadora.js`)

Fornece as funções matemáticas essenciais.

| Função | Parâmetros | Descrição | Retorno |
| :--- | :--- | :--- | :--- |
| `somar(a, b)` | `a` (Number), `b` (Number) | Retorna a soma de dois números. | `Number` |
| `subtrair(a, b)` | `a` (Number), `b` (Number) | Retorna a diferença entre dois números. | `Number` |
| `multiplicar(a, b)` | `a` (Number), `b` (Number) | Retorna o produto de dois números. | `Number` |
| `dividir(a, b)` | `a` (Number), `b` (Number) | Retorna a divisão de `a` por `b`. Exibe mensagem de erro se `b === 0`. | `Number` \| `String` |

#### Exemplo de uso:
```javascript
const calculadora = require('./calculadora');

console.log(calculadora.somar(10, 5));       // Saída: 15
console.log(calculadora.dividir(10, 0));     // Saída: "Erro: Divisão por zero não é permitida"
```

---

### 2. Módulo Bhaskara (`bhaskara.js`)

Calcula o discriminante e as raízes da equação $ax^2 + bx + c = 0$.

#### Assinatura da Função:
`calcularBhaskara(a, b, c)`

#### Parâmetros:
- `a` (`Number`): Coeficiente quadrático (deve ser $
eq 0$).
- `b` (`Number`): Coeficiente linear.
- `c` (`Number`): Termo independente.

#### Retorno:
- Em caso de sucesso: Um `Object` contendo `{ delta, x1, x2 }`.
- Em caso de erro ($a = 0$ ou $\Delta < 0$): Uma `String` explicativa.

#### Exemplo de uso:
```javascript
const bhaskara = require('./bhaskara');

// Resolvendo x² - 5x + 6 = 0
const resultado = bhaskara(1, -5, 6);
console.log(resultado);
// Saída: { delta: 1, x1: 3, x2: 2 }
```

---

## 💻 Exemplo de Saída no Terminal

Ao executar o comando `node index.js`, a saída gerada no terminal será:

```text
===============================
[INÍCIO] SISTEMA MATEMÁTICO INICIADO [INÍCIO]
===============================

--- TESTANDO A CALCULADORA ---
Soma de 10 + 5 = 15
Subtracao de 20 - 8 = 12
Multiplicacao de 4 * 6 = 24
Divisao de 15 / 3 = 5
Teste erro divisao = Erro: Divisão por zero não é permitida

--- TESTANDO A BHASKARA ---
┌─────────┬────────┐
│ (index) │ Values │
├─────────├────────┤
│  delta  │   1    │
│   x1    │   3    │
│   x2    │   2    │
└─────────┴────────┘

[SUCESSO] Sistema executado com sucesso!
```

---

## ⚙️ Tecnologias Utilizadas

- **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**: Linguagem base utilizada.
- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript no servidor.
- **CommonJS**: Sistema de módulos nativo do Node.js (`module.exports` e `require`).

---

---

<p align="center">
  Desenvolvido com NODE e JavaScript.
</p>