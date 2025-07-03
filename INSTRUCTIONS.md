# Como Executar o Projeto - Rifa Champions Fla 2025

## 1. Instalar Dependências
```bash
npm install
```

## 2. Configurar Banco de Dados (Opcional)
Se quiser usar banco PostgreSQL:
- Edite o arquivo `.env` com sua CONNECTION STRING do Neon
- Execute: `npx drizzle-kit push`

Para testar sem banco:
- Comente a linha no `.env`: `# DATABASE_URL=...`

## 3. Executar o Projeto
```bash
npm run dev
```

## 4. Acessar o Site
Abra seu navegador em: `http://localhost:5000`

## 5. Hospedagem Gratuita
- **Vercel**: vercel.com (Recomendado)
- **Netlify**: netlify.com
- **Railway**: railway.app

## Arquivos Importantes
- `client/src/pages/home.tsx` - Página principal da rifa
- `client/src/components/ui/` - Componentes da interface
- `server/` - Backend da aplicação
- `.env` - Configurações do banco de dados

## Problemas Comuns
- **Erro "npx não reconhecido"**: Instale Node.js
- **Erro de política PowerShell**: Use CMD ou execute como administrador
- **Porta ocupada**: Mude a porta no arquivo de configuração