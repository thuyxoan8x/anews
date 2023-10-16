const mysql = require('mysql');

const configDB = {
    host: "localhost",
    user: "root",
    password: "devLab08@",
    database: "anews"
};

class CatsController {

    //[GET] /categories
    async getCatList(req, res) {
        try {
            var conn = mysql.createConnection(configDB);
            const catList = await new Promise((resolve, reject) => {
                conn.query(`SELECT * from categories`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                });
            });
            res.status(200).send(catList);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
        finally {
            conn.end();
        }
    }

    async getCatById(req, res) {
        var catID = req.params.cat_id;
        try {
            var conn = mysql.createConnection(configDB);
            const catList = await new Promise((resolve, reject) => {
                conn.query(`SELECT * from categories WHERE id=${catID}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                });
            });
            res.status(200).send(catList);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
        finally {
            conn.end();
        }
    }
}

module.exports = new CatsController();