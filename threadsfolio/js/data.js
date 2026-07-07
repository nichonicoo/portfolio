/* ═══════════════════════════════════════
   DATA.JS — Portfolio Content Data
   ═══════════════════════════════════════ */

const portfolioData = {
  profile: {
    name: 'Nicholas Terrence Salim',
    handle: '@nicholas',
    bio: 'Final-year Computer Science student | Software Engineering Enthusiast',
    followers: 127,
    following: 89,
    avatar: 'assets/avatar.svg',
  },

  about: {
    content: [
      "Hi! I'm a **final-year Computer Science student** at Bina Nusantara University with a strong passion for **software engineering**. I thrive on teamwork, collaboration, and continuous learning.",
      "I have experience in full-stack development, graphic design, and content creation. I believe in writing clean code, building impactful products, and always striving for business and process improvement.",
    ],
    stats: { replies: 12, reposts: 4, likes: 47 },
  },

  experiences: [
    {
      id: 'internship-japfa',
      role: 'Full Stack Developer Intern',
      company: 'JAPFA',
      period: 'Feb 2025 — Feb 2026',
      description: 'Interned at JAPFA, contributing to internal system development — PDP policies, overtime calculation logic, and the E-OT mobile application.',
      skills: ['Flutter', 'Dart', 'PL/SQL', 'JavaScript', 'Team Collaboration'],
      hasThread: true,
    },
    {
      role: 'Graphic Designer Intern',
      company: 'Avantee',
      period: 'Jan 2021 — Apr 2021',
      description: 'Created Instagram posts and visual content to raise awareness about fake websites and online scams. Developed creative design strategies for social media campaigns.',
      skills: ['Adobe Suite', 'Graphic Design', 'Social Media', 'Content Strategy'],
    },
    {
      role: 'Founder',
      company: 'Muda Prestasi',
      period: 'Aug 2021 — Jan 2022',
      description: 'Founded an educational content platform focused on motivating young people through inspiring posts and stories on social media.',
      skills: ['Content Creation', 'Leadership', 'Social Media', 'Community Building'],
    },
  ],

  threadDetails: {
    'internship-japfa': {
      company: 'JAPFA',
      role: 'Full Stack Developer Intern',
      period: 'Feb 2025 — Feb 2026',
      coverGradient: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
      intro: 'During my 1-year internship at JAPFA as a Full Stack Developer Intern, I was directly involved in developing the company\'s internal systems. Here are my main contributions:',
      tasks: [
        {
          title: 'PDP (Personal Data Protection) Policy',
          type: 'Project',
          description: 'Developed and enhanced an enterprise Personal Data Protection (PDP) system that supports employee consent management and regulatory compliance while protecting sensitive employee information.',
          details: [
            'Collaborated with HR Business Partners and stakeholders to translate regulatory and business requirements into system features.',
            'Designed and enhanced Oracle APEX modules for employee consent management, monitoring dashboards, and role-based access.',
            'Implemented PL/SQL logic and Workato integrations to support secure data processing and automated consent workflows.',
            'Performed SIT, UAT support, bug fixing, and production readiness to ensure system reliability before deployment.',
          ],
          skills: ['Oracle APEX', 'PL/SQL', 'Workato', 'System Integration', 'Testing'],
          images: ['assets/projects/PDP/PDP_Home_1.jpeg', 'assets/projects/PDP/PDP_Home_2.jpeg', 'assets/projects/PDP/PDP_Email_1.jpeg', 'assets/projects/PDP/PDP_Parent_Role.jpeg', 'assets/projects/PDP/PDP_Web.jpeg'],
        },
        // {
        //   title: 'Overtime Calculation Logic',
        //   type: 'Task',
        //   description: 'Built an accurate automated overtime calculation system integrated with the payroll system.',
        //   details: [
        //     'Designed OT calculation algorithm based on company policy',
        //     'Integrated with existing payroll database',
        //     'Tested & validated calculation accuracy',
        //     'Deployed to production with monitoring',
        //   ],
        //   skills: ['PL/SQL', 'JavaScript', 'Database Design', 'Testing'],
        //   images: ['assets/projects/Generate_Payroll_1.jpeg', 'assets/projects/Generate_Payroll_2.jpeg'],
        // },
        {
        title: 'Overtime Calculation System',
        type: 'Task',
        description:
            'Designed and developed an automated overtime calculation engine that translated complex payroll regulations into accurate system logic for enterprise HR operations.',

        details: [
            'Analyzed overtime policies and translated business rules into automated PL/SQL calculation logic.',
            'Developed payroll calculation procedures integrated with employee attendance and work schedule data.',
            'Optimized SQL performance and validated calculation accuracy through functional testing with HR and Business Analysts.',
            'Collaborated with cross-functional teams to ensure the solution aligned with payroll policies before release.',
        ],

        skills: [
            'Oracle APEX','PL/SQL','SQL','Oracle Database','Business Analysis','Testing',
        ],

        images: [
            'assets/projects/Generate_Payroll_1.jpeg','assets/projects/Generate_Payroll_2.jpeg',
        ],
        },
        {
          title: 'PSIAP Tax Integration',
          type: 'Task',
          description:'Developed a tax integration module for the Casual Labor Administration System (CLAS) that automated tax processing for casual employees by integrating Oracle APEX with external tax services.',
          details: [
            'Developed an Oracle APEX interface for managing external tax API configurations.',
            'Built PL/SQL procedures to authenticate, consume REST APIs, parse JSON responses, and store tax data into Oracle Database.',
            'Optimized SQL queries and resolved calculation issues to improve tax processing accuracy.',
            'Performed testing, debugging, and validation alongside Business Analysts before deployment to QA.',
        ],
          skills: [
            'Oracle APEX','PL/SQL','REST API','JSON','SQL','Oracle Database','Testing'
        ],
          images: ['assets/projects/PSIAP/PSIAP_Home.jpeg', 'assets/projects/PSIAP/PSIAP_Generated.jpeg'],
        },
        // {
        //   title: 'E-OT Mobile Application',
        //   type: 'Project',
        //   description: 'Developed a mobile application for digital overtime submissions and approvals.',
        //   details: [
        //     'Built mobile UI/UX with Flutter & Dart',
        //     'Integrated backend with REST API',
        //     'Implemented multi-level approval feature',
        //     'Real-time submission status tracking',
        //   ],
        //   skills: ['Flutter', 'Dart', 'REST API', 'Mobile Development'],
        //   images: ['assets/projects/E-OT/Group_Home.jpeg', 'assets/projects/E-OT/Dashboard_SPV.jpeg', 'assets/projects/E-OT/Abnormal_Absent.jpeg', 'assets/projects/E-OT/List_BAL_Karyawan.jpeg', 'assets/projects/E-OT/Detail_Overtime_Plan.jpeg', 'assets/projects/E-OT/List_Overtime_BAL_HSPV.jpeg', 'assets/projects/E-OT/List_Overtime_SPL_HSPV.jpeg','assets/projects/E-OT/Detail_Overtime_Plan_HSPV.jpeg'],
        // },
        {
        title: 'E-OT Mobile Application',
        type: 'Enterprise Mobile Application',
        description:
            'Contributed to the development of an enterprise mobile application that digitalized employee overtime submission, approval workflows, and attendance management.',
        details: [
            'Developed Flutter user interfaces for overtime planning, approval, attendance, and employee management modules.',
            'Integrated mobile features with Flask REST APIs and backend services.',
            'Implemented role-based workflows involving Employees, Supervisors, and Higher Supervisors.',
            'Worked closely with Business Analysts and developers during system design, testing, and feature refinement.',
        ],
        skills: ['Flutter','Dart','Python','Flask','REST API','Firebase','Mobile Development',],
        images: ['assets/projects/E-OT/Group_Home.jpeg', 'assets/projects/E-OT/Dashboard_SPV.jpeg', 'assets/projects/E-OT/Abnormal_Absent.jpeg', 'assets/projects/E-OT/List_BAL_Karyawan.jpeg', 'assets/projects/E-OT/Detail_Overtime_Plan.jpeg', 'assets/projects/E-OT/List_Overtime_BAL_HSPV.jpeg', 'assets/projects/E-OT/List_Overtime_SPL_HSPV.jpeg','assets/projects/E-OT/Detail_Overtime_Plan_HSPV.jpeg'],
        },
        {
          title: 'Frontend & Backend Integration',
          type: 'Task',
          description: 'Connected frontend applications with backend databases and APIs for seamless data flow.',
          details: [
            'Integrated frontend with backend services',
            'Optimized database queries for performance',
            'Cross-stack debugging & troubleshooting',
            'Code review & documentation',
          ],
          skills: ['JavaScript', 'PL/SQL', 'API Integration', 'Debugging'],
        },
      ],
    },
  },

  projects: [
    {
      title: 'E-OT Mobile App',
      description: 'Aplikasi mobile untuk pengajuan overtime digital dengan approval multi-level dan tracking real-time.',
      gradient: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
      icon: 'smartphone',
      skills: ['Flutter', 'Dart', 'REST API'],
    },
    {
      title: 'PDP Compliance System',
      description: 'Sistem kebijakan perlindungan data pribadi terintegrasi dengan aplikasi internal perusahaan.',
      gradient: 'linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)',
      icon: 'shield',
      skills: ['PL/SQL', 'JavaScript', 'Compliance'],
    },
    {
      title: 'Overtime Calculator Engine',
      description: 'Logika perhitungan lembur otomatis yang terintegrasi dengan sistem penggajian perusahaan.',
      gradient: 'linear-gradient(135deg, #06d6a0 0%, #118ab2 100%)',
      icon: 'calculator',
      skills: ['PL/SQL', 'Database', 'Algorithms'],
    },
  ],

  skills: {
    'Programming': ['C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'C#', 'Python', 'PL/SQL', 'Dart'],
    'Mobile': ['Flutter', 'Dart'],
    'Tools': ['Excel', 'PowerPoint', 'Adobe Suite', 'VS Code', 'Git'],
    'Soft Skills': ['Teamwork', 'Collaboration', 'Problem Solving', 'Software Development', 'Critical Thinking'],
  },

  education: [
    {
      year: '2022 — Now',
      title: 'Bina Nusantara University',
      subtitle: 'Computer Science · GPA 3.62',
      description: 'Active in Binus Finance Club. Building strong foundation in software engineering, algorithms, and system design. Passionate about technology and business process improvement.',
    },
    {
      year: '2019 — 2022',
      title: 'SMK Global Multimedia Creative School',
      subtitle: 'Multimedia',
      description: 'Developed skills in graphic design, video editing, and photography. Built a strong creative foundation that complements my technical abilities.',
    },
  ],

  certificates: [
    { title: 'EF Summer Camp Oxford', org: 'EF Education First · Oxford' },
    { title: 'EF Summer Camp Newland Park', org: 'EF Education First · Newland Park' },
    { title: 'CFA Level 1 Preparatory Program', org: 'Binus Business School' },
  ],

  contact: {
    email: 'nicholas.terrence@example.com',
    github: 'github.com/nicholas-terrence',
    linkedin: 'linkedin.com/in/nicholas-terrence-salim',
  },

  replies: [
    { name: 'Recruiter', handle: '@recruiter', time: '1m', text: 'This portfolio is incredible! When are you available for interviews? 🚀' },
    { name: 'Nicholas', handle: '@nicholas', time: 'now', text: 'Right now, actually. Drop me a message! 😊' },
  ],

  typingLines: [
    'coding with Flutter & Dart 🚀',
    'building full-stack solutions 💻',
    'designing database systems 🗄️',
    'learning something new every day 📚',
    'turning ideas into reality ✨',
  ],
};

// Expose to window so other scripts can access via window.portfolioData
window.portfolioData = portfolioData;
