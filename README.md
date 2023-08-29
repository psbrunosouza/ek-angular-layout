# Ekaizen layout


## Estrutura de arquivos e pastas

## Comandos do nx workspace

> Observação importante: O comando para geração de novas
estruturas foi alterado a partir do nx workspace versão 16.
de @nrwl para @nx


### Novo projeto/estrutura

Iniciar um projeto com nx workspace
```markdown
- npx create-nx-workspace@latest myorg
```

### Comandos para geração de novas aplicações

Gerar um novo host e seus remotes
```markdown
- nx g @nx/angular:host hostName dev --remotes=login
```

Gerar um remote para um host
```markdown
- nx g @nx/angular:remote remoteName --host=hostName
```

### Comandos para geração de bibliotecas

geração de uma biblioteca simples
```
- nx g @nx/angular:library my-ui-lib --tags=ui
```

geração de uma biblioteca que pode ser distribuída (NPM)
```
- nx g @nx/angular:library my-lib --publishable --import-path=@my-org/my-lib
```

### Execução de um projeto

Rodar a aplicação buildando os remotes
```markdown
- nx serve dashboard --open
```

Rodar a aplicação com build de remotes específicos
```markdown
- nx serve dashboard --open --devRemotes='shop,cart'
```

Rodar apenas um determinado remote/aplicação
```markdown
- nx serve shop
```

## Lista de ferramentas/ biblitecas externas/ frameworks e tudo que iremos utilizar na nova estrutura

- tailwind
- nx workspaces (microfrontend e monorepo)
- transloco
- scully
- universal
- 



