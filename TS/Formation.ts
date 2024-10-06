class Formation{

    constructor(){
        if (screen.width <= 480){
            this.loadFile(true);
        }
        else{
            this.loadFile(false);
        }
    }

    private async loadFile(isMobile : boolean) : Promise<void>{
        let path = "../assets/" + (isMobile ? "MobilePath.html" : "Path.html");

        try {
            const response = await fetch(path);
            const data = await response.text();

            document.getElementById("svgPath").innerHTML = data;

        } catch (error) {
            console.error("Erreur lors du chargement du JSON :", error);
        }
    }
}