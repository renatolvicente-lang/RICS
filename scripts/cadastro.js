document.getElementById("form-cadastro").onsubmit = (e) => {
    e.preventDefault();

     let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;


    localStorage.setItem ('login-email',email);
    localStorage.setItem ('login-senha',senha);

    alert("Cadastro realizado com sucesso!")

    window.location.href = 'login.html';


}