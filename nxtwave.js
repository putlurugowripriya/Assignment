let nameId = document.getElementById("name");
let phoneId = document.getElementById("phone");
let nameError = document.getElementById("nameErrMsg");
let phoneError = document.getElementById("phoneErrMsg");
let myFormId = document.getElementById("myForm");
let formBtnId = document.getElementById("formBtn");
let trendingBtnEl = document.getElementById("trendingBtn");
let allBtnEl = document.getElementById("allBtn");
let techBtnEl = document.getElementById("techBtn");
let careerBtnEl = document.getElementById("careerBtn");
let cxoBtnEl = document.getElementById("cxoBtn");
let productivityBtnEl = document.getElementById("productivityBtn");
let gsocBtnEl = document.getElementById("gsocBtn");
let panelBtnEl = document.getElementById("panelBtn");
let trendingContainerEl = document.getElementById("trendingContainer");
let allContainerEl = document.getElementById("allContainer");
let techContainerEl = document.getElementById("techContainer");
let careerContainerEl = document.getElementById("careerContainer");
let cxoContainerEl = document.getElementById("cxoContainer");
let productivityContainerEl = document.getElementById("productivityContainer");
let gsocContainerEl = document.getElementById("gsocContainer");
let panelContainerEl = document.getElementById("panelContainer");

function trending() {
    trendingBtnEl.classList.add("active-state");
    trendingContainerEl.style.display = "flex";
    allContainerEl.style.display = "none";
    allBtnEl.classList.remove("active-state");
    techContainerEl.style.display = "none";
    techBtnEl.classList.remove("active-state");
    careerContainerEl.style.display = "none";
    careerBtnEl.classList.remove("active-state");
    cxoContainerEl.style.display = "none";
    cxoBtnEl.classList.remove("active-state");
    productivityContainerEl.style.display = "none";
    productivityBtnEl.classList.remove("active-state");
    gsocContainerEl.style.display = "none";
    gsocBtnEl.classList.remove("active-state");
    panelContainerEl.style.display = "none";
    panelBtnEl.classList.remove("active-state");
}

function allEl() {
    trendingBtnEl.classList.remove("active-state");
    trendingContainerEl.style.display = "none";
    allContainerEl.style.display = "flex";
    allBtnEl.classList.add("active-state");
    techContainerEl.style.display = "none";
    techBtnEl.classList.remove("active-state");
    careerContainerEl.style.display = "none";
    careerBtnEl.classList.remove("active-state");
    cxoContainerEl.style.display = "none";
    cxoBtnEl.classList.remove("active-state");
    productivityContainerEl.style.display = "none";
    productivityBtnEl.classList.remove("active-state");
    gsocContainerEl.style.display = "none";
    gsocBtnEl.classList.remove("active-state");
    panelContainerEl.style.display = "none";
    panelBtnEl.classList.remove("active-state");
}

function tech() {
    trendingBtnEl.classList.remove("active-state");
    trendingContainerEl.style.display = "none";
    allContainerEl.style.display = "none";
    allBtnEl.classList.remove("active-state");
    techContainerEl.style.display = "flex";
    techBtnEl.classList.add("active-state");
    careerContainerEl.style.display = "none";
    careerBtnEl.classList.remove("active-state");
    cxoContainerEl.style.display = "none";
    cxoBtnEl.classList.remove("active-state");
    productivityContainerEl.style.display = "none";
    productivityBtnEl.classList.remove("active-state");
    gsocContainerEl.style.display = "none";
    gsocBtnEl.classList.remove("active-state");
    panelContainerEl.style.display = "none";
    panelBtnEl.classList.remove("active-state");
}

function career() {
    trendingBtnEl.classList.remove("active-state");
    trendingContainerEl.style.display = "none";
    allContainerEl.style.display = "none";
    allBtnEl.classList.remove("active-state");
    techContainerEl.style.display = "none";
    techBtnEl.classList.remove("active-state");
    careerContainerEl.style.display = "flex";
    careerBtnEl.classList.add("active-state");
    cxoContainerEl.style.display = "none";
    cxoBtnEl.classList.remove("active-state");
    productivityContainerEl.style.display = "none";
    productivityBtnEl.classList.remove("active-state");
    gsocContainerEl.style.display = "none";
    gsocBtnEl.classList.remove("active-state");
    panelContainerEl.style.display = "none";
    panelBtnEl.classList.remove("active-state");
}

function cxo() {
    trendingBtnEl.classList.remove("active-state");
    trendingContainerEl.style.display = "none";
    allContainerEl.style.display = "none";
    allBtnEl.classList.remove("active-state");
    techContainerEl.style.display = "none";
    techBtnEl.classList.remove("active-state");
    careerContainerEl.style.display = "none";
    careerBtnEl.classList.remove("active-state");
    cxoContainerEl.style.display = "flex";
    cxoBtnEl.classList.add("active-state");
    productivityContainerEl.style.display = "none";
    productivityBtnEl.classList.remove("active-state");
    gsocContainerEl.style.display = "none";
    gsocBtnEl.classList.remove("active-state");
    panelContainerEl.style.display = "none";
    panelBtnEl.classList.remove("active-state");
}

function productivity() {
    trendingBtnEl.classList.remove("active-state");
    trendingContainerEl.style.display = "none";
    allContainerEl.style.display = "none";
    allBtnEl.classList.remove("active-state");
    techContainerEl.style.display = "none";
    techBtnEl.classList.remove("active-state");
    careerContainerEl.style.display = "none";
    careerBtnEl.classList.remove("active-state");
    cxoContainerEl.style.display = "none";
    cxoBtnEl.classList.remove("active-state");
    productivityContainerEl.style.display = "flex";
    productivityBtnEl.classList.add("active-state");
    gsocContainerEl.style.display = "none";
    gsocBtnEl.classList.remove("active-state");
    panelContainerEl.style.display = "none";
    panelBtnEl.classList.remove("active-state");
}

function gsoc() {
    trendingBtnEl.classList.remove("active-state");
    trendingContainerEl.style.display = "none";
    allContainerEl.style.display = "none";
    allBtnEl.classList.remove("active-state");
    techContainerEl.style.display = "none";
    techBtnEl.classList.remove("active-state");
    careerContainerEl.style.display = "none";
    careerBtnEl.classList.remove("active-state");
    cxoContainerEl.style.display = "none";
    cxoBtnEl.classList.remove("active-state");
    productivityContainerEl.style.display = "none";
    productivityBtnEl.classList.remove("active-state");
    gsocContainerEl.style.display = "flex";
    gsocBtnEl.classList.add("active-state");
    panelContainerEl.style.display = "none";
    panelBtnEl.classList.remove("active-state");
}

function panel() {
    trendingBtnEl.classList.remove("active-state");
    trendingContainerEl.style.display = "none";
    allContainerEl.style.display = "none";
    allBtnEl.classList.remove("active-state");
    techContainerEl.style.display = "none";
    techBtnEl.classList.remove("active-state");
    careerContainerEl.style.display = "none";
    careerBtnEl.classList.remove("active-state");
    cxoContainerEl.style.display = "none";
    cxoBtnEl.classList.remove("active-state");
    productivityContainerEl.style.display = "none";
    productivityBtnEl.classList.remove("active-state");
    gsocContainerEl.style.display = "none";
    gsocBtnEl.classList.remove("active-state");
    panelContainerEl.style.display = "flex";
    panelBtnEl.classList.add("active-state");
}

nameId.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameError.textContent = "Required*";
    } else {
        nameError.textContent = "";
    }
});
phoneId.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        phoneError.textContent = "Required*";
    } else {
        phoneError.textContent = "";
    }
});

function checkName() {
    if (nameId.value === "") {
        nameError.textContent = "Required*";
    } else {
        nameError.textContent = "";
    }
}

function checkPassword() {
    if (phoneId.value === "") {
        phoneError.textContent = "Required*";
    } else {
        phoneError.textContent = "";
    }
}
myFormId.addEventListener("submit", function(event) {
    event.preventDefault();
    checkName();
    checkPassword();
});


const mobileVideos = ["podcast-video1", "podcast-video2", "podcast-video3", "podcast-video4", "podcast-video5", "podcast-video6"];
let currentVideoMobile = 0;
let videosPlayedMobile = 0;
let timeoutIDMobile;
let resetTimerIDMobile;

function playNextVideoMobile() {
    let videoEl = document.getElementById(mobileVideos[currentVideoMobile]);
    currentVideoMobile = (currentVideoMobile + 1) % mobileVideos.length;
    videoEl.style.display = "block";
    videoEl.play();
    timeoutIDMobile = setTimeout(function() {
        videoEl.style.display = "none";
        videosPlayedMobile = videosPlayedMobile + 1;
        if (videosPlayedMobile === mobileVideos.length - 1) {
            videosPlayedMobile = 0;
            resetVideosMobile();
        } else {
            playNextVideoMobile();
        }
    }, 3000);
}

function resetVideosMobile() {
    clearTimeout(resetTimerIDMobile);
    clearTimeout(timeoutIDMobile);
    videosPlayedMobile = 0;
    for (let i = 0; i < mobileVideos.length; i++) {
        let video = document.getElementById(mobileVideos[i]);
        video.currentTime = 0;
        video.style.display = "none";
    }
    playNextVideoMobile();
}

playNextVideoMobile();