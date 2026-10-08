const recipes = [
  { id: 1, name: "Lagos Party Jollof Rice", time: "60 mins", heat: "Medium", price: 4500, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80", desc: "Smoky party Jollof with peppered chicken" },
  { id: 2, name: "Egusi Soup with Assorted Meat", time: "45 mins", heat: "Hot", price: 6000, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80", desc: "Rich melon seed soup with bitter leaf and stockfish" },
  { id: 3, name: "Suya - Spicy Grilled Beef", time: "30 mins", heat: "Very Hot", price: 3000, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", desc: "Street-style suya with yaji spice, onions and tomatoes" },
  { id: 4, name: "Amala & Ewedu with Gbegiri", time: "40 mins", heat: "Mild", price: 3500, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", desc: "Soft brown amala from Ibadan with green ewedu and yellow gbegiri" },
  { id: 5, name: "Ofada Rice & Ayamase Stew", time: "50 mins", heat: "Very Hot", price: 5000, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80", desc: "Local Ofada rice with designer green pepper stew" },
  { id: 6, name: "Pounded Yam & Efo Riro", time: "45 mins", heat: "Medium", price: 5500, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", desc: "Smooth pounded yam with vegetable soup" },
  { id: 7, name: "Moi Moi - Bean Pudding", time: "60 mins", heat: "Mild", price: 1500, image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80", desc: "Steamed bean cake with fish, egg and corned beef" },
  { id: 8, name: "Ewa Agoyin & Agege Bread", time: "30 mins", heat: "Hot", price: 2500, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80", desc: "Mashed honey beans with spicy palm oil stew and soft Agege bread" },
  { id: 9, name: "Asun - Spicy Grilled Goat", time: "35 mins", heat: "Very Hot", price: 4000, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80", desc: "Smoky grilled goat meat with habanero pepper from Ikeja" }
];
function displayRecipes(list) {
  const container = document.getElementById('recipe-container');
  if (!container) return;
  const html = list.map(recipe => `
    <div class="card">
      <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" width="400" height="250" 
      onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'">
      <h3>${recipe.name}</h3>
      <p>${recipe.desc}</p>
      <div class="meta">
        <span>⏱ ${recipe.time}</span>
        <span>🌶 ${recipe.heat}</span>
        <span>💰 ₦${recipe.price}</span>
      </div>
      <button class="btn small" onclick="showPrice(${recipe.id})">Order Now</button>
    </div>
  `).join('');
  container.innerHTML = html;
}

function showPrice(id) {
  const found = recipes.find(r => r.id === id);
  if (found) {
    alert(found.price > 5000 ? `${found.name} is premium: ₦${found.price}` : `${found.name} costs ₦${found.price} - Student friendly!`);
  }
}

function filterCheap() { displayRecipes(recipes.filter(r => r.price < 4000)); }
function showAll() { displayRecipes(recipes); }

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('navLinks')?.classList.toggle('open');
  });
  document.getElementById('cheapBtn')?.addEventListener('click', filterCheap);
  document.getElementById('allBtn')?.addEventListener('click', showAll);
  
  displayRecipes(recipes);

  const yearEl = document.getElementById('year') || document.getElementById('currentyear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const modEl = document.getElementById('lastModified');
  if (modEl) modEl.textContent = `Last Modified: ${document.lastModified}`;
});