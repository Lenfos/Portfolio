var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Project {
    constructor() {
        this.projectsArray = Array.from(document.getElementsByClassName("projectsDiv"));
        this.initPorjectDiv();
    }
    initPorjectDiv() {
        this.projectsArray.forEach((elem) => {
            elem.style.backgroundImage = "url('assets/" + elem.id + ".jpg')";
            elem.addEventListener("click", () => {
                this.openWidget(elem);
            });
        });
    }
    closeWidget() {
        let widget = document.getElementById("widget");
        let parent = widget.parentElement;
        parent.removeChild(widget);
    }
    openWidget(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            if (document.getElementById("widget") != null) {
                document.getElementById("widget").parentElement.removeChild(document.getElementById("widget"));
            }
            let div = document.createElement("div");
            div.id = "widget";
            let closeButton = document.createElement("img");
            closeButton.src = "../assets/x.svg";
            closeButton.id = "closeButton";
            closeButton.alt = "Close Button";
            closeButton.addEventListener('click', () => {
                this.closeWidget();
            });
            div.appendChild(closeButton);
            let img = document.createElement("img");
            img.src = "../assets/" + elem.id + "Clear.jpg";
            img.alt = "Image of the project";
            div.appendChild(img);
            let data = yield this.fetchData(elem);
            div.appendChild(this.textDiv(data));
            document.getElementById("main").appendChild(div);
        });
    }
    fetchData(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            let toReturn;
            try {
                // Utilisation de fetch avec async/await
                const response = yield fetch('../assets/json/' + elem.id + '.json');
                const data = yield response.json();
                // On assigne directement le JSON au type `parseJson`
                toReturn = data;
                return toReturn;
            }
            catch (error) {
                console.error("Erreur lors du chargement du JSON :", error);
            }
        });
    }
    textDiv(data) {
        let div = document.createElement("div");
        div.id = "textDiv";
        let titleDiv = document.createElement("div");
        let titleKeyP = document.createElement("p");
        titleKeyP.classList.add("key");
        titleKeyP.innerText = "Title: ";
        let titleValueP = document.createElement("p");
        titleValueP.classList.add("value");
        titleValueP.innerText = data.title;
        titleDiv.append(titleKeyP);
        titleDiv.append(titleValueP);
        div.appendChild(titleDiv);
        let typeDiv = document.createElement("div");
        let typeKeyP = document.createElement("p");
        typeKeyP.classList.add("key");
        typeKeyP.innerText = "Type: ";
        let typeValueP = document.createElement("p");
        typeValueP.classList.add("value");
        typeValueP.innerText = data.type;
        typeDiv.append(typeKeyP);
        typeDiv.append(typeValueP);
        div.appendChild(typeDiv);
        let dateDiv = document.createElement("div");
        let dateKeyP = document.createElement("p");
        dateKeyP.classList.add("key");
        dateKeyP.innerText = "Date: ";
        let dateValueP = document.createElement("p");
        dateValueP.classList.add("value");
        dateValueP.innerText = data.date;
        dateDiv.append(dateKeyP);
        dateDiv.append(dateValueP);
        div.appendChild(dateDiv);
        let descDiv = document.createElement("div");
        let descKeyP = document.createElement("p");
        descKeyP.classList.add("key");
        descKeyP.innerText = "Description: ";
        let descValueP = document.createElement("p");
        descValueP.classList.add("value");
        descValueP.innerText = data.description;
        descDiv.append(descKeyP);
        descDiv.append(descValueP);
        div.appendChild(descDiv);
        if (data.link != null) {
            let link = document.createElement("a");
            link.href = data.link;
            link.target = "_blank";
            let linkDiv = document.createElement("div");
            linkDiv.id = "linkDiv";
            let linkP = document.createElement("p");
            linkP.innerText = "Open";
            let icon = document.createElement("img");
            icon.src = "../assets/openIcon.svg";
            icon.alt = "";
            linkDiv.append(linkP);
            linkDiv.append(icon);
            link.append(linkDiv);
            div.appendChild(link);
        }
        return div;
    }
}
//# sourceMappingURL=Projects.js.map