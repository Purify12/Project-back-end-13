# Project Back-End-13

# API SPEC Youthpedia

Api Specification for Youthpedia consist users, webinars, categories, comments and artikels entity.

# USER

## Register

Request :

- Method : POST
- Endpoint : `/api/users/register`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "username": "jose3",
    "email": "jose3@gmail.com",
    "password": "12345678",
    "role":"user",
    "country": "indonesia"
}
```

Response :

```json
{
    "message": "Success",
    "data": {
        "username": "jose3",
        "email": "jose3@gmail.com",
        "date": "2021-12-24T11:11:10.952Z",
        "role": "user",
        "country": "indonesia",
        "id": "61c5b12ed72ad899c3314e2e"
    }
}
```

## Login

Request :

- Method : POST
- Endpoint : `/api/users/login`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "username": "jose",
    "password": "12345678"
}
```

Response :

```
json
{
    "message": "Success",
    "data": {
        "username": "jose",
        "email": "jose@gmail.com",
        "date": "2021-12-24T09:34:51.252Z",
        "role": "user",
        "country": "indonesia",
        "id": "61c598ef645dd43484d68f28",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiam9zZSIsImlhdCI6MTY0MDMzOTcwMiwiZXhwIjoxNjQwNDI2MTAyfQ.mu-NjGeeIrIPoE2NBd2YDdTVB-yZlL2e5ldS0YlOV6w"
    }
}
```

## Cek User

Request :

- Method : GET
- Endpoint : `/api/users/user-Profile`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "username": "string",
    "password": "hash(string)",
    "email": "string",
    "role": "string",
    "date": "Date"
  }
}
```

## List Users

Request :

- Method : GET
- Endpoint : `/api/users`
- Header :
  - Accept: application/json

Response :

```json
{
    "message": "Authorized User!!"
}
```

# Webinar

## Create Webinar

Request :

- Method : POST
- Endpoint : `/api/webinar/post`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "judul": "Summerfest",
    "deskripsi": "Summerfest merupakan festival musik terbesar di Amerika Serikat. Berlangsung selama 11 hari, Summerfest dihadiri lebih dari 800 ribu pentonton pada 2016 lalu. Meski demikian, harga tiket Summerfest terbilang cukup murah, yakni hanya 20 dollar, atau sekitar Rp 280 ribu.",
    "gambar": "https://images.unsplash.com/photo-1633289692767-7b7b990005ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyZmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "countries": "Indonesia"
}
```

Response :

```json
{
    "judul": "Summerfest",
    "deskripsi": "Summerfest merupakan festival musik terbesar di Amerika Serikat. Berlangsung selama 11 hari, Summerfest dihadiri lebih dari 800 ribu pentonton pada 2016 lalu. Meski demikian, harga tiket Summerfest terbilang cukup murah, yakni hanya 20 dollar, atau sekitar Rp 280 ribu.",
    "gambar": "https://images.unsplash.com/photo-1633289692767-7b7b990005ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyZmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "countries": "Indonesia",
    "_id": "61c5960d645dd43484d68f02",
    "__v": 0
}
```

## Get Webinar

Request :

- Method : GET
- Endpoint : `/api/webinar/get`
- Header :
  - Accept: application/json

Response :

```json
{
        "_id": "61c59529645dd43484d68ef9",
        "judul": "SummerFest",
        "deskripsi": "Summerfest merupakan festival musik terbesar di Amerika Serikat. Berlangsung selama 11 hari, Summerfest dihadiri lebih dari 800 ribu pentonton pada 2016 lalu. Meski demikian, harga tiket Summerfest terbilang cukup murah, yakni hanya 20 dollar, atau sekitar Rp 280 ribu.",
        "gambar": "https://images.unsplash.com/photo-1633289692767-7b7b990005ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyZmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "countries": "Indonesia",
        "__v": 0
    }
```

## Update Webinar

Request :

- Method : PUT
- Endpoint : `/api/webinar/put`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "judul": "SummerFest",
    "deskripsi": "Summerfest merupakan festival musik terbesar di Amerika Serikat. Berlangsung selama 11 hari, Summerfest dihadiri lebih dari 800 ribu pentonton pada 2016 lalu. Meski demikian, harga tiket Summerfest terbilang cukup murah, yakni hanya 20 dollar, atau sekitar Rp 280 ribu.",
    "gambar": "https://images.unsplash.com/photo-1633289692767-7b7b990005ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyZmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "countries": "Indonesia"
}
```

Response :

```json
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
} 
```

## Get Webinar by Id

Request :

- Method : GET
- Endpoint : `/api/webinar/get/:id`
- Header :
  - Accept: application/json

Response :

```json
{
        "_id": "61c59529645dd43484d68ef9",
        "judul": "SummerFest",
        "deskripsi": "Summerfest merupakan festival musik terbesar di Amerika Serikat. Berlangsung selama 11 hari, Summerfest dihadiri lebih dari 800 ribu pentonton pada 2016 lalu. Meski demikian, harga tiket Summerfest terbilang cukup murah, yakni hanya 20 dollar, atau sekitar Rp 280 ribu.",
        "gambar": "https://images.unsplash.com/photo-1633289692767-7b7b990005ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyZmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "countries": "Indonesia",
        "__v": 0
    }
```

## Delete Product

Request :

- Method : DELETE
- Endpoint : `/api/webinar/delete/:id`
- Header :
  - Accept: application/json

Response :

```json
{
    "deletedCount": 1
}
```

# Category

## Create Category

Request :

- Method : POST
- Endpoint : `/api/category/post`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "category":"Crime"
}
```

Response :

```json
{
    "category": "Crime",
    "_id": "61c5986a645dd43484d68f1e",
    "__v": 0
}
```

## Get Category

Request :

- Method : GET
- Endpoint : `/api/category/get`
- Header :
  - Accept: application/json

Response :

```json
{
        "_id": "61c5986a645dd43484d68f1e",
        "category": "Crime",
        "__v": 0
    }
```

## Update category

Request :

- Method : PUT
- Endpoint : `/api/category/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "category":"Crime"
}
```

Response :

```json
{
    "acknowledged": true,
    "modifiedCount": 0,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
```

## Delete Category

Request :

- Method : DELETE
- Endpoint : `/api/category/:id`
- Header :
  - Accept: application/json

Response :

```json
{
    "deletedCount": 1
}
```

# Comment

## Create Comment

Request :

- Method : POST
- Endpoint : `/api/comment/post`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "comment":"Good",
    "user": "61c598ef645dd43484d68f28"
}
```

Response :

```json
{
    "comment": [
        "Good"
    ],
    "user": "61c598ef645dd43484d68f28",
    "_id": "61c59927645dd43484d68f2d",
    "__v": 0
}
```

## Get Comment

Request :

- Method : GET
- Endpoint : `/api/comment/get`
- Header :
  - Accept: application/json

Response :

```json
[
    {
        "_id": "61c5977d645dd43484d68f12",
        "comment": [
            "Good"
        ],
        "user": {
            "username": "admin",
            "email": "admin@gmail.com",
            "date": "2021-12-24T09:34:51.252Z",
            "role": "admin",
            "country": "indonesia",
            "id": "61c59462645dd43484d68ef2"
        },
        "__v": 0
    },
    {
        "_id": "61c59927645dd43484d68f2d",
        "comment": [
            "Good"
        ],
        "user": {
            "username": "jose",
            "email": "jose@gmail.com",
            "date": "2021-12-24T09:34:51.252Z",
            "role": "user",
            "country": "indonesia",
            "id": "61c598ef645dd43484d68f28"
        },
        "__v": 0
    }
]
```

## Update Comment

Request :

- Method : PUT
- Endpoint : `/api/comment/put/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "comment":"Good Job",
    "user": "61c598ef645dd43484d68f28"
}
```

Response :

```json
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
```

## Delete Comment

Request :

- Method : DELETE
- Endpoint : `/api/comment/delete/:id`
- Header :
  - Accept: application/json

Response :

```json
{
    "deletedCount": 1
}
```

# Artikel

## Create Artikel

Request :

- Method : POST
- Endpoint : `/api/artikel/post`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "countries":"Indonesia",
    "category":"61c5985b645dd43484d68f18",
    "title":"10 Universitas Ini Paling Indah Sedunia, Nomor Satu di Mana Ya?",
    "deskripsi":"Banyak universitas di dunia ini yang memiliki bangunan terkenal indah. Sehingga, tidak jarang mereka dijadikan lokasi pengambilan gambar sebuah film ataupun bahkan drama Korea, sebut saja Yonsei University.Tetapi, dari banyaknya kampus indah tersebut, ada beberapa di antaranya yang dikenal paling estetik. Kampus apa saja yang dimaksud?",
    "picture":"https://akcdn.detik.net.id/community/media/visual/2021/07/12/heidelberg-university-salah-satu-universitas-terindah-di-dunia-dok-heidelberg-uni.jpeg?w=700&q=90",
    "source":"https://www.detik.com/edu/perguruan-tinggi/d-5861530/10-universitas-ini-paling-indah-sedunia-nomor-satu-di-mana-ya",
    "comment": "61c59927645dd43484d68f2d",
    "trend": true,
    "recomended":false
}
```

Response :

```json
{
    "countries": "Indonesia",
    "category": "61c5985b645dd43484d68f18",
    "title": "10 Universitas Ini Paling Indah Sedunia, Nomor Satu di Mana Ya?",
    "deskripsi": "Banyak universitas di dunia ini yang memiliki bangunan terkenal indah. Sehingga, tidak jarang mereka dijadikan lokasi pengambilan gambar sebuah film ataupun bahkan drama Korea, sebut saja Yonsei University.Tetapi, dari banyaknya kampus indah tersebut, ada beberapa di antaranya yang dikenal paling estetik. Kampus apa saja yang dimaksud?",
    "picture": "https://akcdn.detik.net.id/community/media/visual/2021/07/12/heidelberg-university-salah-satu-universitas-terindah-di-dunia-dok-heidelberg-uni.jpeg?w=700&q=90",
    "source": "https://www.detik.com/edu/perguruan-tinggi/d-5861530/10-universitas-ini-paling-indah-sedunia-nomor-satu-di-mana-ya",
    "comment": "61c59927645dd43484d68f2d",
    "trend": true,
    "recomended": false,
    "_id": "61c59976645dd43484d68f35",
    "__v": 0
}
```

## Get Artikel

Request :

- Method : GET
- Endpoint : `/api/artikel/get`
- Header :
  - Accept: application/json

Response :

```json
[
    {
        "_id": "61c59976645dd43484d68f35",
        "countries": "Indonesia",
        "category": {
            "_id": "61c5985b645dd43484d68f18",
            "category": "Education",
            "__v": 0
        },
        "title": "10 Universitas Ini Paling Indah Sedunia, Nomor Satu di Mana Ya?",
        "deskripsi": "Banyak universitas di dunia ini yang memiliki bangunan terkenal indah. Sehingga, tidak jarang mereka dijadikan lokasi pengambilan gambar sebuah film ataupun bahkan drama Korea, sebut saja Yonsei University.Tetapi, dari banyaknya kampus indah tersebut, ada beberapa di antaranya yang dikenal paling estetik. Kampus apa saja yang dimaksud?",
        "picture": "https://akcdn.detik.net.id/community/media/visual/2021/07/12/heidelberg-university-salah-satu-universitas-terindah-di-dunia-dok-heidelberg-uni.jpeg?w=700&q=90",
        "source": "https://www.detik.com/edu/perguruan-tinggi/d-5861530/10-universitas-ini-paling-indah-sedunia-nomor-satu-di-mana-ya",
        "comment": {
            "_id": "61c59927645dd43484d68f2d",
            "comment": [
                "Good"
            ],
            "user": "61c598ef645dd43484d68f28",
            "__v": 0
        },
        "trend": true,
        "recomended": false,
        "__v": 0
    }
]
```

## Update Artikel

Request :

- Method : PUT
- Endpoint : `/api/artikel/put/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "countries":"Indonesia",
    "category":"61c55ba79a1af33d3ec1afb4",
    "title":"10 Universitas Ini Paling Indah Sedunia, Nomor Satu di Mana Ya?",
    "deskripsi":"Banyak universitas di dunia ini yang memiliki bangunan terkenal indah. Sehingga, tidak jarang mereka dijadikan lokasi pengambilan gambar sebuah film ataupun bahkan drama Korea, sebut saja Yonsei University.Tetapi, dari banyaknya kampus indah tersebut, ada beberapa di antaranya yang dikenal paling estetik. Kampus apa saja yang dimaksud?",
    "picture":"https://akcdn.detik.net.id/community/media/visual/2021/07/12/heidelberg-university-salah-satu-universitas-terindah-di-dunia-dok-heidelberg-uni.jpeg?w=700&q=90",
    "source":"https://www.detik.com/edu/perguruan-tinggi/d-5861530/10-universitas-ini-paling-indah-sedunia-nomor-satu-di-mana-ya",
    "comment": "61c5580fc538bc2de097f73f",
    "trend": true,
    "recomended":false
}
```

Response :

```json
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
```

## Delete Artikel

Request :

- Method : DELETE
- Endpoint : `/api/artikel/delete/:id`
- Header :
  - Accept: application/json

Response :

```json
{
    "deletedCount": 1
}
```
