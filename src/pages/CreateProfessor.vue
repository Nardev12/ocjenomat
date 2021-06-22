<template>
  <h2>Novi profesor</h2>
  <div class="form">
    <div class="columns">
      <form>
        <p></p>
        <div class="field">
          <label class="label">Ime</label>
          <div class="control">
            <input class="input" type="text" v-model="professor.name" />
          </div>
        </div>
        <div class="field">
          <label class="label">Prezime</label>
          <div class="control">
            <input class="input" type="text" v-model="professor.surname" />
          </div>
        </div>
        <div class="field">
          <input
            type="text"
            v-model="tempInput"
            v-on:keypress.enter="addSubject()"
            placeholder="Unesite kolegije.."
          />
          <ul>
            <li
              v-for="(subject, index) in professor.subjects"
              v-bind:key="index"
            >
              <span v-if="professor.subjects.length > 0">
                {{ subject.title }}
              </span>
            </li>
          </ul>
        </div>
        <div class="field">
          <label class="label">Zvanje</label>
          <div class="control">
            <input class="input" type="text" v-model="professor.title" />
          </div>
        </div>
        <div class="field">
          <label class="label">Kabinet</label>
          <div class="control">
            <input class="input" type="text" v-model="professor.office" />
          </div>
        </div>
        <div class="field">
          <label class="label">Vrijeme konzultacija: </label>
          <div class="control">
            <input class="input" type="text" v-model="professor.office_hours" />
          </div>
        </div>
        <div class="field">
          <label class="label">Zivotopis</label>
          <div class="control">
            <textarea class="text-area" type="text" v-model="professor.cv" />
          </div>
        </div>
      </form>
      {{ listProffesor }}
    </div>
  </div>

  <button class="menu-btn" @click="saveProfessor()">Spremi</button>
</template>

<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      professor: {
        name: "",
        surname: "",
        subjects: [],
        title: "",
        office: "",
        office_hours: "",
        cv: "",
      },
      temp: "",
      tempInput: "",
      counter: 0,
    };
  },

  methods: {
    saveProfessor() {
      db.collection("professor").add({
        name: this.professor.name,
        surname: this.professor.surname,
        subjects: this.professor.subjects,
        title: this.professor.title,
        office: this.professor.office,
        office_hours: this.professor.office_hours,
        cv: this.professor.cv,
      });
    },
    addSubject() {
      this.professor.subjects.push({
        title: this.tempInput,
      });
      this.counter++;
      console.log(this.professor);
    },
    getProffesors() {
      this.listProffesor = db.collection("professor-review").get();
    },
  },
};
</script>

<style>
.field {
  padding: 5px;
}
.menu-btn {
  padding: 5px;
  margin: 5px;
}
</style>
