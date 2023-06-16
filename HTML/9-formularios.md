# Formulários


## O que são forms

Os formulários servem para capturar dados de entrada com interação e controle.

<br>

## Estrutura


<br>

### Form

```
<form action="" method="GET">
</form>
```
GET: Não oculta os dados 
POST: Oculta os dados

<br>

### Fieldset legend


```<fieldset>```
Agrupamento de campos com o mesmo propósito com semântica e acessibilidade.

```<legend>```
Nome do agrupamento e primeiro elemento dentro do fieldset.

```
<form action="">
    <fieldset>
        <legend>Contato</legend>

        <label for="">Nome</label>
        <input type="text">
    <fieldset>
</form>
```

Atributos especiais:

- disabled
	- desabilita todos os elementos internos
	- não serão enviados ao submeter o formulário
```
<form action="">
    <fieldset disabled>
        <legend>Contato</legend>

        <label for="">Nome</label>
        <input type="text">
    </fieldset>
</form>
```

- form
	- o id de um  formulário ao qual esse fieldset pertence 
	- ele não precisa estar dentro do atributo form
```
<form id="contato" action="">
    <button>Enviar</button>
<form>

<fieldset form="contato">
    <legend>Contato</legend>

    <label for="">Nome</label>
    <input type="text">
</fieldset>
```
- name
	- nome do grupo
```
<form id="contato action="">
    <button>Enviar</button>
</form>

<fieldset form="contato" name="input-contact">
    <legend>Contato</legend>

    <label for="">Nome</label>
    <input type="text">
</fieldset>
```
<br>

### Label

Associa e identifica uma ou mais tags de entrada de dados, é acessível e pode clicar para mudar o foco da entrada de dados.
```
<label>
    Nome:
    <input type="text">
</label>
```
Atributos
- for
	- faz conexão entre este label e a tag de entrada de dados
	- é feita via id do input
	- só funciona com elementos específicos
		- button, input (not hidden), meter, output, progress, select, textarea
```
<label for="nome">Nome</label>
<input id="nome" type="text">
```
<br>

### Button

Representa um botão usado para enviar formulários e é estilizado pelo user agent.
```
<button autofocus>Enviar</button>
```

Atributos comuns
- type
	- submit
	- reset
	- button
- autofocus
- disabled
- name
- value
- form

<br>

### Datalist

Lista de valores como sugestão a um tag ```<input>```, são valores sugestivos e não obrigatórios e os usuários poderão selecionar um dos valores ou colocar um valor diferente da sugestão.

#list
Recebe como valor o id de um ```<datalist>``` residente no mesmo documento.

Tipos de input suportados:
- text, search, url, tel, email, date, month, weeek, time, datetime-local, number, range e color
Valores de datalist que não são compatíveis com o tipo do ```<input>``` não serão apresentados.

Tipos de input não suportados
- hidden, password, checkbox, radio, file, ou qualquer tipo de button

User Agent
Verificar a compatibilidade com o browser https://caniuse.com

```
<input>
    type="text"
    list="fruitdata"
    placeholder="Escolha uma fruta"/>
    
<datalist id="fruitsdata">
    <option>apple</option>
    <option>banana</option>
    <option>mango</option>
    <option>orange</option>  
    <option>cherry</option>
</datalist>
```

<br>

## Tags de Entrada de Dados


### Input

Um dos mais usados em formulários, aceita os mais diversos tipos de dados e possui um elevado número de combinação.

Atributos
- type
- name
- id
```
<input type="number">
```


### Input Atributos

Atributos comuns
- autocomplete - busca no navegador informações já utilizadas
- autofocus = quando a página for carregada automaticamente o ponteiro fica destacado
- disabled
- readonly
- value
- form
- name
- required
- placeholder

<br>

### Password

```
<input type="password">
```

Coloca uma senha de maneira segura, escondendo o que está sendo digitado no campo e o estilo da apresentação depende do User Agent(navegador).

Atributos
- minlength / maxlength
- size : tamanho do campo
- pattern : expressão regular para validar o que está sendo digitado no campo, altamente recomendado. Ex.: pattern="[0-9a-fA-F]{4,8}"
- title
- placeholder
- readonly
- required
- inputmode : pode alterar o uso do teclado em smartphones
- autocomplete

<br>

### Email

```
<input type="email">
```

Espera que o usuário digite um email e irá validar se o valor digitado é um email

Atributos
- placeholder
- readonly/disabled
- value
- required
- multiple : o campo irá receber 1 ou mais emails, separado por vírgulas
- minlength / maxlength
- pattern : expressão regular para validar o que está sendo digitado no campo
- list : o id de uma tag <datalist> que está no mesmo documento, o <datalist> irá conter uma lista de valores pré-definidos a fim de sugerir ao usuário quais valores estão disponíveis

<br>

### URL

```
<input type="url" />
```

Espera-se que o usuário digite uma url e irá validar se o valor digitado é uma url.

Atributos
- placeholder
- readonly / disabled
- value
- required
- minlength / maxlength
- size
- pattern
- list
- spellcheck : habilita a verificação ortográfica para este input

<br>

### File

```
<input type="file">
```

Usuário poderá escolher  1 ou mais arquivos para enviar no formulário

Atributos
- value : contém o arquivo a ser enviado
- accept : descreve que tipos de arquivos serão aceitos
- files : a lista de arquivo ou arquivos
- multiple : permite o envio de múltiplos arquivos

Para envio dos arquivos o formulário deverá utilizar o método POST e o atributo enctype como "multipart/form-data"


<br>

### Color

```
<input type="color">
```

Interface para selecionar cor por meio do Color picker.

Atributos
- value : RGB. Se inválido o preto será exibido
- list

<br>

### Checkbox

```
<input type="color">
```

São caixas que podem ser marcadas para selecionar um valor a ser enviado, se não selecionado não será enviado nenhum dado.

Atributos
- globais
- value
- checked
- name

<br>

### Hidden

```
<input type="hidden" id="timestamp" name="timestamp" value="1286705410">
```

Invisível ao usuário, será enviado com o formulário, não receberá foco e leitores de tela não percebem esse campo.

<br>

### Radio

```
<input type="radio">
```

Projetado para selecionar uma única opção de um grupo de opções

Atributos especiais
- checked
- value

<br>

### Textarea

```
<textarea>
```

Campo com mais de uma linha, sendo útil para textos grandes.

Atributos
- id
- name
- rows e cols
- maxlength / minlength
- wrap
- outros comuns ao <input>

<br>

### Select

```
<select>
```

Controle que fornece um menu de opções

```
<option>
```

Contém as opções a serem selecionadas

Atributos necessários
- Value

Atributos únicos
- multiple
- size

<br>

### Optgroup

Agrupamento de opções.
```
<label> Please choose one or more pets:
    <select name="pets" multiple size="8">
        <optgroup label="4-legged pets">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>            
            <option value="hamster">Hamster</option>
        </optgorup>
        <optgroup label="Flying pets">
            <option value="parrot">Parrot</option>
            <option value="macaw">Macaw</option>            
            <option value="albatross">Albatross</option>
        </optgorup>
    </select>
</label>
```

<br>

### Search

```
<input type="search" />
```

Utilizado para campos de busca, é semelhante ao tipo "text", mas pode ser um pouco diferente dependendo do user agent.

Atributos
- list / <datalist>
- pattern
- aria-label : serve como opção ao label

<br>

### Number

```
<input type="number" />
```

Serve para entrada de números.

Atributos:
- min / max
- step

<br>

### Range

```
<input type="range" />
```

Controle para selecionar um valor numérico com slider ou dial control

Atributos
- min / max
- step

<br>

### Data e hora

Campos interessantes, mas que ainda não tem um ótimo suporte.

```
<input type="date">
<input type="datetime-local">
<input type="month">
<input type="time">
<input type="week">
```

<br>

## Criando um formulário

Um passo importante ao criar é formulários é pensando nos requisitos que ajuda a definir as necessidades.

Dicas:
- Simples e focado
- Somente dados necessário
- Verifique o que te agrada