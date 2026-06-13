# Deploy — Veicula Brasil AGV → Hostinger cPanel

## Pré-requisitos locais
- Node.js 18+
- npm 9+

---

## 1. Configurar variáveis de ambiente

Edite o arquivo `.env.local` na raiz do projeto:

```env
VITE_BASE44_APP_ID=69fd4610dc407e0f852436ab
VITE_BASE44_APP_BASE_URL=https://veicula-brasil-agv44.base44.app
```

> **Atenção:** confirme a URL exata do backend em **app.base44.com → seu projeto → Settings**.

---

## 2. Instalar dependências (apenas na primeira vez ou após mudanças no package.json)

```bash
npm install
```

---

## 3. Gerar o build de produção

```bash
npm run build
```

Isso gera a pasta `dist/` com os arquivos estáticos prontos para upload:

```
dist/
├── .htaccess          ← Roteamento SPA no Apache (Hostinger)
├── index.html
└── assets/
    ├── index-*.js
    └── index-*.css
```

---

## 4. Upload para Hostinger via cPanel

### Opção A — File Manager (cPanel)

1. Acesse **cPanel → File Manager**
2. Navegue até `public_html/`
3. Faça upload de **todos os arquivos da pasta `dist/`** (inclusive o `.htaccess` oculto)
4. Certifique-se de que o `.htaccess` está em `public_html/.htaccess`

> **Dica:** No File Manager, ative "Show Hidden Files" para ver o `.htaccess`.

### Opção B — FTP (FileZilla ou similar)

| Campo    | Valor                        |
|----------|------------------------------|
| Host     | ftp.seudominio.com.br        |
| Usuário  | seu_usuario_cpanel           |
| Senha    | sua_senha_cpanel             |
| Porta    | 21                           |

- Conecte e envie o conteúdo de `dist/` para `/public_html/`

---

## 5. Verificar após o deploy

- Acesse `https://veiculabrasilagv.com.br` no navegador
- Verifique se a página carrega corretamente
- Teste o formulário de cotação (deve abrir o WhatsApp)
- Teste uma URL interna (ex: `https://veiculabrasilagv.com.br/cotacao`) para confirmar que o `.htaccess` está funcionando

---

## Atualizar o site após mudanças no código

```bash
# 1. Edite os arquivos em src/
# 2. Gere novo build
npm run build

# 3. Faça upload da pasta dist/ novamente para public_html/
```

---

## Desenvolvimento local

```bash
npm run dev
# Acesse http://localhost:5173
```

---

## Estrutura do projeto

```
├── public/
│   ├── .htaccess      ← Copiado para dist/ no build (SPA routing)
│   └── favicon.svg
├── src/
│   ├── components/landing/   ← Componentes da landing page
│   ├── pages/Home.jsx
│   └── App.jsx
├── .env.local         ← Variáveis de ambiente (NÃO versionar)
├── vite.config.js
└── DEPLOY.md          ← Este arquivo
```
