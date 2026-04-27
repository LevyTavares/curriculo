# 🗂️ Estrutura Completa do Projeto

```
curriculo/                          # Raiz do projeto
├── 📄 package.json                 # Dependências do projeto
├── 📄 tsconfig.json                # Configuração TypeScript
├── 📄 astro.config.mjs             # Configuração do Astro
├── 📄 tailwind.config.mjs          # Configuração do Tailwind
├── 📄 vercel.json                  # Configuração Vercel
├── 📄 .env.example                 # Variáveis de ambiente (exemplo)
├── 📄 .gitignore                   # Arquivos ignorados pelo Git
├── 📄 LICENSE                      # Licença do projeto
│
├── 📖 README.md                    # Documentação principal
├── 📖 QUICKSTART.md               # Guia rápido (5 minutos)
├── 📖 PERSONALIZACAO.md           # Guia de customização
├── 📖 DEPLOY.md                   # Guia de deploy
│
├── 📁 .git/                        # Repositório Git (ignorado)
│
├── 📁 public/                      # Arquivos estáticos públicos
│   ├── favicon.svg
│   └── images/                     # Adicione suas imagens aqui
│       ├── projeto1.jpg
│       ├── projeto2.jpg
│       └── projeto3.jpg
│
├── 📁 src/                         # Código-fonte da aplicação
│   │
│   ├── 📁 pages/                   # Páginas (automático routing)
│   │   ├── index.astro             # ← Página principal (/)
│   │   └── about.astro             # ← Página sobre (/about)
│   │
│   ├── 📁 layouts/                 # Layouts base
│   │   └── Layout.astro            # Layout principal
│   │
│   ├── 📁 components/              # Componentes reutilizáveis
│   │   ├── Header.astro            # Navegação
│   │   ├── Hero.astro              # Seção hero (início)
│   │   ├── Projects.astro          # Seção de projetos
│   │   ├── Skills.astro            # Seção de habilidades
│   │   ├── Contact.astro           # Seção de contato
│   │   └── Footer.astro            # Rodapé
│   │
│   ├── 📁 styles/                  # Estilos globais
│   │   └── global.css              # CSS global e Tailwind
│   │
│   └── 📁 utils/                   # Funções auxiliares
│       └── helpers.ts              # Funções utilitárias
│
└── 📁 dist/                        # Build de produção (gerado)
    └── ...arquivos compilados...
```

## 📍 Navegação Rápida

### Para editar conteúdo

- **Título/nome**: `src/components/Hero.astro` (linhas 13-17)
- **Descrição**: `src/components/Hero.astro` (linhas 19-21)
- **Projetos**: `src/components/Projects.astro` (linhas 5-22)
- **Habilidades**: `src/components/Skills.astro` (linhas 5-22)
- **Redes sociais**: `src/components/Hero.astro`, `src/components/Contact.astro`

### Para editar estilos

- **Cores**: `tailwind.config.mjs` (linhas 10-14)
- **Tipografia**: `tailwind.config.mjs` (linhas 15-17)
- **CSS customizado**: `src/styles/global.css`

### Para adicionar páginas

1. Crie arquivo em `src/pages/nome.astro`
2. Importe Layout
3. Adicione link no Header

### Para adicionar componentes

1. Crie arquivo em `src/components/Nome.astro`
2. Importe em `src/pages/index.astro`
3. Use como tag HTML: `<Nome />`

## 🔄 Fluxo de Desenvolvimento

```
Edita arquivo
    ↓
Hot Reload (automático)
    ↓
Vê resultado em http://localhost:3000
    ↓
Commit + Push (Git)
    ↓
Deploy automático (Vercel/Netlify)
```

## 📦 Arquivos Importantes por Propósito

### Configuração

- `package.json` - Dependências e scripts
- `astro.config.mjs` - Configuração Astro
- `tailwind.config.mjs` - Tema e customizações

### Conteúdo

- `src/components/Hero.astro` - Seção inicial
- `src/components/Projects.astro` - Portfolio
- `src/components/Skills.astro` - Competências
- `src/components/Contact.astro` - Formulário

### Estilos

- `src/styles/global.css` - Estilos globais
- `tailwind.config.mjs` - Paleta de cores

### Documentação

- `README.md` - Overview completo
- `QUICKSTART.md` - Primeiros passos
- `PERSONALIZACAO.md` - Customização detalhada
- `DEPLOY.md` - Guia de deployment

## 🎯 Tarefas Comuns

### Adicionar nova seção

1. Criar `src/components/MinhaSecao.astro`
2. Importar em `src/pages/index.astro`
3. Adicionar `<MinhaSecao />`

### Mudar cores do site

→ Editar `tailwind.config.mjs` (linhas 10-14)

### Adicionar projeto novo

→ Editar `src/components/Projects.astro` (adicionar objeto ao array)

### Alterar nome/descrição

→ Editar `src/components/Hero.astro`

### Fazer deploy

→ Seguir `DEPLOY.md`

## 🚀 Comandos úteis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor local

# Build
npm run build            # Cria versão para produção
npm run preview          # Testa a build localmente

# Validação
npx astro check          # Verifica TypeScript

# Limpeza
rm -rf node_modules      # Remove dependências
npm install              # Reinstala dependências
```

---

**Nota**: A maioria das edições não requer rebuild - o Astro recarrega automaticamente (Hot Module Reloading).

Para mais detalhes, veja os arquivos `.md` na raiz do projeto!
