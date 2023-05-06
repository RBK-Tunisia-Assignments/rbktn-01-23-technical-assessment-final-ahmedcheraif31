   
const Recepie = require("../model/recipiesModel");


const getRecepie = (req, res) => {
  Recepie.getAll((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
}

const postRecepie = (req, res) => {
  Recepie.addRecepie(
    req.body.Cook_Time,
    req.body.Prep_Time,
    req.body.recepie_Name,
    req.body.Serves,
    req.body.categorie,
    req.body.recepie_Image,
    req.body.recepie_Description,
    req.body.recepie_Ingredients,
    req.body.users_user_Id,
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  )}
  const deleteRecepie = (req, res) => {
    Recepie.deleteRecepie((err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }, req.params.id);
  }
  const updateRecepie = (req, res) => {
    Recepie.updateRecepie(
      req.params.id,
      req.body.Cook_Time,
      req.body.Prep_Time,
      req.body.recepie_Name,
      req.body.Serves,
      req.body.categorie,
      req.body.recepie_Image,
      req.body.recepie_Description,
      req.body.recepie_Ingredients,
      req.body.users_user_Id,
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      }
    );
  };


module.exports = {
  getRecepie,
  postRecepie,
  deleteRecepie,
  updateRecepie
};
