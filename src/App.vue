<template>
  <div id="app">
    <div class="mdl-grid">
      <div class="mdl-layout-spacer"></div>
      <form-component ref="form" :set="(data) => setLocations(data)"></form-component>
      <time-table ref="table"></time-table>
      <div class="mdl-layout-spacer"></div>
    </div>
  </div>
</template>

<script>
  import FormComponent from './components/FormComponent'
  import TimeTable from './components/TimeTable'

  export default {
    name: 'App',
    components: {
      TimeTable,
      FormComponent
    },
    methods: {
      setLocations: function(data){
        this.$refs.table.setPeriodical(data)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>