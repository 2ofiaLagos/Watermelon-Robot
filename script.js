let cartTotal = 0;

// Carrito
function addToCart() {
  const quantity = parseInt(document.getElementById('quantity').value) || 0;
  const pesticide = parseInt(document.getElementById('pesticide').value) || 0;
  const address = document.getElementById('deliveryAddress').value.trim();
  const robotPrice = 600;   // Precio base por robot
  const pesticidePrice = 45; // Precio por litro de pesticida

  cartTotal = (quantity * robotPrice) + (pesticide * pesticidePrice);

  let result = `Total: s/${cartTotal}`;
  if (address) result += ` | Envío a: ${address}`;
  document.getElementById('cart-total').textContent = result;
}

// Encuesta
function submitSurvey() {
  const satisfaction = document.getElementById('satisfaction').value;
  const comments = document.getElementById('comments').value.trim();
  if (!satisfaction) {
    alert('Por favor selecciona tu nivel de satisfacción.');
    return false;
  }
  document.getElementById('survey-result').textContent =
    `Gracias por tu opinión: ${satisfaction}. Comentarios: ${comments || "Sin comentarios"}.`;
  return false;
}

// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(index){
  slides.forEach((s,i)=> s.classList.toggle('active', i===index));
}
function nextSlide(){
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 4000);

// Menú responsive
function toggleMenu(){
  document.querySelector('.nav-links ul').classList.toggle('show');
}
