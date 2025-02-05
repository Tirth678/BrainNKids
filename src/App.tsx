import React from 'react'; // Uncommented the import statement
import { Routes, Route } from 'react-router-dom';
import { BookOpen, MessageSquare, PenTool, Speech, Brain } from 'lucide-react'; // Added Brain import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import logo from '../src/assets/WhatsApp Image 2025-02-03 at 10.01.22.jpeg';
import CourseCard from './components/CourseCard';
import ContactForm from './components/ContactForm';
import CourseDetails from './components/CourseDetails';

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
    id: 'communication',
    title: 'English Communication',
    description: 'Build strong communication skills through interactive speaking and listening exercises.',
    icon: MessageSquare,
    levels: 1,
    ageGroup: '6-14 years',
    skills: [
      'Speaking',
      'Reading',
      'Writing',
      'Listening',
      'Grammar', // Fixed typo from 'Grammer' to 'Grammar'
      'Pronunciation',
      'Vocabulary'
    ],
    detailedDescription: `The English Speaking Course for children aims at making the child understand and learn the language, and most importantly confidently
  speak the language. To help a child overcome their hesitation and become fluent in the language. We have designed a course for young learners which focuses on the usage of various grammar
  rules to help speak English correctly with confidence.`,
    programLevels: [
      'Basic Communication & Listening Skills',
      'Intermediate Speaking & Presentation'
    ]
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary Building',
    description: 'Expand your word power and enhance language skills with our vocabulary program.',
    icon: BookOpen,
    levels: 1,
    ageGroup: '8-15 years',
    skills: [
      'Word recognition',
      'Context understanding',
      'Word usage',
      'Reading comprehension',
      'Language fluency'
    ],
    detailedDescription: 'The Vocabulary Building program helps students expand their English vocabulary through systematic learning of new words, their meanings, and usage. Students learn to use words effectively in different contexts while improving their reading and writing abilities.',
    programLevels: [
      'Basic Vocabulary & Word Recognition',
      'Word Usage & Context Understanding'
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
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-white">
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
          <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
                    alt="Students learning"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-4xl font-bold mb-6 text-black">About Brain N Kids</h2>
                  <p className="text-black mb-6">
                  At Brain N' Kids, our mission is to unlock the hidden potentials of the younger generation through comprehensive brain training with Abacus and Language programs grounded in phonics learning. We strive to cultivate academic excellence, critical thinking, and self-assurance in our students, empowering them to excel in all aspects of life.
                   Brain N' Kids incorporated in year 2017. It's ISO 9001:2015
                  certified company and registered for trademark.
                   Brain N' Kids is a professionally managed educational institution specializing in internationally accredited Brain Development courses such as Abacus, English Improvement programs like Phonics and English Grammar, and cursive handwriting courses.
                   We pride ourselves on our team of highly trained, certified educators, whose extensive experience, expertise, and unwavering commitment to student development ensure exceptional learning outcomes. With a personalized approach tailored to individual needs, our teachers foster holistic growth and academic success.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-black">
                      <Brain className="text-red-400" />
                      <span>Expert Teachers</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <MessageSquare className="text-red-400" />
                      <span>Small Class Sizes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-black">Contact Us</h2>
              <ContactForm />
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black text-gray-400 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p>© 2024 Brain N Kids. All rights reserved.</p>
            </div>
          </footer>
        </div>
      } />
      <Route path="/course/:courseId" element={<CourseDetails courses={courses} />} />
    </Routes>
  );
}

export default App;