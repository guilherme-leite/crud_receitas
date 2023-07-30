const { create, getAll, getById, update, deleta } = require("./user.service");

module.exports = {
  criarReceita: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  getReceitaById: (req, res) => {
    const codigo_receita = req.params.codigo_receita;
    getById(codigo_receita, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Receita não encontrada"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getReceitas: (req, res) => {
    getAll((err, results) => {
      if(err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  updateReceita: (req, res) => {
    const body = req.body;
    update(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Receita Atualizada"
      });
    })
  },
  deleteReceita: (req, res) => {
    const codigo_receita = req.params.codigo_receita;
    deleta(codigo_receita, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Receita não encontrada."
        });
      }
      console.log(results);
      return res.json({
          success: 1,
          message: "Receita deletada com sucesso"
        });
    });
  }
};