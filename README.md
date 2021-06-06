# Robô Crawler

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/lucasvalentee/crawler-robot/blob/master/LICENSE)

## Sobre o projeto

Esse projeto consiste em uma aplicação node com typescript para criar um crawler que irá buscar quartos disponíveis para reserva no site http://lecanton.com.br/ dentro de um período de datas definido para check-in e check-out.

## Como iniciar o projeto

1 - Após clonar o repositório para sua máquina, acesse a pasta do mesmo através de um terminal e execute o comando <b>yarn</b> para instalar as dependências.</br>
2 - Com as dependências instaladas, execute o comando <b>yarn dev:server</b> para iniciar o servidor.</br>
3 - Será necessário uma ferramenta para fazer as requisições para a API Rest como o <b>Insomnia</b> ou <b>Postman</b>.</br>
4 - A URL base é <b>http://localhost:3333</b>.</br>

## Como usar a API

O robô será chamado na seguinte rota POST: <b>http://localhost:3333/buscar</b>. Ao ser chamado ele irá acessar um caminho específico e, extrair os dados e informações do quartos disponíveis, conforme o check-in e check-out informado.

</br><b>Exemplo do body da requisição</b>

```JSON
{
    "checkIn": "13/06/2021",
    "checkOut": "14/06/2021"
}
```

</br><b>Exemplo do retorno esperado</b>

```JSON
[
  {
    "name": "Nome do quarto.",
    "description": "Descrição do quarto.",
    "price": "Valor da diária no formato R$ 0,00",
    "image": [
      "Imagens do quarto"
    ]
  },
]
```

## Tratamento de erros esperados

</br><b>- Caso a data de check-in ou check-out esteja vazia ou não for informada.</b>

```JSON
{
  "error": "A data de check-in é obrigatória."
}
```

```JSON
{
  "error": "A data de check-out é obrigatória."
}
```

</br><b>- Comparação entre a data de check-in e check-out.</b>

```JSON
{
  "error": "A data de check-out deve ser igual ou maior que a data de check-in."
}
```

</br><b>- Comparação entre a data de check-in ou check-out com a data atual.</b>

```JSON
{
  "error": "A data de check-in deve ser igual ou maior que a data atual."
}
```

```JSON
{
  "error": "A data de check-out deve ser igual ou maior que a data atual."
}
```

</br><b>- Caso a API não encontre informações sobre reservas disponíveis.</b>

```JSON
{
  "error": "Desculpe-nos. Não existem apartamentos disponíveis para a pesquisa realizada."
}
```

## Autor

Lucas Valente

https://www.linkedin.com/in/lucas-valentee/


