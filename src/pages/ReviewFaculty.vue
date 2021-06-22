<template>
  <div class="container">
    <h2>Ocjeni Fakultet</h2>
    <div>
      <h3>
        Kategorije
      </h3>
      <div class="category">
        <div class="class-title">
          <h4>
            Kreativnost i inovativnost u radu
          </h4>
        </div>
        <div class="field"></div>
        <div class="category-content">
          <div class="control">
            <textarea class="text-area" type="text" v-model="form.creativity"/>
          </div>
        </div>
      </div>
      <div class="category">
        <div class="class-title">
          <h4>
            Komunikacija
          </h4>
        </div>
        <div class="category-content">
          <div class="control">
            <textarea class="text-area" type="text" v-model="form.communication"/>
          </div>
        </div>
      </div>
      <div class="category">
        <div class="class-title">
          <h4>
            Kvaliteta studija, kolegija i struktura godine
          </h4>
        </div>
        <div class="category-content">
          <div class="control">
            <textarea class="text-area" type="text" v-model="form.quality" />
          </div>
        </div>
        <div class="category">
          <div class="class-title">
            <h4>
              Organizacija fakulteta i službi (referada, ISVU)
            </h4>
          </div>
          <div class="category-content">
            <div class="control">
              <textarea class="text-area" type="text" v-model="form.organization" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="menu-btn" @click="saveForm()">Ocjeni</button>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  data () {
    return {
      form: {
        creativity: "",
        communication:"",
        quality:"",
        organization: "",
      }
    }
  },
  methods: {
    saveForm(){
      db.collection("review-faculty").add({
        creativity: this.form.creativity,
        communication: this.form.communication,
        quality: this.form.quality,
        organization: this.form.organization,
      })
    }
  }
};
</script>

<style>
.text-area {
  width: 800px;
  height: 140px;
}
</style>
