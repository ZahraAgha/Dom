//1)CreateElement

/*const header = document.getElementsByTagName("header")

const nav = document.createElement("nav")

const logo = document.createElement("h1")

const ul = document.createElement("ul")

const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")
const aLogo = document.createElement("a")
const a1 = document.createElement("a")
const a2 = document.createElement("a")
const a3 = document.createElement("a")
const a4 = document.createElement("a")
const a5 = document.createElement("a")

header[0].append(nav)

nav.append(logo)
logo.append(aLogo)
nav.append(ul)

ul.append(li1)
ul.append(li2)
ul.append(li3)
ul.append(li4)
ul.append(li5)

li1.append(a1)
li2.append(a2)
li3.append(a3)
li4.append(a4)
li5.append(a5)

aLogo.textContent = "Bootstrap"
a1.textContent = "Home"
a2.textContent = "About Us"
a3.textContent = "Gallery"
a4.textContent = "Contact Us"
a5.textContent = "Portfolio"

nav.style.backgroundColor = "gray"
nav.style.display = "flex"
nav.style.justifyContent = "space-between"
a1.style.textDecoration = "none"

ul.style.display = "flex"
ul.style.justifyContent = "space-between"
ul.style.gap = "13px"


ul.style.listStyle = "none"

*/

//---------------------------------------------

//2) InnerHtml

/*
const header = document.getElementsByTagName("header")[0];

header.innerHTML = `
    <nav style="display:flex; justify-content: space-between;align-items: center;">
        <h1>
        <a href="#" style="text-decoration:none; color:black">Bootstrap</a>
        </h1>
        <ul style="list-style:none; display:flex; justify-content: space-between; gap:20px;">
            <li><a href="#" style="text-decoration:none; color:black">Home</a></li>
            <li><a href="#" style="text-decoration:none; color:black">About Us</a></li>
            <li><a href="#" style="text-decoration:none; color:black">Gallery</a></li>
            <li><a href="#" style="text-decoration:none; color:black">Contact Us</a></li>
            <li><a href="#" style="text-decoration:none; color:black">Portfolio</a></li>
        </ul>
    </nav>
`;

*/
