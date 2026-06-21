# Publicar no GitHub Pages

Este projeto ja esta pronto para GitHub Pages: o arquivo principal e `index.html` e os assets estao nas pastas `css`, `js` e `images`.

## Publicar pelo navegador, sem instalar Git

1. Entre em https://github.com e clique em **New repository**.
2. Crie um repositorio publico, por exemplo `clicollor`.
3. Na tela do repositorio, clique em **Add file** > **Upload files**.
4. Arraste estes itens para o upload:
   - `index.html`
   - `.nojekyll`
   - `css`
   - `js`
   - `images`
5. Clique em **Commit changes**.
6. Va em **Settings** > **Pages**.
7. Em **Build and deployment**, selecione:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
8. Clique em **Save**.

Depois de alguns minutos, a pagina ficara em:

```text
https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/
```

Exemplo:

```text
https://seuusuario.github.io/clicollor/
```

## Se instalar Git depois

Com Git instalado, da para enviar pelo terminal:

```bash
git init
git add .
git commit -m "Publica site CLICollor"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

