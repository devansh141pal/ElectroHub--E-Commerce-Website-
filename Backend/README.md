# BACKEND API DOCUMENTATION

## `/user/register` Endpoint

### Method:

`POST`

### Request:
```
{
    "fullname": {
        "firstname": "first_name",
        "lastname": "last_name"
    },
    "email": "email@email.com",
    "password": "password123",
    "phone": "1234567890",
    "city": "New York",
    "state": "NY",
    "country": "USA"
}
```

### Response:

#### If user does not exist in database:

- Response Code: 200

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzI2OWZhMDUxNGMzNTUxOGZhNWI5MyIsImlhdCI6MTc0MDc5NDM2MiwiZXhwIjoxNzQwODgwNzYyfQ.VDZPX_3deAuI5q9m-SaSC3uw6Y82zvBrmIzXAVuonTI",
  "user": {
    "fullname": {
      "firstname": "first_name",
      "lastname": "last_name"
    },
    "email": "email@email.com",
    "password": "$2b$10$Qh6DSpo50vpRLB31X9jcwuOP5SfR714ZuS.WolQHeMeW7ovojxuIO",
    "phone": "1234567890",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "_id": "67c269fa0514c35518fa5b93",
    "__v": 0
  }
}
```

#### If user already exists:

- Response Code: 400

```
{
  "errors": [
    {
      "msg": "User already exists"
    }
  ]
}
```

#### If server side of tecnical error:

- Response code: 500

```
{
  "errors": [
    {
      "msg": "Server error"
    }
  ]
}
```

## `user/login` Endpoint

### Method:

`POST`

### Request:

```
{
    "email": "email@email.com",
    "password": "password123"
}
```

### Response:

#### If user exists in database:

- Response code: 200

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzI2OWZhMDUxNGMzNTUxOGZhNWI5MyIsImlhdCI6MTc0MDg0MDkyOCwiZXhwIjoxNzQwOTI3MzI4fQ.n8vw4Db7nrD_NJ3o_sOVd_NFNBVyPsWPDLiR57CCuBA",
  "user": {
    "fullname": {
      "firstname": "first_name",
      "lastname": "last_name"
    },
    "_id": "67c269fa0514c35518fa5b93",
    "email": "email@email.com",
    "password": "$2b$10$Qh6DSpo50vpRLB31X9jcwuOP5SfR714ZuS.WolQHeMeW7ovojxuIO",
    "phone": "1234567890",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "__v": 0
  }
}
```

#### If the user does not exists in the database:

- Response code: 400

```
{
  "errors": [
    {
      "msg": "Invalid credentials or Unauthorised"
    }
  ]
}
```

#### If server side of tecnical error:

- Response code: 500

```
{
  "errors": [
    {
      "msg": "Server error"
    }
  ]
}
```





## `seller/register` Endpoint

### Method:

`POST`

### Request:

```
{
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "password123",
    "upiID": "jane.doe@upi",
    "phone": "1234567890",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "pincode": "100001"
}
```

### Response:

#### If seller does not exist in database:

- Response Code: 200

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzI2ODJjMDUxNGMzNTUxOGZhNWI4ZiIsImlhdCI6MTc0MDc5MzkwMSwiZXhwIjoxNzQwODgwMzAxfQ.UQTI_UoYYmcWlnYlcxhKQ3i0LfS0h0CvWNYFk7FYj6g",
  "seller": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "$2b$10$CCvgIk32pRPIXECdslHdlu13Pvuvfm90TYI0txAEEiiemQFVABj4e",
    "upiID": "jane.doe@upi",
    "phone": "1234567890",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "pincode": "100001",
    "_id": "67c2682c0514c35518fa5b8f",
    "__v": 0
  }
}
```

#### If seller already exists:

- Response Code: 400

```
{
  "errors": [
    {
      "msg": "Seller already exists"
    }
  ]
}
```

#### If server side of tecnical error:

- Response code: 500

```
{
  "errors": [
    {
      "msg": "Server error"
    }
  ]
}
```