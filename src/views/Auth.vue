<template>
  <main>
    <div id="authApp">
      <h1>Eventually</h1>
      <input type="text" placeholder="Email" v-model="email" />
      <br />
      <br />
      <input type="text" placeholder="Password" v-model="password" />
      <br />
      <br />
      <button v-on:click="login">Login</button>
    </div>
  </main>
</template>

<script>
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCdPGhsho4yax5ev3nE939Xp45gTpLSMLE',
  authDomain: 'eventually-dev.firebaseapp.com',
  databaseURL: 'https://eventually-dev.firebaseio.com',
  projectId: 'eventually-dev',
  storageBucket: 'eventually-dev.appspot.com',
  messagingSenderId: '1012667528749',
  appId: '1:1012667528749:web:a6db81f286ad06133c6aa4',
  measurementId: 'G-NFTL1BMRC8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default {
  name: 'auth',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      console.log(this.email);
      try {
        const credential = await firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(credential.user.email);
        this.$router.push({ path: '/' });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style>
</style>
