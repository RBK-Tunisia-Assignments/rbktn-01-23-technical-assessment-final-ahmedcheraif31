const getAll = (callback) => {
  const sql = "SELECT * FROM recepie";
  return connect.query(sql, callback);
};

const addRecepie = (
  Cook_Time,
  Prep_Time,
  recepie_Name,
  Serves,
  categorie,
  recepie_Image,
  recepie_Description,
  recepie_Ingredients,
  users_user_Id,
  callback
) => {
  const sql = `INSERT INTO recepie (Cook_Time, Prep_Time, recepie_Name, Serves, categorie, recepie_Image, recepie_Description, recepie_Ingredients, users_user_Id) VALUES (${Cook_Time}, ${Prep_Time}, "${recepie_Name}", ${Serves}, "${categorie}", "${recepie_Image}", "${recepie_Description}", "${recepie_Ingredients}", ${users_user_Id})`;
  return connect.query(sql, callback);
};

const deleteRecepie = (id, callback) => {
  const sql = `DELETE FROM recepie WHERE Recepie_Id=${id}`;
  return connect.query(sql, callback);
}
const updateRecepie = (
  id,
  Cook_Time,
  Prep_Time,
  recepie_Name,
  Serves,
  categorie,
  recepie_Image,
  recepie_Description,
  recepie_Ingredients,
  users_user_Id,
  callback
) => {
  const sql = `UPDATE recepie SET Cook_Time=${Cook_Time}, Prep_Time=${Prep_Time}, recepie_Name="${recepie_Name}", Serves=${Serves}, categorie="${categorie}", recepie_Image="${recepie_Image}", recepie_Description="${recepie_Description}", recepie_Ingredients="${recepie_Ingredients}", users_user_Id=${users_user_Id} WHERE Recepie_Id=${id}`;
  return connect.query(sql, callback);
};

module.exports = { getAll, addRecepie, deleteRecepie,updateRecepie };