# masks-br

Biblioteca de máscaras do Brasil

## Instalação

```bash
npm install masks-br
```

ou

```bash
yarn add masks-br
```

## Utilização

### CPF

```javascript
import { cpfMask } from 'masks-br';
// ou const { cpfMask } = require('masks-br');

const cpf = cpfMask('59636985148');

console.log(cpf); // '596.369.851-48'
```

### RG

```javascript
import { rgMask } from 'masks-br';
// ou const { rgMask } = require('masks-br');

const rg = rgMask('698554859');

console.log(rg); // '69.855.485-9'
```

### CNPJ

```javascript
import { cnpjMask } from 'masks-br';
// ou const { cnpjMask } = require('masks-br');

const cnpj = cnpjMask('34234234234234');

console.log(cnpj); // '34.234.234/2342-34'
```

### Celular

```javascript
import { celularMask } from 'masks-br';
// ou const { celularMask } = require('masks-br');

const celular = celularMask('11958625974');

console.log(celular); // '(11) 95862-5974'
```

### Telefone

```javascript
import { telefoneMask } from 'masks-br';
// ou const { telefoneMask } = require('masks-br');

const telefone = telefoneMask('1195862597');

console.log(telefone); // '(11) 9586-2597'
```

### CEP

```javascript
import { cepMask } from 'masks-br';
// ou const { cepMask } = require('masks-br');

const cep = cepMask('06985596');

console.log(cep); // '06985-596'
```

### Número

```javascript
import { numeroMask } from 'masks-br';
// ou const { numeroMask } = require('masks-br');

const numero = numeroMask(123456.789);

console.log(numero); // '123.456,789'
```

### Porcentagem

```javascript
import { porcentagemMask } from 'masks-br';
// ou const { porcentagemMask } = require('masks-br');

const porcentagem = porcentagemMask(26.95);

console.log(porcentagem); // '26,95%'
```

### Dinheiro

```javascript
import { dinheiroMask } from 'masks-br';
// ou const { dinheiroMask } = require('masks-br');

const dinheiro = dinheiroMask(123456.78);

console.log(dinheiro); // 'R$ 123.456,78'
```

### Cartão

```javascript
import { cardMask } from 'masks-br';
// ou const { cardMask } = require('masks-br');

const masked = cardMask(1234567891234567);

console.log(masked); // '1234 5678 9123 4567'
```
