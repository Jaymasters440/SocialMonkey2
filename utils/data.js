
const thoughtData = [
    {
        username: "fatCat341", 
        thoughtText: "You suck!",
        reactions: [
            {
               username:"BlueDuck451",
               reactionBody: "Nothing's ever easy" 
            },
             {
               username:"LazyHorse777",
               reactionBody: "Bigger, Faster, More!" 
            },

        ]   
    },

     {
        username: "LazyHorse777", 
        thoughtText: "It's all Opposite!",
        reactions: [
            {
               username:"BlueDuck451",
               reactionBody: "Nothing Matters" 
            },
             
        ]   
    },

     {
        username: "BlueDuck451", 
        thoughtText: "Then there were none!",
        reactions: [
            {
               username:"fatCat341",
               reactionBody: "You all need therapy!" 
            },
             
        ]   
    }


]
const userData = [
    {
       username: "fatCat341",
       email: "emogi3456@mail.com",
       thoughts:[1],
       friends:[2,3]
    },
    {
       username: "BlueDuck451",
       email: "BigBlueDuck@mail.com",
       thoughts:[3],
       friends:[1,3]
    },

     {
       username: "LazyHorse777",
       email: "RunningBear44@mail.com",
       thoughts:[2],
       friends:[2,1]
    },
    
]

module.exports={userData,thoughtData};