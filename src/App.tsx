import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BookOpen, PenTool, Speech, Brain } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import ContactForm from './components/ContactForm';
import CourseDetails from './components/CourseDetails';
import EnrollmentPopup from './components/EnrollmentPopup';
import BranchesPopup from './components/BranchesPopup';

export const courses = [
  {
    id: 'abacus',
    title: 'Abacus Mental Arithmetic',
    description: 'Develop lightning-fast calculation skills and enhance mental math abilities through our proven abacus training program.',
    icon: Brain,
    levels: 2,
    ageGroup: '4-7 years',
    skills: [
      'Visualization',
      'Photographic Memory',
      'Concentration',
      'Speed',
      'Memory Retention',
      'Accuracy',
      'Memory Recall',
      'Listening Skills'
    ],
    detailedDescription: `
    Our Abacus Mental Arithmetic program is meticulously designed to foster whole brain development in children aged 4 to
    14. By stimulating both hemispheres of the brain, this course enhances fundamental skills including addition, subtraction, multiplication, and division.
    Through the manipulation of beads, students develop a visual representation of mathematical problems, leading to the cultivation of a photographic memory.
    With consistent practice, students learn
    to solve problems effortlessly, ultimately honing their cognitive abilities without reliance on external aids such as the abacus.
    `,
    programLevels: [
      'Basic Operations & Number Recognition',
    ]
  },
  {
    id: 'phonics',
    title: 'Phonics Smart',
    description: `Phonics course also plays a crucial role in fostering early literacy skills, which are essential for academic success and lifelong learning.`,
    icon: Speech,
    levels: 1,
    ageGroup: '4-7 years',
    skills: [
      'Alphabet Sounds',
      'CVC Words',
      'Short Vowel Sounds',
      'Long Vowel Sounds',
      'Magic-E',
      'R-controlled Words',
      'Diphongs and Blending Words'
    ],
    detailedDescription: `
    The "Brain N' Kids" phonics course helps kids aged 4 to 7 learn sounds and letters. It focuses on understanding unknown words and teaches 44 different sounds. The course improves reading skills using fun activities, games, and flashcards. By
    using audio-visual methods, it makes learning engaging and effective, boosting kids' confidence in reading. Without phonics instruction, many students may struggle with reading and encounter difficulties in comprehension. Phonics course also plays a crucial role in fostering early literacy skills, which are essential for academic success and lifelong learning.`,
    programLevels: [
      'Letter Recognition & Basic Phonics',
      'Blending Sounds & Sight Words'
    ]
  },
  {
    id: 'writing',
    title: 'Writing Champ',
    description: 'Transform your child into a confident writer with our structured writing program.',
    icon: PenTool,
    levels: 1,
    ageGroup: '6-20 years',
    skills: [
      'Creative writing',
      'Grammar mastery',
      'Vocabulary usage',
      'Story structure',
      'Essay writing'
    ],
    detailedDescription: `Unlock the artistry of cursive handwriting with our expert-led course.
    Experience fluidity and elegance in your writing. Our Handwriting course improves fine motor skills and cognitive function.`,
    programLevels: [
      'Sentence Building & Basic Grammar',
      'Paragraph Writing & Creative Expression'
    ]
  },
  {
    id: 'dmit',
    title: 'Dmit Report',
    description: 'Expand your word power and enhance language skills with our vocabulary program.',
    icon: BookOpen,
    levels: 1,
    ageGroup: '4+ years',
    skills: [
      'Word recognition',
      'Context understanding',
      'Word usage',
      'Reading comprehension',
      'Language fluency'
    ],
    detailedDescription: `DMIT helps in understanding the different area of your brain that are over and under emphasized.
It understands your child's innate personality that will be beneficial for the future.
This also identifies the strengths and weakness of a particular person.`,
    programLevels: [
      'Basic Vocabulary & Word Recognition',
      'Word Usage & Context Understanding'
    ]
  }
];

function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);

  useEffect(() => {
    setIsEnrollmentOpen(true); // Open the enrollment popup on page load
  }, []);

  return (
    <Routes>
      <Route path="/course/:courseId" element={<CourseDetails />} />
      <Route path="/" element={
        <div className="min-h-screen bg-black">
          <Navbar />
          <Hero />
          
          {/* Courses Section */}
          <section id="courses" className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">
              {/* ... (existing about section content) */}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h2>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button 
                  onClick={() => setIsContactFormOpen(true)} 
                  className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors"
                >
                  Open Contact Form
                </button>
                <button 
                  onClick={() => setIsBranchesOpen(true)} 
                  className="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition-colors"
                >
                  View Our Branches
                </button>
              </div>
              {isContactFormOpen && <ContactForm />}
            </div>
          </section>

          {/* Enrollment Popup */}
          <EnrollmentPopup 
            isOpen={isEnrollmentOpen}
            onClose={() => setIsEnrollmentOpen(false)}
          />

          {/* Branches Popup */}
          <BranchesPopup
            isOpen={isBranchesOpen}
            onClose={() => setIsBranchesOpen(false)}
          />

          {/* Footer */}
          <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p>© 2024 Brain N Kids. All rights reserved. T&Cs applied.</p>
            </div>
          </footer>
        </div>
      } />
    </Routes>
  );
}

export default App;
