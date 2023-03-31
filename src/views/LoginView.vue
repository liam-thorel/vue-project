<template>
  <div class="login-page">
    <div class="login-form">
      <h1>Connexion</h1>
      <form>
        <label for="name">Nom</label>
        <input v-model="name" type="text" id="name" name="name" placeholder="Votre nom" required>
        <label for="password">Mot de passe</label>
        <input v-model="password" type="password" id="password" name="password" placeholder="Votre mot de passe" required>
        <button type="submit" @click.prevent="login">Se connecter</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'LoginPage',
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login() {
      const user = {
        name: this.name,
        password: this.password
      }
      console.log(user)
      axios.post('https://projet-node-js.vercel.app/recettes/connexion', user)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
  }
},
}
</script>

<style>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border: 3px solid goldenrod;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  background-color: #f2f2f2;
}
.login-form h1 {
  font-size: 30px;
  font-weight: bold;
  font-family: 'sans-serif', sans-serif;
}
.login-form form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.login-form form label {
  font-size: 20px;
  font-weight: bold;
  font-family: 'sans-serif', sans-serif;
}
.login-form form input {
  width: 300px;
  height: 30px;
  border: 3px solid goldenrod;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  background-color: #f2f2f2;
}
.login-form form button {
  width: 300px;
  height: 30px;
  border: 3px solid goldenrod;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  background-color: #f2f2f2;
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: 'sans-serif', sans-serif;
}
</style>
