# Trabalhando com elementos


## Semântica

Um dos principais objetivos é dar uma estruturação para o texto, para que haja significado e também uma melhor leitura e para isso usamos elementos semânticos, são mais de 100, mas todos muito importantes, são apenas benefícios.
<br /><br />

## Títulos e Parágrafos

```
<h1>Sobre mim</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
<p>Voluptates tempora iusto at provident soluta distinctio fugit ratione consectetur deleniti vel quisquam deserunt architecto quas, possimus quos molestias maiores iste officia?
</p>

<h2>Nascimento</h2>
<h3>Infância</h3>
<p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui officiis consequuntur corrupti nisi cumque esse dolorum fugit, rem suscipit cum laudantium expedita itaque odio a explicabo ex illo illum libero?
</p>
<h3>Adolescência</h3>
<p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui officiis consequuntur corrupti nisi cumque esse dolorum fugit, rem suscipit cum laudantium expedita itaque odio a explicabo ex illo illum libero?
</p>

<h2>Trabalho</h2>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad vel explicabo consequatur, ut magni doloremque sapiente, perspiciatis excepturi esse ea neque sed! Blanditiis mollitia assumenda ipsum harum consequuntur. Veritatis.

<a href="">Saiba mais</a>
```

- ```<hx></hx>``` — indo de 1 à 6 é a tag para título, 1 sendo o maior e 6 sendo o menor, a hierarquia indo de título, subtítulo e etc.
- ```<p></p>``` — este sendo a tag de parágrafo.

<br /><br />

## Listas

Listas no HTML são feitas da seguinte forma:
- ```<ul></ul>``` — para uma lista não ordenada.
- ```<ol></ol>``` — para uma lista ordenada.
- ```<li></li>``` — colocar os elementos da lista. 

```
<h1>Suco detox</h1>

<h2>Ingredientes:</h2>

<ul>
    <li>3 folhas de couve;</li>
    <li>1 laranjas;</li>
    <li>1 pedacinho gengibre;</li>
    <li>300 ml de água;</li>
    <li>Adoçante a gosto;</li>
    <li>Gelo a gosto.</li>
</ul>
```
<br /><br />

## Citações

```
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
    O <strong>Elemento HTML <code>&lt;blockquote&gt;</code> </strong> (ou <em>HTML Block
    Quotation Element</em>) indica que um texto externo foi citado.
</blockquote>

<p>De acordo com <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
    <cite>página MDN blockquote</cite></a>:
</p>

<p>O elemento quote — <code>&lt;q&gt;</code> — é <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">usado para citações curtas que não precisam de parágrafos ou quebras de linha.</q> -- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
<cite>MDN q page</cite></a>.</p>
```
- ```<blockquote></blockquote>``` — para uma citação que você queira deixa maior, tendo uma estilização mais diferente.
- ```<code></code>``` — mostra que é um código
- cite — atributo usado para citar a url.
- ```<cite></cite>``` — tag usada para colocar o citar link direto no texto.
- ```<q></q>``` — citação curtas com aspas.

<br /><br />

## Abreviações

Elemento muito comum encontrado na web é a de abreviação, mas de alguma forma queremos mostrar a palavra inteira.
```
<p>Usamos <abbr title="Hypertext Markup Language">HTML</abbr>  para estruturar nossos documentos da web.</p>
```
Se colocarmos o mouse em cima da abreviação, teremos a palavra inteira.

<br /><br />

## Detalhes de contato

A tag usada para apenas colocar detalhes de contato é a tag ```<address></address>```, não endereço em si, mas por exemplo o autor da página.
```
<address>
    <p>Mayk Brito <br>
    <strong>Campo Grande, MS</strong>
    </p>
</address>
```
<br /><br />

## Lista de descrição

Usado para marcar uma lista de itens e suas descrições.
```
<h2>Glossário</h2>
<dl>
    <dt>Hypertext</dt>
    <dd>É um hiper texto com possibilidades...</dd>

    <dt>Markup</dt>
    <dd>Marcação do texto</dd>

    <dt>Languague</dt>
    <dd>Linguagem com sua semântica e sintaxe....</dd>
</dl>
```
- ```<dl></dl>``` — tag para lista de descrições.
- ```<dt></dt>``` — tag para o termo da descrição.
- ```<dd></dd>``` — tag para descrição.

<br /><br />

## Representação de código

Para representar códigos usamos as tags:
- ```<code></code>``` — muda a cor do conteúdo para representar código.
- ```<pre></pre>``` — tag para criar um bloco de código, mantém os espaços em branco.
```
<pre>
    <code>
        &lt;
    </code>
</pre>
```
<br /><br />

## Elementos Genéricos

```
<div class="cart">
    <span>Camiseta</span>
    <span>r$ 99,00</span>
</div>
```
- ```<div></div>``` — tag usada para agrupar conteúdo.
- ```<span></span>``` — tag usada para agrupar texto, em uma ideia mais de linha.