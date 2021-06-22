<template>
  <div>
    <h3>Svi profesori</h3>
    <ul v-for="(professor, index) in professors" v-bind:key="index">
      <li>{{ professor.name }} {{ professor.surname }}</li>
    </ul>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      professors: [], // polje profesora
    };
  },
  mounted() {
    db.collection("professor")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let professor = doc.data();
          professor.id = doc.id;
          this.professors.push(professor); // push funkcija puni polje profesora
        });
      });
  },
};
</script>

<style></style>
