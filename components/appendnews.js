
    // function appendNews(data, location){
    //     location.innerHTML = "";
    //     data.map((el)=>{
    //         //Destructuring of object to get value

    //         let {title , description, url,urlToImage, publishedAt } = el;

    //         if(title == null || description == null || urlToImage == null || publishedAt == null){
    //             return false;
    //         }

    //         //Creating elements
    //         let mainDiv = document.createElement("div");
    //         let imgDiv = document.createElement("div");
    //         let img = document.createElement("img");
    //         let dateDiv = document.createElement("div");
    //         let titleDiv = document.createElement("div");
    //         let descriptionDiv = document.createElement("div");

    //         //Set all value
    //         img.src = urlToImage;
    //         titleDiv.textContent = title;
    //         descriptionDiv.textContent = description;
    //         dateDiv.textContent = publishedAt;


    //         //Append Properly
    //         imgDiv.append(img);
    //         mainDiv.append(imgDiv, dateDiv, titleDiv, descriptionDiv);
    //         location.append(mainDiv);

    //         //Go to the news url 
    //         mainDiv.addEventListener("click", ()=>{
    //             window.open( url , '_blank');
    //         })



    //     })
    // }

    function displayResults(data,Left_Container){
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



    export default displayResults