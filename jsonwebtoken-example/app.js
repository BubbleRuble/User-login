const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;

const payload = {
    id: "63fe4a5a68b27c947e28495b"
}

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});

const decodeToken = jwt.decode(token);

try {
    const {id} = jwt.verify(token, SECRET_KEY);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmU0YTVhNjhiMjdjOTQ3ZTI4NDk1YiIsImlhdCI6MTY3NzYxMDczNSwiZXhwIjoxNjc3NjkzNTM1fQ.YELvZzq9k2ErXHMwufOFfJUtEi2jxl6W5wtG4tiKnxS"
    const result = jwt.verify(invalidToken, SECRET_KEY)
} catch (error) {
    console.log(error.message);
}

