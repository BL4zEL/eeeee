class Player {
    constructor()
    {   this.index = null;
        this.distance = 0 ; 
        this.name=null;


    }
    getCount() {
        var playerCountref = database.ref("playerCount")
        playerCountref.on("value",function (data){
            playerCount= data.val();
        })
    
    }
    updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
  
  
}
   update(){
       var playerindex = "Players/player"+this.index;
       database.ref(playerindex).set({
           name:this.name ,
           distance:this.distance
       })
   }
   static getPlayerInfo(){
    var playerInforef = database.ref("Players")
     playerInforef.on("value",(data)=>{
         allPlayers = data.val();
     })
    

   }
}
