
# Conceitos


## O que é HTML

HTML é um acrônimo para Hypertext (hipertexto) Markup (marcação) Language (linguagem), ela não é uma linguagem de programação em si, porém é uma linguagem na forma de escrever, tendo sintaxe e semântica, Hypertext é uma marcação especifica que nos leva a outro texto, isso mais no passado, agora sendo relacionado a imagens, a videos.<br /><br />

## Comentários

Comentários servem para nos ajudar a não nos perder em nossos códigos, sendo bem simples abrir um comentário, dessa forma:
```
 <!-- comentários -->
```

O que há em um comentário não afetará o código.<br /><br />

## Anatomia das Tags

As Tags funcionam da seguinte forma:
```
<h1> TÍTULO </h1>
```

Você faz a abertura delas, coloca o nome da Tag e as fecha como no exemplo. No caso dessa Tag, seu conteúdo é a de título, juntando a abertura, fechamento e o conteúdo, teremos um Elemento HTML.

Há também Elementos vazios que diferente do exemplo acima não se fecha daquela forma, mas assim:
```
 <img src=" " alt=" ">
```
<br />

## Atributos

Atributos são informações extras ou configurações das tags.

Há também os atributos booleanos, que não precisam de conteúdo, booleano significando que apenas possuem dois tipos de valores, sendo eles verdadeiro ou falso, não havendo texto, apenas essas duas opções.
```
<input type="text" disabled>
```

Outro fator que devemos levar em consideração são as aspas, recomendado apenas o uso das aspas duplas, para não desencadear problemas no código.<br /><br />


## Atributos Globais

Atributos globais são atributos aplicáveis em todas as Tags, sendo as principais:

- class — além de classificar as Tags, é usada para aplicar estilo css e também para acessar com o Java Script.
```
<div class="conteúdo">
</div>
```

- contenteditable — usado para editar o conteúdo da página, porém não é mantido após salvar.
```
<div contentedtable="true">
</div>
```

- data-* — usado para expandir os tipos de atributos que podemos usar para fazer mais tarde lógica no Java Script , utilizado em css também.
```
<div data-qualquercoisaaqui="">
</div>
```

- hidden — usado para esconder uma Tag.
```
<div class="carrinho" hidden>
conteúdo
</div>
```

- id — usado apenas 1 por Tag para identificação, para também mais tarde usar no Java Script e css.
```
<div id="texto">
conteúdo
</div>

div id="texto2">
conteúdo
</div>
```

- style — aplica a estilização na Tag, normalmente não se usa "style" dentro da Tag, mas sim em arquivos externos.
```
<div style="color: red">
```

- tabindex — usado para ordenar o Tab na página.
```
<div tabindex="3">
</div>

div tabindex="1">
</div>

div tabindex="2">
</div>
```

- title — serve para definir um título para a Tag, quando colocamos o mouse descansando em cima do conteúdo da página.<br /><br />

Se você quiser estudar outros Atributos Globais vá ao site https://developer.mozilla.org/pt-BR/.<br /><br />

## Aninhamento Hierarquia

Aninhamento em HTML significa colocar uma tag dentro da outra, porém não é qualquer tag que podemos colocar dentro de outra, existe uma hierarquia por trás delas, por exemplo:
```
<p> 
    <em>texto<em>
    <p> texto2</p> 
</p>
```

Podemos ver no exemplo acima que a tag ```<em></em>``` (usada para dar enfase em um texto) é pertencente a Tag ```<p></p>``` (usada para criar um parágrafo).

Também é possível notar que há um fluxo, onde as tags são lidas por ordem de cima para baixo.

Por fim o posicionamento de elementos, podemos ver que a tag ```<em></em>``` não está em uma outra linha como na tag ```<p></p>```, existem tags que quebram a linha, então mesmo que colocarmos a tag ```<p></p>``` uma do lado da outra, visualmente vai dar quebra de linha.
<br /><br />

## Caracteres Reservados

Caracteres reservado são caracteres usados no próprio HTML, como ```< > & " " ' '```, não podemos usar nas tags, pois dão erro, mesmo aparecendo na preview o navegador vai tentar ler esses caracteres de alguma forma que faça sentido. Para usarmos precisamos troca-los por outras formas de escrever.
```
<p>
    &lt; // = <
    &nbsp; // = espaços 
    &gt; // = >
    &amp; // = &
    &quot; // = "    
    &apos; // = '
</p> 
```
<br />

## Anatomia Documento

Se abrirmos o documento .html pelo navegador estaremos vendo a nossa página e se clicarmos em ver o código fonte dela, estaremos vendo o HTML que escrevemos no VSCode.

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Anatomia do Documento</title>
    </head>

    <body>
        <h1>Título</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe similique perferendis mollitia a assumenda doloribus omnis, quidem tempore accusamus repudiandae. Accusamus, rem dolorum ad repellendus distinctio blanditiis praesentium nulla?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe similique perferendis mollitia a assumenda doloribus omnis, quidem tempore accusamus repudiandae. Accusamus, rem dolorum ad repellendus distinctio blanditiis praesentium nulla?
        </p>
    </body>
</html>
```

- ```<!DOCTYPE html>``` — diz ao navegador que estamos a trabalhar com HTML 5.
- ```<html></html>``` — o próprio HTML, elemento raiz, o inicio da cadeia.
- ```<head></head>``` — contém configurações importantes para página, mas não ainda o que o usuário vai ver.
- ```<meta>``` — onde vai representar vários tipos de metadados da página.
- ```<title></title>``` — título da página.
- ```<body></body>``` — onde haverá conteúdo visual da página.

Se quiser facilitar tudo digitando ```!``` o emmet irá completar automaticamente.