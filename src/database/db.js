// import sqlite3
const sqlite3 = require("sqlite3").verbose() // foi instanciada a classe sqlite3 e added the method .verbose(),
//for see more details, tornando a constante sqlite3 num objeto.

// init the object of database. Irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db") // the 'new' keyword is used for create a new object.
// Desde que o que eu informe após ela seja uma class ou constructor 


module.exports = db

// utilizar o objeto de banco de dados, for ours operations.
/*
db.serialize(() => {
  // create a table with SQL commands
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `)

  // 2 Insert data in table
  const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `

  const values = [
    "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "Papersider",
    "Guilherme Gemballa, Jardim América",
    "Número 260",
    "Santa Catarina",
    "Rio do Sul",
    "Papéis e papelão"
  ]

  function afterInsertData(err) {
    if(err) {
      return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)
  }

  db.run(query, values, afterInsertData) // function passed by reference.

  // 3 Consult the dates of table
  db.all(`SELECT name FROM places`, function(err, rows) {
    if(err) {
      return console.log(err)
    }

    console.log("Aqui estão os seus registros")
    console.log(rows)
  })


  // 4 Delete a data for the table
  // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
  //  if(err) console.log(err)
  //  console.log("Aqui estão seus registros: ")
  //  console.log(rows)
  // })
})
*/
