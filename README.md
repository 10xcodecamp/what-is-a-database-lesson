# What is a database?

A database is a structured way of storing data. There are many types of databases and we will be learning MySQL, an open-source, relational database management system (RDBMS).

Essentially, your MySQL database is a collections of named tables. And tables are made up of rows and columns. Each column has a name and a data type associated with it.

## 1. Why rows and columns?

### Example 1a: key-value pairs

---

```javascript
const users = [
   {
      id: "c52c9070-62b3-46b7-bb6a-2a1e21e5cb6d",
      firstName: "Kate",
      lastName: "Capasso",
      email: "kate@gmail.com",
      password: "40B114B04CE020D26CCDC8FE28ADD240",
      createdAt: 1592606306585,
   },
   {
      id: "6bf49dc5-d47e-4385-b2cb-b83f1dcf6c5e",
      firstName: "Mike",
      lastName: "Zetlow",
      email: "mike@gmail.com",
      password: "CEAB7AF6672824D445010D1EA4DA318B",
      createdAt: 1592606324596,
   },
   {
      id: "966b9e4a-6059-4bef-9ba8-537de8b988bd",
      firstName: "Chris",
      lastName: "Fortier",
      email: "chris@gmail.com",
      password: "1B5AC8FDFE4DD8D3003B52B6D0146AF1",
      createdAt: 1592606326247,
   },
];
```

### Example 1b: rows and columns

---

| id       | first_name | last_name | email           | password | created_at    |
| -------- | ---------- | --------- | --------------- | -------- | ------------- |
| c52c9070 | Kate       | Capasso   | kate@gmail.com  | 40B114B0 | 1592606306585 |
| 6bf49dc5 | Mike       | Zetlow    | mike@gmail.com  | CEAB7AF6 | 1592606324596 |
| 966b9e4a | Chris      | Fortier   | chris@gmail.com | 1B5AC8FD | 1592606326247 |

## 2. Normalizing Data

### Example 2a: table of `users`

---

| id       | first_name | last_name |
| -------- | ---------- | --------- |
| c52c9070 | Mike       | Zetlow    |
| d13f7769 | Ryan       | Lee       |

### Example 2b: table of `users`

---

| id       | first_name | last_name | hobbies                      |
| -------- | ---------- | --------- | ---------------------------- |
| c52c9070 | Mike       | Zetlow    | guitar, video games          |
| d13f7769 | Ryan       | Lee       | movies, surfing, video games |

### Example 2c: table of `users` NORMALIZED

---

| id       | first_name | last_name |
| -------- | ---------- | --------- |
| c52c9070 | Mike       | Zetlow    |
| d13f7769 | Ryan       | Lee       |

### Example 2d: table of `hobbies`

---

| id       | hobbies     | user_id            |
| -------- | ----------- | ------------------ |
| 68282426 | guitar      | c52c9070           |
| e2823dd9 | movies      | d13f7769           |
| ea85e960 | surfing     | d13f7769           |
| b20babc3 | video games | c52c9070, d13f7769 |

### Example 2e: table of `hobbies` NORMALIZED

---

| id       | hobbies     |
| -------- | ----------- |
| 68282426 | guitar      |
| e2823dd9 | movies      |
| ea85e960 | surfing     |
| b20babc3 | video games |

### Example 2f: table of `xref_user_hobbies`

---

| id       | user_id  | hobby_id |
| -------- | -------- | -------- |
| 49793088 | c52c9070 | 68282426 |
| 389648db | c52c9070 | b20babc3 |
| 79498b1c | d13f7769 | e2823dd9 |
| 3f13c645 | d13f7769 | ea85e960 |
| ab202c3f | d13f7769 | b20babc3 |

## 3. MySQL Data Types

Most used data types in MySQL:

-  VARCHAR(size)
-  BOOL
-  SMALLINT(size)
-  MEDIUMINT(size)
-  INT(size)
-  BIGINT(size)
-  DOUBLE(size, d)
-  DECIMAL(size, d)

Source: [https://www.w3schools.com/sql/sql_datatypes.asp](https://www.w3schools.com/sql/sql_datatypes.asp)

### More on DOUBLE vs DECIMAL

-  [Why floating-point numbers are needed](https://floating-point-gui.de/formats/fp/)
-  [Floating Point Numbers - Computerphile](https://www.youtube.com/watch?v=PZRI1IfStY0)
-  [Difference between decimal, float and double](https://stackoverflow.com/a/618596/6305196)
