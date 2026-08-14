import { whatsapp } from "../assets/personalInfo";
import { whatsapp_Icon } from "../assets/personalInfo";
import { whatsapp_enlace } from "../assets/personalInfo";
import { insertImg } from "./insertImage";


function whatsappDiv(parentDiv) {

    const div = document.createElement("div");
    div.className = "displayInRow";

    const link = document.createElement("a");
    link.setAttribute("href", whatsapp_enlace);
    link.setAttribute("target", "_blank");

    const whatsappImg = new Image();
    whatsappImg.src = whatsapp_Icon;
    insertImg(
        link,
        whatsappImg.src,
        "WhatsApp",
        "iconImg",
        "30px",
        "30px"
    );

    const text = document.createElement("p");
    text.textContent = whatsapp;
       
    parentDiv.appendChild(div);
    div.appendChild(link);
    div.appendChild(text);

};

export { whatsappDiv };