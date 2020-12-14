let date = new Date();
$("footer #copyright").html(`&copy; ${date.getFullYear()} Darren Thompson`);

$("nav #menu-btn").click(function() {
    $("#close-btn").css("display", "inline-block");
    $("#menu-btn").css("display", "none");
    $("#sidebar").css({ "left": "0px" });
});

$("nav #close-btn").click(function(event) {
    $("#menu-btn").css("display", "inline-block");
    $("#close-btn").css("display", "none");
    $("#sidebar").css("left", "-100vw");
});

$(".nav-link").click(function(event) {
    $(".nav-link").removeClass("selected");
    $(this).addClass("selected");
    if ($("nav #close-btn").is(":visible")) {
        $("nav #close-btn").click();
    }
});

$(".home-link").click(function(event) {
    event.preventDefault();
    $(document).scrollTop(0);
});

$(".about-link").click(function(event) {
    event.preventDefault();
    let $val = $("#about").offset().top;
    let $offset = $("header").outerHeight(true);
    $(document).scrollTop($val - 10 - $offset);
});

$(".projects-link").click(function(event) {
    event.preventDefault();
    let $val = $("#projects").offset().top;
    let $offset = $("header").outerHeight(true);
    $(document).scrollTop($val - $offset);
});

$(".contact-link").click(function(event) {
    event.preventDefault();
    let $val = $("#contact-container").offset().top;
    let $offset = $("header").outerHeight(true);
    $(document).scrollTop($val - $offset);
});

let $computedHeight = $("header").outerHeight(true);
let $combined = $computedHeight + "px";
$("#sidebar").height(`calc(100vh - ${$combined})`).css("top", `${$combined}`);
$("#side-nav-list").css("top", `calc(calc(50% - ${$combined}))`);
$("#landing").height(`calc(100vh - ${$combined})`);
$("#container").css("margin-top", `${$combined}`);
$("#contact-container").css("margin-top", `${$combined}`);

// Info for work experience
let experienceMap = new Map();
experienceMap.set('STEP Intern', {
    company: "Google",
    responsibilities: [
        "Created a full stack web application that captures snapshots of Google Maps over time and maintained the data storage implementation using Google Cloud Storage and Google Drive.",
        "Created a design doc for the project and worked with various tools and APIs such as Google Maps API, OAuth 2.0, and Java servlets.",
        "This application is being used by the Core Maps team of 50+ designers and engineers to efficiently view the differences between major and minor releases of the map over time.",
    ],
    duration: "May 2020 - August 2020"
});

experienceMap.set('Computer Science Tutor/Lab Assistant', {
    company: "Kennesaw State University",
    responsibilities: [
        "Assists students with troubleshooting computer programs and hardware issues.",
        "Tutoring students in the following classes: Web Development, Programming 1 & 2, Data Structures, Computer Organization & Architecture, and Intro to Database Systems."
    ],
    duration: "August 2019 - present"
});

experienceMap.forEach(function(values, title) {
    let company = values.company;
    let responsibilities = values.responsibilities;
    let duration = values.duration;

    let listItem = $(`<li>${title} - <span class="company-name">${company}</span>, <span class="experience-duration">${duration}</span></li>`);
    let responsibilitiesList = $('<ul class="sub-info-list fa-ul"></ul>');
    for (const task of responsibilities) {
        responsibilitiesList.append(`<li>${task}</li>`);
    }
    $("#exp-list").append(listItem).append(responsibilitiesList);
});


// Info for projects
let projectsMap = new Map();

projectsMap.set('Elevator Simulator', {
    descriptions: [
        "This project is a web application created with React that simulates a single-cart elevator.",
        "The elevator calls are handled using two priority queues: one for up calls and one for down calls."
    ],
    link: "https://github.com/thompsond/Elevator-Simulator"
});

projectsMap.set('AVMisc', {
    descriptions: [
        "This project is written in Java and uses several libraries to provide the user access to various items on the system such as files, microphone, speaker, webcams, clipboard, etc.",
        "The program can take pictures and videos from the webcam, take screenshots, log keystrokes, upload and download ﬁles, playback and record audio ﬁles, and stream audio from the device to another computer."
    ],
    link: "https://github.com/thompsond/AVMisc"
});

projectsMap.set('WordBrain Solution Finder', {
    descriptions: [
        "A project written in C++ that uses backtracking and ﬁle I/O to present solutions for a puzzle in the popular mobile game WordBrain."
    ],
    link: "https://github.com/thompsond/WordBrain-Solution-Finder"
});

projectsMap.set('Hotel Project', {
    descriptions: [
        "A project written in Java that uses a GUI and a MySQL database to simulate a hotel reservation system."
    ],
    link: "https://github.com/thompsond/hotel-project-java"
});

projectsMap.forEach(function(projectInfo, title) {
    let descriptions = projectInfo.descriptions;
    let link = projectInfo.link;
    let listItem = $(`<li><a href="${link}"><span class="project-title">${title}</span></a></li>`);
    let descriptionsList = $('<ul class="sub-info-list fa-ul"></ul>');
    for (const description of descriptions) {
        descriptionsList.append(`<li>${description}</li>`);
    }
    $("#projects-list").append(listItem).append(descriptionsList);
});

// Add the necessary icons to the lists
$("ul.info-list > li").not("#projects-list > li").prepend('<span class="fa-li"><i class="fas fa-caret-right"></i></span>');
$("#projects-list > li a").prepend('<span class="fa-li"><i class="fab fa-github"></i></span>');
$("ul.sub-info-list li").prepend('<span class="fa-li"><i class="fas fa-minus"></i></span>');