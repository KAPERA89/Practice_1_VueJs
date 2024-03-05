const app = Vue.createApp({
    data(){
        return{
            title : "The beginning after the end",
            age : 22,
            show:true,
            x:0,
            y:0,
            books: [
                {title: 'name of the wind', author: 'Patrick rothfuss', image:'./assets/moon.jpeg', isFav:true},
                {title: 'Storm Inn', author: 'Kapera', image:'./assets/lawliet.jpg',  isFav:false},
                {title: 'Solo leveling', author: 'Othmane', image:'./assets/wall.jpg', isFav:true},
            ],
            url:'http://thenetninja.co.uk',
        }
    },
    methods: {
        changeTitle(){
            console.log("you clicked me")
            this.title = "Magic Emperor"
        },
        toogleShowInfos(){
            this.show = !this.show
        },
        handleEvent(){
            console.log("event")
        },
        handleEventleave(){
            console.log("leave")
        },
        handleDoubleClick(){
            console.log("double Click")
        },
        handlemove(e){
            // console.log(e)
            this.x = e.offsetX
            this.y = e.offsetY
        },
        changeFav(b){
            b.isFav = !b.isFav
        }
    },
    //computed its a way to define data properties which depend on other data 
    computed: {
        filteredBooks(){
            return this.books.filter((b) => b.isFav)
        }
    }
})

app.mount("#app") 

// (){} => function shorthand 
// @ et v-on => sont les memes
