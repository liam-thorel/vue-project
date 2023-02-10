<template>
  <div class="header">
    <div class = "je-prends-de-la-place"></div>
    <h1>Recettes</h1>
    <button class="tomPetiteChienne">Compte<img class id="login-picture" src="../assets/login-icon-smol.png"></button>
  </div>
</template>

<script>
export default {
  name: 'HeaderMain',
}
</script>

<style>
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #f2f2f2;
}
.tomPetiteChienne {
  background-color: #f2f2f2;
  border: none;
  color: black;
  padding: 15px 32px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.tomPetiteChienne:hover {
  background-color: #f2f2f2;
  color: dimgrey;
}
.je-prends-de-la-place {
  width: 140px;
}
#login-picture {
  width: 30px;
  height: 30px;
}
</style>
