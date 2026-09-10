export type Testimonial = {
  name: string;
  service: string;
  rating: number;
  quote: string;
  avatar?: {
    src: string;
    alt: string;
  };
  initials?: string;
  projectImage?: {
    src: string;
    alt: string;
  };
};

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "James Wilson",
    service: "Residential Driveway",
    rating: 5,
    quote:
      "Terra Paving completely transformed our home's exterior. The new driveway looks fantastic, and the crew was professional, punctual, and left the site immaculate. Highly recommend their services to anyone looking for top-notch quality.",
    avatar: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATvpPemD5ObsBRBMj0XNWvNQ_qu98MJnvGCYWf3pr230DiVFwrMiHulYQtHrgttSnMC3wNm60KYJLEG91cALToyS7PrEQtlw7zi1umOUy0uvNyBw3Veok3WDCARif8XvDzgGyMw-jAjfM7l8WBupe68F41dxcP_rOzg9kQfU-U4dYG2C6D0rFpCLDoO7nD7dhvS6DXUhfwBVA9hpbQcob1V7YrwenEP0jIB-gFWVNR5ZALM4IVHppv",
      alt: "A smiling middle-aged man standing in front of a newly paved asphalt driveway in a suburban neighborhood. Warm natural sunlight, organic earthy tones, high-quality photography.",
    },
  },
  {
    name: "Sarah Lopez",
    service: "Commercial Parking Lot",
    rating: 4.5,
    quote:
      "Managing a retail space means minimizing downtime. Terra Paving handled our parking lot resurfacing efficiently over a weekend. The results are incredibly durable and visually appealing.",
    initials: "SL",
    projectImage: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYAyH5qBLOBNj1savNakYUCSWKk4X2H5Jy-lueDX7-jPleBBc5_l2k3jATNvhQiMliz3Jk1N1yLJAuj1JvDGux9AR2Pnwqx6VbW1LzbtN10uLoYsXB0KFyh7fzd9rqQbpAL3qNTRLwSFY1KIQ9bU4fOL3HC9z0lv2h4FestOBmInSHhSiJ-95kvPEN0-wd6sfdFPirvVXhUAf2PSleZP1YmkM3cilHgSOIlTcra3eBTHwT3dzrz6CD",
      alt: "A freshly paved commercial parking lot with bright white painted lines. The setting is modern and clean with soft, warm lighting emphasizing the smooth texture of the asphalt. Organic earthy aesthetic.",
    },
  },
  {
    name: "Margaret Chen",
    service: "Patio Pavers",
    rating: 5,
    quote:
      "The team designed a beautiful stone paver patio for our backyard. It perfectly complements our garden. The attention to detail in the pattern work was extraordinary.",
    avatar: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhvNj4X7oPyV1stLh24sJjW-vMc7ZjPI1z7wm9b9lYcHWBq2E2etmU2OiAJ12c7tUzxXgXf4DN_8qPd7qNyC7_60vGTfP4Kfy5YxaYbpwaBQqFLH7EOsVmKkNeye3AVzgd6k7HarLgAbezVRzpbnJDKtEogrCsXEspGp5HM5vfUdjy1hbLIDjdYjdF9pZeeRkpJ67x59XO2HjjUhpCxBGLgNiFGsnSliUd4JiVx0hTFnVds-whW08-",
      alt: "A professional headshot of an older woman with a warm smile, wearing a casual earth-toned blouse. Soft, diffused lighting, approachable and friendly mood.",
    },
  },
] as const;
