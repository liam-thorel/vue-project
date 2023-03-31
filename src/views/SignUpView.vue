<template>
  <div class="inscription-page">
    <div class="inscription-form">
      <h1>Inscription</h1>
      <form>
        <div class="form-group">
          <label for="name">Nom</label>
          <input v-model="name" type="text" class="form-control" id="name" placeholder="Nom">
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input v-model="pwd" type="password" class="form-control" id="password" placeholder="Mot de passe">
        </div>
        <button @click.prevent="inscription" type="submit" class="btn btn-primary">S'inscrire</button>
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
      pwd: ''
    }
  },
  methods: {
    inscription() {
      const user = {
        name: this.name,
        password: this.pwd
      }
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      console.log(user)
      axios.post('https://projet-node-js.vercel.app/user/create', user, config)
          .then(res => {
            console.log(res);
            if (res.status === 200) {
              this.$router.push('/login')
            }
          })
    }
  },
}
</script>

<style>
.inscription-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.inscription-form {
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
.inscription-form h1 {
  font-size: 30px;
  font-weight: bold;
  font-family: 'sans-serif', sans-serif;
}
.inscription-form form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.inscription-form form label {
  font-size: 20px;
  font-weight: bold;
  font-family: 'sans-serif', sans-serif;
}
.inscription-form form input {
  width: 300px;
  height: 30px;
  border: 3px solid goldenrod;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  background-color: #f2f2f2;
}
.inscription-form form button {
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
