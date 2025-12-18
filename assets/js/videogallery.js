const videoData = [
            {
                id: 1,
                title: "CPR",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, at.",
                videoUrl: "cprvideo.mp4",
                thumbnail: "cprthumbnail.png",
                date: "2024-03-15",
                year: "2024",
                month: "03"
            },
            {
                id: 2,
                title: "Demo 1",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, at.",
                videoUrl: "cprvideo.mp4",
                thumbnail: "cprthumbnail.png",
                date: "2024-06-20",
                year: "2024",
                month: "06"
            },
            {
                id: 3,
                title: "Demo 2",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, at.",
                videoUrl: "cprvideo.mp4",
                thumbnail: "cprthumbnail.png",
                date: "2023-11-10",
                year: "2023",
                month: "11"
            },
            {
                id: 4,
                title: "Demo 3",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, at.",
                videoUrl: "cprvideo.mp4",
                thumbnail: "cprthumbnail.png",
                date: "2024-01-05",
                year: "2024",
                month: "01"
            },
            {
                id: 5,
                title: "Demo 4",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, at.",
                videoUrl: "cprvideo.mp4",
                thumbnail: "cprthumbnail.png",
                date: "2023-09-18",
                year: "2023",
                month: "09"
            },
            {
                id: 6,
                title: "Demo 5",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, at.",
                videoUrl: "cprvideo.mp4",
                thumbnail: "cprthumbnail.png",
                date: "2024-11-08",
                year: "2024",
                month: "11"
            }
        ];

        let currentFilter = { year: 'all', month: 'all', search: '' };

        // Initialize the gallery
        function init() {
            populateYearFilter();
            setDefaultMonth();
            renderVideos();
            attachEventListeners();
        }

        // Populate year filter with unique years from data
        function populateYearFilter() {
            const years = [...new Set(videoData.map(v => v.year))].sort().reverse();
            const yearFilter = document.getElementById('videoYearFilter');
            
            years.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearFilter.appendChild(option);
            });
        }

        // Set default filter to current month
        function setDefaultMonth() {
            const currentDate = new Date();
            const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
            document.getElementById('videoMonthFilter').value = currentMonth;
            currentFilter.month = currentMonth;
        }

        // Attach event listeners to filters
        function attachEventListeners() {
            document.getElementById('videoYearFilter').addEventListener('change', (e) => {
                currentFilter.year = e.target.value;
                renderVideos();
            });

            document.getElementById('videoMonthFilter').addEventListener('change', (e) => {
                currentFilter.month = e.target.value;
                renderVideos();
            });

            // Search input with debounce
            let searchTimeout;
            document.getElementById('videoSearchInput').addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    currentFilter.search = e.target.value.toLowerCase().trim();
                    renderVideos();
                }, 300);
            });
        }

        // Filter videos based on current filters
        function filterVideos() {
            return videoData.filter(video => {
                const yearMatch = currentFilter.year === 'all' || video.year === currentFilter.year;
                const monthMatch = currentFilter.month === 'all' || video.month === currentFilter.month;
                
                const searchMatch = currentFilter.search === '' || 
                    video.title.toLowerCase().includes(currentFilter.search) ||
                    video.description.toLowerCase().includes(currentFilter.search);
                
                return yearMatch && monthMatch && searchMatch;
            });
        }
        

        // Render videos to the grid
        function renderVideos() {
            const videoGrid = document.getElementById('videoGrid');
            const filteredVideos = filterVideos();

            if (filteredVideos.length === 0) {
                videoGrid.classList.remove('video-grid')
                videoGrid.innerHTML = `
                    <div class="video-no-results">
                        <h3>No videos found</h3>
                        <p>Try adjusting your filters to see more results</p>
                    </div>
                `;
                return;
            }
            videoGrid.classList.add('video-grid')
            videoGrid.innerHTML = filteredVideos.map(video => `
                <div class="video-card" onclick="openVideoModal(${video.id})">
                    <div class="video-thumbnail">
                        <img src="./assets/videogallery/thumbnail/${video.thumbnail}" alt="">
                        <div class="video-play-overlay">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">${video.title}</h3>
                        <p class="video-description">${video.description}</p>
                        <div class="video-meta">
                            <span class="video-date">
                                <i class="far fa-calendar-alt"></i>
                                ${formatDate(video.date)}
                            </span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Format date for display
        function formatDate(dateStr) {
            const date = new Date(dateStr);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        }

        // Initialize on page load
        init();

        // Open video modal
        function openVideoModal(videoId) {
            const video = videoData.find(v => v.id === videoId);
            if (!video) return;

            const modal = document.getElementById('videoModal');
            const modalVideo = document.getElementById('modalVideo');
            const videoSource = document.getElementById('videoSource');
            
            document.getElementById('modalTitle').textContent = video.title;
            document.getElementById('modalDescription').textContent = video.description;
            document.getElementById('modalDate').textContent = formatDate(video.date);
            
            videoSource.src ="./assets/videogallery/video/"+video.videoUrl;
            modalVideo.load();
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        // Close video modal
        function closeVideoModal() {
            const modal = document.getElementById('videoModal');
            const modalVideo = document.getElementById('modalVideo');
            
            modalVideo.pause();
            modalVideo.currentTime = 0;
            
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('videoModal');
            if (event.target === modal) {
                closeVideoModal();
            }
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeVideoModal();
            }
        });