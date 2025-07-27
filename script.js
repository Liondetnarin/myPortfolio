function downloadCV() {
    const fileUrl = "/portfolio/เดชนรินทร์ - resume.pdf";

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'เดชนรินทร์ ไชยอักษร - resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault();
    downloadCV();
});