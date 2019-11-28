import loadTemplates from './templateLoader.js';


async function initialize() {

    var response = await fetch('./templates.json');
    var templates = await response.json();
    console.log(templates);

    templates = await loadTemplates(templates);


    Vue.component('app-nav', {
        template: templates.appNav
    });

    Vue.component('dashboard', {
        props: ['vehicles'],
        template: templates.dashboard
    })

    Vue.component('vehicle-summary', {
        props: ['vehicle'],
        template: templates.vehicleSummary
    });

    var app = new Vue({
        el: '#app',
        data: {
            vehicles: []
        },
        created() {
            fetch('https://vehctra.herokuapp.com/api/vehicles')
                .then(response => response.json())
                .then(json => {
                    this.vehicles = json
                })
                .catch((err) => {
                    console.log("Error fetching data");
                });
        }
    });
}


initialize();