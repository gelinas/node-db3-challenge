// this file is the data access lay
const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db.select('*').from('schemes');
}

function findById(id){
    return db('schemes')
        .where({ id: id })
        .first();
}

function findSteps(id){
    return db('steps')
        .where({ scheme_id: id });
}

function add(scheme){
    return db.insert(scheme, 'id')
        .into('schemes');
}

function update(changes, id){
    return db('schemes')
        .where({ id: id})
        .update(changes);
}

function remove(id){
    return db('schemes')
        .where({ id: id })
        .del();

}