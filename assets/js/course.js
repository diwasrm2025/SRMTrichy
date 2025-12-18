 const courseData = {
            ug: {
                curriculum: [
                    {
                        title: "Phase 1 Curriculum",
                        year: "First Year",
                        file: "phase1_curriculum.pdf",
                        icon: "fas fa-book"
                    },
                    {
                        title: "Phase 2 Curriculum",
                        year: "Second Year",
                        file: "phase2_curriculum.pdf",
                        icon: "fas fa-book"
                    },
                    {
                        title: "Phase 3 Part 1 Curriculum",
                        year: "Third Year",
                        file: "phase3_part1_curriculum.pdf",
                        icon: "fas fa-book"
                    },
                    {
                        title: "Phase 3 Part 2 Curriculum",
                        year: "Final Year Part 1",
                        file: "phase3_part2_curriculum.pdf",
                        icon: "fas fa-book"
                    }
                ],
                timetable: [
                    {
                        title: "Phase 1 Timetable",
                        semester: "Semester 1 & 2",
                        file: "phase1_timetable.pdf",
                        icon: "fas fa-clock"
                    },
                    {
                        title: "Phase 2 Timetable",
                        semester: "Semester 3 & 4",
                        file: "phase2_timetable.pdf",
                        icon: "fas fa-clock"
                    },
                    {
                        title: "Phase 3 Part 1 Timetable",
                        semester: "Semester 5, 6 & 7",
                        file: "phase3_part1_timetable.pdf",
                        icon: "fas fa-clock"
                    },
                    {
                        title: "Phase 3 Part 2 Timetable",
                        semester: "Semester 8 & 9",
                        file: "phase3_part2_timetable.pdf",
                        icon: "fas fa-clock"
                    }
                ],
                calendar: [
                    {
                        title: "Academic Calendar 2024-25",
                        year: "Current Year",
                        file: "academic_calendar_2024.pdf",
                        icon: "fas fa-calendar-alt"
                    },
                    {
                        title: "Examination Schedule",
                        year: "2024-25",
                        file: "exam_schedule_2024.pdf",
                        icon: "fas fa-calendar-check"
                    },
                    {
                        title: "Holiday List",
                        year: "2024-25",
                        file: "holiday_list_2024.pdf",
                        icon: "fas fa-calendar-day"
                    }
                ],
               phases: [
                    {
                        name: "Phase 1",
                        duration: "1 Year",
                        departments: [
                            { name: "Anatomy", path: "pre-clinical.html?dept=anatomy" },
                            { name: "Physiology", path: "pre-clinical.html?dept=physiology" },
                            { name: "Biochemistry", path: "pre-clinical.html?dept=biochemistry" },
                            { name: "Community Medicine", path: "para-clinical.html?dept=community_medicine" }
                        ]
                    },
                    {
                        name: "Phase 2",
                        duration: "1 Year",
                        departments: [
                            { name: "Pathology", path: "para-clinical.html?dept=pathology" },
                            { name: "Pharmacology", path: "para-clinical.html?dept=Pharmacology" },
                            { name: "Microbiology", path: "para-clinical.html?dept=Microbiology" },
                            { name: "Forensic Medicine & Toxicology", path: "para-clinical.html?dept=ForensicMedicine" },
                            { name: "Community Medicine", path: "para-clinical.html?dept=CommunityMedicine" }
                        ]
                    },
                    {
                        name: "Phase 3 Part 1",
                        duration: "1.5 Years",
                        departments: [
                            { name: "General Medicine", path: "boardspecialties.html?dept=general_medicine" },
                            { name: "General Surgery", path: "surgeryspecialties.html?dept=generalsurgery" },
                            { name: "Obstetrics & Gynaecology", path: "surgeryspecialties.html?dept=obstetrics_gynaecology" },
                            { name: "Paediatrics", path: "boardspecialties.html?dept=paediatrics" }
                        ]
                    },
                    {
                        name: "Phase 3 Part 2",
                        duration: "1 Year (Internship)",
                        departments: [
                            { name: "Community Medicine", path: "para-clinical.html?dept=CommunityMedicine" },
                            { name: "Orthopaedics", path: "surgeryspecialties.html?dept=orthopaedics" },
                            { name: "Ophthalmology", path: "surgeryspecialties.html?dept=ophthalmology" },
                            { name: "Dermatology, Venereology & Leprosy", path: "boardspecialties.html?dept=dermatology" },
                            { name: "Psychiatry", path: "boardspecialties.html?dept=psychiatry" },
                        ]
                    }
                ]

            },
            pg: {
                curriculum: [
                    {
                        title: "MD General Medicine",
                        duration: "3 Years",
                        file: "md_medicine_curriculum.pdf",
                        icon: "fas fa-file-medical"
                    },
                    {
                        title: "MS General Surgery",
                        duration: "3 Years",
                        file: "ms_surgery_curriculum.pdf",
                        icon: "fas fa-file-medical"
                    },
                    {
                        title: "MD Paediatrics",
                        duration: "3 Years",
                        file: "md_paediatrics_curriculum.pdf",
                        icon: "fas fa-file-medical"
                    },
                    {
                        title: "MD Anaesthesiology",
                        duration: "3 Years",
                        file: "md_anaesthesia_curriculum.pdf",
                        icon: "fas fa-file-medical"
                    }
                ],
                timetable: [
                    {
                        title: "PG Academic Timetable",
                        semester: "All Years",
                        file: "pg_timetable.pdf",
                        icon: "fas fa-clock"
                    },
                    {
                        title: "Clinical Posting Schedule",
                        semester: "Rotation Based",
                        file: "pg_clinical_schedule.pdf",
                        icon: "fas fa-clock"
                    }
                ],
                calendar: [
                    {
                        title: "PG Academic Calendar 2024-25",
                        year: "Current Year",
                        file: "pg_academic_calendar_2024.pdf",
                        icon: "fas fa-calendar-alt"
                    },
                    {
                        title: "PG Examination Schedule",
                        year: "2024-25",
                        file: "pg_exam_schedule_2024.pdf",
                        icon: "fas fa-calendar-check"
                    }
                ],
                departments: [
                    { name: "Pathology", path: "para-clinical.html?dept=pathology" },
                    { name: "Pharmacology", path: "para-clinical.html?dept=Pharmacology" },
                    { name: "Microbiology", path: "para-clinical.html?dept=Microbiology" },
                    { name: "Forensic Medicine & Toxicology", path: "para-clinical.html?dept=ForensicMedicine" },
                    { name: "Community Medicine", path: "para-clinical.html?dept=CommunityMedicine" },
                    { name: "Community Medicine", path: "para-clinical.html?dept=CommunityMedicine" },
                    { name: "Orthopaedics", path: "surgeryspecialties.html?dept=orthopaedics" },
                    { name: "Ophthalmology", path: "surgeryspecialties.html?dept=ophthalmology" },
                    { name: "Dermatology, Venereology & Leprosy", path: "boardspecialties.html?dept=dermatology" },
                    { name: "Psychiatry", path: "boardspecialties.html?dept=psychiatry" },
                    { name: "General Medicine", path: "boardspecialties.html?dept=general_medicine" },
                    { name: "General Surgery", path: "surgeryspecialties.html?dept=generalsurgery" },
                    { name: "Obstetrics & Gynaecology", path: "surgeryspecialties.html?dept=obstetrics_gynaecology" },
                    { name: "Paediatrics", path: "boardspecialties.html?dept=paediatrics" }
                ]
            }
        };

        // Render Document Cards
        function renderDocuments(data, containerId) {
            const container = document.getElementById(containerId);
            container.innerHTML = data.map(doc => `
                <div class="document-card">
                    <div class="document-icon">
                        <i class="${doc.icon}"></i>
                    </div>
                    <div class="document-title">${doc.title}</div>
                    <div class="document-meta">
                        ${doc.year || doc.semester || doc.duration}
                    </div>
                    <a href="#" class="document-link">
                        Download PDF <i class="fas fa-download"></i>
                    </a>
                </div>
            `).join('');
        }

        // Render UG Phases
        function renderUGPhases() {
            const container = document.getElementById('ug-phases-container');
            container.innerHTML = courseData.ug.phases.map((phase, index) => `
                <div class="phase-card">
                    <div class="phase-header" onclick="togglePhase(${index})">
                        <div class="phase-title">
                            <i class="fas fa-layer-group"></i>
                            ${phase.name}
                        </div>
                        <i class="fas fa-chevron-down phase-toggle" id="phase-toggle-${index}"></i>
                    </div>
                    <div class="phase-content" id="phase-content-${index}">
                        <div class="department-grid">
                            ${phase.departments.map(dept => `
                                <div class="department-item">
                                <a href="${dept.path}">
                                    <div class="department-name">
                                        ${dept.name}
                                    </div>
                                </a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Render PG Departments
        function renderPGDepartments() {
            const container = document.getElementById('pg-departments-grid');
            container.innerHTML = courseData.pg.departments.map(dept => `
                <div class="department-item" style="background-color: var(--color-background-light);" onclick="location.href='${dept.path}'">
                    <div class="department-name">
                        ${dept.name}
                    </div>
                </div>
            `).join('');
        }

        // Toggle Phase
        function togglePhase(index) {
            const content = document.getElementById(`phase-content-${index}`);
            const toggle = document.getElementById(`phase-toggle-${index}`);
            
            content.classList.toggle('active');
            toggle.classList.toggle('active');
        }

        // Main Tab Navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabName = this.dataset.tab;
                
                document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
                document.getElementById(`${tabName}-section`).classList.add('active');
            });
        });

        // Sub Navigation
        document.querySelectorAll('.sub-nav-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const panel = this.dataset.panel;
                const parentSection = this.closest('.content-section');
                
                parentSection.querySelectorAll('.sub-nav-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                parentSection.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
                document.getElementById(panel).classList.add('active');
            });
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Render UG Content
            renderDocuments(courseData.ug.curriculum, 'ug-curriculum-grid');
            renderDocuments(courseData.ug.timetable, 'ug-timetable-grid');
            renderDocuments(courseData.ug.calendar, 'ug-calendar-grid');
            renderUGPhases();

            // Render PG Content
            renderDocuments(courseData.pg.curriculum, 'pg-curriculum-grid');
            renderDocuments(courseData.pg.timetable, 'pg-timetable-grid');
            renderDocuments(courseData.pg.calendar, 'pg-calendar-grid');
            renderPGDepartments();
        });