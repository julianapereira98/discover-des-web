# Link


## Conhecendo a tag âncora

São os famosos hyperlinks, e a tag usada para se criar um é a ```<a href=" ></a>```, responsável por ligar várias páginas.

Em sua anatomia ele recebe atributos globais (title, id ,class,...) e o mais importante href, a referência, podendo ser url completa, fragmento, email, telefone e mais diversos outros. há também o atributo de download, que é download="", usado junto do href="",por exemplo, se você colocar o link de uma imagem no href="" com o atributo de download, a imagem será baixada ao invés de irmos até a página e se colocarmos um valor no atributo de download, ele irá dizer como você vai salvar o arquivo.

Por fim temos o atributo target="", que irá dizer qual o alvo do nosso disparo, ou seja, se não tivermos o target, quando clicarmos no link, ele vai pegar o mesmo alvo, a mesma página e apenas vai trocar o conteúdo, mas se usarmos o atributo, por exemplo target="_blank", ele vai abrir uma página com o conteúdo.

<br/>

## Utilizando a tag âncora

```
<p>Saiba mais</p>
<ul>
    <li><a href="#about">Sobre mim</a></li>
    <li><a href="#history">História</a></li>
    <li><a href="#works">Trabalhos</a></li>
</ul>

<h1 id="about">Sobre mim</h1>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius harum quos similique. Debitis, itaque sit veniam quam recusandae eligendi aspernatur neque deleniti adipisci provident excepturi voluptate, amet corporis laborum.

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et necessitatibus molestias delectus est consequuntur culpa voluptatum alias obcaecati, harum id tempore consectetur earum sequi inventore. Laboriosam corporis tenetur vitae ratione.

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto soluta consequuntur eligendi dignissimos. Ab quas voluptatum minima eum nostrum, porro obcaecati mollitia nihil voluptates rerum beatae similique quibusdam delectus possimus!

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eum deleniti dolores blanditiis eveniet. Quisquam aperiam dolorem quibusdam quas eveniet, illum et. Ab cumque magni hic tempore reprehenderit temporibus facere!

<h2 id="history">História</h2>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore velit ab nisi sit quam quis ea provident. Sequi numquam modi, voluptatem velit nulla harum vel quasi nesciunt doloribus est aspernatur.
Lorem ipsum dolor sit amet consectetur adipisicing elit. A, earum incidunt. Explicabo debitis in quae voluptatem rerum, laborum iste illum dolore vel quidem exercitationem nesciunt eligendi deserunt, quos velit.

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit nesciunt veritatis pariatur eaque quaerat facere odio illum provident, dolore velit tempora modi blanditiis harum ab quis alias atque? Provident, dolor.

<h2 id="works">Trabalhos</h2>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in placeat architecto earum, ullam iusto nesciunt nobis perferendis quam, quo consequatur adipisci magni, ipsam asperiores minus odit. Doloribus, dolor expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum aspernatur rerum aliquid quae aliquam et harum, vero quibusdam porro. Iusto architecto soluta reprehenderit dolores enim. Earum provident perferendis sapiente.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex inventore ea nemo amet accusantium aliquid dicta fugiat quia culpa odio, minima officiis quidem maxime velit corrupti! Dolorem, dicta blanditiis!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in placeat architecto earum, ullam iusto nesciunt nobis perferendis quam, quo consequatur adipisci magni, ipsam asperiores minus odit. Doloribus, dolor expedita.
```

Neste exemplo temos os fragmentos, com o navegador aberto, se clicarmos em qualquer um deles, será adicionado uma # e o nome do respectivo fragmento, mas como faremos a ligação entre o fragmento e a sua respectiva parte? adicionamos o atributo global id="" e colocamos o nome do fragmento dentro dele, o que faz com que sejamos levados até onde está o id na página.

<br/>

## Conteúdos dentro de elemento a

Estaremos vendo o que podemos colocar dentro do conteúdo do elemento <a></a>.
Qualquer coisa pode ser colocado, até mesmo outras tags, e mais de uma.
```
 <a href="http://google.com" title="Ir para google">
    <h1>Google</h1>
    <p>Claro que posso</p>
    <img src="https://source.unsplash.com/random" alt="">
</a>
```
Neste exemplo há até imagens.

<br/>

## Caminhos e URLS

Algo importante que precisamos saber ao criar links é como navegar neles, juntamente em como navegar no caminho dos arquivos.

No caso dos links são as URLs, que são sequencia de texto que define onde algo está localizado na web , por exemplo https://rocketseat.com.br, ela mostrando que esse endereço levará para algum lugar da web.

No caso dos arquivos, são os seus caminhos, onde, no explorador de arquivos, um recurso está localizado, podendo ser imagem, pdf, qualquer arquivo basicamente, abrindo alguns arquivos do nosso projeto no VSCode, usando o elemento a, iremos escrever ao invés de https://..., apenas o nome do arquivo, o próprio VSCode possui a inteligência de saber que o arquivo está lá, lembrando que também podemos usar os atributos que usamos nas URLs.

<br/>

## Como navegar pelos diretórios

```
<a href="hyperlinks.html">arquivo na pasta anterior</a>
<br>
<a href="./urls-caminhos.html">arquivo no diretório raiz</a>
<br>
<a href="urls-caminhos.html">arquivo na mesma pasta</a>
<br>
<a href="outros/conteudo-a-element.html">arquivo na pasta outros, que está na pasta anterior</a>
```

Para o mesmo diretório, local, raiz apenas colocamos o nome do arquivo no href.

Para entrar em um diretório colocamos o nome do diretório e /, como no exemplo "outros/conteudo-a-element.html"

Para sair de um diretório colocamos ../ ,ele sairá do diretório, semelhante a sair de uma caixa que está dentro de outro.

E por fim o diretório raiz especificamente, usamos apenas ./ , o próprio VSCode irá completar.

Caso você coloque um arquivo que não existe ou mesmo está no diretório errado, vai dar erro de não ter encontrado o arquivo.


<br/>

## Caminhos absolutos vs relativos

No caminho absoluto inclui-se o protocolo e o nome de domínio e sempre apontará para o mesmo local, já que é absoluto. Como por exemplo esta URL http://www.rocketseat.com.br/projeto/index.html é absoluto(mesmo não levando a lugar nenhum, é apenas um exemplo).

No caminho relativo, é relativo à página, pasta aberta, ou seja, se não tiver irá consequentemente dar erro, apontará para lugares diferentes. Como por exemplo apenas google.com.