
class Project {

    private projectsArray : Array<HTMLDivElement>;

    constructor() {
        this.projectsArray = Array.from(document.getElementsByClassName("projectsDiv") as HTMLCollectionOf<HTMLDivElement>);
        this.initPorjectDiv();
    }

    private initPorjectDiv(){
        this.projectsArray.forEach((elem: HTMLDivElement) => {
            elem.style.backgroundImage = "url('assets/" + elem.id + ".jpg')";
            elem.addEventListener("click", () =>{
                this.openWidget(elem);
            })
        })
    }

    private closeWidget(){
        let widget = document.getElementById("widget") as HTMLDivElement;
        let parent = widget.parentElement as HTMLDivElement;
        parent.removeChild(widget);
    }

    private async openWidget(elem : HTMLDivElement){

        if (document.getElementById("widget") != null){
            document.getElementById("widget").parentElement.removeChild(document.getElementById("widget"));
        }

        let div = document.createElement("div");
        div.id = "widget";

        let closeButton = document.createElement("img");
        closeButton.src = "../assets/x.svg";
        closeButton.id = "closeButton";
        closeButton.alt = "Close Button";
        closeButton.addEventListener('click', () =>{
            this.closeWidget();
        })
        div.appendChild(closeButton);

        let img = document.createElement("img");
        img.src = "../assets/" + elem.id + "Clear.jpg";
        img.alt = "Image of the project";
        div.appendChild(img);

        let data : parseJson = await this.fetchData(elem)
        div.appendChild(this.textDiv(data));

        document.getElementById("main").appendChild(div);

    }

    private async fetchData(elem) : Promise<parseJson> {
        let toReturn : parseJson;
        try {
            // Utilisation de fetch avec async/await
            const response = await fetch('../assets/json/' + elem.id + '.json');
            const data = await response.json();

            // On assigne directement le JSON au type `parseJson`
            toReturn = data;
            return toReturn;

        } catch (error) {
            console.error("Erreur lors du chargement du JSON :", error);
        }
    }

    private textDiv(data : parseJson) : HTMLDivElement{
        let div = document.createElement("div");
        div.id = "textDiv";

        let titleDiv = document.createElement("div");
        let titleKeyP = document.createElement("p");
        titleKeyP.classList.add("key");
        titleKeyP.innerText = "Title: ";
        let titleValueP = document.createElement("p");
        titleKeyP.classList.add("value");
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

type parseJson = {
    title : string,
    type : string,
    date : string,
    description : string,
    link? : string,
}