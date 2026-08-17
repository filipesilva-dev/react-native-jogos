# 🎮 React Native — Jogos

Coleção de projetos desenvolvidos com **React Native**, **TypeScript** e **Expo** para fins acadêmicos.

O repositório contém implementações independentes de jogos, além de uma aplicação que reúne os três jogos em um único projeto.

## 🕹️ Projetos

| Projeto             | Descrição                                                                             |
| ------------------- | ------------------------------------------------------------------------------------- |
| 🔤 **Forca**        | Jogo de palavras em que o jogador deve descobrir a palavra secreta escolhendo letras. |
| ❌ **Jogo da Velha** | Jogo clássico para dois jogadores em um tabuleiro 3×3.                                |
| 🟦 **Quadrados**    | Jogo baseado em interação com quadrados na tela.                                      |
| 🎮 **My App**       | Aplicação que reúne os três jogos em um único projeto.                                |

---

## 📂 Estrutura do repositório

Cada jogo possui seu próprio projeto **Expo**, com suas próprias dependências e configurações.

```text
reactive-animais/
│
├── forca/
│   ├── assets/
│   ├── App.tsx
│   ├── app.json
│   ├── index.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── jogoDaVelha/
│   ├── assets/
│   ├── App.tsx
│   ├── app.json
│   ├── index.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── quadrados/
│   ├── assets/
│   ├── App.tsx
│   ├── app.json
│   ├── index.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── my-app/
│   ├── assets/
│   ├── src/
│   ├── App.tsx
│   ├── app.json
│   ├── index.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
└── README.md
```

> As pastas `forca`, `jogoDaVelha` e `quadrados` são projetos independentes. A pasta `my-app` contém a aplicação integrada com os três jogos.

---

## 🚀 Como executar

Como cada pasta é um projeto Expo independente, é necessário instalar as dependências dentro do projeto que deseja executar.

### 🔤 Forca

```bash
cd forca
npm install
npx expo start
```

### ❌ Jogo da Velha

```bash
cd jogoDaVelha
npm install
npx expo start
```

### 🟦 Quadrados

```bash
cd quadrados
npm install
npx expo start
```

### 🎮 Aplicação integrada

Para executar a aplicação que reúne os três jogos:

```bash
cd my-app
npm install
npx expo start
```

---

## 📱 Plataformas

Os projetos podem ser executados utilizando o **Expo** nas seguintes plataformas:

* Android
* iOS
* Web

Também é possível utilizar o **Expo Go** em um dispositivo físico compatível.

---

## 🛠️ Tecnologias

| Tecnologia       | Utilização                                 |
| ---------------- | ------------------------------------------ |
| **React Native** | Desenvolvimento das interfaces             |
| **TypeScript**   | Tipagem e desenvolvimento                  |
| **Expo**         | Execução e desenvolvimento multiplataforma |
| **JavaScript**   | Lógica das aplicações                      |
| **Git**          | Controle de versão                         |
| **GitHub**       | Hospedagem do código                       |

---

## 🎯 Objetivos

O projeto foi desenvolvido para praticar conceitos de:

* Desenvolvimento com React Native
* TypeScript
* Componentização
* `StyleSheet`
* Flexbox
* Interfaces para dispositivos móveis
* Desenvolvimento para Web
* Desenvolvimento multiplataforma
* Organização de projetos
* Criação de interfaces para jogos

---

## 👨‍💻 Autor

**Filipe Silva**

[GitHub — filipesilva-dev](https://github.com/filipesilva-dev?utm_source=chatgpt.com)

## 🔗 Repositório

[react-native-jogos](https://github.com/filipesilva-dev/react-native-jogos?utm_source=chatgpt.com)

---

> Projeto desenvolvido para fins acadêmicos.
