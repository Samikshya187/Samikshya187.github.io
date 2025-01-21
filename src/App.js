import logo from './logo.svg';
import './App.css';
import image from './avataaars (1).png';
import image1 from './avataaars.png';


function App() {
  return (
    <div class="container">
    {/* <!-- Homepage Section --> */}
    <section class="section homepage" id="home">
      <div class="content">
        <h1>Hello, I'm <span>Samikshya Duwadi</span></h1>
        <p>A creative enthusiast passionate about crafting unique experiences and designs.</p>
      </div>
      <div class="image">
        <img src={image}></img>
      </div>
    </section>

    {/* <!-- About Section --> */}
    <section class="section about" id="about">
      <div class="image">
        <img src={image1}></img>
      </div>
      <div class="content">
        <h2>About Me</h2>
        <p>
          I am a highly motivated individual with a knack for innovation. My goal is to design 
          engaging content that resonates with people while maintaining a professional approach.
        </p>
      </div>
    </section>

    {/* <!-- Education Section --> */}
    <section id="education">
  <h2>Education</h2>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-content">
        <h3>Master's in Computer Science</h3>
        <p>XYZ University, 2020 - 2022</p>
        <p>Specialized in Artificial Intelligence and Data Analysis.</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-content">
        <h3>Bachelor's in Information Technology</h3>
        <p>ABC College, 2016 - 2020</p>
        <p>Focused on software development and database systems.</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-content">
        <h3>High School</h3>
        <p>XYZ High School, 2014 - 2016</p>
        <p>Graduated with a focus on science and mathematics.</p>
      </div>
    </div>
  </div>
</section>


    {/* <!-- Experience Section --> */}
    <section class="section experience" id="experience">
      <h2>Experience</h2>
      <div class="cards">
        <div class="card">
          <h3>Frontend Developer</h3>
          <p>Designed and developed interactive web features for XYZ Company.</p>
        </div>
        <div class="card">
          <h3>Graphic Designer</h3>
          <p>Created branding materials and visuals for ABC Studio.</p>
        </div>
      </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section class="section contact" id="contact">
      <h2>Contact Information</h2>
      <p>Email: <strong>samikshya.duwadi@example.com</strong></p>
      <p>Phone: <strong>+123456789</strong></p>
      <p>Location: <strong>Kathmandu, Nepal</strong></p>
    </section>
  </div>
  );
}

export default App;
