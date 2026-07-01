import { auth } from "./firebase.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
// Opens the Post Ad page
function welcomeMessage() {
    window.location.href = "post-ad.html";
}

// Search ads
// Search Ads
function searchAd() {

    let searchBox = document.getElementById("searchBox");

if (!searchBox) return;

let search = searchBox.value.toLowerCase();

    let ads = document.querySelectorAll(".ad-card");

    ads.forEach(function(ad) {

        let title = ad.querySelector(".ad-title").innerText.toLowerCase();

        if (title.includes(search)) {
            ad.style.display = "block";
        } else {
            ad.style.display = "none";
        }

    });

}

// Save or unsave an ad
function saveAd(button){

    let card = button.closest(".ad-card");

    let title = card.querySelector(".ad-title").textContent;
    let price = card.querySelector("p").textContent;
    let image = card.querySelector("img").src;

    let savedAds = JSON.parse(localStorage.getItem("savedAds")) || [];

    let alreadySaved = savedAds.some(function(ad){
        return ad.title === title;
    });

    if(alreadySaved){
        alert("This ad is already saved.");
        return;
    }

    savedAds.push({
        title,
        price,
        image
    });

    localStorage.setItem("savedAds", JSON.stringify(savedAds));

    button.textContent = "❤️ Saved!";
}

// Return to Home
function goHome() {
    window.location.href = "index.html";
}

// Login

// Register
function registerUser() {
    alert("Account created successfully! (Demo)");
    window.location.href = "login.html";
}

// Submit an ad
function submitAd() {

    let editIndex = localStorage.getItem("editIndex");

if(editIndex !== null){

    ads[editIndex] = ad;

    localStorage.removeItem("editIndex");
    localStorage.removeItem("editAd");

}else{

    ads.push(ad);

}

    let saveAd = function(imageData) {

    if (image) {

        let reader = new FileReader();

        reader.onload = function(e) {
            saveAd(e.target.result);
        };

        reader.readAsDataURL(image);

    } else {

        saveAd("https://via.placeholder.com/300x200");

    }

}

    let ad = {
        title: title,
        price: price,
        location: location,
        description: description
    };

localStorage.removeItem("myAd");

ads.push(ad);

localStorage.setItem("myAds", JSON.stringify(ads));

    alert("🎉 Ad saved successfully!");

    window.location.href = "index.html";
}

// Load saved ad
function loadUserAd() {

    let ads = JSON.parse(localStorage.getItem("myAds")) || [];

    let container = document.getElementById("userAds");

    if (!container) return;

    container.innerHTML = "";

    ads.forEach(function(ad, index){container.innerHTML += `
<div class="featured-ad ad-card">

    <img src="${ad.image}" alt="${ad.title}">

    <h3 class="ad-title">${ad.title}</h3>

    <p><strong>Price:</strong> $${ad.price}</p>

    <p><strong>Location:</strong> ${ad.location}</p>

    <p>${ad.description}</p>

    <button class="post-btn" onclick="editAd(${index})">
        ✏️ Edit
    </button>

    <button class="login-btn" onclick="deleteAd(${index})">
        🗑 Delete
    </button>

</div>
`;

    });

}

// Demo payment
function payNow() {
    alert("💳 Demo Payment Successful!\n\nYour money is safely held by AdNexus until you confirm delivery.");
}

// Run when page loads
window.addEventListener("load", loadUserAd);
// Dark Mode
function toggleTheme(){

    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("themeBtn");

if (!btn) return;

    if(document.body.classList.contains("dark-mode")){
        btn.innerHTML = "☀️ Light Mode";
    }else{
        btn.innerHTML = "🌙 Dark Mode";
    }

}
// Filter ads by category
// Filter by category
function filterCategory(category) {

    let searchBox = document.getElementById("searchBox");

if (!searchBox) return;

let search = searchBox.value.toLowerCase();

    let ads = document.querySelectorAll(".ad-card");

    ads.forEach(function(ad) {

        let title = ad.querySelector(".ad-title").textContent.toLowerCase();

        let adCategory = ad.dataset.category;

        if (
            adCategory === category &&
            title.includes(search)
        ) {

            ad.style.display = "block";

        } else {

            ad.style.display = "none";

        }

    });

}
// Show all ads
function showAllAds() {

    let searchBox = document.getElementById("searchBox");

if (!searchBox) return;

let search = searchBox.value.toLowerCase();

    let ads = document.querySelectorAll(".ad-card");

    ads.forEach(function(ad) {

        let title = ad.querySelector(".ad-title").innerText.toLowerCase();

        if (title.includes(search)) {

            ad.style.display = "block";

        } else {

            ad.style.display = "none";

        }

    });

}
function deleteAd(index){

    let ads = JSON.parse(localStorage.getItem("myAds")) || [];

    if(confirm("Delete this ad?")){

        ads.splice(index,1);

        localStorage.setItem("myAds", JSON.stringify(ads));

        loadUserAd();

    }

}
function editAd(index){

    let ads = JSON.parse(localStorage.getItem("myAds")) || [];

    let ad = ads[index];

    localStorage.setItem("editAd", JSON.stringify(ad));
    localStorage.setItem("editIndex", index);

    window.location.href = "post-ad.html";

}
function loadEditAd(){

    let editAd = JSON.parse(localStorage.getItem("editAd"));

    if(!editAd) return;

    if(document.getElementById("adTitle")){

        document.getElementById("adTitle").value = editAd.title;
        document.getElementById("adPrice").value = editAd.price;
        document.getElementById("adLocation").value = editAd.location;
        document.getElementById("adDescription").value = editAd.description;

    }

}

window.addEventListener("load", loadEditAd);
function loadDashboard(){

    let ads = JSON.parse(localStorage.getItem("myAds")) || [];

    let dashboard = document.getElementById("dashboardAds");

    if(!dashboard) return;

    document.getElementById("totalAds").textContent = ads.length;

    let saved = JSON.parse(localStorage.getItem("savedAds")) || [];

    document.getElementById("savedAds").textContent = saved.length;

    dashboard.innerHTML = "";

    ads.forEach(function(ad){

        dashboard.innerHTML += `
        <div class="featured-ad">

            <img src="${ad.image}" alt="${ad.title}">

            <h3>${ad.title}</h3>

            <p>$${ad.price}</p>

            <p>${ad.location}</p>

        </div>
        `;

    });

}

window.addEventListener("load", loadDashboard);
function loadSavedAds(){

    let container = document.getElementById("savedAdsContainer");

    if(!container) return;

    let savedAds = JSON.parse(localStorage.getItem("savedAds")) || [];

    container.innerHTML = "";

    if(savedAds.length === 0){

        container.innerHTML = "<h2>No saved ads yet.</h2>";

        return;
    }

    savedAds.forEach(function(ad,index){

        container.innerHTML += `
        <div class="featured-ad">

            <img src="${ad.image}" alt="${ad.title}">

            <h3>${ad.title}</h3>

            <p>${ad.price}</p>

            <button class="login-btn" onclick="removeSavedAd(${index})">
                🗑 Remove
            </button>

        </div>
        `;

    });

}
function removeSavedAd(index){

    let savedAds = JSON.parse(localStorage.getItem("savedAds")) || [];

    savedAds.splice(index,1);

    localStorage.setItem("savedAds",JSON.stringify(savedAds));

    loadSavedAds();

}
window.addEventListener("load", loadSavedAds);
function sendMessage(){

    let input = document.getElementById("message");

    if(!input) return;

    let text = input.value.trim();

    if(text==="") return;

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push(text);

    localStorage.setItem("messages",JSON.stringify(messages));

    input.value="";

    loadMessages();

}

function loadMessages(){

    let chat=document.getElementById("chatBox");

    if(!chat) return;

    let messages=JSON.parse(localStorage.getItem("messages")) || [];

    chat.innerHTML="";

    messages.forEach(function(msg){

        chat.innerHTML += `
        <div class="message">
            ${msg}
        </div>
        `;

    });

}

window.addEventListener("load",loadMessages);
function saveProfile(){

    let file=document.getElementById("profilePhoto").files[0];

    if(!file){

        alert("Please choose a photo.");

        return;

    }

    let reader=new FileReader();

    reader.onload=function(e){

        localStorage.setItem("profileImage",e.target.result);

        loadProfile();

        alert("Profile updated!");

    }

    reader.readAsDataURL(file);

}

function loadProfile(){

    let img=document.getElementById("profileImage");

    if(!img) return;

    let photo=localStorage.getItem("profileImage");

    if(photo){

        img.src=photo;

    }

}

window.addEventListener("load",loadProfile);