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


