export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  iconVariant: "a" | "b";
  event: string;
  location: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    id: "satyanarayan-puja",
    title: "Satyanarayan Puja",
    image: "/assets/our_services/Satyanarayan Puja.png",
    iconVariant: "a",
    event: "Purnima, Griha Pravesh, Family Prosperity",
    location: "At Your Home, Anywhere in West Bengal",
    description:
      "Invite Goddess Lakshmi into your home and workplace for wealth, prosperity, and success. Conducted by verified priests with complete ritual guidance.",
  },
  {
    id: "griha-pravesh-puja",
    title: "Griha Pravesh Puja",
    image: "/assets/our_services/griha_pravesh.jpeg",
    iconVariant: "a",
    event: "Housewarming, New Beginnings",
    location: "At Your Home, Anywhere in West Bengal",
    description:
      "A sacred ceremony to bless your new home with positive energy, peace, and prosperity before you move in.",
  },
  {
    id: "durga-puja",
    title: "Durga Puja",
    image: "/assets/our_services/Durga Puja.jpeg",
    iconVariant: "a",
    event: "Navratri, Durga Puja, Community Celebrations",
    location: "At Your Home or Venue, West Bengal",
    description:
      "Complete traditional rituals and mantras invoking Maa Durga's blessings for strength, protection, and prosperity.",
  },
  {
    id: "marriage-puja",
    title: "Marriage Puja",
    image: "/assets/our_services/Marriage Puja.jpeg",
    iconVariant: "b",
    event: "Vivah Sanskar, Engagement, Griha Pravesh",
    location: "At Your Venue, Anywhere in West Bengal",
    description:
      "Auspicious wedding ceremonies conducted with authentic Vedic traditions for a blessed married life.",
  },
  {
    id: "namkaran-puja",
    title: "Namkaran Puja",
    image: "/assets/our_services/Namkaran Puja.jpeg",
    iconVariant: "b",
    event: "Naming Ceremony, Annaprashan",
    location: "At Your Home, Anywhere in West Bengal",
    description:
      "A blessed naming ceremony to welcome your newborn with divine grace and family traditions.",
  },
  {
    id: "kali-puja",
    title: "Kali Puja",
    image: "/assets/our_services/Kali Puja.jpeg",
    iconVariant: "b",
    event: "Kali Puja, Diwali, Protection Rituals",
    location: "At Your Home or Venue, West Bengal",
    description:
      "Powerful rituals invoking Maa Kali for protection, courage, and removal of obstacles.",
  },
];
