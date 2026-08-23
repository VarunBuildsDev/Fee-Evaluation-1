/* ==========================================
   PAGE NAVIGATION
========================================== */

function showPage(pageId, button) {

    // Hide all pages
    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });


    // Show selected page
    document.getElementById(pageId).classList.add("active");


    // Remove active from all sidebar buttons
    let buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });


    // Make clicked button active
    button.classList.add("active");
}


function showPageById(pageId) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}


/* ==========================================
   BUDGET CALCULATOR
========================================== */

function calculateBudget() {

    let income =
        Number(document.getElementById("income").value);

    let rent =
        Number(document.getElementById("rent").value);

    let food =
        Number(document.getElementById("food").value);

    let travel =
        Number(document.getElementById("travel").value);

    let misc =
        Number(document.getElementById("misc").value);


    let totalExpenses =
        rent + food + travel + misc;


    let savings =
        income - totalExpenses;


    document.getElementById("savingResult")
        .innerText =
        "₹" + savings;
}


/* ==========================================
   ATTENDANCE CALCULATOR
========================================== */

function calculateAttendance() {

    let total =
        Number(
            document.getElementById("totalClasses").value
        );

    let attended =
        Number(
            document.getElementById("attendedClasses").value
        );


    if (
        total <= 0 ||
        attended < 0 ||
        attended > total
    ) {

        document.getElementById("attendanceResult")
            .innerText = "Invalid";

        document.getElementById("attendanceMessage")
            .innerText = "Enter valid values.";

        return;
    }


    let percentage =
        (attended / total) * 100;


    document.getElementById("attendanceResult")
        .innerText =
        percentage.toFixed(2) + "%";


    if (percentage >= 75) {

        let canMiss =
            Math.floor(
                attended / 0.75 - total
            );


        document.getElementById("attendanceMessage")
            .innerText =
            "You can miss about " +
            canMiss +
            " more class(es).";

    } else {

        let required =
            Math.ceil(
                (0.75 * total - attended) / 0.25
            );


        document.getElementById("attendanceMessage")
            .innerText =
            "You need about " +
            required +
            " more class(es) to reach 75%.";
    }

}


/* ==========================================
   CGPA CALCULATOR
========================================== */

function calculateCGPA() {

    let grade1 =
        Number(document.getElementById("grade1").value);

    let grade2 =
        Number(document.getElementById("grade2").value);

    let grade3 =
        Number(document.getElementById("grade3").value);

    let grade4 =
        Number(document.getElementById("grade4").value);

    let grade5 =
        Number(document.getElementById("grade5").value);


    let total =
        grade1 +
        grade2 +
        grade3 +
        grade4 +
        grade5;


    let cgpa =
        total / 5;


    document.getElementById("cgpaResult")
        .innerText =
        cgpa.toFixed(2);
}


/* ==========================================
   TODO LIST
========================================== */

let tasks =
    JSON.parse(
        localStorage.getItem("studentTasks")
    ) || [];


function displayTasks() {

    let taskList =
        document.getElementById("taskList");


    taskList.innerHTML = "";


    tasks.forEach(function(task, index) {

        let li =
            document.createElement("li");


        li.innerHTML =

            task +

            `
                <button
                    class="delete"
                    onclick="deleteTask(${index})">
                    Delete
                </button>
            `;


        taskList.appendChild(li);

    });
}


function addTask() {

    let input =
        document.getElementById("taskInput");


    let task =
        input.value.trim();


    if (task === "") {

        alert("Please enter a task.");

        return;
    }


    tasks.push(task);


    localStorage.setItem(
        "studentTasks",
        JSON.stringify(tasks)
    );


    input.value = "";


    displayTasks();
}


function deleteTask(index) {

    tasks.splice(index, 1);


    localStorage.setItem(
        "studentTasks",
        JSON.stringify(tasks)
    );


    displayTasks();
}


displayTasks();


/* ==========================================
   POMODORO TIMER
========================================== */

let time =
    25 * 60;

let timer = null;


function updateTimer() {

    let minutes =
        Math.floor(time / 60);

    let seconds =
        time % 60;


    document.getElementById("timer")
        .innerText =

        String(minutes).padStart(2, "0")
        + ":" +
        String(seconds).padStart(2, "0");
}


function startTimer() {

    if (timer !== null) {
        return;
    }


    timer =
        setInterval(function() {

            if (time > 0) {

                time--;

                updateTimer();

            } else {

                clearInterval(timer);

                timer = null;

                alert(
                    "Pomodoro completed! 🎉"
                );
            }

        }, 1000);
}


function pauseTimer() {

    clearInterval(timer);

    timer = null;
}


function resetTimer() {

    clearInterval(timer);

    timer = null;

    time = 25 * 60;

    updateTimer();
}


updateTimer();


/* ==========================================
   BOOK LIBRARY
========================================== */

function searchBooks() {

    let input =
        document.getElementById("bookSearch");

    let search =
        input.value.toLowerCase();


    let books =
        document.querySelectorAll(".book-card");


    books.forEach(function(book) {

        let title =
            book.querySelector("h3")
                .innerText
                .toLowerCase();


        if (title.includes(search)) {

            book.style.display = "block";

        } else {

            book.style.display = "none";

        }

    });
}


function borrowBook(bookName) {

    alert(
        "You selected: " +
        bookName +
        " 📖"
    );
}


/* ==========================================
   EVENTS
========================================== */

function registerEvent(eventName) {

    alert(
        "You registered for " +
        eventName +
        " 🎉"
    );
}


/* ==========================================
   TRANSPORT
========================================== */

function showMessage(message) {

    alert(message);
}


/* ==========================================
   CAMPUS MAP
========================================== */

function locationInfo(location) {

    let text = "";


    if (location === "Library") {

        text =
            "📚 Library is located in the Academic Block.";

    }

    else if (location === "Academic Block") {

        text =
            "🏫 Academic Block contains classrooms and labs.";

    }

    else if (location === "Cafeteria") {

        text =
            "🍔 Cafeteria is the main student food area.";

    }

    else if (location === "Hostel") {

        text =
            "🏠 Hostel is located in the residential area.";

    }

    else if (location === "Parking") {

        text =
            "🅿️ Parking area is available for students.";

    }


    document.getElementById("locationText")
        .innerText = text;
}


/* ==========================================
   LOST & FOUND
========================================== */

function reportFound(item) {

    alert(
        "Thank you! You reported the " +
        item +
        " as found. ✅"
    );
}


function contactOwner(item) {

    alert(
        "Contact details for the " +
        item +
        " owner would be shown here."
    );
}


/* ==========================================
   EMERGENCY
========================================== */

function callNumber(number) {

    alert(
        "Emergency number: " +
        number
    );
}


/* ==========================================
   CHATBOT
========================================== */

function openChat() {

    document.getElementById("chatbot")
        .classList.add("show");
}


function closeChat() {

    document.getElementById("chatbot")
        .classList.remove("show");
}


function chatEnter(event) {

    if (event.key === "Enter") {

        sendMessage();
    }
}


function addMessage(text, className) {

    let messages =
        document.getElementById("chatMessages");


    let div =
        document.createElement("div");


    div.className =
        className;


    div.innerText =
        text;


    messages.appendChild(div);


    messages.scrollTop =
        messages.scrollHeight;
}


function sendMessage() {

    let input =
        document.getElementById("chatInput");


    let question =
        input.value.trim();


    if (question === "") {
        return;
    }


    addMessage(
        question,
        "user-message"
    );


    input.value = "";


    let q =
        question.toLowerCase();


    let answer =
        "Sorry, I don't understand that yet.";


    if (
        q.includes("hello") ||
        q.includes("hi")
    ) {

        answer =
            "Hello 👋 How can I help you?";

    }

    else if (q.includes("library")) {

        answer =
            "📚 The library is located in the Academic Block.";

    }

    else if (q.includes("attendance")) {

        answer =
            "📊 Open Attendance and enter your total and attended classes.";

    }

    else if (q.includes("cgpa")) {

        answer =
            "🎯 Open the CGPA Calculator and enter your grade points.";

    }

    else if (q.includes("exam")) {

        answer =
            "📖 Use the Study Hub, PYQs and Pomodoro Timer for exam preparation.";

    }

    else if (q.includes("book")) {

        answer =
            "📖 Open Book Library to search available study books.";

    }

    else if (q.includes("transport") || q.includes("bus")) {

        answer =
            "🚌 Open Transport to see college bus and shuttle information.";

    }

    else if (q.includes("lost")) {

        answer =
            "📢 Open Lost & Found to check reported items.";

    }

    else if (q.includes("budget")) {

        answer =
            "💰 Open Budget to calculate your monthly savings.";

    }

    else if (q.includes("thank")) {

        answer =
            "You're welcome! 😊";
    }


    setTimeout(function() {

        addMessage(
            answer,
            "bot-message"
        );

    }, 400);
}