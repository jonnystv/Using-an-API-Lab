import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            countriesURL: null // https://restcountries.eu/rest/v2/all
        },
        mounted: function() {
            this.fetchCountries();
        },
        methods: {
            fetchCountries: function() {
                fetch("https://restcountries.eu/rest/v2/all")
                    .then(response => response.json())
                    .then(data => this.countriesImgURL = data.name);
                console.log(fetchCountries)
            }
        }
    })
})