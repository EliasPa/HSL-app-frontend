<template>
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Jees</h2>
        </div>
        <form action="#" @submit.prevent="setLocations()">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input v-model="start" class="mdl-textfield__input" type="text" id="start">
                <label class="mdl-textfield__label" for="start">Start...</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input v-model="end" class="mdl-textfield__input" type="text" id="end">
                <label class="mdl-textfield__label" for="end">End...</label>
            </div>
        </form>
        <div class="mdl-card__actions mdl-card--border">
            <a v-on:click="setLocations()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Get Started
            </a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Form",
        data() {
            return {
                start: "",
                end: "",
            };
        },
        props: ['set', 'test'],
        methods: {
            setLocations: function() {
                let vue = this
                let url = 'http://localhost:3001/set'
                let stops = {
                    start: vue.start,
                    end: vue.end
                }
                axios.post(url, stops).then((response) => {
                    let data = response.data
                    vue.set(data)
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted() {

        }
    }
</script>