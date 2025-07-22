<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo">Esther.dev</div>
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#soft-skills">Soft Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <!-- Main content -->
    <main>
      <Home />
    </main>
  </div>
</template>

<script setup>
import Home from './components/Home.vue'
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
  padding-top: 80px; /* height of navbar */
}
</style>




