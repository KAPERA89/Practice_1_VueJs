const app = Vue.createApp({
    data(){
        return{
            title : "The beginning after the end",
            age : 22,
            show:true,
            x:0,
            y:0,
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
        }
    }
})

app.mount("#app") 

// (){} => function shorthand 
// @ et v-on => sont les memes
