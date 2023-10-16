const mysql = require('mysql');

const configDB = {
    host: "localhost",
    user: "root",
    password: "devLab08@",
    database: "anews"
};

class NewsController {
    //[GET] /news
    async getNewsList(req, res) {
        try {
            var conn = mysql.createConnection(configDB);
            const newsList = await new Promise((resolve, reject) => {
                conn.query(`SELECT * from news`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                });
            });
            res.status(200).send(newsList);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
        finally {
            conn.end();
        }
    }

    //[GET] /:cat_id
    async getNewsByCat(req, res) {
        const id = req.params.cat_id;
        console.log(id);
        try {

            var conn = mysql.createConnection(configDB);
            const newsItem = await new Promise((resolve, reject) => {
                conn.query(`SELECT * from news WHERE cat_id=${id}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                });
            });
            res.status(200).send(newsItem); //return an array
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
        finally {
            conn.end();
        }
    }
    //[GET] /:id
    async getNewsById(req, res) {
        const id = req.params.id;
        console.log(id);
        try {
            var conn = mysql.createConnection(configDB);
            const newsItem = await new Promise((resolve, reject) => {
                conn.query(`SELECT * from news WHERE id=${id}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                });
            });          
            console.log('Hien thi item: ' + newsItem);  
            res.status(200).send(newsItem[0]); //get the first item : 1 object           
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
        finally {
            conn.end();
        }
    }

      //[GET] /news/newsItemById using query
      async getNewsItemById(req, res) {
        const id = req.query.id;
        console.log(id);
        try {
            var conn = mysql.createConnection(configDB);
            const newsItem = await new Promise((resolve, reject) => {
                conn.query(`SELECT * from news WHERE id=${id}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                });
            });          
            console.log('Hien thi item: ' + newsItem);  
            res.status(200).send(newsItem[0]); //get the first item : 1 object           
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
        finally {
            conn.end();
        }
    }

}

module.exports = new NewsController();