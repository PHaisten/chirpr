import mysql from "mysql";

let connection = mysql.createConnection({
  host: "localhost",
  database: "chirpr",
  user: "chirprapp",
  password: "blahblah"
});

connection.connect();

export let getMention = userid => {
  return new Promise((resolve, reject) => {
    connection.query(
      `CALL ChirpsMentionedIn(${userid})`,
      (err, results, fields) => {
        if (err) {
          return console.log(err);
        }
        resolve(results);
      }
    );
  });
};

export let getChirps = () => {
  return new Promise((resolve, reject) => {
    connection.query("CALL GetAllChirps()", (err, res, fields) => {
      if (err) {
        reject();
        // connection.end();
        return console.log(err);
      }
      resolve(res);
      // connection.end();
    });
  });
};

export let getChirp = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT u.name as name, c.id, c.text, c.location, c._created FROM chirps c JOIN users u on c.userid = u.id WHERE c.id = ${id}`,
      (err, res, fields) => {
        if (err) {
          reject();
          return console.log(err);
        }
        resolve(res[0]);
      }
    );
  });
};

export let deleteChirps = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM CHIRPS WHERE ID = ${id}`,
      (err, res, fields) => {
        if (err) {
          reject();
          return console.log(err);
        }
        resolve(res);
      }
    );
  });
};

export let updateChirp = (id, text) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE CHIRPS SET text = "${text}" WHERE id = ${id}`,
      (err, res, fields) => {
        if (err) {
          reject();
          return console.log(err);
        }
        resolve(res);
      }
    );
  });
};

export let postChirp = chirp => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO chirps (userid, text, location) VALUES (${chirp.userid}, '${
        chirp.text
      }', '${chirp.location}')`,
      (err, res, fields) => {
        if (err) {
          reject();
          // connection.end();
          return console.log(err);
        }
        resolve(res);
      }
    );
  });
};
