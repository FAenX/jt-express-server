let data = [
    {
        "name": "emmanuel",
        "age": "45"
    }
]


export const getPeople = async ()=>{  
    try{
        return data
    }catch(e){
        throw new Error(e)
    }  
    
}

export const postPeople = async (person)=>{  
    try{
        data = [...data, ...person]
        return data
    }catch(e){
        throw new Error(e)
    }  
    
}