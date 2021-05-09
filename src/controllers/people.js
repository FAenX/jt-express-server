import {getPeople, postPeople} from '../models/people'

export function findPeople  (request, response) {
    getPeople().then(people=>{
        // console.log(people)
        return response.status(200)
        .send({ status: "success", data: people});   
    }).catch(error=>{
        return response.status(400)
        .send({status: 'error', data: error})
    })
    
};

export function addPerson  (request, response) {
    const {name, age} = request.body
    if(!name | !age | typeof age != Number){
        return response.status(400)
        .send({status: 'error', data: {error: 'name and age required, age should be a number'}})
    }
    postPeople([{name, age}]).then(people=>{
        // console.log(people)
        return response.status(200)
        .send({ status: "success", data: people});   
    }).catch(error=>{
        return response.status(400)
        .send({status: 'error', data: error})
    })
    
};