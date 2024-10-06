class Header{

    private link : Array<string>;
    private header : HTMLDivElement;

    constructor(){
        this.link = ["index", "formation", "projects", "contact"];
        this.header = document.getElementsByTagName("header")[0] as HTMLDivElement;
        if (screen.width <= 480){
            this.initializeMobile();
            document.getElementById("menu-burger").addEventListener("click", this.toggleClass.bind(this));
            document.getElementById("menu-item").addEventListener("click", () => {
                this.toggleClass();
            });
        }
        else {
            this.initializeDesktop();
        }
    }

    private initializeDesktop(){
        let div = document.createElement("div");
        let nav = document.createElement("nav");
        let ul = document.createElement("ul");

        this.link.forEach((elem : string) => {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = elem + ".html";
            a.id = elem + "Link";
            a.className = "navLink";
            a.textContent = elem == "index" ? "Home" : elem.charAt(0).toUpperCase() + elem.slice(1);
            li.appendChild(a);
            ul.appendChild(li);
        })
        nav.appendChild(ul);
        div.append(nav);
        div.id = "navDiv"

        let img = document.createElement("img");
        img.id = "logo"
        img.alt = "Pierre Vanhove's Logo"
        img.src = "../assets/Logo.svg"
        this.header.appendChild(img);
        this.header.appendChild(div);
    }

    private initializeMobile(){
        let img = document.createElement("img");
        img.id = "logo"
        img.alt = "Pierre Vanhove's Logo"
        img.src = "../assets/Logo.svg"

        let div = document.createElement("div");
        div.id = "globalDivMenu"

        let menuBg = document.createElement("div");
        menuBg.id = "menu-bg";

        let menuBurger = document.createElement("div");
        menuBurger.id = "menu-burger";
        menuBurger.innerText = "☰";

        let menuItems = document.createElement("div");
        menuItems.id = "menu-item";

        this.link.forEach((elem: string) => {
            let tempDiv = document.createElement("div");
            tempDiv.innerText = elem == "index" ? "Home" : elem.charAt(0).toUpperCase() + elem.slice(1);

            tempDiv.addEventListener("click", () => {
                location.href = elem + ".html";
            });

            menuItems.append(tempDiv);
        })

        div.appendChild(menuBg);
        div.appendChild(menuBurger);
        div.appendChild(menuItems);

        this.header.appendChild(img);
        this.header.appendChild(div);
    }


    private toggleClass(){
        console.log("ok");
        let menuBurger = document.getElementById("menu-burger") as HTMLDivElement;

        menuBurger.classList.toggle("fs");
        document.getElementById("menu-bg").classList.toggle("fs");
        document.getElementById("menu-item").classList.toggle("fs");

        menuBurger.innerText = menuBurger.innerText == "☰" ? "✕" : "☰";
    }

}