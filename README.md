## About the project

This project consists of an application node with typing to create a crawler that will search for rooms available for reservation on the website http://lecanton.com.br/ within a defined period of dates for check-in and check-out.

## How to start

1 - After cloning the repository to your machine, access the repository folder through a terminal and run the <b>yarn</b> command to install the dependencies.</br>
2 - With the dependencies installed, run the command <b>yarn dev: server</b> to start the server.</br>
3 - You will need a tool to make requests to the Rest API, such as <b>Insomnia</b> or <b>Postman</b>.</br>
4 - The base URL is <b>http://localhost:3333</b>.</br>

## How to use the API

The robot will be called on the following POST route: <b>http://localhost:3333/search</b>. When called, it will access a specific path and extract data and information from the available rooms, according to the check-in and check-out informed.

</br><b>Example of the request body</b>

```JSON
{
    "checkIn": "13/06/2021",
    "checkOut": "14/06/2021"
}
```

</br><b>Example of expected return</b>

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

## Handling of expected errors

If the check-in or check-out date is empty or not informed.

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

</br>Comparison between check-in and check-out date.

```JSON
{
  "error": "A data de check-out deve ser igual ou maior que a data de check-in."
}
```

</br>Comparison of check-in or check-out date with the current date.

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

</br>If the API does not find information about available reservations.

```JSON
{
  "error": "Desculpe-nos. Não existem apartamentos disponíveis para a pesquisa realizada."
}
```

## Author

Lucas Valente

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&&link=https://www.linkedin.com/in/lucas-valentee/)](https://www.linkedin.com/in/lucas-valentee/)

## License

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/lucasvalentee/crawler-robot/blob/master/LICENSE)
