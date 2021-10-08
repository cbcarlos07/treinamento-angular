## Comando usados

## prefix

Seletor do componente

Para mudar o prefixo é preciso ir no arquivo angular.json e alterar o atributo prefix

    "prefix": "xyz",


## Plugins utilizados

### Tether

 [Clique aqui](http://tether.io/) para conhecer

    npm i tether --save

 ### Bootstrap

 [Clique aqui](https://getbootstrap.com/) para conhecer

 Para instalar execute o seguinte comando 

    npm i bootstrap

## JQuery

    npm i jquery --save

## Adicionar Configurações ao Projeto

Para adicionar o Bootstrap no projeto é preciso adcionaro o endereço do bootstrap que está na pasta node_modules dentro do arquivo `angular.json`

        "styles": [
            "/node_modules/bootstrap/dist/css/bootstrap.min.css",
            "src/styles.css"
        ],

 Adicionar também o script do bootstrap

        "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]  

Dependências necessárias

    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.css"
    ],
    "scripts": [
        "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        "./node_modules/jquery/dist/jquery.min.js",
        "./node_modules/tether/dist/js/tether.min.js"
    ]


# Criar componentes

    ng g c nome_do_componente

Para criar sem o arquvo spec.ts

    ng c nome_do_componente --skipTests=true

Ou

    ng c nome_do_componente --skip-tests