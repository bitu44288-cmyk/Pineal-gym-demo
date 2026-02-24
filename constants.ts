import { GymDetails, Service, PricingTier, Testimonial, BlogPost, Trainer } from './types';

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Vikram Singh',
    role: 'Head Coach',
    specialty: 'Strength & Conditioning',
    image: 'https://drive.google.com/thumbnail?id=1yYBETSK-9crLizN2h_e7zum31Kn-Pxl3&sz=w1000',
    about: 'Vikram brings over 10 years of experience in elite strength training. Former national powerlifter dedicated to forging resilient athletes.',
    socials: {
      instagram: '#',
      twitter: '#'
    }
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Senior Trainer',
    specialty: 'HIIT & Functional Training',
    image: 'https://drive.google.com/thumbnail?id=1S4hX5bLwY8_pULBIHXFVJ3awuE-nY77Z&sz=w1000',
    about: 'Sarah specializes in high-intensity functional movement. Her philosophy centers on agility, endurance, and real-world strength application.',
    socials: {
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: '3',
    name: 'Marcus Ray',
    role: 'Performance Coach',
    specialty: 'Powerlifting',
    image: 'https://drive.google.com/thumbnail?id=1AFGdV6Ai0YhPcUuNqO74tJ2_VsHXH53z&sz=w1000',
    about: 'Marcus focuses on biomechanics and precision lifting. He helps athletes break plateaus through technical mastery and programmed progression.',
    socials: {
      instagram: '#',
      twitter: '#'
    }
  }
];

export const GYM_DETAILS: GymDetails = {
  name: "Elite Fitness Gym",
  phone: "+919438555333",
  whatsapp: "919438555333",
  address: "C-21, Main Rd, Koelnagar C Block, Koel Nagar, Rourkela, Odisha 769014",
  location: "Rourkela",
  email: "contact@elitefitnessgym.com"
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Strength Training',
    description: 'State-of-the-art free weights and resistance machines to build muscle and power.',
    icon: 'fa-dumbbell'
  },
  {
    id: '2',
    title: 'Cardio Zone',
    description: 'Advanced treadmills, ellipticals, and rowers to boost endurance and heart health.',
    icon: 'fa-heart-pulse'
  },
  {
    id: '3',
    title: 'Personal Training',
    description: '1-on-1 coaching customized to your specific body type and fitness goals.',
    icon: 'fa-user-ninja'
  },
  {
    id: '4',
    title: 'Yoga & Flexibility',
    description: 'Dedicated studio for yoga, pilates, and stretching to improve mobility.',
    icon: 'fa-spa'
  },
  {
    id: '5',
    title: 'HIIT Classes',
    description: 'High-intensity interval training groups for maximum calorie burn.',
    icon: 'fa-fire'
  },
  {
    id: '6',
    title: 'Nutrition Guidance',
    description: 'Expert dietary advice to fuel your workouts and recovery.',
    icon: 'fa-carrot'
  }
];

export const PRICING: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '₹1,500/mo',
    features: ['Access to Gym Floor', 'Locker Room Access', 'Free WiFi', '1 Orientation Session'],
    recommended: false
  },
  {
    id: 'pro',
    name: 'Standard',
    price: '₹2,500/mo',
    features: ['All Basic Features', 'Group Classes Included', 'Nutrition Guide', 'Guest Pass (1/mo)'],
    recommended: true
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '₹5,000/mo',
    features: ['All Standard Features', '2 Personal Training Sessions', 'Sauna Access', 'Unlimited Guest Passes'],
    recommended: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Member since 2022',
    content: 'Elite Fitness Gym changed my life. The trainers are knowledgeable and the atmosphere is incredibly motivating.',
    image: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Priya Singh',
    role: 'Athlete',
    content: 'Best gym in Delhi hands down. The equipment is top-notch and always clean. Highly recommended!',
    image: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Fitness Enthusiast',
    content: 'I love the community here. It is not just a gym, it is a family that pushes you to be your best.',
    image: 'https://picsum.photos/100/100?random=3'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Tips for Muscle Growth',
    excerpt: 'Learn the secrets to hypertrophy and how to maximize your gains in the gym.',
    date: 'Oct 12, 2023',
    category: 'Training',
    image: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: '2',
    title: 'Nutrition 101: Macros',
    excerpt: 'Understanding proteins, fats, and carbs is essential for reaching your fitness goals.',
    date: 'Oct 05, 2023',
    category: 'Nutrition',
    image: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: '3',
    title: 'The Importance of Rest',
    excerpt: 'Why sleep and recovery days are just as important as your lifting days.',
    date: 'Sep 28, 2023',
    category: 'Wellness',
    image: 'https://picsum.photos/600/400?random=12'
  }
];
