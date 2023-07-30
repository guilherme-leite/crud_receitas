const { criarReceita, getReceitaById, getReceitas, updateReceita, deleteReceita } = require("./user.controller");
const router = require("express").Router();

router.post("/", criarReceita);

router.get("/", getReceitas);

router.get("/:codigo_receita", getReceitaById);

router.put("/", updateReceita);

router.delete("/:codigo_receita", deleteReceita);

module.exports = router;