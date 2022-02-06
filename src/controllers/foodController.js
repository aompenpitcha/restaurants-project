const db = require('../model/stormdb');

const getAll = (req,res)=>{
    const foods = db.get('foods').value();
    res.send(foods);
};

const create = (req,res) => {
    const food = req.body;
    db.get('foods').push(food).save();
    
    res.status(201).send({
        success: 'ok',
    });
};

const getByID = (req,res) => {
    const {id} = req.params;

    const foods = db.get('foods').value();

    const food = foods.filter((food) => food.id == id);

    res.send(food); 
};

const deleteByID = (req, res) => {
    const id = req.params.id;
  
    db.get('foods')
      .filter((food) => food.id != id)
      .save();
  
    res.status(200).send({
      success: 'ok',
    });
  };

const updatefoodByID = (req,res) => {
    const {id} = req.params;
    const food = req.body;

    const foods = db.get('foods').value();
    const indexFood = foods.findIndex((food) => food.id = id);

    db.get('foods')
    .get(indexFood)
    .set(food)
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
    updatefoodByID,
};