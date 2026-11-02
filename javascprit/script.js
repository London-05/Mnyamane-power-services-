// Mnyamane Power Services - Part 3 JavaScript only

// 1. FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.accordion-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});

// 2. Service Search Filter
function filterServices() {
  let input = document.getElementById('serviceSearch').value.toLowerCase();
  document.querySelectorAll('.service-card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(input) ? 'block' : 'none';
  });
}

// 3. Gallery Lightbox
function openLightbox(img) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = img.src;
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// 4. Form Validation - Enquiry
function validateEnquiryForm() {
  let phone = document.getElementById('enqPhone').value;
  let error = document.getElementById('enqError');
  if(phone.length !== 10 || isNaN(phone)) {
    error.innerText = "Error: Enter 10-digit phone number";
    return false;
  }
  error.style.color = "green";
  error.innerText = "Thank you! We will WhatsApp you for a quote.";
  return false;
}

// 5. Form Validation - Contact
function validateContactForm() {
  let email = document.getElementById('conEmail').value;
  let error = document.getElementById('conError');
  if(!email.includes('@')) {
    error.innerText = "Error: Enter valid email";
    return false;
  }
  error.style.color = "green";
  error.innerText = "Message sent! We will contact you in 2 hours.";
  return false;
}

// 6. Map - Regents Park
if(document.getElementById('map')) {
  var map = L.map('map').setView([-26.2345, 28.0436], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([-26.2345, 28.0436]).addTo(map).bindPopup('Mnyamane Power Services - Regents Park');
}