function showContent(contentId) {
    // Hide all content sections
    const allContent = document.querySelectorAll('.hidden-content');
    allContent.forEach(content => content.style.display = 'none');

    // Show the selected content section
    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}

function showContent(religion) {
    if (religion === 'islam') {
        window.location.href = 'islam.html';
    }
    // Tambahkan navigasi untuk agama lain jika diperlukan
}

document.querySelector('a[href="#content"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#ellipse"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#ellipse').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#footer"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
});
