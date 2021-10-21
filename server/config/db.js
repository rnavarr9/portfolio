/**
 * File name      : db.js
 * Student’s Name : Renzo Navarro
 * StudentID      : 301183749
 * Date           : 10/21/2021
 */

module.exports = 
{
    "URI": `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yospw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}

// "URI": `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yospw.mongodb.net/portfolioDb?retryWrites=true&w=majority`