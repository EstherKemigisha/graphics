<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="home">

      <div class="hero">
        <div class="hero-content">
          <h1>Hi, I'm Esther Kemigisha</h1>
          <h2>Full-Stack Software Developer</h2>
          <p>
            I'm a passionate full-stack developer specializing in creating intuitive, responsive web applications.
            With expertise in HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Vue.js, React, Node.js, NestJS, and MongoDB, I build scalable solutions
            that deliver exceptional user experiences.
            <br /><br />
            My focus is on clean code, modern UI design, and performance optimization. I thrive on solving complex
            problems and continuously learning emerging technologies to stay at the forefront of web development.
            <br /><br />
            Beyond coding, I bring strong graphic design skills that enhance user experiences through:
            <br />• UI/UX design with wireframes, mockups, and brand assets
            <br />• Visual content creation using Photoshop, Illustrator, and Figma
            <br />• Seamless integration of design and development for cohesive results
            <br /><br />
            This unique combination of technical expertise and design sensibility allows me to create applications
            that are both visually stunning and highly functional.
          </p>
          
        </div>

        <div class="hero-image">
          <img src="/src/assets/star.jpg" alt="Esther" />
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section">
      <h1>My Skills</h1>
      <div class="skills-grid">
        <div class="skill"><i class="fab fa-html5" style="color: #e34c26;"></i><span>HTML5</span></div>
        <div class="skill"><i class="fab fa-css3-alt" style="color: #264de4;"></i><span>CSS3</span></div>
        <div class="skill"><i class="fab fa-js" style="color: #f0db4f;"></i><span>JavaScript</span></div>
        <div class="skill"><i class="fab fa-vuejs" style="color: #42b883;"></i><span>Vue.js</span></div>
        <div class="skill"><i class="fab fa-react" style="color: #61dafb;"></i><span>React</span></div>
        <div class="skill"><i class="fab fa-node-js" style="color: #68a063;"></i><span>Node.js</span></div>
        <div class="skill"><i class="fas fa-database" style="color: #4db33d;"></i><span>MongoDB</span></div>
        <div class="skill"><i class="fab fa-git-alt" style="color: #f1502f;"></i><span>Git</span></div>
      </div>
    </section>

    <!-- Soft Skills Section -->
    <section id="soft-skills" class="soft-skills-section">
      <h1>Soft Skills</h1>
      <div class="soft-skills-grid">
        <div class="soft-skill"><i class="fas fa-comments"></i><span>Communication</span></div>
        <div class="soft-skill"><i class="fas fa-users-cog"></i><span>Teamwork</span></div>
        <div class="soft-skill"><i class="fas fa-lightbulb"></i><span>Problem-Solving</span></div>
        <div class="soft-skill"><i class="fas fa-clock"></i><span>Time Management</span></div>
        <div class="soft-skill"><i class="fas fa-brain"></i><span>Adaptability</span></div>
        <div class="soft-skill"><i class="fas fa-handshake"></i><span>Collaboration</span></div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section">
      <h1>Projects</h1>
      <p class="intro-text">
        Here's a showcase of projects that demonstrate my expertise in full-stack development, 
        UI/UX design, and modern web technologies. Each project reflects my commitment to 
        creating functional, visually appealing, and user-centered solutions.
      </p>

      <div class="projects-container">
        <div class="project-card" onclick="window.open('https://karibu-7r7t.onrender.com/', '_blank')" style="cursor: pointer;">
          <img src="/src/assets/kgl.png" alt="KGL Produce Management System" />
          <h2>KGL Produce Management System</h2>
          <p>A comprehensive full-stack web application for managing procurement, sales, and credit operations in wholesale produce business with real-time inventory tracking.</p>
        </div>
        <div class="project-card">
          <img src="/src/assets/pot.png" alt="Frontend Portfolio" />
          <h2>Personal Portfolio Website</h2>
          <p>A responsive portfolio showcasing my development skills, built with modern web technologies and featuring interactive UI components.</p>
        </div>
        <div class="project-card">
          <img src="/src/assets/jewelry.png" alt="KHOHAV Jewelry E-commerce" />
          <h2>KHOHAV – Jewelry E-commerce Platform</h2>
          <p>An elegant e-commerce frontend for a luxury jewelry brand, featuring sophisticated product displays and seamless shopping experience.</p>
        </div>
        <div class="project-card">
          <img src="/src/assets/kindergarten.png" alt="Kindergarten Website" />
          <h2>Kindergarten Educational Website</h2>
          <p>A vibrant, family-friendly website featuring class information, enrollment forms, and engaging content designed to connect with parents and showcase educational programs.</p>
        </div>
        <div class="project-card">
          <img src="/src/assets/mine.png" alt="Personal Website" />
          <h2>Professional Portfolio Site</h2>
          <p>A clean, modern personal website highlighting professional background, skills, and achievements with intuitive navigation and responsive design.</p>
        </div>
        <div class="project-card">
          <img src="/src/assets/gym.png" alt="Fitness Center Website" />
          <h2>Fitness Center Website</h2>
          <p>A dynamic fitness website featuring class schedules, trainer profiles, and membership information with strong visual appeal and user-friendly navigation.</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <!-- <section id="contact" class="contact-section">
      <h1>Contact Me</h1>
      <p class="contact-intro">Feel free to reach out via this form or connect with me on social media.</p>
      <form class="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" class="btn-primary">Send Message</button>
      </form>
    </section> -->

<section id="contact" class="contact-section">
  <h1>Let's Connect</h1>
  <p>I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers. Feel free to reach out!</p>
  <ul class="contact-list">
    <li>
      <strong>Email:</strong>
      <a href="mailto:estarkemi@gmail.com">estarkemi@gmail.com</a>
    </li>
    <li>
      <strong>Phone:</strong> +257-788-345-329
    </li>
    <li>
      <strong>LinkedIn:</strong>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank">Connect with me on LinkedIn</a>
    </li>
  </ul>
</section>


    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2026 Esther.dev. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// no dynamic script for now
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: rgb(255, 255, 255);
  color: black;
}

/* Add padding top to sections to avoid being hidden behind fixed navbar */
.home,
#skills,
#soft-skills,
#projects,
#contact {
  padding-top: 80px; /* Adjust according to navbar height */
}

/* Shared Styles */
.home {
  min-height: 100vh;
  background-color: #0b1120;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 3rem 3rem; /* bottom padding reduced a bit */
}

.hero-content {
  max-width: 600px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: white;
}

.hero-content h2 {
  color: rgb(14, 228, 14);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hero-content p {
  margin-bottom: 2rem;
  line-height: 1.5;
  color: white;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: rgb(14, 228, 14);
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.btn-outline {
  padding: 0.75rem 1.5rem;
  border: 2px solid rgb(14, 228, 14);
  color: rgb(14, 228, 14);
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
}

.socials {
  display: flex;
  gap: 1rem;
}

.socials a {
  color: white;
  font-size: 1.25rem;
}

.socials a:hover {
  color: rgb(14, 228, 14);
}

.hero-image img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
}

/* Projects Section */
.projects-section {
  text-align: center;
  padding: 40px 20px;
  background-color: #0b1120;
}

.projects-section h1 {
  font-size: 2.5em;
  margin-bottom: 16px;
  color: rgb(14, 228, 14);
}

.intro-text {
  max-width: 800px;
  margin: 0 auto 30px auto;
  font-size: 1em;
  line-height: 1.5;
  color: #ccc;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.project-card {
  background-color: black;
  color: white;
  padding: 15px;
  border-radius: 12px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid transparent;
}

.project-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 255, 255, 0.3);
  border-color: rgba(14, 228, 14, 0.3);
}

.project-card:hover img {
  transform: scale(1.02);
}

.project-card h2 {
  margin-top: 0;
  font-size: 1.3em;
  font-weight: bold;
}

.project-card p {
  font-size: 0.9em;
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero {
    padding: 3rem 2rem;
  }
  
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-content h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  
  .hero-content h2 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-content p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .projects-container {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 1rem;
  }
  
  .projects-section {
    padding: 30px 15px;
  }
  
  .projects-section h1 {
    font-size: 2rem;
  }

  .hero-image img {
    width: 280px;
    height: 280px;
    margin-top: 2rem;
  }
  
  .skills-section,
  .soft-skills-section,
  .contact-section {
    padding: 40px 15px;
  }
  
  .skills-section h1,
  .soft-skills-section h1,
  .contact-section h1 {
    font-size: 2rem;
  }
  
  .skills-grid,
  .soft-skills-grid {
    gap: 20px;
  }
  
  .skill,
  .soft-skill {
    width: 80px;
  }
  
  .skill i {
    font-size: 2.5rem;
  }
  
  .soft-skill i {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1.5rem 1rem;
  }
  
  .hero-content h1 {
    font-size: 1.8rem;
  }
  
  .hero-content h2 {
    font-size: 1.4rem;
  }
  
  .hero-content p {
    font-size: 0.9rem;
  }
  
  .hero-image img {
    width: 220px;
    height: 220px;
    margin-top: 1.5rem;
  }
  
  .projects-section,
  .skills-section,
  .soft-skills-section,
  .contact-section {
    padding: 30px 10px;
  }
  
  .projects-section h1,
  .skills-section h1,
  .soft-skills-section h1,
  .contact-section h1 {
    font-size: 1.8rem;
  }
  
  .intro-text {
    font-size: 0.9rem;
    padding: 0 10px;
  }
  
  .project-card {
    padding: 12px;
  }
  
  .project-card h2 {
    font-size: 1.1rem;
  }
  
  .project-card p {
    font-size: 0.85rem;
  }
  
  .skills-grid {
    gap: 15px;
  }
  
  .skill {
    width: 70px;
    font-size: 0.85rem;
  }
  
  .skill i {
    font-size: 2rem;
  }
  
  .soft-skills-grid {
    gap: 15px;
  }
  
  .soft-skill {
    width: 90px;
    font-size: 0.85rem;
  }
  
  .soft-skill i {
    font-size: 1.8rem;
  }
  
  .contact-list li {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
  
  .footer {
    font-size: 0.8rem;
    padding: 15px;
  }
}

/* Skills Section */
.skills-section {
  text-align: center;
  padding: 60px 20px;
  background-color: #0b1120;
}

.skills-section h1 {
  font-size: 2.5em;
  margin-bottom: 40px;
  color: rgb(14, 228, 14);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  width: 100px;
  transition: transform 0.3s ease;
}

.skill:hover {
  transform: translateY(-5px);
}

.skill i {
  font-size: 3rem;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}

.skill:hover i {
  transform: scale(1.1);
}

/* Soft Skills */
.soft-skills-section {
  text-align: center;
  padding: 60px 20px;
  background-color: #0b1120;
}

.soft-skills-section h1 {
  font-size: 2.5em;
  margin-bottom: 40px;
  color: white;
}

.soft-skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.soft-skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  width: 120px;
  text-align: center;
  transition: transform 0.3s ease;
}

.soft-skill:hover {
  transform: translateY(-5px);
}

.soft-skill i {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: rgb(14, 228, 14);
  transition: transform 0.3s ease;
}

.soft-skill:hover i {
  transform: scale(1.1);
}

/* Contact Section */
.contact-section {
  background-color: #0b1120;
  text-align: center;
  padding: 60px 20px;
}

.contact-section h1 {
  font-size: 2.5em;
  color: rgb(14, 228, 14);
  margin-bottom: 10px;
}

.contact-intro {
  color: #ccc;
  margin-bottom: 30px;
  font-size: 1em;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #444;
  border-radius: 6px;
  background-color: #1a1a2e;
  color: #fff;
  font-size: 1rem;
  resize: none;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: rgb(14, 228, 14);
  outline: none;
}

.contact-form button {
  align-self: flex-start;
}

/* Footer */
.footer {
  text-align: center;
  padding: 20px;
  background-color: #0b1120;
  color: #ccc;
  font-size: 0.9rem;
}
.contact-section {
  padding: 2rem 1rem;
  background: black;
  border-radius: 8px;
  color: white;
}
.contact-list {
  list-style: none;
  padding: 0;
}
.contact-list li {
  margin-bottom: 1rem;
}
.contact-list a {
  color: #0077b6;
  text-decoration: none;
}

</style>







