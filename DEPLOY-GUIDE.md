# Guia de Deploy - GitHub + Netlify

## 1. Subir para GitHub

### No VS Code:
1. **Inicializar Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Rifa Champions Fla 2025"
   ```

2. **Criar repositório no GitHub**
   - Acesse github.com
   - Clique em "New repository"
   - Nome: `rifa-champions-fla-2025`
   - Deixe público
   - Não inicialize com README

3. **Conectar ao GitHub**
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/rifa-champions-fla-2025.git
   git branch -M main
   git push -u origin main
   ```

## 2. Deploy no Netlify

### Opção A - Conectar GitHub (Recomendado):
1. **Acesse netlify.com**
2. **Clique "New site from Git"**
3. **Conecte GitHub**
4. **Selecione seu repositório**
5. **Configurações:**
   - Build command: `npm run build`
   - Publish directory: `client/dist`
   - Node version: `18`

### Opção B - Upload direto:
1. **Build local**
   ```bash
   npm run build
   ```
2. **Arraste pasta `client/dist` para Netlify**

## 3. Configurar Variáveis de Ambiente

### No Netlify Dashboard:
1. **Site Settings → Environment Variables**
2. **Adicione:**
   ```
   DATABASE_URL=sua_connection_string_neon
   ```

## 4. Configurar Domínio Personalizado (Opcional)

### No Netlify:
1. **Site Settings → Domain Management**
2. **Add custom domain**
3. **Seguir instruções DNS**

## 5. Configurar Formulário de Contato

### Adicionar ao HTML:
```html
<form name="rifa-inscricoes" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="rifa-inscricoes">
  <!-- seus campos aqui -->
</form>
```

## 6. Monitoramento

### No Netlify:
- **Functions → View logs** (para API)
- **Forms → Submissions** (para formulários)
- **Analytics → Overview** (para estatísticas)

## Arquivos Criados:
- `netlify.toml` - Configuração do Netlify
- `netlify/functions/api.js` - Serverless function
- `DEPLOY-GUIDE.md` - Este guia

## Comandos úteis:
```bash
# Testar build local
npm run build

# Testar servidor local
npm run dev

# Atualizar no GitHub
git add .
git commit -m "Atualização"
git push
```

## URLs importantes:
- **Netlify**: netlify.com
- **GitHub**: github.com
- **Neon Database**: neon.tech