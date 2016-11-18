// Newsletter Class Prototype
var NewsLetterElement = function(){
    
    var checked, newsLetterimg, form, newsletter, titulo, descricao, nome, email, submit;
    
    function failModal(errorMsg) {
            
        var errorMsg = errorMsg || "Por favor, preencha todos os campos corretamente.";
            
        // Simula evento de clique, chama o modal oficial do newsletter do site.
        $(".newsletter-botao").click();
        // Preenche modal mensagem de sucesso.
        $("#container-modais .content").html(errorMsg);
    }

    function sucessModal(name) {
        // Simula evento de clique, chama o modal oficial do newsletter do site.
        $(".newsletter-botao").click();
        // Preenche modal mensagem de sucesso.
        $("#container-modais .content").html("Parabéns <b>"+name.value+"</b>, você foi adicionado em nossa base newsletter.");
        document.querySelector("#container-modais .content").appendChild(checked);
    }
    
    this.create = function(){
        console.info("creating Elements...");
        
        form =  document.createElement("form");
        newsletter = document.createElement("div");
        centralizar = document.createElement("div");
        titulo = document.createElement("h3");
        descricao = document.createElement("p");
        nome = document.createElement("input");
        email = document.createElement("input");
        submit = document.createElement("input");
        checked = document.createElement("img");
        newsLetterimg = document.createElement("img");
        console.info("OK!");
        return this;
    }
    
    this.applyProperties = function(){
        console.info("applying Properties...");
        
        // Check symbol
        checked.src = "http://i.imgur.com/r7oZrQS.gif";
        
        // Apply in Newsletter Image
        newsLetterimg.src = "http://i.imgur.com/HR23wzF.png";
        newsLetterimg.style.width = "18%";
        newsLetterimg.style.height = "18%";
        newsLetterimg.style.marginRight = "60px";
        newsLetterimg.style.float = "left";
        newsLetterimg.style.filter = "grayscale(20%)";
        newsLetterimg.style.webkitFilter = "grayscale(20%)";
        newsLetterimg.style.boxShadow = "0 0 22px rgba(0,0,0,0.2)";        
        
        // Apply Form
        form.setAttribute("action", "/home");
        form.setAttribute("id", "__FormNewsletter");
        form.setAttribute("method", "POST");
        form.style.marginBottom = "10px";
        
        // Apply newsletter
        newsletter.setAttribute("id", "my-newsletter");
        newsletter.style.padding = "20px 0px";
        newsletter.style.background = "linear-gradient(#fff, rgba(0,0,0,0.06))";
        newsletter.style.boxShadow = "0 0 35px rgba(0,0,0,0.2)";
        newsletter.style.boxShadow = "0 0 35px rgba(0,0,0,0.1)";
        newsletter.style.color = "#222";
        newsletter.style.display = "flex";
        newsletter.style.justifyContent = "center";
        
        // Apply centralizar
        newsletter.setAttribute("class", "centralizar");
        
        // Apply newsletter
        titulo.textContent = "RECEBA NOSSAS PROMOÇÕES";
        
        // Apply descricao
        descricao.textContent = "Fique por dentro da moda e receba as melhores ofertas da Marisa por e-mail.";
        descricao.style.fontSize = "12px";
        
        // Apply nome
        nome.setAttribute("type", "text");
        nome.setAttribute("placeholder", "Nome:");
        
        // Apply email
        email.setAttribute("type", "email");
        email.setAttribute("placeholder", "E-mail:");
        
        // Apply submit
        submit.setAttribute("type", "button");
        submit.setAttribute("value", "ENVIAR");
        submit.setAttribute("class", "my-submit");
        submit.style.background = "#980d69";
        submit.style.color = "#fff";
        submit.style.border = "1px solid #980d00";
        submit.style.borderRadius = "2px";
        submit.style.width = "9em";
        submit.style.height = "4em";
        
        // Coloca todos os inputs do novo Newsletter numa lista
        var input_l = document.querySelectorAll("#my-newsletter input");
        // Entao aplica para todos os campos da lista os seguintes regras
        for(var el=0; el<input_l.length; el++)
        {
            input_l[el].setAttribute("autocomplete", "off");
            input_l[el].style.border = "none";
            input_l[el].style.borderBottom = "1px solid #ccc";
            input_l[el].style.boxSizing = "border-box";
            input_l[el].style.width = "12em";
            input_l[el].style.height = "2em";
            input_l[el].style.margin = "4px 4px";
            input_l[el].style.outline = "none";
            input_l[el].style.focus = "none";
            input_l[el].style.borderRadius = "3px";
            input_l[el].style.boxShadow = "0 0 15px rgba(0,0,0,0.1)";  
            input_l[el].style.fontSize = "105%";
        }
        console.info("OK!");
        return this;
    }
        
    this.applyEventListeners = function(applyBool){
        
        // simula a validação dos campos
        document.body.querySelector(".my-submit").addEventListener("click",_=>{
            
            // Regex para checar o formato do email
            var checkInfo = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
                
            if( document.querySelector("#my-newsletter input:nth-of-type(1)").value == ""
                || // Se algum campo estiver vazio, lança o modal.
            (document.querySelector("#my-newsletter input:nth-of-type(2)").value == "")){
            
            failModal("Por favor, preencha todos os campos corretamente."); // function failModal(errorMsg)
            } else {
                
                if( checkInfo.test(document.querySelector("#my-newsletter input:nth-of-type(2)").value) ){ // Verifica se o email é válido. return: TRUE
                    sucessModal(document.querySelector("#my-newsletter input:first-of-type")); // function sucessModal(void)
                    $("#my-newsletter").slideUp("slow");
                } else
                    failModal("E-mail inválido, por favor, verifique-o e tente novamente."); // function failModal(errorMsg)
            }
        });
        return this;
    }
    
    this.appendAll = function(){
        
        centralizar.appendChild(titulo);
        centralizar.appendChild(descricao);
        centralizar.appendChild(nome);
        centralizar.appendChild(email);
        centralizar.appendChild(submit);

        // Appends all to main newsletter element 
        newsletter.appendChild(newsLetterimg);
        newsLetterimg.style.webkitUserSelect = "none";
        newsletter.appendChild(centralizar);

        // Anexa o elemento newsletter no formulario
        form.appendChild(newsletter);
        // document.querySelector("#my-newsletter").appendChild(newsletter);
        document.querySelector("#prateleira").insertBefore(form, document.querySelector("#prateleira .principal"));
        
        return this;
    }
} // Fim da classe


// Instancia um novo objeto do tipo NewsLetterElement
new NewsLetterElement()
    .create() // Cria os elementos
    .appendAll() // Anexa todos os elementos no DOM
    .applyProperties() // Aplica as propriedades
    .applyEventListeners(true); // [Opcional] gerencia o evento de clique