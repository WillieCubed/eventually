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
      <button v-if="inSignUpMode" v-on:click="signup">Sign Up</button>
      <button v-else v-on:click="login">Login</button>
      <br /><br />
      <button v-if="inSignUpMode" v-on:click="changeToLogin">Go to Login</button>
      <button v-else v-on:click="changeToSignUp">Go to Sign Up</button>
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
  props: { inSignUpMode: Boolean },
  data() {
    return {
      email: '',
      password: '',
      signUp: false,
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
    async signup() {
      try {
        const credential = await firebase.auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(credential.user.email);
        this.$router.push({ path: '/' });
      } catch (e) {
        console.error(e);
      }
    },
    changeToLogin() {
      this.$router.push('/auth/login');
    },
    changeToSignUp() {
      this.$router.push('/auth/signUp');
    },
  },
};
</script>

<style>
</style>
