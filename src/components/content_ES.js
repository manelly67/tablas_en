import { arrayProjects } from "../assets/text-content";
import { description } from "./descriptionDiv";
import { aboutDiv } from "./aboutDiv";

const content_EN = (arg) => {
  const content = document.createElement("article");
  const title = document.createElement("h1");
  title.textContent = arrayProjects[0]['titleAbout'];

  const middle = document.createElement("div");
  middle.className = "hook";
  const textMiddle = document.createElement("p");
  textMiddle.textContent = arrayProjects[0]['middleContent'][0];
  const textMiddle2 = document.createElement("p");
  textMiddle2.textContent = arrayProjects[0]['middleContent'][1];

  const firstParr = document.createElement("div");
  firstParr.className = "firstParr";
  
  aboutDiv(firstParr);
    
  const subtitle1 = document.createElement("h2");
  subtitle1.className= "subtitle";
  subtitle1.textContent = arrayProjects[0]['subtitle1'];

  arg.appendChild(content);
  content.appendChild(title);
  content.appendChild(middle);
  content.appendChild(firstParr);
  middle.appendChild(textMiddle);
  middle.appendChild(textMiddle2);
 
  const divForParr = document.createElement("div");
  divForParr.className = "centered";
  
  content.appendChild(divForParr);
  divForParr.appendChild(subtitle1);
  description(divForParr);

  const divForHook = document.createElement("div");
  divForHook.className = 'hook';
  arrayProjects[0]['projectDescription5_array'].forEach((item)=>{
    const hook_text = document.createElement("p");
    hook_text.textContent = item;
    divForHook.appendChild(hook_text);
  });
 content.appendChild(divForHook);
  
 

}

export { content_EN};