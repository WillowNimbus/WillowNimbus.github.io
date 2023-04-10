import { icon, id, make } from "./ambrosio_script.js"

make("div").from("background").injectTo("body").content("").create()
make("div").from("nav_bar").injectTo("body").content("").create()
make("h1").from("brandName").injectTo("#nav_bar").content("Willow").create()

make("ul").from("nav_menus").injectTo("#nav_bar").content("").create()

let menus = ["Overview"]//,"About", "Contact"]
let menucons = ["smart_display", "help","alternate_email"]

for(let i = 0; i < menus.length; i++){
    make("li").from("nav_list" + menus[i]).injectTo("#nav_menus").content(menus[i]).create()
    icon(menucons[i]).id("").to("nav_list" + menus[i])
    id("nav_list" + menus[i]).AddClass("nav_list")
}

let ready = false;

if(ready == true){

}
else{
    make("h1").from("none").injectTo("body").content("No Content Yet!").create()
}