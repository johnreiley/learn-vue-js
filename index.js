Vue.component('dashboard', {

})

Vue.component('vehicle-summary', {
    props: ['vehicle'],
    template: ''
})

var app = new Vue({
    el: '#app',
    vehicles: [],
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

})