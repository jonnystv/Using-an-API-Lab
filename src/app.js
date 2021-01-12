import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            countries: [], // https://restcountries.eu/rest/v2/all
            selectedCountry: "",
        },
        mounted() {
            this.fetchCountries();
        },
        methods: {
            fetchCountries: function() {
                fetch("https://restcountries.eu/rest/v2/all")
                    .then(response => response.json())
                    .then(countries => this.countries = countries);
            },
            saveCountry: function() {
                this.selectedCountry.push({
                    name: this.selectedCountry,
                    population: this.selectedCountry
                });
            }
        },

        // methods: {
        //     saveAccount: function(){
        //       this.accounts.unshift(this.newAccount);

        //       this.newAccount = {
        //         name: "",
        //         balance: 0
        //       };
        //     }
        //   }

        // computed: {
        //     totalPopulation: function(){
        //         return this.countries.reduce(total, country) => total + country.population);
        //     },
        //     filteredCountries: function(){
        //         return this.countries.filter((country.name) => {
        //             return country.name              
        // })    
        // }
        // }
        //          
    });
})