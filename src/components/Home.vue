<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="home">
      <div class="hero">
        <div class="hero-content">
          <h1>Hi, I'm Esther Kemigisha</h1>
          <h2>Software Developer</h2>
          <p>
            I'm a passionate Developer focused on creating intuitive and responsive user interfaces.
            Skilled in HTML, CSS, JavaScript, Vue.js, and React, with backend experience in Node.js and MongoDB.
            <br /><br />
            I build scalable full-stack applications that deliver seamless user experiences.
            Driven by clean UI, usability, and performance optimization.
            Continuously learning and evolving with the latest web technologies.
            <br>
            In addition to web development, I bring strong graphic design skills that help create visually appealing and cohesive user experiences. My expertise includes:
  
            Designing UI mockups, wireframes, and brand assets like logos and icons.
            <br><br>
            Producing graphics for web and social media using tools such as Photoshop, Illustrator, and Figma.

            Seamlessly integrating visuals with frontend code for polished, brand-consistent results.
            <br>
            Combining frontend development and my backend ensures my applications are both visually striking and highly functional.
          </p>
        </div>

        <div class="hero-image">
          <img :src="starImage" alt="Esther" />
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
        Here is a selection of projects that I have worked on. Each project highlights my skills in both frontend and backend development, as well as my ability to design engaging user experiences.
      </p>

      <div class="projects-container">
        <div class="project-card">
          <img :src="kglImage" alt="KGL Inventory Management System" />
          <h2>KGL-Inventory Management System</h2>
          <p>A full-stack web app for managing procurement, sales, and credit in a wholesale produce business.</p>
        </div>
       
        <div class="project-card">
          <img :src="jewelryImage" alt="KHOHAV Jewelry E-commerce" />
          <h2>Practice-KHOHAV – Jewelry E-commerce Website</h2>
          <p>A modern e-commerce frontend for KHOHAV, a jewelry brand offering elegant and timeless pieces.</p>
        </div>

        <div class="project-card">
          <img :src="kindergartenImage" alt="Kindergarten Website" />
          <h2>Kindergarten Website</h2>
          <p>
            Built a colorful and engaging kindergarten website with information for parents, class details, and contact forms.
            Crafted to be welcoming and informative, making it easy for families to learn about school offerings.
          </p>
        </div>

        <div class="project-card">
          <img :src="mineImage" alt="Personal Website" />
          <h2>Personal Website (My Website)</h2>
          <p>
            Designed and developed a personal website to highlight your skills, and professional background. 
            Included sections for about, projects, contact, and with a clean and modern layout.
          </p>
        </div>

        <div class="project-card">
          <img :src="gymImage" alt="Gym Website" />
          <h2>Gym Website</h2>
          <p>
            Developed a dynamic gym website featuring class schedules, trainer bios, 
            and easy contact options. Designed for strong visual appeal and 
            clear navigation to help users explore fitness
          </p>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <h1>Contact Me</h1>
      <p>You can reach me directly via email or connect with me on the platforms below:</p>
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
          <a href="https://www.linkedin.com/in/esther-kemigisha/" target="_blank">linkedin.com/in/esther-kemigisha</a>
        </li>
      </ul>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 Esther.dev. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// ✅ Fixed image imports (correct file name casing)
import starImage from '../assets/star.jpg'
import kglImage from '../assets/kgl.png'
import jewelryImage from '../assets/jewelry.png' // fixed lowercase
import kindergartenImage from '../assets/kindergarten.png'
import mineImage from '../assets/mine.png'
import gymImage from '../assets/gym.png'
</script>

<style scoped>
/* === All your original styles remain unchanged === */
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
  padding-top: 20px;
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
  padding: 5rem 3rem 3rem;
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
}

.project-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 255, 255, 0.3);
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
}

.skill i {
  font-size: 3rem;
  margin-bottom: 10px;
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
}

.soft-skill i {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: rgb(14, 228, 14);
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
  color: white;
}

.contact-list a {
  color: rgb(14, 228, 14);
  text-decoration: none;
}

.contact-list a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .projects-container {
    grid-template-columns: 1fr;
  }

  .hero-image img {
    width: 250px;
    height: 250px;
    margin-top: 2rem;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 3rem 1rem;
  }

  .hero-content h1 {
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
</style>
