// script.js
// --- Dark Mode Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
if(themeToggleBtn) {
    themeToggleBtn.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggleBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// --- Dummy Products & Rendering ---
const products = [
    { id: 1, name: "Premium Wireless Headphones", price: 1500000, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, name: "Smart Watch Series X", price: 2100000, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 3, name: "Mechanical Keyboard Pro", price: 950000, img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" },
    { id: 4, name: "Minimalist Desk Lamp", price: 350000, img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80" }
];

const productContainer = document.getElementById('product-grid');

function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

export function renderProducts() {
    if (!productContainer) return;
    
    productContainer.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatRupiah(product.price)}</div>
                <button class="btn btn-primary btn-buy" onclick="buyItem('${product.name}', ${product.price})">
                    <i class="fas fa-shopping-cart"></i> Beli Sekarang
                </button>
            </div>
        `;
        productContainer.appendChild(card);
    });
}

// WhatsApp Redirect Logic (Exposed to window for onclick)
window.buyItem = function(name, price) {
    const waNumber = "6281234567890"; // Ganti dengan nomor WA admin
    const message = `Halo NexturaStore! Saya tertarik untuk membeli: %0A%0A*Barang:* ${name}%0A*Harga:* ${formatRupiah(price)}%0A%0AApakah stoknya masih tersedia?`;
    window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
}
