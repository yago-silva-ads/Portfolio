function solicitarOrcamento(nomeSolucao) {
  // 1. Rastreia interesse em solução no Meta Pixel
  if (typeof fbq !== "undefined") {
    fbq("track", "Lead", {
      content_name: nomeSolucao,
      status: "Interesse em Orçamento Tech",
    });
  }

  // 2. Abre WhatsApp com mensagem profissional
  const telefone = "5511984370338";
  const mensagem = `Olá, Yago! Vi seu portfólio e quero inovar a tecnologia da minha empresa. Podemos conversar sobre ${nomeSolucao}?`;
  const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

// Compatibilidade com chamadas antigas
const comprar = solicitarOrcamento;

