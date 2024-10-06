class Header {
    constructor() {
        this.link = ["index", "formation", "projects", "contact"];
        this.header = document.getElementsByTagName("header")[0];
        this.initialize();
    }
    initialize() {
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
}
//# sourceMappingURL=Header.js.map