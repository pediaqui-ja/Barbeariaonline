document.getElementById("whatsappButton").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const servico = document.getElementById("servico").value;
    
    if (nome && telefone && data && hora && servico) {
        const mensagem = 
            `Olá, meu nome é ${nome}. Gostaria de agendar um horário na Barbearia Estilo no dia ${data} às ${hora} para o serviço de ${servico}. Meu telefone de contato é ${telefone}.`;
        
        const whatsappLink = `https://wa.me/5527997294468?text=${encodeURIComponent(mensagem)}`;
        window.open(whatsappLink, "_blank");

        // Exibe a mensagem de confirmação
        document.getElementById("mensagem").textContent = "Agendamento enviado pelo WhatsApp com sucesso!";
        
        // Limpa o formulário
        document.getElementById("agendamentoForm").reset();
    } else {
        document.getElementById("mensagem").textContent = "Por favor, preencha todos os campos.";
    }
});