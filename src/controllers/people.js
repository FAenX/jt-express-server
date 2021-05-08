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
    postPeople([{name, age}]).then(people=>{
        // console.log(people)
        return response.status(200)
        .send({ status: "success", data: people});   
    }).catch(error=>{
        return response.status(400)
        .send({status: 'error', data: error})
    })
    
};