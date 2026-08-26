/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId, button) {

    let pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    document.getElementById(pageId)
        .classList.add("active");


    let buttons =
        document.querySelectorAll(".nav-btn");


    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    }
}


function showPageById(pageId) {

    let pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    document.getElementById(pageId)
        .classList.add("active");
}


/* =====================================================
   POPUP
===================================================== */

function openFeatureModal(title, content) {

    let modal =
        document.getElementById("featureModal");

    let contentBox =
        document.getElementById(
            "featureModalContent"
        );


    contentBox.innerHTML = `

        <h2>
            ${title}
        </h2>

        <div class="modal-content">
            ${content}
        </div>

    `;


    modal.style.display = "flex";
}


function closeFeatureModal() {

    document.getElementById(
        "featureModal"
    ).style.display = "none";
}


function showMessage(message) {

    openFeatureModal(
        "Information",
        `<p>${message}</p>`
    );
}


/* Click outside popup */

window.addEventListener(
    "click",
    function(event) {

        let modal =
            document.getElementById(
                "featureModal"
            );


        if (event.target === modal) {

            closeFeatureModal();

        }

    }
);


/* =====================================================
   STUDY HUB
===================================================== */

function openNotes() {

    openFeatureModal(
        "📓 Semester Notes",
        `
        <p>
            Select a subject:
        </p>

        <div class="modal-list">

            <button onclick="
                showMessage(
                    '📘 Data Structures notes are available.'
                )
            ">
                📘 Data Structures
            </button>


            <button onclick="
                showMessage(
                    '🌐 Web Development notes are available.'
                )
            ">
                🌐 Web Development
            </button>


            <button onclick="
                showMessage(
                    '🐍 Python notes are available.'
                )
            ">
                🐍 Python
            </button>


            <button onclick="
                showMessage(
                    '🤖 Artificial Intelligence notes are available.'
                )
            ">
                🤖 Artificial Intelligence
            </button>

        </div>
        `
    );
}


function openPYQ() {

    openFeatureModal(
        "📄 Previous Year Questions",
        `
        <p>
            Select a subject:
        </p>

        <div class="modal-list">

            <button onclick="
                showMessage(
                    'Data Structures PYQ selected.'
                )
            ">
                📘 Data Structures PYQ
            </button>


            <button onclick="
                showMessage(
                    'Web Technologies PYQ selected.'
                )
            ">
                🌐 Web Technologies PYQ
            </button>


            <button onclick="
                showMessage(
                    'Python PYQ selected.'
                )
            ">
                🐍 Python PYQ
            </button>


            <button onclick="
                showMessage(
                    'Mathematics PYQ selected.'
                )
            ">
                📐 Mathematics PYQ
            </button>

        </div>
        `
    );
}


function openPlaylists() {

    openFeatureModal(
        "🎥 Study Playlists",
        `
        <p>
            Useful learning resources:
        </p>

        <div class="modal-list">

            <a
                href="https://www.youtube.com/"
                target="_blank"
            >
                ▶️ YouTube
            </a>


            <a
                href="https://www.freecodecamp.org/"
                target="_blank"
            >
                💻 freeCodeCamp
            </a>


            <a
                href="https://www.geeksforgeeks.org/"
                target="_blank"
            >
                📚 GeeksforGeeks
            </a>

        </div>
        `
    );
}


function openCourses() {

    openFeatureModal(
        "🏆 Free Courses",
        `
        <p>
            Useful free learning platforms:
        </p>

        <div class="modal-list">

            <a
                href="https://www.coursera.org/"
                target="_blank"
            >
                🎓 Coursera
            </a>


            <a
                href="https://www.edx.org/"
                target="_blank"
            >
                🎓 edX
            </a>


            <a
                href="https://www.freecodecamp.org/"
                target="_blank"
            >
                💻 freeCodeCamp
            </a>

        </div>
        `
    );
}


/* =====================================================
   BUDGET
===================================================== */

function calculateBudget() {

    let income =
        Number(
            document.getElementById(
                "income"
            ).value
        );


    let rent =
        Number(
            document.getElementById(
                "rent"
            ).value
        );


    let food =
        Number(
            document.getElementById(
                "food"
            ).value
        );


    let travel =
        Number(
            document.getElementById(
                "travel"
            ).value
        );


    let misc =
        Number(
            document.getElementById(
                "misc"
            ).value
        );


    if (income <= 0) {

        showMessage(
            "Please enter a valid monthly income."
        );

        return;
    }


    let expenses =
        rent +
        food +
        travel +
        misc;


    let savings =
        income - expenses;


    let result =
        document.getElementById(
            "savingResult"
        );


    result.innerText =
        "₹" + savings;


    if (savings < 0) {

        result.style.color =
            "#f87171";

    } else {

        result.style.color =
            "#4ade80";
    }
}


/* =====================================================
   ATTENDANCE
===================================================== */

function calculateAttendance() {

    let total =
        Number(
            document.getElementById(
                "totalClasses"
            ).value
        );


    let attended =
        Number(
            document.getElementById(
                "attendedClasses"
            ).value
        );


    let result =
        document.getElementById(
            "attendanceResult"
        );


    let message =
        document.getElementById(
            "attendanceMessage"
        );


    if (
        total <= 0 ||
        attended < 0 ||
        attended > total
    ) {

        result.innerText =
            "Invalid";

        message.innerText =
            "Please enter valid values.";

        return;
    }


    let percentage =
        (attended / total) * 100;


    result.innerText =
        percentage.toFixed(2) + "%";


    if (percentage >= 75) {

        let canMiss =
            Math.floor(
                attended / 0.75 - total
            );


        message.innerText =
            "✅ You can miss about " +
            canMiss +
            " more class(es).";

    } else {

        let needed =
            Math.ceil(
                (0.75 * total - attended) /
                0.25
            );


        message.innerText =
            "⚠️ You need about " +
            needed +
            " more class(es) to reach 75%.";
    }
}


/* =====================================================
   CGPA
===================================================== */

function calculateCGPA() {

    let grades = [

        Number(
            document.getElementById(
                "grade1"
            ).value
        ),

        Number(
            document.getElementById(
                "grade2"
            ).value
        ),

        Number(
            document.getElementById(
                "grade3"
            ).value
        ),

        Number(
            document.getElementById(
                "grade4"
            ).value
        ),

        Number(
            document.getElementById(
                "grade5"
            ).value
        )

    ];


    for (
        let i = 0;
        i < grades.length;
        i++
    ) {

        if (
            isNaN(grades[i]) ||
            grades[i] < 0 ||
            grades[i] > 10
        ) {

            showMessage(
                "Enter grade points between 0 and 10."
            );

            return;
        }
    }


    let total = 0;


    grades.forEach(function(grade) {

        total += grade;

    });


    let cgpa =
        total / grades.length;


    document.getElementById(
        "cgpaResult"
    ).innerText =
        cgpa.toFixed(2);
}


/* =====================================================
   TODO LIST
===================================================== */

let tasks =
    JSON.parse(
        localStorage.getItem(
            "studentTasks"
        )
    ) || [];


function displayTasks() {

    let list =
        document.getElementById(
            "taskList"
        );


    list.innerHTML = "";


    tasks.forEach(
        function(task, index) {

            let li =
                document.createElement(
                    "li"
                );


            li.innerHTML = `

                <span>
                    ${task}
                </span>

                <button
                    class="delete"
                    onclick="deleteTask(${index})"
                >
                    Delete
                </button>

            `;


            list.appendChild(li);

        }
    );
}


function addTask() {

    let input =
        document.getElementById(
            "taskInput"
        );


    let task =
        input.value.trim();


    if (task === "") {

        showMessage(
            "Please enter a task."
        );

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


/* =====================================================
   POMODORO TIMER
===================================================== */

let time =
    25 * 60;


let timer = null;


/* Display timer */

function updateTimer() {

    let minutes =
        Math.floor(
            time / 60
        );


    let seconds =
        time % 60;


    document.getElementById(
        "timer"
    ).innerText =

        String(minutes).padStart(
            2,
            "0"
        )

        +

        ":"

        +

        String(seconds).padStart(
            2,
            "0"
        );
}


/* Increase by 1 minute */

function increaseTime() {

    if (timer !== null) {

        return;

    }


    time += 60;


    updateTimer();
}


/* Decrease by 1 minute */

function decreaseTime() {

    if (timer !== null) {

        return;

    }


    if (time > 60) {

        time -= 60;

    }


    updateTimer();
}


/* Start */

function startTimer() {

    if (timer !== null) {

        return;

    }


    timer =
        setInterval(
            function() {

                if (time > 0) {

                    time--;

                    updateTimer();

                } else {

                    clearInterval(timer);

                    timer = null;


                    showMessage(
                        "🎉 Pomodoro completed!"
                    );
                }

            },
            1000
        );
}


/* Pause */

function pauseTimer() {

    clearInterval(timer);

    timer = null;
}


/* Reset */

function resetTimer() {

    clearInterval(timer);

    timer = null;


    time =
        25 * 60;


    updateTimer();
}


updateTimer();


/* =====================================================
   BOOK LIBRARY
===================================================== */

function searchBooks() {

    let search =
        document.getElementById(
            "bookSearch"
        ).value.toLowerCase();


    let books =
        document.querySelectorAll(
            ".book-card"
        );


    books.forEach(function(book) {

        let title =
            book.querySelector("h3")
                .innerText
                .toLowerCase();


        if (
            title.includes(search)
        ) {

            book.style.display =
                "block";

        } else {

            book.style.display =
                "none";
        }

    });
}


function borrowBook(bookName) {

    openFeatureModal(
        "📖 Book Details",
        `
        <h3>
            ${bookName}
        </h3>

        <p>
            <b>Status:</b> Available
        </p>

        <p>
            This book is currently available
            in the student library.
        </p>

        <button
            onclick="reserveBook('${bookName}')"
        >
            Reserve Book
        </button>
        `
    );
}


function reserveBook(bookName) {

    openFeatureModal(
        "✅ Reservation",
        `
        <p>
            <b>${bookName}</b>
            has been reserved successfully.
        </p>
        `
    );
}


/* =====================================================
   EVENTS
===================================================== */

function registerEvent(
    eventName,
    button
) {

    if (
        button.innerText ===
        "Registered ✓"
    ) {

        showMessage(
            "You are already registered."
        );

        return;
    }


    button.innerText =
        "Registered ✓";


    button.style.background =
        "#166534";


    showMessage(
        "✅ You registered for " +
        eventName
    );
}


/* =====================================================
   TRANSPORT
===================================================== */

function showTransport(type) {

    if (type === "bus") {

        openFeatureModal(
            "🚌 College Bus",
            `
            <p>
                <b>Morning:</b> 7:40 AM
            </p>

            <p>
                <b>Evening:</b> 4:40 PM
            </p>

            <p>
                College bus service for students.
            </p>
            `
        );

        return;
    }


    if (type === "shuttle") {

        openFeatureModal(
            "🚐 Campus Shuttle",
            `
            <p>
                <b>Status:</b> Available
            </p>

            <p>
                <b>Frequency:</b> Every 30 minutes
            </p>

            <p>
                Available during college hours.
            </p>
            `
        );

        return;
    }


    if (type === "railway") {

        openFeatureModal(
            "🚆 Railway Station",
            `
            <p>
                Railway station information
                can be added here.
            </p>
            `
        );

        return;
    }


    if (type === "cab") {

        openFeatureModal(
            "🚕 Cab / Auto",
            `
            <p>
                Local cab and auto
                services are available.
            </p>
            `
        );
    }
}


/* =====================================================
   CAMPUS MAP
===================================================== */

function locationInfo(location) {

    let information = "";


    if (location === "Library") {

        information =
            "📚 Library\n\n" +
            "Located in the Academic Block.";

    }


    else if (
        location === "Academic Block"
    ) {

        information =
            "🏫 Academic Block\n\n" +
            "Contains classrooms and labs.";

    }


    else if (
        location === "Cafeteria"
    ) {

        information =
            "🍔 Cafeteria\n\n" +
            "Main student food area.";

    }


    else if (
        location === "Hostel"
    ) {

        information =
            "🏠 Hostel\n\n" +
            "Residential student area.";

    }


    else if (
        location === "Parking"
    ) {

        information =
            "🅿️ Parking\n\n" +
            "Student and staff parking area.";
    }


    document.getElementById(
        "locationText"
    ).innerText =
        information;
}


/* =====================================================
   LOST & FOUND
===================================================== */

function reportFound(item) {

    openFeatureModal(
        "✅ Item Reported",
        `
        <p>
            Thank you!
        </p>

        <p>
            You reported
            <b>${item}</b>
            as found.
        </p>
        `
    );
}


function contactOwner(item) {

    openFeatureModal(
        "📞 Contact Owner",
        `
        <p>
            Contact request for
            <b>${item}</b>
            has been created.
        </p>

        <p>
            Sample contact:
            student@example.com
        </p>
        `
    );
}


/* =====================================================
   EMERGENCY
===================================================== */

function callNumber(number) {

    let confirmation =
        confirm(
            "Call emergency number " +
            number +
            "?"
        );


    if (confirmation) {

        window.location.href =
            "tel:" + number;
    }
}


/* =====================================================
   CHATBOT
===================================================== */

function openChat() {

    document.getElementById(
        "chatbot"
    ).classList.add("show");
}


function closeChat() {

    document.getElementById(
        "chatbot"
    ).classList.remove("show");
}


function chatEnter(event) {

    if (
        event.key === "Enter"
    ) {

        sendMessage();

    }
}


function addMessage(
    text,
    className
) {

    let messages =
        document.getElementById(
            "chatMessages"
        );


    let div =
        document.createElement(
            "div"
        );


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
        document.getElementById(
            "chatInput"
        );


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


    else if (
        q.includes("library")
    ) {

        answer =
            "📚 The library is in the Academic Block.";

    }


    else if (
        q.includes("attendance")
    ) {

        answer =
            "📊 Open Attendance and enter total and attended classes.";

    }


    else if (
        q.includes("cgpa")
    ) {

        answer =
            "🎯 Open CGPA Calculator to calculate your CGPA.";

    }


    else if (
        q.includes("exam")
    ) {

        answer =
            "📖 Use Study Hub, PYQs and Pomodoro for exam preparation.";

    }


    else if (
        q.includes("book")
    ) {

        answer =
            "📖 Open Book Library to search books.";

    }


    else if (
        q.includes("transport") ||
        q.includes("bus")
    ) {

        answer =
            "🚌 Open Transport for bus and shuttle information.";

    }


    else if (
        q.includes("lost")
    ) {

        answer =
            "📢 Open Lost & Found to check items.";

    }


    else if (
        q.includes("budget")
    ) {

        answer =
            "💰 Open Budget to calculate monthly savings.";

    }


    else if (
        q.includes("thank")
    ) {

        answer =
            "You're welcome! 😊";

    }


    setTimeout(
        function() {

            addMessage(
                answer,
                "bot-message"
            );

        },
        300
    );
}


/* =====================================================
   LOGIN / SIGN UP
===================================================== */

function showSignup() {

    document.getElementById(
        "loginBox"
    ).classList.add("hidden");


    document.getElementById(
        "signupBox"
    ).classList.remove("hidden");
}


function showLogin() {

    document.getElementById(
        "signupBox"
    ).classList.add("hidden");


    document.getElementById(
        "loginBox"
    ).classList.remove("hidden");
}


function signupUser(event) {

    event.preventDefault();


    let name =
        document.getElementById(
            "signupName"
        ).value.trim();


    let email =
        document.getElementById(
            "signupEmail"
        ).value.trim();


    let password =
        document.getElementById(
            "signupPassword"
        ).value;


    let confirmPassword =
        document.getElementById(
            "signupConfirmPassword"
        ).value;


    let message =
        document.getElementById(
            "signupMessage"
        );


    if (
        password !== confirmPassword
    ) {

        message.innerText =
            "❌ Passwords do not match.";

        return;
    }


    if (
        password.length < 6
    ) {

        message.innerText =
            "❌ Password must be at least 6 characters.";

        return;
    }


    let savedUser =
        JSON.parse(
            localStorage.getItem(
                "studentUser"
            )
        );


    if (
        savedUser &&
        savedUser.email.toLowerCase()
            === email.toLowerCase()
    ) {

        message.innerText =
            "❌ Account already exists.";

        return;
    }


    let user = {

        name: name,

        email: email,

        password: password

    };


    localStorage.setItem(
        "studentUser",
        JSON.stringify(user)
    );


    message.innerText =
        "✅ Account created successfully!";


    document.querySelector(
        "#signupBox form"
    ).reset();


    setTimeout(
        function() {

            showLogin();

            document.getElementById(
                "loginEmail"
            ).value =
                email;

        },
        700
    );
}


/* LOGIN */

function loginUser(event) {

    event.preventDefault();


    let email =
        document.getElementById(
            "loginEmail"
        ).value.trim();


    let password =
        document.getElementById(
            "loginPassword"
        ).value;


    let message =
        document.getElementById(
            "loginMessage"
        );


    let savedUser =
        JSON.parse(
            localStorage.getItem(
                "studentUser"
            )
        );


    if (!savedUser) {

        message.innerText =
            "❌ No account found. Please Sign Up.";

        return;
    }


    if (
        email.toLowerCase() ===
            savedUser.email.toLowerCase()

        &&

        password ===
            savedUser.password
    ) {

        sessionStorage.setItem(
            "studentLoggedIn",
            "true"
        );


        document.getElementById(
            "authScreen"
        ).style.display =
            "none";


        updateStudentProfile(
            savedUser
        );

    } else {

        message.innerText =
            "❌ Invalid email or password.";
    }
}


/* PROFILE */

function updateStudentProfile(user) {

    let name =
        document.querySelector(
            ".profile b"
        );


    let circle =
        document.querySelector(
            ".profile-circle"
        );


    if (name) {

        name.innerText =
            user.name;
    }


    if (circle) {

        circle.innerText =
            user.name
                .charAt(0)
                .toUpperCase();
    }
}


/* CHECK LOGIN */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        let savedUser =
            JSON.parse(
                localStorage.getItem(
                    "studentUser"
                )
            );


        let loggedIn =
            sessionStorage.getItem(
                "studentLoggedIn"
            );


        let auth =
            document.getElementById(
                "authScreen"
            );


        if (
            savedUser &&
            loggedIn === "true"
        ) {

            auth.style.display =
                "none";


            updateStudentProfile(
                savedUser
            );

        } else {

            auth.style.display =
                "flex";


            showLogin();

        }


        displayReviews();

    }
);


/* LOGOUT */

function logoutUser() {

    sessionStorage.removeItem(
        "studentLoggedIn"
    );


    document.getElementById(
        "authScreen"
    ).style.display =
        "flex";


    showLogin();


    document.getElementById(
        "loginEmail"
    ).value = "";


    document.getElementById(
        "loginPassword"
    ).value = "";
}


/* =====================================================
   REVIEWS
===================================================== */

let selectedRating = 0;


/* SELECT STAR */

function setRating(rating) {

    selectedRating =
        rating;


    let stars =
        document.querySelectorAll(
            ".star-rating button"
        );


    stars.forEach(
        function(star, index) {

            if (
                index < rating
            ) {

                star.classList.add(
                    "active"
                );

            } else {

                star.classList.remove(
                    "active"
                );
            }

        }
    );
}


/* SUBMIT REVIEW */

function submitReview() {

    let name =
        document.getElementById(
            "reviewName"
        ).value.trim();


    let text =
        document.getElementById(
            "reviewText"
        ).value.trim();


    let message =
        document.getElementById(
            "reviewMessage"
        );


    if (
        selectedRating === 0
    ) {

        message.innerText =
            "⭐ Please select a rating.";

        return;
    }


    if (name === "") {

        message.innerText =
            "Please enter your name.";

        return;
    }


    if (text === "") {

        message.innerText =
            "Please write a review.";

        return;
    }


    let reviews =
        JSON.parse(
            localStorage.getItem(
                "studentReviews"
            )
        ) || [];


    reviews.push({

        name: name,

        rating: selectedRating,

        text: text

    });


    localStorage.setItem(
        "studentReviews",
        JSON.stringify(reviews)
    );


    message.innerText =
        "✅ Review submitted!";


    document.getElementById(
        "reviewName"
    ).value = "";


    document.getElementById(
        "reviewText"
    ).value = "";


    setRating(0);


    displayReviews();
}


/* DISPLAY REVIEWS */

function displayReviews() {

    let list =
        document.getElementById(
            "reviewsList"
        );


    let average =
        document.getElementById(
            "averageRating"
        );


    if (
        !list ||
        !average
    ) {

        return;
    }


    let reviews =
        JSON.parse(
            localStorage.getItem(
                "studentReviews"
            )
        ) || [];


    if (
        reviews.length === 0
    ) {

        list.innerHTML = `

            <div class="empty-reviews">

                No reviews yet.
                Be the first to review! 💜

            </div>

        `;


        average.innerText =
            "⭐ 0.0";


        return;
    }


    let total = 0;


    reviews.forEach(
        function(review) {

            total +=
                review.rating;

        }
    );


    let avg =
        total / reviews.length;


    average.innerText =
        "⭐ " +
        avg.toFixed(1);


    list.innerHTML = "";


    reviews.forEach(
        function(review) {

            let stars = "";


            for (
                let i = 1;
                i <= 5;
                i++
            ) {

                if (
                    i <= review.rating
                ) {

                    stars += "★";

                } else {

                    stars += "☆";

                }
            }


            let div =
                document.createElement(
                    "div"
                );


            div.className =
                "review-item";


            div.innerHTML = `

                <strong>
                    ${review.name}
                </strong>

                <span>
                    ${stars}
                </span>

                <p>
                    ${review.text}
                </p>

            `;


            list.appendChild(div);

        }
    );
}
