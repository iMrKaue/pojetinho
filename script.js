function showSection(sectionId) {
    // Oculta todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Exibe a seção selecionada
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Exibe a seção "sobre" por padrão quando a página é carregada
window.onload = function() {
    showSection('login');
};

