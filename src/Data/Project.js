import pic1 from '../assets/image/pic1.png';
import pic2 from '../assets/image/pic2.png';
import pic3 from '../assets/image/pic3.png';

import arrow from '../assets/image/arrow.png';
import { title } from 'framer-motion/client';

const projects = [
  {
    id: 1,
    alt: 'Image 1',
    src: arrow,
    description: 'Best Projects',
  },
  {
    id: 2,
    alt: 'Image 2',
    src: pic1,
    name: 'Project Management System',
    subDescription:
      'This case study examines the development of a project management system designed during an On-the-Job Training (OJT) program. The system streamlines project requests, task assignments, and progress monitoring to improve workflow efficiency.',
    objective:
      'The Project Management System is a web-based platform designed to streamline project handling, from receiving client requests to task assignment and progress monitoring. This system enhances productivity by providing real-time project tracking, task management, and progress visualization.',
    Problem: {
      title: 'Problem Statement',
      description:
        'Many organizations struggle with tracking project progress and managing tasks effectively. Without a structured system, delays, miscommunication, and inefficiencies occur.',
    },
    Solution: {
      title: 'Solution',
      description:
        'A web-based project management system was developed to allow users to submit project requests, assign tasks, and monitor project progress in real time. The system features a percentage-based progress tracker to enhance visibility and accountability.',
    },
    Results: {
      title: 'Results',
      description:
        'The system improved task organization, reduced project delays, and provided clear project tracking. Users found it easier to manage tasks and ensure timely project completion.',
    },
    Conclusion: {
      title: 'Conclusion',
      description:
        'Implementing a project management system significantly enhanced efficiency, reduced miscommunication, and streamlined task management. Future improvements could include automation features and enhanced reporting tools.',
    },
  },
  {
    id: 3,
    alt: 'Image 3',
    src: pic2,
    name: 'Annual Investment Program System',
    subDescription:
      'This case study explores the development of an Annual Investment Program (AIP) system, designed to streamline the submission and approval process for project requests from various departments.',
    objective:
      'The Annual Investment Program (AIP) System is a web-based platform designed to streamline the submission, tracking, and approval of project requests from various departments. Every year, departments submit their investment proposals, which are reviewed and prioritized based on budget and organizational needs.',
    Problem: {
      title: 'Problem Statement',
      description:
        'Manual submission of annual project proposals leads to delays, lost documents, and inefficient tracking, making it difficult to manage and prioritize department requests effectively.',
    },
    Solution: {
      title: 'Solution',
      description:
        'A web-based AIP system was developed to allow departments to submit project requests digitally, ensuring organized documentation, tracking, and approval workflows. The system provides transparency and efficiency in managing annual investment proposals.',
    },
    Results: {
      title: 'Results',
      description:
        'The system reduced paperwork, improved request tracking, and streamlined the approval process. Departments experienced faster submission times and better coordination with decision-makers.',
    },
    Conclusion: {
      title: 'Conclusion',
      description:
        'The implementation of the AIP system improved efficiency, accuracy, and accessibility in the investment planning process. Future enhancements could include budget forecasting tools and automated notifications for better workflow management.',
    },
  },
  {
    id: 4,
    alt: 'Image 4',
    src: pic3,
    name: 'Certificate and ID System',
    subDescription:
      'The Certificate and ID Maker System is a digital solution designed to streamline the creation and printing of certificates and IDs for OJT students. The system allows OJT users to submit their personal details, which the admin then reviews and processes using predefined certificate and ID templates.',
    objective:
      'Manual certificate and ID creation is a time-consuming process that often leads to inconsistencies and delays. To address this, a Certificate and ID Maker System was developed to automate the generation, customization, and printing of certificates and IDs for OJT students.',
    Problem: {
      title: 'Problem Statement',
      description:
        'Before implementing the system, OJT students had to submit their details manually, and admins had to create certificates and IDs using basic design tools. This process was inefficient, prone to errors, and lacked uniformity in formatting.',
    },
    Solution: {
      title: 'Solution',
      description:
        'To address the inefficiencies in certificate and ID issuance, the Certificate and ID Maker System was developed. This system allows OJT users to submit their details online, reducing the need for manual data entry. The admin can then generate certificates using pre-designed templates, ensuring accuracy and consistency. Automated processing speeds up issuance, minimizing delays and errors.',
    },
    Results: {
      title: 'Results',
      description:
        'The Certificate and ID Maker System significantly improved efficiency by automating processing, reducing manual effort, and shortening issuance time. Standardized templates minimized formatting errors, ensuring accuracy in every certificate and ID. The system also enhanced convenience by allowing users to submit details online, streamlining the workflow. Additionally, it provided a professional output, maintaining high-quality and consistent design across all generated documents.',
    },
    Conclusion: {
      title: 'Conclusion',
      description:
        'The Certificate and ID Maker System successfully enhanced the efficiency and accuracy of document generation for OJT students. By automating the process, the system reduced administrative workload, ensured uniformity, and improved overall service delivery.',
    },
  },
];

export default projects;
