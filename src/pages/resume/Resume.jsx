import React, { memo } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import { HeartIcon } from '@heroicons/react/solid';
import SkillsResume from './SkillsandInterests';
import EducationSection from '../../components/education/Education.jsx';
import ExperienceSection from '../../components/experience/Experience.jsx';
import { interests } from '../../components/data/Data.js';

const Resume = () => {
  // const downloadResume = async () => {
  //   const element = document.getElementById('resume');

  //   const canvas = await html2canvas(element, {
  //     backgroundColor: null,
  //   });
  //   const imgData = canvas.toDataURL('image/png');
    
  //   const pdf = new jsPDF({
  //     orientation: "portrait",
  //     unit: "mm",
  //     format: "a4",
  //     putOnlyUsedFonts: true,
  //     floatPrecision: 16
  //   });

  //   const imgWidth = 210;
  //   const pageHeight = pdf.internal.pageSize.height;
  //   const imgHeight = ((canvas.height * imgWidth) / canvas.width)-11.5;
  //   let heightLeft = imgHeight;

  //   let position = 0;

  //   pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //   heightLeft -= pageHeight;

  //   while (heightLeft >= 0) {
  //     position = heightLeft - imgHeight;
  //     pdf.addPage();
  //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;
  //   }

  //   pdf.save('Rohan_resume.pdf');
  // };

  return (
    <div className="bg-background-black text-white min-h-screen p-5">
      {/* <div className="text-center mt-4 mb-8">
        <button 
          onClick={downloadResume} 
          className="bg-dodger-blue hover:bg-dark-gray hover:border-2 hover:border-dodger-blue text-white py-2 px-4 rounded-full transition duration-300"
        >
          Download Resume
        </button>
      </div> */}
      <div id="resume" className="bg-background-black max-w-6xl mx-auto grid lg:grid-cols-4 gap-10">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

const Sidebar = memo(() => {
  return (
    <div className="lg:col-span-1 bg-button-gray p-6 rounded-lg shadow-md">
      <ProfileHeader />
      <ProfileDetails />
      <ContactDetails />
      <SocialLinks />
      <Interests />
    </div>
  );
});


const ProfileHeader = () => (
  <div className="text-center">
    <img
      className="w-32 h-32 rounded-full mx-auto"
      src={require("../../assets/myimage.jpg")}
      alt="Profile"
      loading="lazy"
    />
    <h2 className="text-2xl lg:text-3xl font-bold mt-4 mb-2 text-dodger-blue">Rohan Dhakal</h2>
    <p className="text-white-gray font-semibold text-sm md:text-base">Software Engineer . UI/UX . MERN</p>
  </div>
);

const ProfileDetails = () => (
  <div className="mt-8">
    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Profile</h3>
    <p className="text-white-gray text-sm md:text-base">
      An ambitious and driven graduate in Computer Engineering at Kathmandu University 
      equipped with a strong work ethic, and a solid understanding of key concepts in computer science 
      and engineering, coupled with hands-on experience in various programming languages, algorithms, data,
      and UI design. Seeking opportunities to contribute my determination, enthusiasm, skills, 
      and fresh perspective to projects and skills to a dynamic team.
    </p>
  </div>
);

const ContactDetails = () => (
  <div className="mt-8">
    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Contact</h3>
    <ContactItem label="Phone:" value="+9779816933888" />
    <ContactItem label="Email:" value="info@rohandhakal.com.np" />
  </div>
);

const ContactItem = ({ label, value }) => (
  <div className="flex flex-col gap-1 flex-wrap">
    <p className="text-white-gray font-semibold text-sm md:text-base">{label}</p>
    <p className="text-dodger-blue text-sm md:text-base">{value}</p>
  </div>
);

const SocialLinks = () => {
  const links = [
    { href: "https://www.facebook.com/dhakal.rohan/", label: "Facebook" },
    { href: "https://github.com/fearalert", label: "Github" },
    { href: "https://www.linkedin.com/in/dhakalrohan/", label: "LinkedIn" },
    { href: "https://www.behance.net/rohandhakal2", label: "Behance" },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Social Links</h3>
      <div className="flex flex-col">
        {links.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            className="text-dodger-blue hover:text-white-gray hover:underline text-sm md:text-base"
            rel="noreferrer"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

const Interests = () => (
  <div className="mt-8">
    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Interests</h3>
    <div className="flex flex-col lg:w-4/5">
      {interests.map((interest, index) => (
        <div key={`${interest}-${index}`} className="flex flex-col">
          <div className="flex flex-row py-2 w-auto h-full items-center">
            <HeartIcon className="text-dodger-blue w-6 h-6 flex-shrink-0 mr-4" />
            <span className="title-font text-md text-white text-sm md:text-base">{interest}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MainContent = memo(() => (
  <div className="lg:col-span-3 bg-button-gray p-2 rounded-lg shadow-md overflow-hidden">
    <ExperienceSection />
    <EducationSection />
    <SkillsResume />
  </div>
));

export default Resume;
