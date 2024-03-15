// Vue.createApp({
//   data() {
//     return {
//       goals: [],
//       enteredValue: ''
//     };
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredValue);
//       this.enteredValue = '';
//     }
//   }
// }).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);


// Vue.createApp({
// data(){
//   return{
//   goals : [],
//   enteredValue: " "
//   };
//   },
//   methods:{
//     addGoal(){
//       this.goals.push(this.enteredValue )
//     }
//   }
// }

// )


const app = Vue.createApp({
  data(){
    return {
      counter: 0,
      name: ""
    };

  },
  methods:{
    setName(event){
      this.name = event.target.value
    },
    add(num){
      this.counter = this.counter+ num
    },
    reduce(num){
      this.counter = this.counter-num
    }
  }
});

app.mount("#user")