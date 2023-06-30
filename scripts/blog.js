

   
    

    
    
//Working on quotes api call==================>
    
    // let quoteUrl = "https://bodybuilding-quotes1.p.rapidapi.com/random-quote";
    // fetch(quoteUrl, {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "bodybuilding-quotes1.p.rapidapi.com",
	// 	"x-rapidapi-key": "a867a75115msh062cacb248defc3p1037f9jsnb868cbef939c"
	// }
    // })
    // .then((res)=>{
    //     return res.json()
    // })
    // .then((res)=>{
    //     console.log(res);
    //     let quote = document.querySelector("#quote");
    //     let value = res.quote;
    //     quote.textContent = value;
    // })

//Done with quotes api quotes api call==================>

// By Clicking static blog content==================>

//     document.querySelector("#first-blog").addEventListener("click", ()=>{
       
//         window.open("https://blog.playo.co/humansofplayo-how-to-submit-a-story/" , '_blank');
//     })

//     document.querySelector("#sec-blog").addEventListener("click", ()=>{
        
//         window.open("https://blog.playo.co/guidelines-to-playsafe-in-the-times-of-covid-19/" , '_blank');

//     })


// // By Clicking static blog content End==================>


// //Api call for Sports news content start==================>

//     import appendNews from "../components/appendnews.js";
//    import apiCall from "../components/apicall.js";

// //    function fetchNews(){

// //      let apiKey_blog = "e4ab3b0feed046eebb5ef12ca76e3c05";
// //     let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${apiKey_blog}`;
// //     let response = apiCall(bloglink);
// //     response.then((res)=>{
// //         console.log(res.articles);
// //         let appendlocation = document.querySelector(".dynamic-news");
// //         appendNews(res.articles, appendlocation);

// //     })
// //     .catch((e)=>{
// //         console.log(e);
// //     })

// //     }

   

//     //Edit 
//     function fetchNews(){
//     let apiKey_blog = "e4ab3b0feed046eebb5ef12ca76e3c05";
//     let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${process.env.BLOG_API_KEY}`;
//     fetch(bloglink)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((res)=>{
//         let appendlocation = document.querySelector(".dynamic-news");
//         appendNews(res.articles, appendlocation);
//     })
//     .catch((e)=>{
//         console.log(e);
//     })    
//    }
   
//    fetchNews()


// // Api call for Sports news content end==================>


// //Api call for health news start==================>

//     // document.querySelector("#health-news").addEventListener("click", ()=>{
//     //     console.log("Test")

//     //     document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
//     //     document.querySelector("#sports-news").style.borderBottom = "none";
//     //     document.querySelector("#health-news").style.backgroundColor = "white";
//     //     document.querySelector("#health-news").style.borderBottom = "3px solid #548A2F"
     


       
//     //     let apiKey_health = "b140754e118c4b63a8e580772d4446a1";
//     //     let bloglink_health = `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=12&apiKey=${process.env.BLOG_API_KEY}`;
        
//     //     fetch(bloglink_health)
//     //     .then((res)=>{
//     //         return res.json();
//     //     })
//     //     .then((res)=>{
//     //         let appendlocation = document.querySelector(".dynamic-news");
//     //         appendNews(res.articles, appendlocation);
//     //     })
//     //     .catch((e)=>{
//     //         console.log(e);
            
//     //     })

//     // })



// //Api call for health news End ========================>



// //If user click one sports button start ========================>

//     document.querySelector("#sports-news").addEventListener("click", ()=>{

//         document.querySelector("#sports-news").style.backgroundColor = "white";
//         document.querySelector("#sports-news").style.borderBottom = "3px solid #548A2F"
//         document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
//         document.querySelector("#health-news").style.borderBottom = "none";

//         //Api work ==>
//         let apiKey_blog = "e4ab3b0feed046eebb5ef12ca76e3c05";
//         let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${process.env.BLOG_API_KEY}`;
//         fetch(bloglink)
//         .then((res)=>{
//             return res.json();
//         })
//         .then((res)=>{
//             let appendlocation = document.querySelector(".dynamic-news");
//             appendNews(res.articles, appendlocation);
//         })
//         .catch((e)=>{
//             console.log(e);
//         })

//         fetchNews()

//     })


// //If user click one sports button end==========================>


// //Search Feature in news api start================================>


//     document.querySelector("#search").addEventListener('keypress' , (event)=>{
//         //console.log(event);
//         let value = document.querySelector("#search").value;

//         if(value == "" || value == undefined || value == null){
//             fetchNews()
//             return false;
//         }
        
//         if(event.key == "Enter"){
       

//         //code for search feature
//         //https://newsapi.org/v2/everything?q=Apple&from=2022-01-18&sortBy=popularity&apiKey=API_KEY
     
//         console.log("test")
//         let search_key = "e4ab3b0feed046eebb5ef12ca76e3c05";
//         let search_link = `https://newsapi.org/v2/everything?q=${value}&from=2022-01-18&sortBy=popularity&pageSize=10&language=en&apiKey=${process.env.BLOG_API_KEY}`;
      

//         fetch(search_link)
//         .then((res)=>{
//             return res.json();
//         })
//         .then((res)=>{
//             let appendlocation = document.querySelector(".dynamic-news");
//             appendNews(res.articles, appendlocation);
//         })
//         .catch((e)=>{
//             console.log(e);
//         })

//         console.log("Test")

//         }

//     });


//Search Feature in news api End================================>

// <---------------- Api integration for news----------------->
  var Left_Container=document.querySelector(".left-box");
  

document.getElementById("search").addEventListener("keyup", () => {
    debounceFun(debounce);
  });

let id;

let debounceFun = (deb) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    deb();
  }, 400);
};

var Prev=document.getElementById("Prev");
Prev.addEventListener("click",previous)

var Next=document.getElementById("Next");
Next.addEventListener("click",next)

let key = "39f6d3ad984f4b23905100e49c1ab97f";
let Page=1;
let totalpages;


const debounce = async (Page) => {
  let search = document.getElementById("search").value;
  try {

    if(Page==1){
        Prev.disabled=true;
    }
    else{
        Prev.disabled=false;
    }

    if(Page==totalpages){
        Next.disabled=true;
    }
    else{
        Next.disabled=false;
    }


    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&page=${Page}&pageSize=5&language=en&apiKey=${key}`
    );
   
    let data = await response.json();
    
    totalpages = data.length;
    document.getElementById("Page_No").textContent = Page;
    console.log(data.articles);

    displayResults(data.articles);
  } catch (error) {
    console.log(error);
    var errorElement = document.createElement("h1");
    errorElement.textContent = "Result Not Found!";
    Left_Container.append(errorElement);
  }
};

function previous(){
    if(Page==1){
        return;
    }
    Page--;
    debounce(Page)
}

function next(){
    if(Page==totalpages){
        return;
    }
    Page++;
    debounce(Page)
}


function displayResults(data){
    Left_Container.textContent=""
      data.map(({title,description,urlToImage,url})=>{
            // console.log(title)
            var Div_M=document.createElement("div");
            Div_M.setAttribute("id","Dynamic_News");

            var Div=document.createElement("div");
           
            var Img=document.createElement("img");
            Img.src=urlToImage;

            var P=document.createElement("h4");
            P.textContent=description;

            Div.append(Img,P);

            var H=document.createElement("h1");
            H.textContent=title;

            var Btn=document.createElement("a");
            Btn.setAttribute("class","button")
            Btn.textContent="View Post";
            Btn.href=url

            Div_M.append(Div,H,Btn);

     Left_Container.append(Div_M)

      });
}