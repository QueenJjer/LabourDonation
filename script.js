let totalDonations = 0;
const goal = 4500;
const milk = document.querySelector('.milk');
const donationList = document.getElementById('donationList');
const donateBtn = document.getElementById('donateBtn');
const donateModal = document.getElementById('donateModal');
const submitDonation = document.getElementById('submitDonation');
const closeModal = document.getElementById('closeModal');
const animals = document.querySelectorAll('.animal'); // Grab all animals

donateBtn.addEventListener('click', () => {
  donateModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  donateModal.style.display = 'none';
});

submitDonation.addEventListener('click', () => {
  let amount = parseFloat(document.getElementById('amountInput').value);
  let name = document.getElementById('nameInput').value;
  let message = document.getElementById('messageInput').value;
  let isAnonymous = document.getElementById('anonymousCheck').checked;

  if (!isNaN(amount) && amount > 0) {
    totalDonations += amount;

    // Update milk height
    let milkHeight = (totalDonations / goal) * 100;
    if (milkHeight > 100) milkHeight = 100;
    milk.style.height = milkHeight + '%';

    // Add to donation list
    const li = document.createElement('li');
    li.textContent = `${isAnonymous ? 'Anonymous' : name || 'Anonymous'} donated $${amount}`;
    if (message) li.textContent += `: "${message}"`;
    donationList.prepend(li);

    // Spin all animals
    animals.forEach(animal => {
      animal.classList.add('spin');
      setTimeout(() => animal.classList.remove('spin'), 500);
    });

    // Close modal
    donateModal.style.display = 'none';
  } else {
    alert("Please enter a valid amount");
  }
});
