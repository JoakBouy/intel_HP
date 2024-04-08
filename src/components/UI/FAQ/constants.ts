type FAQItem = { question: string; answer: string; };

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];

export const animate = {
  initial: { y: '100%', opacity: 0 },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How does IntelHP collect and integrate health data?',
    answer:
      'IntelHP seamlessly integrates with various wearable devices and IoT sensors to collect real-time health data such as heart rate, blood pressure, and activity levels. This data is then securely transmitted to our platform for analysis and processing.',
  },
  {
    question: 'What types of health predictions can IntelHP provide?',
    answer:
      'Leveraging advanced AI and quantum computing technologies, IntelHP can provide precise predictions on a wide range of health conditions, including cardiovascular diseases, metabolic disorders, and chronic illnesses. Our platform analyzes complex data patterns to identify potential risks and enable proactive interventions.',
  },
  {
    question: 'How does IntelHP ensure data privacy and security?',
    answer:
      'Data privacy and security are of utmost importance to us. IntelHP employs state-of-the-art encryption and access control measures to safeguard your personal health information. We adhere to strict data protection regulations and industry best practices.',
  },
  {
    question: 'Can IntelHP integrate with existing electronic health record (EHR) systems?',
    answer:
      'Yes, IntelHP is designed to seamlessly integrate with existing EHR systems used by healthcare providers. This integration allows us to securely access and analyze patient data, enabling more comprehensive and informed health predictions and treatment recommendations.',
  },
];