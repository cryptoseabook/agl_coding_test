import {fetchData, filterAndSortData} from '@/services/peoplePetService.js'

const testData = [
    {
      "name": "Bob",
      "gender": "Male",
      "age": 23,
      "pets": [
        {
          "name": "MaleGarfield",
          "type": "Cat"
        },
        {
          "name": "Fido",
          "type": "Dog"
        }
      ]
    },
    {
        "name": "Jennifer",
        "gender": "Female",
        "age": 18,
        "pets": [
            {
            "name": "FemaleGarfield",
            "type": "Cat"
            }
        ]
    }
]

describe('People Pet Service', () => {
  it('fetch the proper data', async () => {
    let data = await fetchData()
    expect(data).toContainEqual({ name: 'Steve', gender: 'Male', age: 45, pets: null });
  })  

  it('filter all the female owners cats', async () => {
    let result = await filterAndSortData(testData, 'female', 'cat', 'name')
    expect(result).toEqual([{"name": "FemaleGarfield", "type": "Cat"}]);
  })

  it('filter all the male owners cats', async () => {
    let result = await filterAndSortData(testData, 'male', 'cat', 'name')
    expect(result).toEqual([{"name": "MaleGarfield", "type": "Cat"}]);
  })
})
