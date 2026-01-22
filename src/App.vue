<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo">Esther.dev</div>
      <div class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav-links" :class="{ active: isMenuOpen }">
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#soft-skills" @click="closeMenu">Soft Skills</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </div>
    </nav>

    <!-- Main content -->
    <main>
      <Home />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './components/Home.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #0b1120;
  color: #fff;
}

/* Navbar fixed to top */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0b1120;
  z-index: 9999;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: white;
  transition: 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: rgb(14, 228, 14);
}

main {
  padding-top: 80px;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .navbar {
    padding: 1rem 1.5rem;
  }
  
  .hamburger {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: 80px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: #0b1120;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
    transition: left 0.3s ease;
    gap: 2rem;
  }
  
  .nav-links.active {
    left: 0;
  }
  
  .nav-links a {
    font-size: 1.2rem;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 1rem;
  }
  
  .logo {
    font-size: 1.3rem;
  }
}
</style>




