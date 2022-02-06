const db = require('../model/stormdb');

const getAll = (req,res)=>{
    const tables = db.get('tables').value() || [];
    
    res.send(tables);
};

const create = (req,res) => {
    const table = req.body;
    db.get('tables').push(table).save();
    res.status(201).send({
        success: 'ok',
    });
};

const getByID = (req,res) => {
    const {tableid} = req.params;

    const tables = db.get('tables').value();

    const table = tables.filter((table) => table.tableid == tableid);

    res.send(table); 
};

const deleteByID = (req, res) => {
    const tableid = req.params.tableid;
  
    db.get('tables')
      .filter((table) => table.tableid != tableid)
      .save();
  
    res.status(200).send({
      success: 'ok',
    });
  };

const updatetableByID = (req,res) => {
    const {tableid} = req.params;
    const table = req.body;

    const tables = db.get('tables').value();
    const indexTable = tables.findIndex((table) => table.tableid = tableid);

    db.get('tables')
    .get(indexTable)
    .set(table)
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
    updatetableByID,
};