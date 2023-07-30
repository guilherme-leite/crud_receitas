const pool = require('../../config/database');

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO receita(nome, tempo_preparacao, num_pessoas, dificuldade, categoria, preparacao)VALUES(?,?,?,?,?,?)`,
        [
          data.nome,
          data.tempo_preparacao,
          data.num_pessoas,
          data.dificuldade,
          data.categoria,
          data.preparacao
        ], (err, result) => {
          if(err) {
            return callBack(err);
          }
          return callBack(null, result);
        }
    );
  },
  getAll: callBack => {
    pool.query(
    'SELECT codigo_receita, nome, tempo_preparacao, num_pessoas, dificuldade, categoria, preparacao FROM receita',
    [],
    (err, result) => {
      if(err) {
        return callBack(err);
      }
      return callBack(null, result);
    }
    )
  },
  getById: (codigo_receita, callBack) => {
    pool.query(
    'SELECT nome,tempo_preparacao,num_pessoas,dificuldade,categoria,preparacao FROM receita WHERE codigo_receita = ?;', 
    [codigo_receita],
    (err, result) => {
      if(err) {
        return callBack(err);
      }
      return callBack(null, result[0]);
    }
    )
  },
  update: (data, callBack) => {
    pool.query(
      `UPDATE receita set nome=?, tempo_preparacao=?, num_pessoas=?, dificuldade=?, categoria=?, preparacao=? WHERE codigo_receita = ?`,
        [
          data.nome,
          data.tempo_preparacao,
          data.num_pessoas,
          data.dificuldade,
          data.categoria,
          data.preparacao,
          data.codigo_receita,
        ], (err, results) => {
          if(err) {
            return callBack(err);
          }
          return callBack(null, results[0]);
        }
    );
  },
  deleta: (codigo_receita, callBack) => {
    pool.query(
    'DELETE FROM receita WHERE codigo_receita = ?', 
    [codigo_receita],
    (err, results) => {
      if(err) {
        return callBack(err);
      }
      return callBack(null, results[0]);
      }
    );
  }
};
