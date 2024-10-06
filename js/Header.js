class Header {
    constructor() {
        this.link = ["index", "formation", "projects", "contact"];
        this.header = document.getElementsByTagName("header")[0];
        if (screen.width <= 480) {
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
    initializeDesktop() {
        let div = document.createElement("div");
        let nav = document.createElement("nav");
        let ul = document.createElement("ul");
        this.link.forEach((elem) => {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = elem + ".html";
            a.id = elem + "Link";
            a.className = "navLink";
            a.textContent = elem == "index" ? "Home" : elem.charAt(0).toUpperCase() + elem.slice(1);
            li.appendChild(a);
            ul.appendChild(li);
        });
        nav.appendChild(ul);
        div.append(nav);
        div.id = "navDiv";
        let img = document.createElement("img");
        img.id = "logo";
        img.alt = "Pierre Vanhove's Logo";
        img.src = "../assets/Logo.svg";
        this.header.appendChild(img);
        this.header.appendChild(div);
    }
    initializeMobile() {
        let img = document.createElement("img");
        img.id = "logo";
        img.alt = "Pierre Vanhove's Logo";
        img.src = "../assets/Logo.svg";
        let div = document.createElement("div");
        div.id = "globalDivMenu";
        let menuBurger = document.createElement("div");
        menuBurger.id = "menu-burger";
        menuBurger.innerText = "☰";
        let menuItems = document.createElement("div");
        menuItems.id = "menu-item";
        this.link.forEach((elem) => {
            let tempDiv = document.createElement("div");
            tempDiv.innerText = elem == "index" ? "Home" : elem.charAt(0).toUpperCase() + elem.slice(1);
            tempDiv.addEventListener("click", () => {
                location.href = elem + ".html";
            });
            menuItems.append(tempDiv);
        });
        div.appendChild(menuBurger);
        div.appendChild(menuItems);
        this.header.appendChild(img);
        this.header.appendChild(div);
    }
    toggleClass() {
        console.log("ok");
        let menuBurger = document.getElementById("menu-burger");
        menuBurger.classList.toggle("fs");
        document.getElementById("menu-item").classList.toggle("fs");
        menuBurger.innerText = menuBurger.innerText == "☰" ? "✕" : "☰";
    }
}
//# sourceMappingURL=Header.js.map