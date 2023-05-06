

// module.exports = router;   
const express = require("express");
const router = express.Router();
const RecepiesRoute = require("../controller/recipiesController");

router.get("/recipe", RecepiesRoute.getRecepie);
router.post("/recipe", RecepiesRoute.postRecepie);
router.delete("/recipe/:id", RecepiesRoute.deleteRecepie);
router.put("/recipe/:id",RecepiesRoute.updateRecepie);



module.exports = router;
