import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BookOpen, Brain, MessageSquare, PenTool, Speech } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
    ageGroup: '5-15 years',
    skills: [
      'Mental calculation',
      'Concentration and focus',
      'Photographic memory',
      'Problem-solving abilities',
      'Numerical confidence'
    ],
    detailedDescription: 'Our Abacus Mental Arithmetic program is designed to enhance your child\'s mathematical abilities through the ancient art of abacus calculation. Using both physical and mental abacus techniques, students develop extraordinary calculation speed and accuracy while improving their overall cognitive abilities.',
    programLevels: [
      'Basic Operations & Number Recognition',
      'Addition & Subtraction Mastery'
    ]
  },
  {
    id: 'phonics',
    title: 'Phonics Smart',
    description: 'Master English pronunciation and reading skills with our comprehensive phonics program.',
    icon: Speech,
    levels: 2,
    ageGroup: '4-8 years',
    skills: [
      'Letter-sound recognition',
      'Blending sounds',
      'Reading fluency',
      'Pronunciation accuracy',
      'Vocabulary development'
    ],
    detailedDescription: 'Phonics Smart is a structured literacy program that teaches children to read and write effectively by understanding the relationship between letters and sounds. Through engaging activities and systematic instruction, children build a strong foundation in reading and spelling.',
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
    levels: 2,
    ageGroup: '7-14 years',
    skills: [
      'Creative writing',
      'Grammar mastery',
      'Vocabulary usage',
      'Story structure',
      'Essay writing'
    ],
    detailedDescription: 'Writing Champ helps students develop strong writing skills through a combination of creative exercises and structured learning. From basic sentence construction to complex essay writing, students learn to express their ideas clearly and effectively.',
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
    levels: 2,
    ageGroup: '6-15 years',
    skills: [
      'Public speaking',
      'Active listening',
      'Conversation skills',
      'Presentation abilities',
      'Confidence building'
    ],
    detailedDescription: 'Our English Communication program focuses on developing essential speaking and listening skills through interactive activities. Students gain confidence in expressing themselves while learning proper pronunciation, intonation, and public speaking techniques.',
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
    levels: 2,
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
  }
];

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-900">
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
          <section id="about" className="py-20 bg-gray-800">
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
                  <h2 className="text-4xl font-bold mb-6 text-white">About Brain N Kids</h2>
                  <p className="text-gray-300 mb-6">
                    At Brain N Kids, we believe in nurturing young minds through innovative educational programs. 
                    Our mission is to develop well-rounded individuals equipped with essential skills for academic 
                    and personal success.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Brain className="text-purple-400" />
                      <span>Expert Teachers</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MessageSquare className="text-purple-400" />
                      <span>Small Class Sizes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h2>
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