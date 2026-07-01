import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

window.registerUser = async function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        await createUserWithEmailAndPassword(auth, email, password);

        alert("🎉 Account created successfully!");

        window.location.href = "dashboard.html";

    } catch (error) {

        alert(error.message);

    }

};

window.loginUser = async function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert("✅ Login successful!");

        window.location.href = "dashboard.html";

    } catch (error) {

        alert(error.message);

    }

};