<template>
  <div class="container">
    <h2>Ocjeni studenta</h2>
    <h3>Kategorije</h3>
    <div class="category">
      <div class="class-title">
        <h4>Aktivnost</h4>
      </div>
      <div class="field"></div>
      <div class="category-content">
        <div class="control">
          <textarea class="text-area" type="text" v-model="form.activity" />
        </div>
      </div>
    </div>
    <div class="category">
      <div class="class-title">
        <h4>Ispunavanje obaveza</h4>
      </div>
      <div class="category-content">
        <div class="control">
          <textarea class="text-area" type="text" v-model="form.obligations" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        activity: "",
        obligations: "",
      },
    };
  },
  methods: {
    saveProfessor() {
      alert(JSON.stringify(this.form));
    },
    updateRating(rate) {
      this.form.categories.values = rate;
      console.log("value", this.form.categories.value);
    },
  },
};
</script>

<style>
.text-area {
  width: 800px;
  height: 140px;
}
.rating-section {
  padding: 15px;
}
</style>
