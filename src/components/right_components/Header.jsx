import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <img
          src="https://imgs.search.brave.com/dSnJkVtRZxBo00bHzkxJTM9xhomEBb7tQg_0uCHwMKI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkMjBtUXlH/ZVkvaWRDdi1Pck1p/eS5zdmc_dXBkYXRl/ZD0xNjY3NTY0MTYy/MTE1.svg"
          alt="spotify"
        />
        <div class="nav-content">
          <button>Explore More</button>
          <button>Install App</button>
          <i class="fa-regular fa-bell"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
