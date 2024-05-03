'use strict'

const { Pool } = require('pg')

const pool = new Pool({
  host: 'dpg-coq4dqf79t8c7389muug-a',
  user: 'blog_user',
  password: 'XkIwg4vTxHCottOpl552aOjySukSq65o',
  database: 'blog_db_pcqz',
  port: 5432,  
  max: 10, 
  idleTimeoutMillis: 30000, 
  connectionTimeoutMillis: 2000,
})


module.exports.pool = pool
