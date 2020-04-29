<template>
  <div class="agl-code-test">
    <h1>{{ msg }}</h1>
    <h3>Programming challenge description</h3>
    <p>A json web service has been set up at the url: <a href="http://agl-developer-test.azurewebsites.net/people.json">http://agl-developer-test.azurewebsites.net/people.json</a>.
    You need to write some code to consume the json and output a list of all the cats in alphabetical order under a heading of the gender of their owner.
    You can write it in any language you like. You can use any libraries/frameworks/SDKs you choose.</p>
    <div class="result">
      <h3>The following is the result:</h3>
      <div v-if="this.maleCatsSorted.length > 0">
        <h3>Male</h3>
        <ul>
          <li v-for="(pet, id) in this.maleCatsSorted" :key="id">{{pet.name}}</li>
        </ul>
      </div>
      <div v-if="this.femaleCatsSorted.length > 0">
        <h3>Female</h3>
        <ul>
          <li v-for="(pet, id) in this.femaleCatsSorted" :key="id">{{pet.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {filterAndSortData} from '../services/peoplePetService'
import {DEFAULT_END_POINT} from '../libs/data.js'

export default {
  name: 'AglCodeTest',
  props: {
    msg: String
  },
  async created () {
    this.maleCatsSorted = await filterAndSortData(DEFAULT_END_POINT, 'male', 'cat', 'name')
    this.femaleCatsSorted = await filterAndSortData(DEFAULT_END_POINT, 'female', 'cat', 'name')
  },  
  data: () => ({
    maleCatsSorted: [],
    femaleCatsSorted: []
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.agl-code-test {
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}
</style>
