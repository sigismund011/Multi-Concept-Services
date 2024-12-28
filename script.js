function showInfo(section) {
    const infoBox = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infoContent = document.getElementById('info-content');

    switch (section) {
        case 'about':
            infoContent.textContent = 'We are a leading company in civil engineering, dedicated to providing innovative solutions.';
            break;
        case 'services':
            infoContent.textContent = 'We offer a wide range of services including project management, design, and consulting.';
            break;
        case 'projects':
            infoContent.textContent = 'We have completed numerous projects across various sectors, showcasing our expertise.';
            break;
        case 'contact':
            infoContent.textContent = 'Get in touch with us via email or phone for any inquiries.';
            break;
    }

    infoBox.style.display = 'block'; // Show the info box
}

function closeInfo() {
    const infoBox = document.getElementById('info-box');
    infoBox.style.display = 'none'; // Hide the info box
}