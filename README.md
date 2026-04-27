# 🎨 Portfolio Profissional com Astro

Um portfolio moderno e responsivo desenvolvido com **Astro**, **Node.js**, **React** e **Tailwind CSS**. Perfeito para profissionais que desejam showcase seus projetos e habilidades.

## 🚀 Características

- ⚡ **Astro**: Framework moderno para construir sites rápidos
- 🎨 **Tailwind CSS**: Design system utilitário
- ⚛️ **React**: Componentes interativos
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🌙 **Dark Mode**: Design dark profissional
- 🔍 **SEO Otimizado**: Meta tags e estrutura semântica
- 🎭 **Animações Suaves**: Transições e efeitos visuais
- 📧 **Formulário de Contato**: Integração pronta para envio de mensagens

## 📋 Estrutura do Projeto

```
src/
├── pages/           # Páginas da aplicação
│   └── index.astro  # Página principal
├── components/      # Componentes reutilizáveis
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Projects.astro
│   ├── Skills.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/         # Layouts base
│   └── Layout.astro
├── styles/          # Arquivos de estilo
│   └── global.css
└── images/          # Imagens do projeto
```

## 🛠️ Tecnologias

- **Astro 4.3.0+** - Framework web moderno
- **Node.js** - Runtime JavaScript
- **React 18.2.0+** - Biblioteca UI
- **Tailwind CSS 3.3.0+** - Framework CSS
- **TypeScript** - Tipagem estática

## 📦 Instalação

### Pré-requisitos

- Node.js 18.0.0 ou superior
- npm ou yarn instalado

### Passos

1. **Clonar ou acessar o repositório**

```bash
cd /caminho/para/seu/projeto
```

2. **Instalar dependências**

```bash
npm install
```

3. **Iniciar o servidor de desenvolvimento**

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📝 Comandos Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Executar Astro CLI
npm run astro
```

## ✏️ Personalizando seu Portfolio

### 1. Informações Básicas

Edite `src/layouts/Layout.astro` para atualizar:

- Título da página
- Meta tags (descrição, favicon)

### 2. Dados do Hero

Edite `src/components/Hero.astro` para:

- Alterar nome e descrição
- Atualizar links de redes sociais

### 3. Projetos

Edite `src/components/Projects.astro` para:

- Adicionar/remover seus projetos
- Atualizar títulos, descrições e tags
- Adicionar links para demo e GitHub

### 4. Habilidades

Edite `src/components/Skills.astro` para:

- Atualizar categorias e tecnologias
- Remover/adicionar novas habilidades

### 5. Contato

Edite `src/components/Contact.astro` para:

- Alterar email
- Customizar links de contato

### 6. Cores e Temas

Edite `tailwind.config.mjs` para:

- Alterar cores principais
- Customizar fontes
- Ajustar breakpoints

## 🎨 Personalização de Estilos

### Cores Principais

As cores primárias estão definidas em `tailwind.config.mjs`:

```javascript
colors: {
  primary: '#6366f1',
  secondary: '#8b5cf6',
}
```

### Fonts Globais

Edite `src/styles/global.css` para adicionar novas fontes

## 📱 Responsividade

O projeto usa Tailwind CSS breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🚀 Deploy

### Opções de Deploy

#### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

#### Netlify

1. Push do código para GitHub
2. Conecte seu repositório no Netlify
3. Deploy automático em cada push

#### GitHub Pages

```bash
npm run build
```

## 📧 Integração com Formulário

Para fazer o formulário funcionar, você pode usar:

- **Formspree**: https://formspree.io
- **Netlify Forms**: https://www.netlify.com/products/forms
- **Email.js**: https://www.emailjs.com

## 🐛 Troubleshooting

### Erro: "Cannot find module 'astro'"

```bash
npm install
```

### Porta 3000 já está em uso

```bash
npm run dev -- --port 3001
```

### Build falha com TypeScript

```bash
npx astro check
```

## 📚 Recursos Úteis

- [Documentação Astro](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Astro Integrations](https://astro.build/integrations)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

## 👨‍💻 Autor

Desenvolvido com ❤️ para profissionais que desejam ter um portfolio impressionante.

---

**Próximos passos:**

1. ✅ Instale as dependências com `npm install`
2. ✅ Inicie o desenvolvimento com `npm run dev`
3. ✅ Personalize os dados com suas informações
4. ✅ Faça deploy na plataforma de sua escolha

Bom trabalho! 🎉
