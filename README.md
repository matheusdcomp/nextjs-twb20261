# Sistema da disciplina de Tecnologias Web - CCOMP - UFSJ

Sistema web desenvolvido para as aulas da disciplina de **Tecnologias Web** do Curso de Bacharelado em Ciência da Computação da UFSJ.


## Instalação do Node.js
Caso seu Linux ainda não possua o Node.js instalado, **não faça isso usando sudo apt install**, pois isso instalará uma versão antiga. Ao invés disso, siga o seguinte passo:

1. Instale o **curl**:
```bash
sudo apt install curl
```

2. Instale **nvm**: 
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

3. Execute o nvm para instalar o node e o npm:
```bash
nvm install --lts      # Instala a última versão estável
or
nvm install vX.XX.XX   # Instala uma versão específica 
```

4. É possível instalar várias versões do Node. Caso queira trocar de uma versão para outra, execute:
```bash
nvm use vX.XX.XX             # Para trocar a versão em uso
```


## Instalação do sistema

Faça o download do repositório do sistema [GitHub](https://github.com/matheusdcomp/nextjs-twb) em uma pasta no seu computador. Verifique se a versão do node e npm do projeto é compatível com a que seu computador possui instalada.

Após o download, é necessário instalar as bibliotecas, por meio do seguinte comando:
```bash
npm install
```

O sistema evolui ao longo das aulas das disciplinas. A branch **main** tem a aula inicial e as demais branches são identificadas por um número. Quanto maior o número, mais avançado no assunto a branch está e o sistema está mais completo. Alterne entre as branches para visualizar aulas anterior e acompanhar a evolução do conteúdo da disciplina.

Instalei o BD em uma imagem docker. Se fizer isso também, é necessário ativá-la:
```bash
docker run --name postgres -e POSTGRES_PASSWORD=sua_senha -p 5432:5432 -d postgres
```

Na primeira vez, execute os comandos do Prisma ORM. Para Instalar:
```bash
npm install prisma --save-dev
```

Inicializar o PRISMA:
 - Cria diretorio prisma
 - Cria arquivo schema.prisma
 - Cria o arquivo .env
```bash
npx prisma init
```

Edite o arquivo schema.prisma para definir o SGBD e as tabelas. Edite também a variável DATABASE_URL no arquivo .env para configurar a conexão com a base de dados no SGBD. Exemplo do PostgreSQL: 
```bash
DATABASE_URL="postgresql://usuario:senha@IP:5432/database?schema=public"
```

Incialize o servidor do PRISMA (precisa ficar ativo):
```bash
npx prisma dev
```

Execute o modelo para gerar os arquivos de criação:
```bash
npx prisma migrate dev
```

Gere a base de dados:
```bash
npx prisma generate
```

Para visualizar o BD no navegador:
```bash
npx prisma studio
```

## Execução

Faça o deploy no modo de desenvolvimento:
```bash
npm run dev
```

Ou faça o deploy no modo de produção:
```bash
npm run build
```


## Visualização e Uso

Para visualizar o site no nevegador, acesse [http://localhost:3000](http://localhost:3000).


