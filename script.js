function openTab(tabId) {
    // Cache tous les contenus
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    // Supprime la classe "active" des onglets
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => link.classList.remove('active'));

    // Affiche le contenu sélectionné et active l'onglet
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Affiche par défaut le premier CV
document.getElementById('cv1').style.display = 'block';
