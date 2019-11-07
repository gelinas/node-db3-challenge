// this file is the data access lay
const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
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
    return db('schemes')
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .join('steps', 'schemes.id', 'steps.scheme_id')
        .orderBy('steps.step_number')
        .where('schemes.id', '=', id);
}

function add(scheme){
    return db.insert(scheme, 'id')
        .into('schemes');
}

function addStep(step, scheme_id) {
    return db.insert({...step, scheme_id: scheme_id}, 'id')
        .into('steps');
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