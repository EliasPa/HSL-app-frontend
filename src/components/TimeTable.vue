<template>
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
            <tr>
                <th>From</th>
                <th>To</th>
                <th>Time until there</th>
                <th>Walk distance</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in busData">
                <td>{{ item.ss }}</td>
                <td>{{ item.es }}</td>
                <td>{{ item.duration }}</td>
                <td>{{ item.walkDistance }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'table-component',
        data() {
            return {
                busData: [{
                    ss: '-',
                    es: '-',
                    walkDistance: '-',
                    duration: '-',
                }]
            }
        },
        methods: {
            getTimes: function (data) {
                
                let vue = this
                let url = 'http://localhost:3001/data'
                console.log('getTimes')
                axios.post(url, data).then((response) => {
                    if (response.data.status == 200) {
                        this.busData = []
                        let data = response.data
                        console.log(data)
                        vue.busData.push(data)
                    }
                }).catch((error) => {
                    console.log(error)
                })
            },
            setPeriodical: function (data) {
                let vue = this
                setInterval(function () { vue.getTimes(data.data); }, 10000);
            }
        },
        mounted() {

        }
    }
</script>