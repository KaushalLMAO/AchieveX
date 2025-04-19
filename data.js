let course = document.getElementById("total-courses");
let totalVideos = document.getElementById("total-videos");
let teachers = document.getElementById("total-teacher");
let plustwoentrance = document.getElementById("plustwo-entrance");
let mainVideo = document.getElementById("video-course");

// Data
const teachersData = ["Kaushal Gautam", "Rahul Aryal", "Aaryan Khatiwada"];

let courseDetails = [
  {
    mid: "video1",
    id: 0,
    Mainname: "SEE",
    Subname: [
      "English",
      "Mathematics",
      "Science",
      "Social",
      "Nepali",
      "O Maths",
      "Accountancy",
      "Computer Science",
    ],
    picUrl: "entranceprep.webp",
    videoUrl: [],
  },
  {
    mid: "video2",
    id: 1,
    Mainname: "+2 Entrance Prepration",
    Subname: ["Physics", "Chemistry", "Mathematics", "Biology", "IQ"],
    picUrl: "entranceprep.webp",
    videoUrl: [],
  },
  {
    mid: "video3",
    id: 2,
    Mainname: "+2 Science",
    Subname: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "English",
      "Computer Science",
      "Nepali",
    ],
    picUrl: "scienceban.png",
    videoUrl: [
      "https://www.youtube.com/watch?v=VB-glB6iJ74&t=626s&ab_channel=Excellon",
    ],
  },
];

// DOM
if (teachers) teachers.textContent = `${teachersData.length}+`;
if (course) course.textContent = `${courseDetails.length}+`;

//course videos
let total = 0;
let sumvideo = 0;
if (mainVideo) {
  for (i = 0; i < courseDetails.length; i++) {
    let details = `
    <div class="mmain">
    <div class="cvideo" id="${courseDetails[i].mid}">
          <div class="pic">
            <img src="${courseDetails[i].picUrl}" alt="img" height="80px" width="80px"/>
            <h2>${courseDetails[i].Mainname}</h2>
          </div>
          <div class="pic">
            <h3 id="plustwo-entrance">${courseDetails[i].Subname.length} Topics || ${courseDetails[i].videoUrl.length} Videos</h3>
            <h1 class="arrow">→</h1>
          </div>
        </div>
       `;

    total += courseDetails[i].videoUrl.length;
    totalVideos.textContent = `${total}+`;
    mainVideo.innerHTML += details;
    sumvideo += courseDetails[i].videoUrl.length;
  }
}
if (totalVideos) totalVideos.textContent = `${sumvideo}+`;
