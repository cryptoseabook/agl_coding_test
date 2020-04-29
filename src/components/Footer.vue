<template>
  <div class="footer">
    <ul>
        <li><span style="color:red">&hearts;</span> Seabook Chen</li>
        <li>Github: <a href="https://github.com/cryptoseabook">cryptoseabook</a></li>
        <li>Solution in one sentence: <strong>Functional programming is the way to tackle this kind of problem</strong></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  margin-top: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
