document.addEventListener('DOMContentLoaded', function () {
    // Animação de digitação para o título
    const title = document.querySelector('.title');
    const originalText = title.textContent;
    title.textContent = '';

    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            title.innerHTML += '<span class="cursor">|</span>';
            setInterval(() => {
                const cursor = document.querySelector('.cursor');
                if (cursor) {
                    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
                }
            }, 500);
        }
    }

    setTimeout(typeWriter, 1000);

    // Fade-in no conteúdo principal
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }

    // Efeito parallax na imagem de perfil
    const profileImage = document.querySelector('.image-container');
    if (profileImage) {
        document.addEventListener('mousemove', function (e) {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            profileImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    // Efeito de hover no botão do logo via JS
    const logoBtn = document.querySelector('.logo-btn');
    if (logoBtn) {
        logoBtn.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
        });

        logoBtn.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    }
});

// Estilo para o cursor piscante da digitação
const style = document.createElement('style');
style.textContent = `
    .cursor {
        font-weight: 100;
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);

const aboutImg = document.querySelector('.about-img', '.hero');
if (aboutImg) {
    document.addEventListener('mousemove', function (e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        aboutImg.style.transform = `translateX(${x}px) translateY(${y}px)`;
        aboutImg.style.transition = 'transform 0.2s ease-out';
    });
}

document.addEventListener('DOMContentLoaded', function( ) {
    // Seleção de elementos
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Adicionar evento de clique para cada botão de aba
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões e conteúdos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Mostrar o conteúdo correspondente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Efeito de hover nos cards de skill
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function( ) {
    // Seleção de elementos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Adicionar evento de clique para cada botão de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Obter categoria do filtro
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrar projetos
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
    
    // Efeito de hover nos cards de projeto
    projectCards.forEach(card => {
        const viewButton = card.querySelector('.view-project');
        
        viewButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Aqui você pode adicionar a lógica para abrir o projeto
            // Por exemplo, redirecionar para uma página de detalhes do projeto
            alert('Projeto: ' + card.querySelector('.project-title').textContent);
        });
    });
});