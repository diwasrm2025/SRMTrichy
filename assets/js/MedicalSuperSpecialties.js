
        // Department data with comprehensive information
        const depts = [
            {
                id: "Cardiology", name: "Cardiology", icon: `<i class="material-symbols-outlined">ecg_heart</i>`, color: "#3558c9ff", colorDark: "#07268dff",
                desc: "Comprehensive internal medicine care for all age groups.",
                vision:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                mission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["OPD rooms", "Inpatient wards", "ICU", "Procedure room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services: ["General Consultation", "Diabetes Care", "Hypertension", "Infectious Diseases", "Respiratory Medicine", "Gastroenterology", "Cardiology", "Nephrology"],
                pubStats: [{label: "Publications", value: "30+"}],
                pubHighlights: ["Diabetes management"],
                pubYearwise: [{year: "2023", title: "Diabetes protocols", journal: "Medicine Today", type: "Research"}],
                research: ["Chronic disease management"],
                events: ["World Diabetes Day"],
                achievements: ["Best Medicine Dept"],
                gallery: [{name: "OPD", icon: "fa-clinic-medical", event: "OPD", date: "Jan 2024"}]
            },
            {
                id: "Neurology", name: "Neurology", icon: `<i class="fas fa-brain"></i>`, color: "#27ae60", colorDark: "#229954",
                desc: "Comprehensive internal medicine care for all age groups.",
                vision:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                mission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["OPD rooms", "Inpatient wards", "ICU", "Procedure room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services: ["General Consultation", "Diabetes Care", "Hypertension", "Infectious Diseases", "Respiratory Medicine", "Gastroenterology", "Cardiology", "Nephrology"],
                pubStats: [{label: "Publications", value: "30+"}],
                pubHighlights: ["Diabetes management"],
                pubYearwise: [{year: "2023", title: "Diabetes protocols", journal: "Medicine Today", type: "Research"}],
                research: ["Chronic disease management"],
                events: ["World Diabetes Day"],
                achievements: ["Best Medicine Dept"],
                gallery: [{name: "OPD", icon: "fa-clinic-medical", event: "OPD", date: "Jan 2024"}]
            }
            ,
            {
                id: "Nephrology", name: "Nephrology", icon: `<i class="material-symbols-outlined">nephrology</i>`, color: "#ff9800", colorDark: "#f57c00",
                desc: "Comprehensive child healthcare with NICU and PICU facilities.",
                vision:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                mission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["OPD rooms", "Inpatient wards", "ICU", "Procedure room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services: ["General Pediatrics", "Neonatology", "PICU", "Immunization", "Growth Monitoring"],
                pubStats: [{label: "Publications", value: "24+"}],
                pubHighlights: ["Neonatal care"],
                pubYearwise: [{year: "2023", title: "Neonatal protocols", journal: "Pediatrics", type: "Research"}],
                research: ["Neonatal outcomes"],
                events: ["Children's Day"],
                achievements: ["Best NICU"],
                gallery: [{name: "NICU", icon: "fa-baby", event: "NICU Setup", date: "Jan 2024"}]
            },
            {
                id: "Oncology", name: "Oncology", icon: `<i class="material-symbols-outlined">oncology</i>`, color: "#e74c3c", colorDark: "#c0392b",
                desc: "Expert care for skin, hair, and nail conditions with advanced cosmetic dermatology services.",
                vision:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                mission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["OPD rooms", "Inpatient wards", "ICU", "Procedure room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services: ["General Dermatology", "Cosmetic Dermatology", "Laser Treatments", "Hair Restoration", "Acne Treatment", "Psoriasis Care", "Vitiligo Treatment", "Chemical Peels"],
                pubStats: [{label: "Publications", value: "28+"}, {label: "International", value: "12+"}],
                pubHighlights: ["Advances in psoriasis treatment", "Laser therapy in acne scars", "Novel vitiligo treatments"],
                pubYearwise: [
                    {year: "2024", title: "Biologic therapy in psoriasis", journal: "Dermatology International", type: "Research"},
                    {year: "2023", title: "Fractional CO2 laser in acne scars", journal: "Aesthetic Dermatology", type: "Clinical Study"}
                ],
                research: ["Novel vitiligo treatments", "Laser therapy advances", "Immunotherapy in skin diseases"],
                events: ["Skin Cancer Screening Camp", "World Psoriasis Day"],
                achievements: ["Excellence in Cosmetic Dermatology"],
                gallery: [
                    {name: "Consultation Room", icon: "fa-stethoscope", event: "Derma OPD", date: "Jan 20, 2024"},
                    {name: "Laser Unit", icon: "fa-bolt", event: "Laser Therapy Center", date: "Feb 14, 2024"}
                ]
            },
            {
                id: "Gastroenterology", name: "Gastroenterology", icon: `<i class="material-symbols-outlined">gastroenterology</i>`, color: "#673ab7", colorDark: "#512da8",
                desc: "Comprehensive mental health services with counseling and therapy.",
                vision:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                mission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["OPD rooms", "Inpatient wards", "ICU", "Procedure room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services: ["General Psychiatry", "Depression Treatment", "Anxiety Disorders", "Addiction Treatment", "Counseling Services", "Child Psychiatry"],
                pubStats: [{label: "Publications", value: "20+"}],
                pubHighlights: ["Depression management"],
                pubYearwise: [{year: "2023", title: "Mental health interventions", journal: "Psychiatry Review", type: "Research"}],
                research: ["Mental health awareness", "Addiction treatment"],
                events: ["World Mental Health Day"],
                achievements: ["Excellence in Mental Health"],
                gallery: [{name: "Consultation Room", icon: "fa-couch", event: "Psychiatry Dept", date: "Oct 2024"}]
            }
        ];

       