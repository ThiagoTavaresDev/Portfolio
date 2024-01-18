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



  document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            console.log('rect top'+ rect.top)
            console.log('rect bottom'+ rect.bottom)
            console.log(window.innerHeight)
            const isVisible = (rect.top <= window.innerHeight - 260 && rect.bottom >= 0);
            
            if (isVisible) {
                element.classList.add('visible');
            }
        });
    }

    // Verifique a visibilidade inicial
    checkVisibility();

    // Adicione um ouvinte de rolagem
    window.addEventListener('scroll', checkVisibility);
});


const menuLinks = document.querySelectorAll('#nav-header ul li a[href^="#"]');

console.log(menuLinks)

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
 }

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== "undefined" ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }

  // MENU - HAMBURGUER

  const burguer = document.querySelector('#burguer')
  burguer.addEventListener('click', () => {
    const divContainerBurguer = document.querySelector('#container-burguer')
    divContainerBurguer.classList.toggle('disabled')
  })
  const iconClose = document.querySelector('#icon-close')

  iconClose.addEventListener('click', () => {
    const divContainerBurguer = document.querySelector('#container-burguer')
    divContainerBurguer.classList.toggle('disabled')
  })
  const menuHamburguerItems = document.querySelectorAll('#div-modal-menuburguer-content ul li a[href^="#"]')
  
  menuHamburguerItems.forEach((item) =>{
    item.addEventListener('click', () => {
      const divContainerBurguer = document.querySelector('#container-burguer')
      divContainerBurguer.classList.toggle('disabled')
    })
  })
