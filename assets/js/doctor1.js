let doctorsData = [];
let filteredDoctors = [];
let currentPage = 1;
const doctorsPerPage = 6;

// ✅ Excel file path
const filePath = "./assets/excel/Staff_Doctor_Details(Responses).xlsx";

// ✅ Load everything when DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  await loadDoctorsFromExcel();
  clearAllFilters();
});

// ✅ Load & Convert Excel Data
async function loadDoctorsFromExcel() {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error("Cannot fetch " + filePath);

    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = XLSX.utils.sheet_to_json(worksheet);

    // Convert Google Drive link to direct-view image
    function convertDriveLink(url) {
      if (!url) return "";
      const matchFile = url.match(/\/d\/([^/]+)/);
      if (matchFile) return `https://drive.google.com/uc?export=view&id=${matchFile[1]}`;
      const matchOpen = url.match(/id=([^&]+)/);
      if (matchOpen) return `https://drive.google.com/uc?export=view&id=${matchOpen[1]}`;
      return url;
    }

    // Map Excel rows → JS objects
    doctorsData = json.map((row, i) => {
        // Normalize all keys in the row to lowercase for consistent access
        const normalized = {};
        for (const key in row) {
            normalized[key.toLowerCase().trim()] = row[key];
        }

        return {
            id: i + 1,
            name: normalized["name"] || "Unknown",
            specialty: normalized["specialization/department"] || "General",
            gender: (normalized["gender"] || "other").toLowerCase(),
            experience: parseInt(row["Years of Experience"] || 0),
            degree: normalized["degree"] || "",
            languages: (normalized["languages known"] || "")
            .split(",")
            .map((l) => l.trim())
            .filter((l) => l),
            location: normalized["location"] || "",
            videos: parseInt(normalized["videos"] || 0),
            designation: normalized["designation"] || "",
            consultationFees: parseInt(normalized["consultationfees"] || 0),
            nextAvailable: normalized["nextavailable"] || "",
            rating: parseFloat(normalized["rating"] || 0),
            shift:row['Shift Type'],
            ...row, // keep original fields too, in case needed
        };
        });

    filteredDoctors = [...doctorsData];
    init();
    // console.log("✅ Doctors loaded from Excel:", doctorsData);
  } catch (err) {
    console.error("❌ Failed to load data:", err);
  }
}
function init() {
            populateFilters();
            displayDoctors(filteredDoctors);
            setupEventListeners();
        }

        // Populate filter options
        function populateFilters() {
            // Specialities
            const specialties = [...new Set(doctorsData.map(d => d.specialty))];
            const specialitiesFilter = document.getElementById('specialitiesFilter');
            specialties.forEach((specialty, index) => {
                const count = doctorsData.filter(d => d.specialty === specialty).length;
                specialitiesFilter.innerHTML += `
                    <div class="filter-option">
                        <input type="checkbox" id="spec${index}" value="${specialty}" onchange="applyFilters()">
                        <label for="spec${index}">
                            <span>${specialty}</span>
                            <span class="filter-count">${count}</span>
                        </label>
                    </div>
                `;
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            document.getElementById('searchInput-doc').addEventListener('input', applyFilters);
            document.querySelectorAll('input[name="gender"]').forEach(radio => {
                radio.addEventListener('change', applyFilters);
            });
            document.querySelectorAll('#expFilter input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', applyFilters);
            });

        }

        // Apply all filters
        function applyFilters() {
            const searchTerm = document.getElementById('searchInput-doc').value.toLowerCase();
            const selectedGender = document.querySelector('input[name="gender"]:checked').value;
            
            // Get selected specialties
            const selectedSpecialties = Array.from(document.querySelectorAll('#specialitiesFilter input:checked'))
                .map(cb => cb.value);
            
            
           const selectedExperience = Array.from(
                document.querySelectorAll('#expFilter input:checked')
            ).map(cb => parseInt(cb.value));

            // console.log(selectedSpecialties)
            filteredDoctors = doctorsData.filter(doctor => {
                // Search filter
                const matchesSearch = doctor.name.toLowerCase().includes(searchTerm) ||
                                    doctor.specialty.toLowerCase().includes(searchTerm) ||
                                    doctor.location.toLowerCase().includes(searchTerm);
                
                // Gender filter
                const matchesGender = selectedGender === 'all' || doctor.gender === selectedGender;
                
                // Specialty filter
                const matchesSpecialty = selectedSpecialties.length === 0 || 
                                       selectedSpecialties.includes(doctor.specialty);
                
                
                // Experience filter
                const matchesExperience =  selectedExperience.length === 0 ||  selectedExperience.some(exp => parseInt(doctor.experience) >= exp);

                

                return matchesSearch && matchesGender && matchesSpecialty && matchesExperience;
                       
            });
             filteredDoctors.sort((a, b) => b.experience - a.experience);
            currentPage = 1; // Reset to first page
            displayDoctors(filteredDoctors);
        }

        // Search doctors
        function searchDoctors() {
            applyFilters();
        }

        // Sort doctors
        function sortDoctors() {
            const sortBy = document.getElementById('sortSelect').value;

             filteredDoctors.sort((a, b) => b.experience - a.experience);
            displayDoctors(filteredDoctors);
        }

        // Toggle mobile filter
        function toggleMobileFilter() {
            // Not needed anymore - filters always visible on mobile
            return;
        }

        // Toggle filter sections (collapse/expand)
        function toggleFilterSection(header) {
            const filterOptions = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            if (filterOptions.classList.contains('collapsed')) {
                filterOptions.classList.remove('collapsed');
                header.classList.remove('collapsed');
            } else {
                filterOptions.classList.add('collapsed');
                header.classList.add('collapsed');
            }
        }

        // Change view (grid/list/map)
        function changeView(viewType) {
            const viewBtns = document.querySelectorAll('.view-btn');
            const doctorsGrid = document.getElementById('doctorsGrid');
            
            // Update button states
            viewBtns.forEach((btn, index) => {
                btn.classList.remove('active');
                if ((viewType === 'grid' && index === 0) ||
                    (viewType === 'list' && index === 1) ||
                    (viewType === 'map' && index === 2)) {
                    btn.classList.add('active');
                }
            });

            // Update grid layout (only on desktop)
            if (window.innerWidth > 768) {
                if (viewType === 'list') {
                    doctorsGrid.classList.add('list-view');
                } else if (viewType === 'grid') {
                    doctorsGrid.classList.remove('list-view');
                } 
            } else {
                // Always use grid view on mobile
                doctorsGrid.classList.remove('list-view');
            }
        }

        // Clear all filters
        function clearAllFilters() {
            document.getElementById('searchInput-doc').value = '';
            document.getElementById('genderAll').checked = true;
            document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => {
                cb.checked = false;
            });
            filteredDoctors = [...doctorsData];
            currentPage = 1;
            filteredDoctors.sort((a, b) => b.experience - a.experience);
            displayDoctors(filteredDoctors);
        }

        document.addEventListener("DOMContentLoaded",clearAllFilters)
        var cardShow = false
        // Display doctors with pagination
        function displayDoctors(doctors) {
            const grid = document.getElementById('doctorsGrid');
            const noResults = document.getElementById('noResults');
            const resultsCount = document.getElementById('resultsCount');
            const paginationWrapper = document.getElementById('paginationWrapper');
            
            grid.innerHTML = '';

            if (doctors.length === 0) {
                grid.style.display = 'none';
                noResults.style.display = 'block';
                paginationWrapper.style.display = 'none';
                resultsCount.textContent = '0';
                return;
            }

            grid.style.display = 'grid';
            noResults.style.display = 'none';
            resultsCount.textContent = doctors.length;

            // Calculate pagination
            const totalPages = Math.ceil(doctors.length / doctorsPerPage);
            const startIndex = (currentPage - 1) * doctorsPerPage;
            const endIndex = startIndex + doctorsPerPage;
            const paginatedDoctors = doctors.slice(startIndex, endIndex);

            // Display doctors for current page
            paginatedDoctors.forEach(doctor => {
                const card = createDoctorCard(doctor);
                grid.appendChild(card)                            
            });

            if(grid.innerHTML==''){
                console.log(grid.innerHTML);
            }

            // Show/hide pagination
            if (totalPages > 1) {
                paginationWrapper.style.display = 'flex';
                renderPagination(totalPages);
            } else {
                paginationWrapper.style.display = 'none';
            }
        }

        // Render pagination
        function renderPagination(totalPages) {
            const paginationNumbers = document.getElementById('paginationNumbers');
            const prevBtn = document.getElementById('prevPage');
            const nextBtn = document.getElementById('nextPage');

            paginationNumbers.innerHTML = '';

            // Previous button state
            prevBtn.disabled = currentPage === 1;

            // Next button state
            nextBtn.disabled = currentPage === totalPages;

            // Page numbers logic
            let pages = [];
            
            if (totalPages <= 7) {
                // Show all pages if 7 or less
                for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                // Show with dots
                if (currentPage <= 3) {
                    pages = [1, 2, 3, 4, '...', totalPages];
                } else if (currentPage >= totalPages - 2) {
                    pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
                } else {
                    pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
                }
            }

            // Render page buttons
            pages.forEach(page => {
                if (page === '...') {
                    const dots = document.createElement('span');
                    dots.className = 'pagination-dots';
                    dots.textContent = '...';
                    paginationNumbers.appendChild(dots);
                } else {
                    const btn = document.createElement('button');
                    btn.className = 'pagination-btn';
                    btn.textContent = page;
                    if (page === currentPage) {
                        btn.classList.add('active');
                    }
                    btn.onclick = () => goToPage(page);
                    paginationNumbers.appendChild(btn);
                }
            });
        }

        // Change page
        function changePage(direction) {
            const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
            
            if (direction === 'prev' && currentPage > 1) {
                currentPage--;
            } else if (direction === 'next' && currentPage < totalPages) {
                currentPage++;
            }

            displayDoctors(filteredDoctors);
            scrollToTop();
        }

        // Go to specific page
        function goToPage(page) {
            currentPage = page;
            displayDoctors(filteredDoctors);
            scrollToTop();
        }

        // Scroll to top smoothly
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Create doctor card
        function createDoctorCard(doctor) {
            let imagePath = `${doctor["Contact Number"] == "9894489142"
                ? doctor["Contact Number"] + ".jpg"
                : doctor["Contact Number"] + ".JPG"
            }`;
            // let img = new Image();
            // img.onload = () => renderCard("/assets/images/doctors/"+imagePath);      // Image exists
            //  img.onerror = () => renderCard("https://secure.gravatar.com/avatar/1962be2b9c3442642b74413746563450/?s=48&d=https://images.binaryfortress.com/General/UnknownUser1024.png");  // Image missing
            // img.src = imagePath;
            renderCard(imagePath)
            const card = document.createElement('div');
            card.className = 'doctor-card';

            function renderCard(finalImg) {
                card.innerHTML = `
                <div class="doctor-image-wrapper">
                    <img src="/assets/images/doctors/${finalImg}" alt="${doctor.name}">
                </div>
                <div class="doctor-info">
                    <span class="specialty-badge">${doctor.specialty}</span>
                    <h3 class="doctor-name">
                        ${doctor.name}
                        <i class="fas fa-check-circle verified-icon"></i>
                    </h3>
                    <p class="doctor-degree">${doctor.degree}</p>
                    
                    <div class="doctor-details">
                        <div class="detail-item">
                            <i class="fas fa-globe"></i>
                            <span>${doctor.languages.join(', ')}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-briefcase"></i>
                            <span>${doctor.designation}</span>
                        </div>
                        
                        <div class="detail-item">
                            <i class="fas fa-calendar"></i>
                            <span>${doctor.experience}+ Years</span>
                        </div>

                        <div class="detail-item" style="color:${doctor.shift !== "Regular Shift" ? "red" : "blue"}">
                            <i class="fas fa-clock" style="color:${doctor.shift !== "Regular Shift" ? "red" : "blue"}"></i>
                            <span>${doctor.shift}</span>
                        </div>
                    </div>

                    <div class="consultation-info">
                        <button class="view-profile-btn" onclick="viewDoctorProfile(${doctor.id})">
                            View Profile
                        </button>
                    </div>
                </div>
            `;
            }
            return card;
        }

        // View doctor profile
        function viewDoctorProfile(id) {

            let doctor = doctorsData.find(x => x.id == id);

            // Save doctor object to localStorage
            localStorage.setItem("doctorData", JSON.stringify(doctor));

            // Correct way to create anchor & trigger click
            let anchor = document.createElement('a');
            anchor.href = "./doctorsview.html#doc-details";
            anchor.style.display = "none"; // hide anchor
            document.body.appendChild(anchor);
            anchor.click();
            document.removeChild(anchor)

            // console.log(doctor);
        }


        // Initialize on load
        init(); 