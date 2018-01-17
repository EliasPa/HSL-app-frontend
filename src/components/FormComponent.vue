<template>
    <div>
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">Where do you want to go?</h2>
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
        <div class="spinner">
            <simple-spinner size="small" v-if="loading"></simple-spinner>
        </div>
        <div ref="snack" class="mdl-js-snackbar mdl-snackbar">
            <div class="mdl-snackbar__text"></div>
            <button class="mdl-snackbar__action" type="button"></button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import './../assets/main.css'
    import global from '../global.js'

    export default {
        name: "Form",
        data() {
            return {
                loading: false,
                start: "",
                end: ""
            };
        },
        props: ["set", "test"],
        methods: {
            showSnackBarMessage: function(data){
                let snackbar = this.$refs.snack
                snackbar.MaterialSnackbar.showSnackbar(data)
            },
            setLocations: function () {
                this.loading = true
                let vue = this;
                let url = global.url + "/set";
                let stops = {
                    start: vue.start,
                    end: vue.end
                };
                axios
                    .post(url, stops)
                    .then(response => {
                        if (response.data.status == 200) {
                            let data = response.data;
                            vue.set(data);
                        } else {
                            this.start = '';
                            this.end = '';
                        }
                        this.showSnackBarMessage({message: response.data.message})
                        this.loading = false;
                    })
                    .catch(error => {
                        this.showSnackBarMessage({message: 'An error occured.'})
                    });
            }
        },
        mounted() { }
    };
</script>