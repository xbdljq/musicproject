window.eventHub = {
    init(){

    },
    events:{
      //  '羊城晚报':[],
      //  '都市晚报':[]
    },
    emit(eventName,data){
     //debugger
        for(let key in this.events){
            if(key === eventName){
               // console.log(key)
                let FnList = this.events[key]
                FnList.map((fn) => {
                    fn.call(undefined,data)
                })
            }
        }

    },
    on(eventName,fn){
       //debugger
         if(this.events[eventName] === undefined){
             this.events[eventName] = []
         }
        this.events[eventName].push(fn)

    },
    off(){
        
    }
}