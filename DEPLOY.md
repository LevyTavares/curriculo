# 🚀 Guia de Deploy

Várias opções para fazer deploy de seu portfolio Astro. Escolha a que melhor se adequa às suas necessidades.

## 📊 Comparação das Plataformas

| Plataforma   | Preço       | Facilidade | Deploy     | GitHub | Recomendado |
| ------------ | ----------- | ---------- | ---------- | ------ | ----------- |
| Vercel       | Grátis      | ⭐⭐⭐⭐⭐ | Automático | Sim    | ✅          |
| Netlify      | Grátis      | ⭐⭐⭐⭐⭐ | Automático | Sim    | ✅          |
| GitHub Pages | Grátis      | ⭐⭐⭐⭐   | Manual     | Sim    | ✅          |
| Railway      | Grátis/Pago | ⭐⭐⭐⭐   | Automático | Sim    | -           |
| Heroku       | Pago        | ⭐⭐⭐⭐   | Automático | Sim    | -           |

---

## 1️⃣ Deploy no Vercel (Recomendado)

### Vantagens

- Deploy automático em cada push
- Sem custo para uso básico
- Suporte excelente para Astro
- Preview automático de PRs
- Domínio próprio gratuito

### Passos

#### 1. Prepare seu repositório

```bash
git add .
git commit -m "Projeto portfolio Astro pronto"
git push origin main
```

#### 2. Acesse Vercel

- Vá para [vercel.com](https://vercel.com)
- Clique em "Sign Up"
- Escolha "Continue with GitHub"
- Autorize o acesso

#### 3. Importe o projeto

- Clique em "Add New..."
- Selecione "Project"
- Escolha seu repositório
- Clique em "Import"

#### 4. Configure

- **Framework Preset**: Astro (detecção automática)
- **Environment Variables**: Se houver, adicione
- Clique em "Deploy"

#### 5. Configure domínio personalizado (opcional)

```
Settings > Domains > Add
```

---

## 2️⃣ Deploy no Netlify

### Vantagens

- Deploy automático
- Forms integrados
- Edge Functions
- Preview automático
- SSL gratuito

### Passos

#### 1. Prepare o repositório

```bash
git add .
git commit -m "Portfolio pronto"
git push
```

#### 2. Acesse Netlify

- Vá para [netlify.com](https://netlify.com)
- Clique em "Sign up"
- Escolha "GitHub"

#### 3. Autorize e selecione repositório

- Autorize o acesso ao GitHub
- Selecione seu repositório

#### 4. Configure build

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- Clique em "Deploy site"

#### 5. Configure domínio

- Site settings > Domain management
- Adicione seu domínio

#### 6. (Opcional) Integre Forms

```astro
<form name="contact" method="POST" netlify>
  <!-- seus inputs -->
</form>
```

---

## 3️⃣ Deploy no GitHub Pages

### Vantagens

- Completamente grátis
- Integrado com GitHub
- Sem configurações extras

### Passos

#### 1. Configure `astro.config.mjs`

Se seu repositório é `meurepo`:

```javascript
export default defineConfig({
  site: "https://seuusuario.github.io/meurepo",
  // ... resto da configuração
});
```

Se é seu site principal:

```javascript
export default defineConfig({
  site: "https://seuusuario.github.io",
  // ... resto da configuração
});
```

#### 2. Crie workflow GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### 3. Configure GitHub Pages

- Repository Settings > Pages
- Source: GitHub Actions
- Clique em "Save"

#### 4. Push o código

```bash
git add .
git commit -m "Setup GitHub Pages deploy"
git push
```

---

## 4️⃣ Deploy no Railway

### Passos

1. Vá para [railway.app](https://railway.app)
2. Clique em "Start a New Project"
3. Escolha "Deploy from GitHub"
4. Selecione seu repositório
5. Configure variáveis de ambiente (se houver)
6. Deploy automático iniciará

---

## 🔧 Pré-Deploy Checklist

Antes de fazer deploy, verifique:

- [ ] Build local funciona: `npm run build`
- [ ] Sem erros TypeScript: `npx astro check`
- [ ] Links estão corretos
- [ ] Imagens aparecem
- [ ] Responsividade testada em mobile
- [ ] Meta tags configuradas
- [ ] Favicon adicionado
- [ ] README atualizado

---

## ⚙️ Configuração de Domínio Próprio

### Registrar domínio

Opções populares:

- [Namecheap](https://www.namecheap.com) - Barato
- [Google Domains](https://domains.google) - Integrado
- [Hostinger](https://www.hostinger.com) - Bom custo-benefício

### Configurar DNS

Para **Vercel**:

```
Nameservers:
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Para **Netlify**:

```
Apontar para os nameservers do Netlify
(fornecidos no dashboard)
```

Para **GitHub Pages**:

```
Criar registros A:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

Ou CNAME:
seuusuario.github.io
```

---

## 📊 Monitoramento Pós-Deploy

### Verificar status

- Vercel: Dashboard mostra deploy status
- Netlify: Deploy notifications via email
- GitHub: Actions tab mostra builds

### Monitorar performance

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://web.dev/measure/)

### Analytics (opcional)

- [Google Analytics](https://analytics.google.com/)
- [Fathom Analytics](https://usefathom.com/) (Privacy-friendly)
- [Plausible](https://plausible.io/) (Privacy-friendly)

---

## 🆘 Troubleshooting

### Build falha no deploy

1. Verifique logs do build
2. Execute localmente: `npm run build`
3. Procure por erros TypeScript: `npx astro check`

### Imagens não aparecem

1. Verifique se estão em `public/`
2. Use caminhos relativos corretos
3. Verificar permissões de arquivo

### Domínio não funciona

1. Aguarde propagação DNS (até 48h)
2. Limpe cache do navegador
3. Verifique configuração de DNS

---

## 💡 Dicas Extras

### Automation com GitHub Actions

```yaml
# CI/CD checklist automático
- name: Check TypeScript
  run: npx astro check

- name: Build test
  run: npm run build
```

### Backup automático

```bash
git push upstream main
git push origin main
```

### Deploy preview automático

- Vercel: Automático em PRs
- Netlify: Automático em PRs
- GitHub: Usando `environment: production`

---

## ✅ Você está pronto!

Seu portfolio está pronto para o mundo! 🎉

**Próximos passos:**

1. Escolha a plataforma de deploy
2. Siga o guia respectivo
3. Compartilhe seu portfolio
4. Comemore! 🎊

---

Se tiver dúvidas durante o deploy, consulte a documentação oficial:

- [Deploy Guide - Docs.astro.build](https://docs.astro.build/en/guides/deploy/)
