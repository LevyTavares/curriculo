# 🐛 Guia de Troubleshooting

## ❌ Problemas Comuns e Soluções

### 1. "Cannot find module 'astro'"

**Erro:**

```
Error: Cannot find module 'astro'
```

**Solução:**

```bash
# Reinstale as dependências
npm install

# Ou se estiver usando yarn
yarn install
```

---

### 2. "Port 3000 já está em uso"

**Erro:**

```
Error: Address already in use :::3000
```

**Solução A - Usar outra porta:**

```bash
npm run dev -- --port 3001
```

**Solução B - Fechar processo na porta 3000:**

```bash
# No Linux/Mac
lsof -ti:3000 | xargs kill -9

# No Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

### 3. "Build falha com erro TypeScript"

**Erro:**

```
✘ Astro type checking
```

**Solução:**

```bash
# Verifique erros TypeScript
npx astro check

# Se houver erros, revise o arquivo
nano src/arquivo.astro

# Ou desabilite type checking (não recomendado)
# Edite astro.config.mjs
```

---

### 4. "Imagens não aparecem no site"

**Checklist:**

- [ ] Imagem está em `public/` ?
- [ ] Caminho está correto? (ex: `/images/foto.jpg`)
- [ ] Extensão é suportada? (`.jpg`, `.png`, `.webp`, `.svg`)
- [ ] Arquivo não está corrompido?

**Solução:**

```astro
<!-- ❌ Errado -->
<img src="./images/foto.jpg" />
<img src="images/foto.jpg" />

<!-- ✅ Correto -->
<img src="/images/foto.jpg" />
```

---

### 5. "Estilos Tailwind não funcionam"

**Erro:** Classes Tailwind não aplicam estilos

**Solução:**

```bash
# Reconstruir Tailwind CSS
npm run build

# Se persistir, limpe cache
rm -rf node_modules
npm install
npm run dev
```

**Verificar:** Confirme que `tailwind.config.mjs` possui:

```javascript
content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"];
```

---

### 6. "Erro ao fazer import de componente"

**Erro:**

```
Cannot find module 'src/components/MeuComponente.astro'
```

**Solução:**

- [ ] Nome do arquivo está correto (case-sensitive)?
- [ ] Extensão está correta (`.astro` não `.jsx`)?
- [ ] Caminho está correto?

```astro
<!-- Verificar sintaxe de import -->
import MeuComponente from '../components/MeuComponente.astro';
```

---

### 7. "Formulário não envia emails"

**Solução depende do serviço:**

**Formspree:**

- [ ] ID do formulário está correto?
- [ ] Confirmou email no Formspree?
- [ ] URL da action está correta?

```astro
<form action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
```

**Netlify Forms:**

- [ ] Fazendo deploy no Netlify?
- [ ] Form tem `netlify` attribute?
- [ ] Build local funciona com `npm run build`?

```astro
<form name="contact" method="POST" netlify>
```

---

### 8. "Hot Reload não funciona"

**Solução:**

```bash
# Reinicie o servidor
# 1. Ctrl+C para parar
# 2. npm run dev novamente

# Ou verifique se há arquivo de lock
rm -f .astro
npm run dev
```

---

### 9. "Build de produção falha"

**Erro ao rodar:** `npm run build`

**Passo 1 - Verifique TypeScript:**

```bash
npx astro check
```

**Passo 2 - Veja logs completos:**

```bash
npm run build -- --verbose
```

**Passo 3 - Limpe e tente novamente:**

```bash
rm -rf dist .astro node_modules
npm install
npm run build
```

---

### 10. "Caracteres especiais aparecem como ?"

**Problema:** Acentos e caracteres aparecem incorretos

**Solução:**
Adicione ao `src/layouts/Layout.astro`:

```html
<meta charset="UTF-8" />
```

Certifique-se de que o arquivo está salvo como UTF-8 (VS Code: salva como UTF-8 por padrão)

---

### 11. "Site vê com estilo estranho em produção"

**Causa comum:** Versão local ≠ build de produção

**Solução:**

```bash
# Teste a build de produção localmente
npm run build
npm run preview

# Acesse http://localhost:4321
```

---

### 12. "Erro 404 em páginas específicas"

**Problema:** Deploy funciona, mas página não é encontrada

**Solução:**

1. Verifique que o arquivo existe:

```
src/pages/minha-pagina.astro → /minha-pagina/
src/pages/index.astro → /
```

2. Para Vercel/Netlify - precisa de `_redirects` (GitHub Pages)?

---

## 🔍 Checklist de Debug

Antes de procurar ajuda, verifique:

- [ ] Node.js versão 18+? (`node --version`)
- [ ] Dependências instaladas? (`npm install`)
- [ ] Sem erros no console do dev?
- [ ] Funciona com `npm run dev`?
- [ ] Build local funciona? (`npm run build`)
- [ ] Arquivo salvo (Ctrl+S)?
- [ ] Sem erros TypeScript? (`npx astro check`)
- [ ] Cache limpo? (Ctrl+Shift+Del no navegador)

---

## 📋 Informações para Pedir Ajuda

Se ainda tiver problemas, inclua:

1. **Versão do Node:**

```bash
node --version
npm --version
```

2. **Erro completo:**

```bash
npm run build 2>&1 | tee error.log
```

3. **Sistema operacional:** Windows / Mac / Linux

4. **Editor:** VS Code versão

5. **Passo a passo para reproduzir**

---

## 🔗 Recursos de Ajuda

- [Fórum Astro](https://astro.build/chat) - Chat da comunidade
- [Discussões GitHub Astro](https://github.com/withastro/astro/discussions)
- [Issues Astro](https://github.com/withastro/astro/issues)
- [Stack Overflow - tag `astro`](https://stackoverflow.com/questions/tagged/astro)
- [Discord Astro](https://astro.build/chat)

---

## ✅ Se Nada Funcionar

**Reset completo:**

```bash
# 1. Limpe tudo
rm -rf node_modules package-lock.json .astro dist

# 2. Reinstale
npm install

# 3. Tente novamente
npm run dev
```

**Se ainda não funcionar:**

- Verifique versão do Node (18+)
- Crie nova pasta e clone o projeto
- Busque ajuda nos recursos listados acima

---

**Boa sorte! Você consegue! 💪**
