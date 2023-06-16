# Melhorando acessibilidade

```
 <table>
    <caption>Produzidos x Vendidos por Loja</caption>
    <colgroup>
        <col>
        <col span="2" style="background-color: red">
        <col span="2" style="background-color: blue;">
    </colgroup>
    
    <thead>
        <tr>
            <th rowspan="2"></th>
            <th colspan="2" scope="colgroup">Afonso Pena</th>
            <th colspan="2" scope="colgroup">Antônia Pereira</th>
        </tr>
        <tr>
            <th scope="col">Produzidos</th>
            <th scope="col">Vendidos</th>
            <th scope="col">Produzidos</th>
            <th scope="col">Vendidos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Vassouras</th>
            <td>50</td>
            <td>30</td>
            <td>20</td>
            <td>20</td>
        </tr>
        <tr>
            <th scope="row">Baldes</th>
            <td>10</td>
            <td>10</td>
            <td>30</td>
            <td>25</td>
        </tr>
    </tbody>
</table>
```

Estaremos usando o atributo scope, que serve permitir que essa acessibilidade saiba que o escopo do cabeçalho é relacionado com, o agrupamento, ou a coluna, ou a linha, o atributo é escrito scope="" .


## Cabeçalho

<br>

### Head

```<head></head>``` é a parte não visível pelo navegador, onde se faz configurações, contém informações como o título, links para o css, para o favicon.

<br>

### Meta

A tag ```<meta>``` , ela serve para definir metadados, como codificação de caracteres especiais e portabilidade para dispositivos mobiles.

<br>

### Favicon

Favicon é uma abreviação para "favorite icon", refere-se aos ícones dos favoritos a alguns anos atrás, mas nos dias de hoje acabou ficando este termo, antigamente ele era por 16 pixeis, porém com o avanço da tecnologia isso mudou.

Para colocarmos o ícone usaremos a tag ```<link>``` com o atributo rel="icon", que seria para representar relação, no caso a tag link vai conter um ícone, depois o href para mostrar onde está o ícone.
```
<!--
    <link> para ícones personalizados
-->

<!-- favicon básico -->
<link rel="icon" href="/icons/icon-48x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!-- iPhone não-Retina, iPod Touch e dispositivos Android 2.1+: -->
<link rel="apple-touch-icon-precomposed" href="https://developer.cdn.mozilla.net/static/img/favicon57.a2490b9a2d76.png">

<!-- iPad de primeira e segunda geração: -->
<link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!-- iPhone com tela retina de alta resolução: -->
<link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!-- iPad de terceira geração com tela retina de alta resolução: -->
<link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>
```
<br>

### Meta SEO

Veremos agora das metas que são importantes para SEO(Search Engine Optimization ou motores de busca, como o google).
```
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Esses já vimos anteriormente.
```
<meta name="author" content="Mayk Brito">
```

Temos também o de autor, para definir o autor da página, para possuirmos propriedade sobre a página.
```
<meta name="description" content="Um website para iniciantes em programação">
```

Este meta é usado para descrição de sites, caso você não tenha esse meta, o navegador irá procurar qualquer texto seu, mas muito melhor escolher o que você quer que apareça.
```
<meta name="robots" content="index, follow">
```

Esse meta diz para o robô do google o que queremos que ele faça, ele é responsável por colocar os resultados da busca , por exemplo. É possível dizer ao robô seguir links na página, através do follow, ou o contrário com o nofollow , ou "indexar" a página, através do index, ou no index.

<br>

### Meta Social

Existem metadados personalizados por empresas de redes sociais, como Facebook, que criou o Open Graph, que é um tipo de metadado se quisermos colocar um tipo de conteúdo especial, caso queiramos compartilhar o link da nossa página no Facebook.
```
 <head>

    <!-- Open Graph: facebook -->

    <meta property="og:image" content="https://cdn-images-1.medium.com/max/92/1*TkXVfLTwsHdwpUEjGzdi9w@2x.jpeg">

    <meta property="og:description" content="Aqui vem um texto para ser mostrado ao compartilhar no facebook">

    <meta property="og:title" content="Um site da Rocketseat">

   <!-- twitter -->

    <meta name="twitter:title" content="Rocketseat">

</head>
```

São exemplos de metadados, que o Facebook procura na hora que compartilhamos a nossa página, como imagens, descrição, texto e outros.

O Twitter usa o atributo name, diferente do Facebook que resolveu usar o property.