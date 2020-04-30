import axios from 'axios'
import {filter, concat, sortBy, prop} from 'ramda'

export const fetchData = async function (apiUrl) {
    let endPoint = apiUrl || 'http://agl-developer-test.azurewebsites.net/people.json'
    let result = ''
    try {
        result = await axios.get(endPoint)
        result = result.data
    } catch (err) {        
        console.log(err)
        throw new Error(err)
    }

    return result
}

export const filterAndSortData = async function (data, gender, petType, sortByProp) {
    // define filter rules
    const isGender = owner => owner.gender.toLowerCase() === gender;
    const isPetType = pet => pet.type.toLowerCase() === petType

    // find all male owners
    let allMaleOwners = filter(isGender, data);

    // find all pets by petType
    let allPets = []
    allMaleOwners.forEach(owner => {
        if (owner.pets) {
            allPets = concat(allPets, filter(isPetType, owner.pets))
        }
    })

    // sort by name
    const sortByNameCaseInsensitive = sortBy(prop(sortByProp));

    allPets = sortByNameCaseInsensitive(allPets); 

    console.log(allPets)

    return allPets
}

