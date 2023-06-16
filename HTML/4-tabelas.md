# Tabelas

Estaremos vendo agora sobre o elemento <table>, que ajuda na organização de dados, criando tabelas.

Prós
- Visualização de dados via linhas e colunas.
- Boa acessibilidade para leitura dos dados <br>

Contras
- Pouco flexível
- Precisa de estilização para melhor visualização <br>

Não usar
- Para criar seu layout

<br>

## Tabela básica

Para fazer uma tabela básica, apenas precisaremos da tag ```<table></table>```, dentro dela iremos usar a tag ```<tr></tr>``` (table row) para criar uma linha na tabela, e dentro dela usaremos a tag ```<th></th>``` para o cabeçalho.

Depois faremos o tr novamente, só que agora não sendo o cabeçalho, e sim o td.

Ficará da seguinte foram:
```
<table>
    <tr>
        <th>Nome</th>
        <th>Idade</th>
    </tr>
    <tr>
        <td>Mayk</td>
        <td>35</td>
    </tr>
    <tr>
        <td>Diego</td>
        <td>25</td>
    </tr>
</table>
```

<br>

## Organizando Tabelas

Agora vamos dar uma melhor organizada na nossa tabela.

Colocaremos o nosso cabeçalho, na tag ```<thead></thead>``` e o nosso corpo no ```<tbody></tbody>``` e criaremos o rodapé usando ```<tfoot></tfoot>``` colocando os dados total.

Por fim poderemos colocar a tag ```<caption></caption>``` para descrever sobre o que a nossa tabela é, ficando mais ou menos assim:
```
<table>

    <caption>Pessoas por idade</caption>

    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Mayk</td>
            <td>35</td>
        </tr>
        <tr>
            <td>Diego</td>
            <td>25</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total:</td>
            <td>2 Pessoas</td>
        </tr>
    </tfoot>

</table>
```
<br>

## Tabela complexa

### THead complexa
```
<table>
    <caption>Produzidos x Vendidos por Loja</caption>
	<thead>
        <tr>
            <th rowspan="2"></th>
            <th colspan="2">Afonso Pena</th>
            <th colspan="2">Antônia Pereira</th>
        </tr>
        <tr>
            <th>Produzidos</th>
            <th>Vendidos</th>
            <th>Produzidos</th>
            <th>Vendidos</th>
        </tr>
  </thead>
</table>
```

Primeiro de tudo iremos criar o nosso table, colocando a descrição com o caption.

Criaremos o thead para começarmos o nosso cabeçalho, abrimos o tr dentro para linha e colocamos dentro deste tr 3 th, o primeiro sendo vazio.

Na próxima linha já temos os produzidos e vendidos, com o auxilio do emmet, criamos direto 4 th e colocamos os produzidos e vendidos.

Notamos que ainda está desorganizado, então usaremos o atributo rowspan="2", na primeira linha, para ocupar 2 linhas, empurrando os elementos para o lado.

Agora vemos que sobrou 2 colunas vazias, então usaremos o atributo de coluna colspan="2" nas 2 lojas.

<br>

### TBody complexo
```
<table>
    <caption>Produzidos x Vendidos por Loja</caption>

    <thead>
        <tr>
            <th rowspan="2"></th>
            <th colspan="2">Afonso Pena</th>
            <th colspan="2">Antônia Pereira</th>
        </tr>
        <tr>
            <th>Produzidos</th>
            <th>Vendidos</th>
            <th>Produzidos</th>
            <th>Vendidos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Vassouras</th>
            <td>50</td>
            <td>30</td>
            <td>20</td>
            <td>20</td>
        </tr>
        <tr>
            <th>Baldes</th>
            <td>10</td>
            <td>10</td>
            <td>30</td>
            <td>25</td>
        </tr>
    </tbody>
</table>
```

Dando continuidade a nossa tabela, iremos criar o tbody, abrir uma linha com o tr, colocar o nome do produto, porém ele será um th, ou seja um cabeçalho, e com a ajuda do emmet criaremos 4 td, para colocarmos o tanto de produtos produzidos e vendidos, e repetiremos, mas para outro produto.

<br>

## Melhorando o aspecto com colgroup

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
            <th colspan="2">Afonso Pena</th>
            <th colspan="2">Antônia Pereira</th>
        </tr>
        <tr>
            <th>Produzidos</th>
            <th>Vendidos</th>
            <th>Produzidos</th>
            <th>Vendidos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Vassouras</th>
            <td>50</td>
            <td>30</td>
            <td>20</td>
            <td>20</td>
        </tr>
        <tr>
            <th>Baldes</th>
            <td>10</td>
            <td>10</td>
            <td>30</td>
            <td>25</td>
        </tr>
    </tbody>
</table>
```

Colocamos a tag ```<colgroup></colgroup>```, dentro colocamos 3 ```<col>```, onde na segunda colocamos o atibuto style="background-color: red" e na terceira style="background-color: blue", porém ainda está desorganizado por isso colocaremos span="2" para alinharmos a cor com a coluna.