<template>
    <div>
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                    <th>Bus</th>
                    <th>Leaves</th>
                    <th>Arrives</th>
                    <th>Time until there</th>
                    <th>Walk distance</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in busData">
                    <td>{{ item.bus }}</td>
                    <td>{{ item.ss }}</td>
                    <td>{{ item.es }}</td>
                    <td>{{ item.duration }}</td>
                    <td>{{ item.walkDistance }}</td>
                </tr>
            </tbody>
        </table>
        <div class="spinner">
            <simple-spinner size="small" v-if="loading"></simple-spinner>
        </div>
        <div ref="snackBar" class="mdl-js-snackbar mdl-snackbar">
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
        name: "table-component",
        data() {
            return {
                loading: false,
                busData: [
                    {
                        bus: "-",
                        ss: "-",
                        es: "-",
                        walkDistance: "-",
                        duration: "-"
                    }
                ]
            };
        },
        methods: {
            getTimes: function (data) {
                this.loading = true;
                let vue = this;
                let url = global.url + "/data";
                axios.post(url, data).then((response) => {
                    if (response.data.status == 200) {
                        this.busData = [];
                        let data = response.data;
                        vue.busData.push(data);
                        vue.loading = false;
                    }
                }).catch((error) => {
                    this.showSnackbarMessage({message: 'An error occured.'})
                });
            },
            showSnackbarMessage: function (data) {
                let snackbar = this.$refs.snack
                snackbar.MaterialSnackbar.showSnackbar(data)
            },
            setPeriodical: function (data) {
                let vue = this;
                this.getTimes(data.data);
                setInterval(function () {
                    vue.getTimes(data.data);
                }, 10000);
            }
        },
        mounted() { }
    };
</script>