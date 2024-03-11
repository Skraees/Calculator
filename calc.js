let but1 = document.querySelector("#one");
        let but2 = document.querySelector("#two");
        let but3 = document.querySelector("#three");
        let butplus = document.querySelector("#plus");
        let but4 = document.querySelector("#four");
        let but5 = document.querySelector("#five");
        let but6 = document.querySelector("#six");
        let but7 = document.querySelector("#seven");
        let but8 = document.querySelector("#eight");
        let but9 = document.querySelector("#nine");
        let butdivide = document.querySelector("#divide");
        let butzero = document.querySelector("#zero");
        let butdot = document.querySelector("#dot");
        let butmult = document.querySelector("#X");
        let butequal = document.querySelector("#equal");
        let butac = document.querySelector("#ac");

        
        
           




        but1.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "1";
        })
        but2.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "2";
        })
        but3.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "3";
        })

        butplus.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "+";
            
          
        })
        but4.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "4";
            
          
        })
        but5.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "5";
            
          
        })
        but6.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "6";
            
          
        })
        but7.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "7";
            
          
        })
        but8.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "8";
            
          
        })
        but9.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "9";
            
          
        })
        butdivide.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "/";
            
          
        })
        butzero.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "0";
            
          
        })
        butdot.addEventListener("click", () => {
            document.querySelector(".demo").innerText += ".";
            
          
        })
        butmult.addEventListener("click", () => {
            document.querySelector(".demo").innerText += "*";
            
          
        })
       

        butequal.addEventListener("click", () => {
            let value = document.querySelector(".demo").innerText;
            document.querySelector(".demo").innerText = eval(value)
        })

        butac.addEventListener("click", () => {
            // let value = document.querySelector(".demo").innerText;
            document.querySelector(".demo").innerText = "";
        })