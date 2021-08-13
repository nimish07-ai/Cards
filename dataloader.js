class Loader
{
    _data={
        type:2,
        Intro:{
            main:"Hey xyz",
            submain:"just wanted to say",
            Image:"./Capture.PNG"
        },
        body_section:[
            {title:"Lizard1",t:1,url:"/cat.jpg",body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica"},
            
            {title:"Lizard2",t:1,url:"/cat.jpg",body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica"},
            
            {title:"Lizard3",t:1,url:"/cat.jpg",body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica"},
                    ],
        conclusion:{
            Images:["./Capture.PNG","./Capture.PNG","./Capture.PNG"],
            header:"Happy jajajja aaaaii",
            sub:"q",
            note:"a"

        },

        theme2:{
            header:"happy birthday dinu",
            main:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
            img:"./Capture.PNG"

        }
    }
    constructor()
    {
   
        if(window.location.hash =="#1" || window.location.hash == '')
        {
         this._data=window.data1   
         window.$$=2
        }
        // else
        // if(window.location.hash =="#2" || window.location.hash == '')
        // {
        //  this._data=window.data2   
        //  window.$$=1
        // }
        

    }

    loadimagefrombase64andmakeurl(base64)
    {


    }

    data()
    {
        return this._data
    }
}
window.data1={
    type:2,
    Intro:{
        main:"Hey simmiiiii",
        submain:"just wanted to say",
        Image:"https://nimish07-ai.github.io/Cards/simi/234832480_256915932703041_106837830703486305_n.jpg"
    },
    body_section:[
            
        {title:"Lizard2",t:1,url:"https://nimish07-ai.github.io/Cards/simi/228764459_3910807552363476_4141029890408631534_n.jpg",body: "Most photogenic person jiska har ake pic looks best but you seldom like any"},


        {title:"Lizard1",t:1,url:"https://nimish07-ai.github.io/Cards/simi/IMG_20210125_223003_787.jpg",body: "Thank you for helping me to get a good selfi"},
        
        {title:"Lizard3",t:1,url:"https://nimish07-ai.github.io/Cards/simi/139642930_1052260045256496_486278920629957473_n.jpg",body: "You are one of gorgeous women i have ever met"},
        
        {title:"Lizard4",t:1,url:"https://nimish07-ai.github.io/Cards/simi/abc.jpg",body: "Always honoured to have Mrs abhayn as my buddy"},
         
    ],
    conclusion:{
        Images:["https://nimish07-ai.github.io/Cards/simi/IMG-20210801-WA0028.jpg","https://nimish07-ai.github.io/Cards/simi/WhatsApp%20Image%202021-08-13%20at%2012.52.48%20AM.jpeg","https://nimish07-ai.github.io/Cards/simi/try.jpg","https://nimish07-ai.github.io/Cards/simi/IMG-20210812-WA0017.jpg"],
        header:"Happy Birthday simmii",
        sub:"Always be carying and invaluable friend as you are",
        note:`Tbh without you we can never pass our exam nor submit any assignment  im alwas greatful of u for same
        As u said we dont talk a lot but as u are always threr for me i will always be there for u Bro  
        i wish u  a very happy cheerful birthday simmiiiiiiiiiiiiiiiiiii 
        -Nimish(Seven) 
        `

    },

    theme2:{
        header:"happy birthday dinu",
        main:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        img:"https://nimish07-ai.github.io/Cards/Capture.PNG"

    }

}
data2={}
data3={}
data4={}
data5={}


document.addEventListener('scroll', function(event)
{
    // console.log(event.target.s)
    // var element = event.target;
    // if (element.scrollHeight - element.scrollTop === element.clientHeight)
    // {
    //     console.log('scrolled');
    // }
});