document.addEventListener("DOMContentLoaded", function() {
    // Texto a ser digitado
    var textToType = "Desenvolvedor Front-end";
  
    // Elemento onde o efeito de digitação será aplicado
    var typingElement = document.querySelector(".typing-effect");
  
    // Função para adicionar o efeito de digitação
    function typeEffect(text, index) {
      typingElement.textContent = text.slice(0, index + 1);
  
      // Adiciona uma classe após digitar o último caractere
      if (index === text.length - 1) {
        typingElement.classList.add("last-letters");
      }
    }
  
    // Função para simular o efeito de digitação ao longo do tempo
    function startTypingEffect() {
      for (let i = 0; i < textToType.length; i++) {
        setTimeout(function() {
          typeEffect(textToType, i);
        }, i * 120); // Ajuste o intervalo de tempo conforme necessário
      }
    }

    startTypingEffect();
  });

  // DOWNLOAD CV BTN

  const btnCV = document.querySelector("#btn-cv");

  btnCV.addEventListener("click", () => {
    window.open("assets/CV-THIAGOTAVARES.pdf", "_blank");
  })

  const quizprog = document.querySelector('#quiz-prog')

  quizprog.addEventListener("click", () => {
    window.open("https://quiz-prog.vercel.app/", "_blank");
  })
  
  const carrinhoCompras = document.querySelector('#carrinho-compras')

  carrinhoCompras.addEventListener("click", () => {
    window.open("https://projetos-entrevistas-react.vercel.app/", "_blank");
  })