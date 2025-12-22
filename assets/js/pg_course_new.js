const departmentData = {

  /* ================= PHASE 2 ================= */
  pathology: {
    name: "Pathology",
    curriculum: "General pathology, systemic pathology and hematology.",
    timetable: "Microscopy labs and case-based discussions.",
    calendar: "Slide exams, internal assessments and university exams."
  },

  pharmacology: {
    name: "Pharmacology",
    curriculum: "Drug mechanisms, therapeutic uses and adverse effects.",
    timetable: "Problem-based learning and prescription writing.",
    calendar: "Continuous assessment and final theory exams."
  },

  microbiology: {
    name: "Microbiology",
    curriculum: "Bacteriology, virology, parasitology and immunology.",
    timetable: "Lab diagnostics and culture techniques.",
    calendar: "Practical exams and theory assessments."
  },

  forensic: {
    name: "Forensic Medicine & Toxicology",
    curriculum: "Medical jurisprudence, forensic science and toxicology.",
    timetable: "Postmortem demonstrations and lectures.",
    calendar: "Court visits, practical exams and theory assessments."
  },

  community_medicine2: {
    name: "Community Medicine",
    curriculum: "Applied epidemiology, biostatistics and public health.",
    timetable: "Classroom teaching with field exposure.",
    calendar: "Field visits, surveys and internal assessments."
  },

  /* ================= PHASE 3 PART 2 ================= */
  orthopaedics: {
    name: "Orthopaedics",
    curriculum: "Musculoskeletal disorders, trauma and orthopaedic surgery.",
    timetable: "OPD clinics, ward rounds and OT exposure.",
    calendar: "Clinical assessments and final exams."
  },

  ophthalmology: {
    name: "Ophthalmology",
    curriculum: "Eye diseases, refraction and ophthalmic surgeries.",
    timetable: "OPD clinics, skill labs and OT postings.",
    calendar: "Clinical exams and skill assessments."
  },

  dermatology: {
    name: "Dermatology, Venereology & Leprosy",
    curriculum: "Skin disorders, STDs and leprosy management.",
    timetable: "OPD-based teaching and case discussions.",
    calendar: "Clinical exams and continuous assessments."
  },

  psychiatry: {
    name: "Psychiatry",
    curriculum: "Mental health disorders and psychopharmacology.",
    timetable: "OPD clinics, ward rounds and seminars.",
    calendar: "Case presentations and final clinical exams."
  },

  /* ================= PHASE 3 ================= */
  general_medicine: {
    name: "General Medicine",
    curriculum: "Clinical diagnosis, internal medicine and patient care.",
    timetable: "Ward rounds, OPD postings and seminars.",
    calendar: "Clinical postings, exams and internship preparation."
  },

  general_surgery: {
    name: "General Surgery",
    curriculum: "Surgical principles, operative procedures and trauma care.",
    timetable: "OT exposure, ward duties and case presentations.",
    calendar: "Clinical exams and posting rotations."
  },

  obstetrics_gynaecology: {
    name: "Obstetrics & Gynaecology",
    curriculum: "Pregnancy, labour, gynecological disorders and surgery.",
    timetable: "Labour ward postings and OT exposure.",
    calendar: "Clinical exams and internship schedule."
  },

  paediatrics: {
    name: "Paediatrics",
    curriculum: "Child health, growth, development and neonatal care.",
    timetable: "NICU exposure, OPD and ward teaching.",
    calendar: "Case logs, assessments and exams."
  }

};;

/* ===== FUNCTIONS ===== */
function togglePhase(el) {
  const allPhases = document.querySelectorAll(".phase");

  allPhases.forEach(phase => {
    if (phase !== el.parentElement) {
      phase.classList.remove("active");
    }
  });

  el.parentElement.classList.toggle("active");
}

function loadDept(key) {
  const d = departmentData[key];
  document.getElementById("content").innerHTML = `
    <div class="card">
      <h1>${d.name}</h1>
      <p><strong>${d.phase}</strong></p>

      <div class="section1">
        <h3>Curriculum</h3>
        <div class="item"><i class="fas fa-book"></i>${d.curriculum}</div>
      </div>

      <div class="section1">
        <h3>Timetable</h3>
        <div class="item"><i class="fas fa-clock"></i>${d.timetable}</div>
      </div>

      <div class="section1">
        <h3>Academic Calendar</h3>
        <div class="item"><i class="fas fa-calendar-alt"></i>${d.calendar}</div>
      </div>
    </div>
  `;
}