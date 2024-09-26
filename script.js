

function hoverCourse(course) {
    const mstCard = document.querySelector('.course-card.mst');
    const estCard = document.querySelector('.course-card.est');

    if (course === 'mst') {
        mstCard.style.transform = 'scale(1.05)';
    } else {
        mstCard.style.transform = 'scale(1)';
    }

    if (course === 'est') {
        estCard.style.transform = 'scale(1.05)';
    } else {
        estCard.style.transform = 'scale(1)';
    }
}
