document.querySelectorAll('.botaoPagamento').forEach(button => {
   button.addEventListener('click', function() {
       const contentId = this.getAttribute('data-content');
       // Lógica para redirecionar para a página de pagamento ou gerar QR Code Pix
       // Por exemplo, redirecionar para uma página de pagamento específica:
       window.location.href = `pagamento.html?content=${contentId}`;
   });
});
