<template>
  <div class="container">
    <h2>Ocjeni profesora</h2>
    <div>
      <h3>Kategorije</h3>
      <div class="category">
        <label>Izaberite profesora: </label>
        <select v-model="form.professor" name="professor" class="form-control">
          <option>---- Izaberite profesora ----</option>
          <option
            v-for="(professor, index) in professors"
            :key="index"
            :value="professor"
          >
            {{ professor.name }}
          </option>
        </select>
        <div class="class-title">
          <h4>Kreativnost i inovativnost u radu</h4>
        </div>
        <div class="field"></div>
        <div class="category-content">
          <div class="control">
            <textarea class="text-area" type="text" v-model="form.creativity" />
          </div>
        </div>
      </div>
      <div class="category">
        <div class="class-title">
          <h4>Komunikacija</h4>
        </div>
        <div class="category-content">
          <div class="control">
            <textarea
              class="text-area"
              type="text"
              v-model="form.communication"
            />
          </div>
        </div>
      </div>
      <div class="category">
        <div class="class-title">
          <h4>Korisnost kolegija</h4>
        </div>
        <div class="category-content">
          <div class="control">
            <textarea class="text-area" type="text" v-model="form.usefulness" />
          </div>
        </div>
      </div>
    </div>
    <button class="menu-btn" @click="saveProfessor()">Spremi</button>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      form: {
        creativity: "",
        communication: "",
        usefulness: "",
        professor: "",
      },
      professors: [],
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
  methods: {
    saveProfessor() {
      db.collection("professor-review").add({
        creativity: this.form.creativity,
        communication: this.form.communication,
        usefulness: this.form.usefulness,
        professor: this.professor.name,
      });
    },
  },
};
</script>

<style>
.text-area {
  width: 800px;
  height: 140px;
}
</style>
