// ==================== GAME DATA ====================

const gameData = {
    currentRound: 1,
    totalRounds: 8,
    playerName: 'CEO',
    metrics: {
        profit: 1000,
        impact: 50,
        team: 60
    },
    history: []
};

// ==================== LEADERBOARD GLOBAL ====================

let globalLeaderboard = [
    { name: 'Alpha CEO', score: 2500, category: 'Balanced', date: '2026-03-20', profitFinal: 1200, impactFinal: 120, teamFinal: 140 },
    { name: 'Green Leader', score: 2400, category: 'Green Leader', date: '2026-03-21', profitFinal: 800, impactFinal: 150, teamFinal: 100 },
    { name: 'Profit King', score: 2300, category: 'Unicórnio', date: '2026-03-22', profitFinal: 1800, impactFinal: -20, teamFinal: 50 },
    { name: 'Team Player', score: 2200, category: 'Team Champion', date: '2026-03-23', profitFinal: 950, impactFinal: 80, teamFinal: 180 },
    { name: 'Beta CEO', score: 2100, category: 'Balanced', date: '2026-03-24', profitFinal: 1100, impactFinal: 100, teamFinal: 120 }
];

const scenarios = [
    {
        round: 1,
        title: 'Crescimento Inicial',
        description: 'Sua startup precisa de mais servidores para suportar o crescimento. Qual é sua estratégia?',
        ods: 'ODS 9: Indústria, inovação e infraestrutura',
        options: [
            {
                letter: 'A',
                title: 'Servidores próprios (rápido)',
                description: 'Compre servidores de última geração para máxima performance.',
                impacts: { profit: 20, impact: -30, team: 5 }
            },
            {
                letter: 'B',
                title: 'Nuvem com energia renovável',
                description: 'Use provedores de nuvem com certificação de energia 100% renovável.',
                impacts: { profit: -5, impact: 25, team: 15 }
            },
            {
                letter: 'C',
                title: 'Expansão gradual',
                description: 'Cresce lentamente, otimizando infraestrutura existente.',
                impacts: { profit: 5, impact: 10, team: -5 }
            }
        ]
    },
    {
        round: 2,
        title: 'Produto ou Propósito?',
        description: 'Seu produto está crescendo, mas há pressão para adicionar features. Quer integrar sustentabilidade?',
        ods: 'ODS 12: Consumo e produção responsáveis',
        options: [
            {
                letter: 'A',
                title: 'Features rápidas',
                description: 'Desenvolva rápido sem considerar impacto ambiental.',
                impacts: { profit: 30, impact: -40, team: -10 }
            },
            {
                letter: 'B',
                title: 'Produto eco-friendly',
                description: 'Redesenhe para menor pegada carbônica (mais caro, mais tempo).',
                impacts: { profit: -15, impact: 35, team: 20 }
            },
            {
                letter: 'C',
                title: 'Balanço pragmático',
                description: 'Otimize o que der sem sacrificar o roadmap.',
                impacts: { profit: 10, impact: 15, team: 10 }
            }
        ]
    },
    {
        round: 3,
        title: 'Trabalho Remoto ou Presencial?',
        description: 'Seus funcionários pedem mais flexibilidade. Como você estrutura o trabalho?',
        ods: 'ODS 8: Trabalho decente e crescimento econômico',
        options: [
            {
                letter: 'A',
                title: 'Escritório presencial',
                description: '100% presencial para melhor colaboração (mais caro em infraestrutura).',
                impacts: { profit: -20, impact: -30, team: 25 }
            },
            {
                letter: 'B',
                title: '100% remoto',
                description: 'Trabalho totalmente remoto (reduz emissões, pode afetar conexão).',
                impacts: { profit: 25, impact: 30, team: 15 }
            },
            {
                letter: 'C',
                title: 'Híbrido inteligente',
                description: 'Dias presenciais estratégicos + home office (melhor equilíbrio).',
                impacts: { profit: 5, impact: 15, team: 20 }
            }
        ]
    },
    {
        round: 4,
        title: 'Fornecedores Sustentáveis',
        description: 'Você precisa de suprimentos. Qual é sua abordagem de compras?',
        ods: 'ODS 17: Parcerias para alcançar objetivos',
        options: [
            {
                letter: 'A',
                title: 'Fornecedor mais barato',
                description: 'Compre do mais barato, sem considerar sustentabilidade.',
                impacts: { profit: 30, impact: -35, team: -5 }
            },
            {
                letter: 'B',
                title: 'Fornecedores certificados',
                description: 'Parceria com empresas com certificação ambiental e social.',
                impacts: { profit: -10, impact: 35, team: 20 }
            },
            {
                letter: 'C',
                title: 'Misto estratégico',
                description: 'Escolha fornecedores com base em custo-benefício ambiental.',
                impacts: { profit: 10, impact: 20, team: 10 }
            }
        ]
    },
    {
        round: 5,
        title: 'Investimento em Inovação',
        description: 'Você tem capital para investir em P&D. Qual é sua prioridade?',
        ods: 'ODS 7: Energia limpa e acessível',
        options: [
            {
                letter: 'A',
                title: 'Feature com mais valor',
                description: 'Invista em feature que vai gerar mais receita imediatamente.',
                impacts: { profit: 40, impact: -20, team: 0 }
            },
            {
                letter: 'B',
                title: 'Tecnologia verde',
                description: 'Develop soluções de eficiência energética para seu produto.',
                impacts: { profit: 0, impact: 40, team: 15 }
            },
            {
                letter: 'C',
                title: 'Equilíbrio inovador',
                description: 'Inove em features E sustentabilidade simultaneamente.',
                impacts: { profit: 15, impact: 25, team: 20 }
            }
        ]
    },
    {
        round: 6,
        title: 'Impacto Social Local',
        description: 'Você tem lucro. Quer investir em comunidade ou reinvestir na startup?',
        ods: 'ODS 11: Cidades e comunidades sustentáveis',
        options: [
            {
                letter: 'A',
                title: 'Reinvestir tudo',
                description: 'Coloque todo lucro de volta na startup para crescer ainda mais.',
                impacts: { profit: 50, impact: -10, team: -15 }
            },
            {
                letter: 'B',
                title: 'Programa social',
                description: 'Dedique 20% dos lucros a programa de impacto social local.',
                impacts: { profit: -15, impact: 40, team: 30 }
            },
            {
                letter: 'C',
                title: 'Impacto moderado',
                description: 'Invista 10% em comunidade, 90% no crescimento.',
                impacts: { profit: 20, impact: 25, team: 15 }
            }
        ]
    },
    {
        round: 7,
        title: 'Transparência vs Sigilo',
        description: 'Você atinge números impresses. Quer ser transparente sobre seu impacto?',
        ods: 'ODS 5: Igualdade de gênero e empoderamento',
        options: [
            {
                letter: 'A',
                title: 'Sigilo operacional',
                description: 'Mantenha dados internos (menos escrutínio, mais privacidade).',
                impacts: { profit: 20, impact: -15, team: -10 }
            },
            {
                letter: 'B',
                title: 'Relatório transparente',
                description: 'Publique relatório completo de sustentabilidade e impacto.',
                impacts: { profit: 5, impact: 35, team: 25 }
            },
            {
                letter: 'C',
                title: 'Transparência seletiva',
                description: 'Compartilhe sucessos, mantenha privado o que não é ideal.',
                impacts: { profit: 10, impact: 15, team: 15 }
            }
        ]
    },
    {
        round: 8,
        title: 'Seu Legado',
        description: 'A startup está consolidada. Qual é seu legado? Qual a sua visão para os próximos 10 anos?',
        ods: 'TODOS OS ODS',
        options: [
            {
                letter: 'A',
                title: 'Unicórnio lucrativo',
                description: 'Virar um unicórnio mantendo foco em lucro acima de tudo.',
                impacts: { profit: 50, impact: -20, team: -10 }
            },
            {
                letter: 'B',
                title: 'Empresa B Certificada',
                description: 'Transformar a empresa em força do bem (impacto + lucro balanceado).',
                impacts: { profit: 15, impact: 50, team: 35 }
            },
            {
                letter: 'C',
                title: 'Tech for Good',
                description: 'Foco total em impacto social e ambiental (profit é consequência).',
                impacts: { profit: -10, impact: 60, team: 40 }
            }
        ]
    }
];

// ==================== TUTORIAL FUNCTIONS ====================

let currentTutorialSlide = 1;

function showTutorial() {
    const modal = document.getElementById('tutorial-modal');
    modal.classList.add('active');
}

function goToSlide(slideNumber) {
    // Esconder todos os slides
    document.querySelectorAll('.tutorial-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Mostrar slide selecionado
    document.getElementById(`slide-${slideNumber}`).classList.add('active');
    
    // Atualizar indicadores
    document.querySelectorAll('.indicator').forEach((ind, idx) => {
        ind.classList.toggle('active', idx === slideNumber - 1);
    });
    
    // Atualizar botões
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const startBtn = document.getElementById('start-btn');
    
    if (slideNumber === 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        startBtn.style.display = 'none';
    } else if (slideNumber === 4) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'none';
        startBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        startBtn.style.display = 'none';
    }
    
    currentTutorialSlide = slideNumber;
}

function nextSlide() {
    if (currentTutorialSlide < 4) {
        goToSlide(currentTutorialSlide + 1);
    }
}

function prevSlide() {
    if (currentTutorialSlide > 1) {
        goToSlide(currentTutorialSlide - 1);
    }
}

function closeTutorial() {
    document.getElementById('tutorial-modal').classList.remove('active');
}

function startGame() {
    closeTutorial();
    
    // Resetar dados do jogo para começar do zero
    gameData.currentRound = 1;
    gameData.totalRounds = 8;
    gameData.playerName = 'CEO';
    gameData.metrics = {
        profit: 1000,
        impact: 50,
        team: 60
    };
    gameData.history = [];
    
    // Limpar notícias
    document.getElementById('news-feed').innerHTML = '<p class="news-item">Bem-vindo ao jogo!</p>';
    
    askPlayerName();
    renderScenario();
    updateMetricsDisplay();
}

function askPlayerName() {
    const name = prompt('Qual é o nome de seu CEO? (padrão: CEO)');
    if (name && name.trim()) {
        gameData.playerName = name.trim();
    }
}

function renderScenario() {
    const scenario = scenarios[gameData.currentRound - 1];
    
    document.getElementById('current-round').textContent = gameData.currentRound;
    document.getElementById('scenario-title').textContent = scenario.title;
    document.getElementById('scenario-description').textContent = scenario.description;
    document.getElementById('ods-info').textContent = scenario.ods;
    
    const optionsContainer = document.getElementById('decision-options');
    optionsContainer.innerHTML = '';
    
    scenario.options.forEach(option => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'option-button';
        
        const impactsHTML = `
            ${option.impacts.profit > 0 ? `<span class="impact-tag positive">💰 +${option.impacts.profit}</span>` : `<span class="impact-tag negative">💰 ${option.impacts.profit}</span>`}
            ${option.impacts.impact > 0 ? `<span class="impact-tag positive">🌍 +${option.impacts.impact}</span>` : `<span class="impact-tag negative">🌍 ${option.impacts.impact}</span>`}
            ${option.impacts.team > 0 ? `<span class="impact-tag positive">👥 +${option.impacts.team}</span>` : `<span class="impact-tag negative">👥 ${option.impacts.team}</span>`}
        `;
        
        optionBtn.innerHTML = `
            <div class="option-letter">${option.letter}</div>
            <div class="option-title">${option.title}</div>
            <div class="option-description">${option.description}</div>
            <div class="option-impacts">${impactsHTML}</div>
        `;
        
        optionBtn.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(optionBtn);
    });
}

function selectOption(option) {
    // Aplicar impactos
    gameData.metrics.profit += option.impacts.profit;
    gameData.metrics.impact += option.impacts.impact;
    gameData.metrics.team += option.impacts.team;
    
    // Limitar valores
    gameData.metrics.profit = Math.max(0, Math.min(2000, gameData.metrics.profit));
    gameData.metrics.impact = Math.max(-100, Math.min(200, gameData.metrics.impact));
    gameData.metrics.team = Math.max(0, Math.min(200, gameData.metrics.team));
    
    // Salvar na história
    gameData.history.push({
        round: gameData.currentRound,
        choice: option.letter,
        impacts: option.impacts
    });
    
    // Adicionar notícia
    addNews(`Rodada ${gameData.currentRound}: Escolheu opção ${option.letter} - "${option.title}"`);
    
    // Atualizar display
    updateMetricsDisplay();
    
    // Próxima rodada ou fim
    if (gameData.currentRound < gameData.totalRounds) {
        gameData.currentRound++;
        setTimeout(renderScenario, 1500);
    } else {
        endGame();
    }
}

function updateMetricsDisplay() {
    // Lucro
    document.getElementById('profit-value').textContent = gameData.metrics.profit;
    const profitPercentage = (gameData.metrics.profit / 2000) * 100;
    document.getElementById('profit-bar').style.width = profitPercentage + '%';
    document.getElementById('profit-status').textContent = 
        gameData.metrics.profit < 500 ? '⚠️ Crítico' :
        gameData.metrics.profit < 800 ? '🟡 Atenção' :
        gameData.metrics.profit < 1200 ? '🟢 Saudável' : '🟢 Excelente';
    
    // Impacto
    document.getElementById('impact-value').textContent = gameData.metrics.impact;
    const impactPercentage = ((gameData.metrics.impact + 100) / 300) * 100;
    document.getElementById('impact-bar').style.width = impactPercentage + '%';
    document.getElementById('impact-status').textContent = 
        gameData.metrics.impact < -50 ? '❌ Prejudicial' :
        gameData.metrics.impact < 0 ? '🟡 Negativo' :
        gameData.metrics.impact < 50 ? '🟢 Neutro' : '🟢 Positivo';
    
    // Equipe
    document.getElementById('team-value').textContent = gameData.metrics.team;
    const teamPercentage = (gameData.metrics.team / 200) * 100;
    document.getElementById('team-bar').style.width = teamPercentage + '%';
    document.getElementById('team-status').textContent = 
        gameData.metrics.team < 30 ? '❌ Desmotivada' :
        gameData.metrics.team < 60 ? '🟡 Preocupada' :
        gameData.metrics.team < 120 ? '🟢 Motivada' : '🟢 Empoderada';
}

function addNews(message) {
    const newsFeed = document.getElementById('news-feed');
    const newsItem = document.createElement('p');
    newsItem.className = 'news-item';
    newsItem.textContent = message;
    newsFeed.insertBefore(newsItem, newsFeed.firstChild);
    
    // Limitar a 5 notícias visíveis
    while (newsFeed.children.length > 5) {
        newsFeed.removeChild(newsFeed.lastChild);
    }
}

// ==================== LEADERBOARD FUNCTIONS ====================

function loadLeaderboard() {
    const saved = localStorage.getItem('ecoStartupTycoonLeaderboard');
    if (saved) {
        globalLeaderboard = JSON.parse(saved);
    }
}

function saveLeaderboard() {
    localStorage.setItem('ecoStartupTycoonLeaderboard', JSON.stringify(globalLeaderboard));
}

function updateLeaderboardMini() {
    const leaderboardMini = document.getElementById('leaderboard-mini');
    if (!leaderboardMini) return;
    
    leaderboardMini.innerHTML = '<h3>🏆 Top 5</h3>';
    const leaderboardList = document.createElement('div');
    leaderboardList.className = 'leaderboard-list';
    
    // Ordenar por score (decrescente)
    const sorted = [...globalLeaderboard].sort((a, b) => b.score - a.score).slice(0, 5);
    
    sorted.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        item.innerHTML = `
            <span class="leaderboard-name">${index + 1}. ${player.name}</span>
            <span class="leaderboard-score">${player.score}</span>
        `;
        leaderboardList.appendChild(item);
    });
    
    leaderboardMini.appendChild(leaderboardList);
}

function updateLeaderboard() {
    const tbody = document.getElementById('leaderboard-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Ordenar por score (decrescente)
    const sorted = [...globalLeaderboard].sort((a, b) => b.score - a.score);
    
    sorted.forEach((player, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="rank">#${index + 1}</td>
            <td>
                <div style="font-weight: 600;">${player.name}</div>
                <div style="font-size: 11px; color: var(--text-secondary);">${player.date}</div>
            </td>
            <td><strong>${player.score}</strong></td>
            <td>${player.category}</td>
        `;
        tbody.appendChild(row);
    });
}

function calculateFinalScore() {
    // Score baseado em balanço das 3 métricas
    const profitScore = Math.min(gameData.metrics.profit, 1000) / 1000 * 40;
    const impactScore = ((gameData.metrics.impact + 100) / 200) * 35;
    const teamScore = Math.min(gameData.metrics.team, 100) / 100 * 25;
    
    return Math.round(profitScore + impactScore + teamScore);
}

function endGame() {
    const finalScore = calculateFinalScore();
    const category = 
        gameData.metrics.profit > 1500 ? '🦄 Unicórnio' :
        gameData.metrics.impact > 100 ? '💚 Green Leader' :
        gameData.metrics.team > 120 ? '👥 Team Champion' :
        '⚖️ Balanced CEO';
    
    // Criar entrada no leaderboard
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    const playerEntry = {
        name: gameData.playerName,
        score: finalScore,
        category: category,
        date: dateStr,
        profitFinal: gameData.metrics.profit,
        impactFinal: gameData.metrics.impact,
        teamFinal: gameData.metrics.team
    };
    
    // Adicionar ao leaderboard global
    globalLeaderboard.push(playerEntry);
    globalLeaderboard.sort((a, b) => b.score - a.score);
    
    // Salvar no localStorage
    saveLeaderboard();
    
    // Mostrar resultado
    const gameStatus = document.getElementById('game-status');
    gameStatus.innerHTML = `
        <h3>🎉 Jogo Finalizado!</h3>
        <p style="font-size: 16px; margin: 15px 0; color: var(--text-secondary);">
            <strong>${gameData.playerName}</strong> - ${category}
        </p>
        <div style="font-size: 28px; font-weight: 700; color: var(--primary); margin: 20px 0;">
            Score: ${finalScore}
        </div>
        <div style="text-align: left; margin: 20px 0; font-size: 14px; color: var(--text-secondary);">
            <p>💰 Lucro Final: ${gameData.metrics.profit}</p>
            <p>🌍 Impacto Final: ${gameData.metrics.impact}</p>
            <p>👥 Equipe Final: ${gameData.metrics.team}</p>
        </div>
        <div style="margin: 20px 0; padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border-left: 3px solid var(--primary);">
            <p style="margin: 0; font-size: 12px; color: var(--text-secondary);">Você está em:</p>
            <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: 700; color: var(--primary);">#${globalLeaderboard.findIndex(p => p.name === gameData.playerName) + 1} no Ranking Global</p>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button class="btn btn-primary" onclick="location.reload()">Jogar Novamente</button>
            <button class="btn btn-primary" onclick="openLeaderboard()" style="background: var(--secondary);">Ver Ranking</button>
        </div>
    `;
    gameStatus.style.display = 'block';
    
    // Limpar localStorage após salvar no leaderboard
    localStorage.removeItem('ecoStartupTycoonGame');
}

function openLeaderboard() {
    const modal = document.getElementById('leaderboard-modal');
    modal.classList.add('active');
    loadLeaderboard(); // Carregar dados mais recentes
    updateLeaderboard();
}

function closeLeaderboard() {
    const modal = document.getElementById('leaderboard-modal');
    modal.classList.remove('active');
}

// ==================== LOCAL STORAGE ====================

function saveGame() {
    localStorage.setItem('ecoStartupTycoonGame', JSON.stringify(gameData));
}

function loadGame() {
    // Carregar leaderboard global primeiro
    loadLeaderboard();
    updateLeaderboardMini();
    
    const saved = localStorage.getItem('ecoStartupTycoonGame');
    if (saved) {
        // Se tem jogo salvo, verifica se é um jogo completo ou em andamento
        const loaded = JSON.parse(saved);
        
        // Se é um jogo em andamento (currentRound <= 8), carrega
        if (loaded.currentRound && loaded.currentRound <= 8) {
            Object.assign(gameData, loaded);
            renderScenario();
            updateMetricsDisplay();
        } else {
            // Se é um jogo completo, mostra tutorial novamente
            showTutorial();
        }
    } else {
        // Primeira vez - mostrar tutorial
        showTutorial();
    }
}

// Auto-save a cada escolha
window.addEventListener('beforeunload', saveGame);

// ==================== INIT ====================

window.addEventListener('DOMContentLoaded', loadGame);