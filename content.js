function hidePrograms() {
  const cards = document.querySelectorAll('.card_list__KXp6q');
  
  cards.forEach(card => {
    const textContent = card.textContent || card.innerText;
    
    const hasFarm = textContent.includes('ファーム');
    const hasBaseball = textContent.includes('野球') || textContent.includes('BASEBALL') || textContent.includes('公式戦');
    
    if (hasFarm || !hasBaseball) {
      card.style.display = 'none';
    }
  });
}

function observePageChanges() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        hidePrograms();
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function init() {
  hidePrograms();
  observePageChanges();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
} 