let trusted = document.getElementById("total-trust");
let course = document.getElementById("total-courses");
let totalVideos = document.getElementById("total-videos");
let teachers = document.getElementById("total-teacher");
let plustwoentrance = document.getElementById("plustwo-entrance");
let mainVideo = document.getElementById("video-course");
// Data
const teachersData = ["Kaushal Gautam", "Rahul Aryal", "Aaryan Khatiwada"];

let trustedData = [];
//

let courseDetails = [
  {
    id: 1,
    Mainname: "Grade 10 SEE",
    Subname: [
      "Mathematics",
      "Science",
      "Social",
      "English",
      "Nepali",
      "Computer",
      "Optional Math",
      "Account",
    ],
    picUrl: "entranceprep.webp",
    videoUrl: [],
  },
  {
    id: 2,
    Mainname: "+2 Entrance Prepration",
    Subname: ["Physics", "Chemistry", "Mathematics", "Biology", "IQ"],
    picUrl: "entranceprep.webp",
    videoUrl: [],
  },

  {
    id: 3,
    Mainname: "Grade 11 (Science)",
    Subname: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Computer",
      "English",
      "Nepali",
    ],
    picUrl: "science11.png",
    videoUrl: [],
  },
  {
    id: 4,
    Mainname: "Grade 11 (Management + CS)",
    Subname: [
      "Account",
      "Business Studies",
      "Economics",
      "Computer",
      "English",
      "Nepali",
    ],
    picUrl: "entranceprep.webp",
    videoUrl: [],
  },
  {
    id: 5,
    Mainname: "Grade 12 (Science)",
    Subname: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Computer",
      "English",
      "Nepali",
    ],
    picUrl: "entranceprep.webp",
    videoUrl: [],
  },

  {
    id: 5,
    Mainname: "Grade 12 (Management + CS)",
    Subname: [
      "Account",
      "Business Studies",
      "Economics",
      "Computer",
      "English",
      "Nepali",
    ],
    picUrl: "entranceprep.webp",
    videoUrl: [],
  },
];

// DOM
if (teachers) teachers.textContent = `${teachersData.length}+`;
if (course) course.textContent = `${courseDetails.length}+`;
if (trusted) trusted.textContent = `${trustedData.length}+`;

//course videos
let total = 0;

if (mainVideo) {
  for (i = 0; i < courseDetails.length; i++) {
    let details = `<div class="video">
          <div class="pic">
            <img src="${courseDetails[i].picUrl}" alt="img" height="80px" />
            <h2>${courseDetails[i].Mainname}</h2>
          </div>
          <div class="pic">
            <h3 id="plustwo-entrance">${courseDetails[i].Subname.length} Topics || ${courseDetails[i].videoUrl.length} Videos</h3>
            <h1>→</h1>
          </div>
        </div>`;
    total += courseDetails[i].videoUrl.length;
    totalVideos.textContent = `${total}+`;
    mainVideo.innerHTML += details;
  }
}
