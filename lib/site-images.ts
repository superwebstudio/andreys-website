export type GalleryCategory = "Training" | "Fighters" | "Events" | "Gym" | "Coach";

export type GalleryPhoto = {
  id: number;
  category: GalleryCategory;
  label: string;
  aspect: string;
  src: string;
};

const images = {
  coachMain: "/images/coach_main_photo.JPG",
  coachAndFighters: "/images/coach_and_figthers.JPG",
  coachAndFighters2: "/images/coach_and_figthers_2.JPG",
  coachAndFighters3: "/images/coach_and_fighters_3.JPG",
  coachAndFighters4: "/images/coach_and_figthers_4.JPG",
  teamPhotoInGym: "/images/team_photo_in_gym.JPG",
  gymFlagsAndFighters: "/images/gym_flags_and_fighters.JPG",
  fightPoster: "/images/fight-poster.JPG",
  fightPoster2: "/images/fight-poster-2.JPG",
  fighter: "/images/fighter.JPG",
  fighter2: "/images/fighter-2.JPG",
  fighter3: "/images/figther_3.JPG",
  fighter4: "/images/fighter_4.JPG",
  sparring: "/images/sparing.JPG",
  sparring1: "/images/sparring-1.JPG",
  sparring2: "/images/sparring-2.JPG",
  sparring3: "/images/sparring-3.JPG",
  sparring4: "/images/sparring-4.JPG",
  sparring5: "/images/sparring-5.JPG",
  sparring6: "/images/sparring-6.JPG",
  sparring7: "/images/sparring-7.JPG",
  logo1: "/images/logo-1.JPG",
  logo2: "/images/logo-2.JPG",
} as const;

export const coachImages = {
  main: images.coachMain,
  withFighters: [
    images.coachAndFighters,
    images.coachAndFighters2,
    images.coachAndFighters3,
    images.coachAndFighters4,
  ],
};

export const aboutImages = {
  gym: images.teamPhotoInGym,
  coachMain: images.coachMain,
  coachGallery: coachImages.withFighters,
};

export const galleryPhotos: GalleryPhoto[] = [
  { id: 1, category: "Training", label: "Sparring Session", aspect: "aspect-square", src: images.sparring },
  { id: 2, category: "Training", label: "Pad Work", aspect: "aspect-[3/4]", src: images.sparring1 },
  { id: 3, category: "Training", label: "Technical Drilling", aspect: "aspect-square", src: images.sparring2 },
  { id: 4, category: "Training", label: "Sparring in the Gym", aspect: "aspect-[4/3]", src: images.sparring3 },
  { id: 5, category: "Training", label: "Training Rounds", aspect: "aspect-square", src: images.sparring4 },
  { id: 6, category: "Training", label: "Fight Preparation", aspect: "aspect-[3/4]", src: images.sparring5 },
  { id: 7, category: "Training", label: "Sparring Action", aspect: "aspect-square", src: images.sparring6 },
  { id: 8, category: "Training", label: "Class in Session", aspect: "aspect-[4/3]", src: images.sparring7 },
  { id: 9, category: "Fighters", label: "Competition Ready", aspect: "aspect-square", src: images.fighter },
  { id: 10, category: "Fighters", label: "Fight Night", aspect: "aspect-[3/4]", src: images.fighter2 },
  { id: 11, category: "Fighters", label: "In the Ring", aspect: "aspect-square", src: images.fighter3 },
  { id: 12, category: "Fighters", label: "Victory Moment", aspect: "aspect-[4/3]", src: images.fighter4 },
  { id: 13, category: "Events", label: "Fight Poster", aspect: "aspect-[3/4]", src: images.fightPoster },
  { id: 14, category: "Events", label: "Upcoming Bout", aspect: "aspect-[3/4]", src: images.fightPoster2 },
  { id: 15, category: "Gym", label: "Team Photo", aspect: "aspect-[4/3]", src: images.teamPhotoInGym },
  { id: 16, category: "Gym", label: "Gym & Flags", aspect: "aspect-square", src: images.gymFlagsAndFighters },
  { id: 17, category: "Gym", label: "Predators MMA", aspect: "aspect-square", src: images.logo1 },
  { id: 18, category: "Gym", label: "Predators Branding", aspect: "aspect-square", src: images.logo2 },
  { id: 19, category: "Coach", label: "Coach Andy Manzolo", aspect: "aspect-[3/4]", src: images.coachMain },
  { id: 20, category: "Coach", label: "Coach with Fighters", aspect: "aspect-[4/3]", src: images.coachAndFighters },
  { id: 21, category: "Coach", label: "Coaching Session", aspect: "aspect-[4/3]", src: images.coachAndFighters2 },
  { id: 22, category: "Coach", label: "Training with the Team", aspect: "aspect-[4/3]", src: images.coachAndFighters3 },
  { id: 23, category: "Coach", label: "On the Mats", aspect: "aspect-[4/3]", src: images.coachAndFighters4 },
];

export const galleryCategories = ["All", "Training", "Fighters", "Events", "Gym", "Coach"] as const;
