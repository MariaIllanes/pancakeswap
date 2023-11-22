function selectTransactionSpeed(speedNumber) {
  document.querySelectorAll('.transaction-speed-btn').forEach(button => {
    button.classList.remove('selected');
});

  document.getElementById('speedBtn' + speedNumber).classList.add('selected');
};

document.addEventListener('DOMContentLoaded', function () {
  selectTransactionSpeed(1);
});