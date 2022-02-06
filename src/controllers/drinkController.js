const db = require('../model/stormdb');

const getAll = (req,res)=>{
    const drinks = db.get('drinks').value() || [];
    res.send(drinks);
};

const create = (req,res) => {
    const drink = req.body;
    db.get('drinks').push(drink).save() ;
    
    res.status(201).send({
        success: 'ok',
    });
};

const getByID = (req,res) => {
    const {id} = req.params;

    const drinks = db.get('drinks').value() || [];

    const drink = drinks.filter((drink) => drink.id == id);

    res.send(drink); 
};

const deleteByID = (req, res) => {
    const id = req.params.id;
  
    db.get('drinks')
      .filter((drink) => drink.id != id)
      .save();
  
    res.status(200).send({
      success: 'ok',
    });
  };

const updateDrinkByID = (req,res) => {
    const {id} = req.params;
    const drink = req.body;

    const drinks = db.get('drinks').value() || [];
    const indexDrink = drinks.findIndex((drink) => drink.id = id);

    db.get('drinks')
    .get(indexDrink)
    .set(drink)
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
    updateDrinkByID,
};