# 🎨 Guia Completo de Personalização

Este guia te ajudará a personalizar completamente seu portfolio Astro.

## 📋 Índice

1. [Informações Pessoais](#informações-pessoais)
2. [Seção Hero](#seção-hero)
3. [Projetos](#projetos)
4. [Habilidades](#habilidades)
5. [Cores e Design](#cores-e-design)
6. [Integração com Email](#integração-com-email)
7. [Otimizações](#otimizações)

---

## Informações Pessoais

### 1. Alterar nome e título da página

**Arquivo:** `src/layouts/Layout.astro`

```astro
<title>Seu Nome - Portfolio</title>
<meta name="description" content="Sou um desenvolvedor..." />
```

### 2. Atualizar redes sociais

**Arquivo:** `src/components/Header.astro` e `src/components/Footer.astro`

Procure por:

```astro
<a href="https://github.com/seu-usuario">GitHub</a>
<a href="https://linkedin.com/in/seu-usuario">LinkedIn</a>
```

---

## Seção Hero

**Arquivo:** `src/components/Hero.astro`

### Mudar nome e descrição

```astro
<h1>Olá! Sou seu Nome</h1>
<p>Desenvolvedor Full-Stack apaixonado por...</p>
```

### Adicionar foto de perfil

```astro
<!-- Adicione antes da h1 -->
<img
  src="/profile.jpg"
  alt="Seu Nome"
  class="w-32 h-32 rounded-full border-4 border-indigo-500 mb-6"
/>
```

---

## Projetos

**Arquivo:** `src/components/Projects.astro`

### Estrutura do Projeto

```astro
const projects: Project[] = [
  {
    title: 'Meu App',
    description: 'Descrição do projeto',
    tags: ['React', 'Node.js'],
    link: 'https://meu-app.com',
    github: 'https://github.com/usuario/projeto',
    image: '/images/projeto1.jpg'
  },
  // ... mais projetos
];
```

### Adicionar novo projeto

1. Crie a imagem em `public/images/`
2. Adicione um novo objeto ao array `projects`

### Estrutura recomendada

```
public/
└── images/
    ├── projeto1.jpg
    ├── projeto2.jpg
    └── projeto3.jpg
```

---

## Habilidades

**Arquivo:** `src/components/Skills.astro`

### Adicionar nova categoria

```astro
const skills: Skill[] = [
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'CI/CD']
  },
  // ... mais categorias
];
```

### Estrutura sugerida

```
Frontend (HTML, CSS, JavaScript, React, TypeScript)
Backend (Node.js, Express, Python, Django)
Banco de Dados (MongoDB, PostgreSQL, Firebase)
Ferramentas (Git, Docker, VS Code, Figma)
```

---

## Cores e Design

### 1. Alterar cores primárias

**Arquivo:** `tailwind.config.mjs`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1',      // Indigo
      secondary: '#8b5cf6',     // Purple
    },
  },
}
```

### 2. Alterar fontes

**Arquivo:** `tailwind.config.mjs`

```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],  // Exemplo
}
```

Depois adicione a fonte ao `src/layouts/Layout.astro`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

### 3. Customizar gradientes

No Tailwind, os gradientes já estão prontos:

```astro
<!-- Gradiente indigo-purple -->
<div class="bg-gradient-to-r from-indigo-400 to-purple-400"></div>

<!-- Gradiente customizado em global.css -->
```

---

## Integração com Email

### Opção 1: Formspree (Recomendado)

1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta
3. Pegue seu ID do formulário
4. Atualize `src/components/Contact.astro`:

```astro
<form action="https://formspree.io/f/SEU_ID" method="POST">
  <!-- campos do formulário -->
</form>
```

### Opção 2: Netlify Forms

Se fazer deploy no Netlify:

```astro
<form name="contact" method="POST" netlify>
  <!-- campos do formulário -->
</form>
```

### Opção 3: Email.js

1. Crie conta em [emailjs.com](https://www.emailjs.com)
2. Adicione ao `src/layouts/Layout.astro`:

```html
<script type="module">
  import emailjs from "@emailjs/browser";
  emailjs.init("YOUR_PUBLIC_KEY");
</script>
```

3. Configure o formulário com as IDs de template

---

## Otimizações

### 1. Performance

- Use imagens otimizadas (WebP)
- Comprima as imagens com [TinyPNG](https://tinypng.com)
- Lazy load de imagens

### 2. SEO

Atualize `src/layouts/Layout.astro`:

```astro
<meta property="og:title" content="Seu Nome - Portfolio" />
<meta property="og:description" content="Desenvolvedor Full-Stack..." />
<meta property="og:image" content="/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

### 3. Meta Tags Importantes

```astro
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<!-- Theme Color -->
<meta name="theme-color" content="#0f172a" />
```

---

## Checklist de Personalização

- [ ] Alterar nome e descrição
- [ ] Atualizar links de redes sociais
- [ ] Adicionar foto de perfil
- [ ] Atualizar projetos com seus dados
- [ ] Personalizar habilidades
- [ ] Escolher paleta de cores
- [ ] Configurar formulário de contato
- [ ] Adicionar favicon
- [ ] Otimizar imagens
- [ ] Testar responsividade
- [ ] Deploy na plataforma escolhida

---

## Recursos Úteis

- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Font Awesome Icons](https://fontawesome.com)
- [Unsplash (Imagens grátis)](https://unsplash.com)
- [Pexels (Imagens grátis)](https://pexels.com)

---

## Suporte

Se tiver dúvidas, consulte:

- [Documentação Astro](https://docs.astro.build)
- [Documentação Tailwind](https://tailwindcss.com/docs)
- [Fórum da comunidade Astro](https://astro.build/chat)

Bom trabalho! 🚀
