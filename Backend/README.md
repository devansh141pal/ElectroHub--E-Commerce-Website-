# BACKEND API DOCUMENTATION

## `/user/register` Endpoint

### Method:

`POST`

### Request:
```
{
    "fullname": {
        "firstname": "Example_firstname",
        "lastname": "Example_lastname"
    },
    "email": "Example@example.com",
    "password": "Example_password"
}
```

### Response:

#### If user does not exist in database:

- Response Code: 200

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzFkMTQ2NjA5ZjIzMTc5MWYzODViNiIsImlhdCI6MTc0MDc1NTI3MCwiZXhwIjoxNzQwODQxNjcwfQ.4--bX7e_aQfkbqhaxkLSj5ULn4KzfcM4dc8gROLEeM4",
  "user": {
    "fullname": {
      "firstname": "Example_firstname",
      "lastname": "Example_lastname"
    },
    "email": "Example@example.com",
    "password": "$2b$10$l2iIQm/nwHEiXW.4Xqixn.kx.hHgfaH5Sawk0CLhEDm886VKiIiTu",
    "_id": "67c1d146609f231791f385b6",
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