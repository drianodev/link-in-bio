// Verifique se o conteúdo é maior que a altura da janela
function checkContentHeight() {
    const body = document.body;
    const windowHeight = window.innerHeight;
    const bodyHeight = body.scrollHeight;
  
    if (bodyHeight <= windowHeight) {
      body.style.overflowY = 'hidden'; // Desabilita a barra de rolagem quando o conteúdo não se ajusta na janela
    } else {
      body.style.overflowY = 'scroll'; // Habilita a barra de rolagem quando o conteúdo é maior que a janela
    }
  }
  
  // Verifique inicialmente quando a página carregar
  window.addEventListener('load', checkContentHeight);
  
  // Verifique sempre que a janela for redimensionada
  window.addEventListener('resize', checkContentHeight);
  