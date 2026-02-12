/* ================= NAVBAR ================= */
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

/* ================= QUALIFICATION ================= */
function toggleQualification(btn) {
  const desc = document.getElementById("qualificationDesc");

  if (desc.style.display === "block") {
    desc.style.display = "none";
    btn.textContent = "View more";
  } else {
    desc.style.display = "block";
    btn.textContent = "View less";
  }
}

/* ================= SKILLS DATA ================= */
const skillData = {
  python: {
    title: "Python",
    desc: "Used Python for data analysis, academic projects, scripting, and problem-solving. Experience with Pandas and NumPy.",
    cert: "assets/certificates/python.pdf"
  },
  sql: {
    title: "SQL",
    desc: "Hands-on experience with SQL queries, joins, subqueries, and dashboards through projects.",
    cert: "assets/certificates/sql.pdf"
  },
  aiml: {
    title: "AI & ML Fundamentals",
    desc: "Strong foundation in machine learning concepts, supervised learning, and basic model building.",
    cert: "assets/certificates/aiml.pdf"
  },
  cloud: {
    title: "Cloud Fundamentals",
    desc: "Basic understanding of cloud computing concepts and services using AWS and IBM Cloud.",
    cert: ""
  }
};

let activeSkill = null;

function showSkill(skill) {
  const panel = document.getElementById("skillDetail");
  const certBtn = document.getElementById("skillCert");

  // If same skill clicked again → close panel
  if (activeSkill === skill) {
    panel.style.display = "none";
    activeSkill = null;
    return;
  }

  // Otherwise show/update panel
  const data = skillData[skill];

  document.getElementById("skillTitle").textContent = data.title;
  document.getElementById("skillDesc").textContent = data.desc;

  if (data.cert) {
    certBtn.href = data.cert;
    certBtn.style.display = "inline-block";
  } else {
    certBtn.style.display = "none";
  }

  panel.style.display = "block";
  activeSkill = skill;
}

/* ================= PROJECT CARD REVEAL ================= */
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
});

function revealProjectCards() {
  projectCards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight * 0.85) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "0.6s ease";
    }
  });
}

/* ================= SECTION REVEAL ================= */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });

  revealProjectCards();
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load

/* ================= READ MORE ================= */
function toggleReadMore(el) {
  const desc = el.previousElementSibling;

  if (desc.classList.contains("expanded")) {
    desc.classList.remove("expanded");
    el.textContent = "read more...";
  } else {
    desc.classList.add("expanded");
    el.textContent = "read less";
  }
}

/* ===== SECTION FOCUS ON NAV CLICK ===== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    setTimeout(() => {
      targetSection.classList.add("focused");

      setTimeout(() => {
        targetSection.classList.remove("focused");
      }, 1600);
    }, 500); // wait until scroll finishes
  });
});
