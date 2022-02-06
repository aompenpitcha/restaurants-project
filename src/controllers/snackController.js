const db = require('../model/stormdb');

const getAll = (req,res)=>{
    const snacks = db.get('snacks').value() || [];
    res.send(snacks);
};

const create = (req,res) => {
    const snack = req.body;
    db.get('snacks').push(snack).save();
    
    res.status(201).send({
        success: 'ok',
    });
};

const getByID = (req,res) => {
    const {id} = req.params;

    const snacks = db.get('snacks').value();

    const snack = snacks.filter((snack) => snack.id == id);

    res.send(snack); 
};

const deleteByID = (req, res) => {
    const id = req.params.id;
  
    db.get('snacks')
      .filter((snack) => snack.id != id)
      .save();
  
    res.status(200).send({
      success: 'ok',
    });
  };

const updatesnackByID = (req,res) => {
    const {id} = req.params;
    const snack = req.body;

    const snacks = db.get('snacks').value();
    const indexSnack = snacks.findIndex((snack) => snack.id = id);

    db.get('snacks')
    .get(indexSnack)
    .set(snack)
    .save();

    res.status(200).send({
        success: 'ok',
    });
};


module.exports = {
    getAll,
    getByID,
    create,
    deleteByID,
    updatesnackByID,
};