/**Essse é o JS do Login */
const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');


    function logar(){

        var login = document.getElementById('name').value;
        var Email = document.getElementById('email').value;
        var senha = document.getElementById('password').value;

        if(login == "Rodrigo Pinheiro" && Email =="rodrigorpzim@hotmail.com" && senha == "RoThazim"){
            alert('Sucesso');
            location.href = "file:///c%3A/Users/gelie/Documents/Rodrigo/GitHub/Rel%C3%B3gio%20Digital/index.html";
        }else{
            alert('Usuario ou senha incorretos');
        }

    }

});