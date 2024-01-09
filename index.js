(function(){

    const cabecalhoMobile = document.querySelector('.cabecalho-mobile');
    const cabecalhoNavA = document.querySelectorAll('.cabecalho-mobile nav a');
    const [a1, a2, a3, a4] = cabecalhoNavA;

    const rodapeValores = document.querySelectorAll('.rodape ul li a');
    const [rodapeA1, rodapeA2, rodapeA3, rodapeA4] = rodapeValores

    const cabecalhoOcultoNavA = document.querySelectorAll('.cabecalho-oculto nav>a');
    const [a5, a6, a7, a8] = cabecalhoOcultoNavA;

    const cabecalhoOculto = document.querySelector('.cabecalho-oculto');

    const botaoMobile = document.querySelector('.botao-mobile');
    const botaoMobileSpan = document.querySelectorAll('.botao-mobile span');
    const [span1, span2, span3] = botaoMobileSpan;

    const botaoOculto = document.querySelector('.botao-oculto');
    const botaoOcultoSpan = document.querySelectorAll('.botao-oculto span');
    const [span4, span5] = botaoOcultoSpan;


    const logoAMobile = document.querySelectorAll('.cabecalho-mobile>div>a');
    const logoImgMobile = document.querySelectorAll('.cabecalho-mobile>div>a>img');

    const logoAOculto = document.querySelector('.cabecalho-oculto>a');
    const logoImgOculto = document.querySelector('.cabecalho-oculto>a>img');

    const paginacao1 = document.querySelector('.paginacao1');
    const paginacao2 = document.querySelector('.paginacao2');
    const paginacao3 = document.querySelector('.paginacao3');

    const containerHome = document.querySelector('.container-home');
    const containerDivDivDiv = document.querySelector('.container-home>div>div>div');

    const video = document.querySelector('video');

    const paginacaoSpan = document.querySelectorAll('.container-home>section>span');
    const [paginacaoSpan1, paginacaoSpan2, paginacaoSpan3] = paginacaoSpan;
    let count = 0;

    setInterval(function(){
        if(count >= 3){
            count = 0;
        }
        if(video.currentTime == 0 || video.currentTime == video.duration){
            paginacaoSpan[count].click();
            count+=1;
        }
    }, 1000);

    document.addEventListener('click', e => {
        const el = e.target;

        if(el == paginacaoSpan2){
            paginacao1.style.display = 'none';
            paginacao2.style.display = 'flex';
            paginacao3.style.display = 'none';

            paginacaoSpan1.style.background = 'transparent';
            paginacaoSpan2.style.background = '#7ab317';
            paginacaoSpan3.style.background = 'transparent';

            containerHome.style.background = "url('images/capa_brasilsolucoes_mercado.png') center";
            containerHome.style.backgroundSize = "cover";

            if(video.currentTime != 0){
                video.pause();
            }

        }
        else if(el == paginacaoSpan1){
            paginacao1.style.display = 'flex';
            paginacao2.style.display = 'none';
            paginacao3.style.display = 'none';

            paginacaoSpan1.style.background = '#7ab317';
            paginacaoSpan2.style.background = 'transparent';
            paginacaoSpan3.style.background = 'transparent';

            containerHome.style.background = "url('images/capa_brasilsolucoes_restaurante.png') center top";
            containerHome.style.backgroundSize = "cover";

            if(video.currentTime != 0){
                video.pause();
            }

        }
        else if(el == paginacaoSpan3){
            paginacao1.style.display = 'none';
            paginacao2.style.display = 'none';
            paginacao3.style.display = 'flex';
            
            paginacaoSpan1.style.background = 'transparent';
            paginacaoSpan2.style.background = 'transparent';
            paginacaoSpan3.style.background = '#7ab317';

            containerHome.style.background = "url('images/capa3.png') center top";
            containerHome.style.backgroundSize = "cover";

            paginacao3.style.padding = "30rem 0 0 0";
            paginacao3.style.justifyContent = "flex-end";

            if(video.currentTime != 0 && video.currentTime != video.duration){
                video.play();
            }
        }

        if(el == logoAMobile[0] || el == logoImgMobile[0] || el == logoAMobile[1] || el == logoImgMobile[1] 
            || el == logoAOculto || el == logoImgOculto){
            e.preventDefault();
            const href = logoAMobile[0].getAttribute('href');
            const to = document.querySelector(href).offsetTop;

            scroll({
                top: to - 80,
                behavior: 'smooth',
            })
            return;
        }

        if(el == rodapeA1 || el == rodapeA2 || el == rodapeA3 || el == rodapeA4 || el == a3 || el == a7 || el == a4 || el == a8){
            e.preventDefault();
            const href = el.getAttribute('href');
            const to = document.querySelector(href).offsetTop;

            scroll({
                top: to - 100,
                behavior: 'smooth',
            })

            return;
        }

    })

    document.addEventListener('mouseover', e => {
        const el = e.target;

        if(el == botaoMobile || el == span1 || el == span2 || el == span3){
            cabecalhoOculto.classList.add('container-oculto-desocultar');
        } else if(el == botaoOculto || el == span4 || el == span5){
            cabecalhoOculto.classList.remove('container-oculto-desocultar');
        }
    })

    setInterval(function(){
        if(Math.round(window.scrollY) >= 50){
            cabecalhoMobile.style.background = '#f7f7f7';
            logoAMobile[1].style.display = 'none';
            logoAMobile[0].style.display = 'block';
        } else{
            cabecalhoMobile.style.background = 'transparent';
            logoAMobile[0].style.display = 'none';
            logoAMobile[1].style.display = 'block';
        }
    }, 100)

})();