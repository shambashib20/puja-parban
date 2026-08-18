import type { Priest } from "@/lib/types";
import { fetchAdminApi, type CarouselPage } from "@/lib/adminApi";

interface AdminPujaType {
  slug: string;
  nameEn: string;
  nameBn: string;
}

interface AdminPriestListItem {
  _id: string;
  name: string;
  photoUrl?: string;
  rating: number;
  ratingCount: number;
  yearsExperience?: number;
  pujaTypeSlugs: string[];
}

/** Local placeholder cards, used when the admin CMS is unreachable or has no active priests yet. */
export const priests: Priest[] = [
  {
    id: "sourav-chattopadhyay",
    name: "Pandit Sourav Chattopadhyay",
    photo: "/assets/priest_1.png",
    rating: 5,
    ratingLabel: "4.9 Rating",
    reviewCount: 203,
    experience: "15+ Years Experience",
    speciality: "Laxmi Puja, Griho Probesh",
  },
  {
    id: "arun-chattopadhyay",
    name: "Pandit Arun Chattopadhyay",
    photo: "/assets/purohit_2.jpeg",
    rating: 4,
    ratingLabel: "4.0 Rating",
    reviewCount: 369,
    experience: "25+ Years Experience",
    speciality: "Laxmi Puja, Griho Probesh",
  },
  {
    id: "arindam-chakraborty",
    name: "Pandit Arindam Chakraborty",
    photo: "/assets/purohit_3.jpeg",
    rating: 5,
    ratingLabel: "4.9 Rating",
    reviewCount: 281,
    experience: "12+ Years Experience",
    speciality: "Durga Puja, Satyanarayan Puja",
  },
  {
    id: "debabrata-mishra",
    name: "Pandit Debabrata Mishra",
    photo: "/assets/purohit_4.jpeg",
    rating: 5,
    ratingLabel: "3 Rating",
    reviewCount: 281,
    experience: "15+ Years Experience",
    speciality: "Kali Puja, Marriage Puja",
  },
  {
    id: "somnath-acharjee",
    name: "Pandit Somnath Acharjee",
    photo: "/assets/purohit_5.jpeg",
    rating: 5,
    ratingLabel: "4.5 Rating",
    reviewCount: 281,
    experience: "7+ Years Experience",
    speciality: "Namkaran, Annaprashan",
  },
];

export async function getPriests(): Promise<Priest[]> {
  const [priestsPage, pujaTypesPage] = await Promise.all([
    fetchAdminApi<CarouselPage<AdminPriestListItem>>("/api/public/priests?limit=12"),
    fetchAdminApi<CarouselPage<AdminPujaType>>("/api/public/puja-types?limit=50"),
  ]);

  if (!priestsPage || priestsPage.items.length === 0) {
    return priests;
  }

  const pujaTypeNameBySlug = new Map(
    (pujaTypesPage?.items ?? []).map((pujaType) => [pujaType.slug, pujaType.nameEn || pujaType.nameBn])
  );

  return priestsPage.items.map((priest) => ({
    id: priest._id,
    name: priest.name,
    photo: priest.photoUrl || "/assets/purohit_1.png",
    rating: Math.round(priest.rating),
    ratingLabel: `${priest.rating.toFixed(1)} Rating`,
    reviewCount: priest.ratingCount,
    experience: priest.yearsExperience ? `${priest.yearsExperience}+ Years Experience` : "Experienced Priest",
    speciality: priest.pujaTypeSlugs.map((slug) => pujaTypeNameBySlug.get(slug) || slug).join(", "),
  }));
}
