export interface StateUT {
  state_name: string;
  capital: string;
  image_url: string;
  slug: string;
  type: 'state' | 'union_territory';
  population?: string;
  official_languages?: string[];
  area?: string;
  description?: string;
}

export const STATES_AND_UTS: StateUT[] = [
  // States
  {
    state_name: "Andhra Pradesh",
    capital: "Amaravati",
    image_url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    slug: "andhra-pradesh",
    type: "state",
    population: "49.4 million",
    official_languages: ["Telugu"],
    area: "160,205 km²"
  },
  {
    state_name: "Arunachal Pradesh",
    capital: "Itanagar",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    slug: "arunachal-pradesh",
    type: "state",
    population: "1.4 million",
    official_languages: ["English"],
    area: "83,743 km²"
  },
  {
    state_name: "Assam",
    capital: "Dispur",
    image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    slug: "assam",
    type: "state",
    population: "31.2 million",
    official_languages: ["Assamese"],
    area: "78,438 km²"
  },
  {
    state_name: "Bihar",
    capital: "Patna",
    image_url: "https://images.unsplash.com/photo-1633078654544-61b3455b9161?w=800&q=80",
    slug: "bihar",
    type: "state",
    population: "104.1 million",
    official_languages: ["Hindi"],
    area: "94,163 km²"
  },
  {
    state_name: "Chhattisgarh",
    capital: "Raipur",
    image_url: "https://images.unsplash.com/photo-1512492201907-7b0b0ad0b816?w=800&q=80",
    slug: "chhattisgarh",
    type: "state",
    population: "25.5 million",
    official_languages: ["Hindi"],
    area: "135,192 km²"
  },
  {
    state_name: "Goa",
    capital: "Panaji",
    image_url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    slug: "goa",
    type: "state",
    population: "1.5 million",
    official_languages: ["Konkani"],
    area: "3,702 km²"
  },
  {
    state_name: "Gujarat",
    capital: "Gandhinagar",
    image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    slug: "gujarat",
    type: "state",
    population: "60.4 million",
    official_languages: ["Gujarati"],
    area: "196,244 km²"
  },
  {
    state_name: "Haryana",
    capital: "Chandigarh",
    image_url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
    slug: "haryana",
    type: "state",
    population: "25.4 million",
    official_languages: ["Hindi"],
    area: "44,212 km²"
  },
  {
    state_name: "Himachal Pradesh",
    capital: "Shimla",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    slug: "himachal-pradesh",
    type: "state",
    population: "6.9 million",
    official_languages: ["Hindi"],
    area: "55,673 km²"
  },
  {
    state_name: "Jharkhand",
    capital: "Ranchi",
    image_url: "https://images.unsplash.com/photo-1512492201907-7b0b0ad0b816?w=800&q=80",
    slug: "jharkhand",
    type: "state",
    population: "33.0 million",
    official_languages: ["Hindi"],
    area: "79,716 km²"
  },
  {
    state_name: "Karnataka",
    capital: "Bengaluru",
    image_url: "https://images.unsplash.com/photo-1595655408940-d8f95d2f3e3e?w=800&q=80",
    slug: "karnataka",
    type: "state",
    population: "61.1 million",
    official_languages: ["Kannada"],
    area: "191,791 km²"
  },
  {
    state_name: "Kerala",
    capital: "Thiruvananthapuram",
    image_url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    slug: "kerala",
    type: "state",
    population: "33.4 million",
    official_languages: ["Malayalam"],
    area: "38,852 km²"
  },
  {
    state_name: "Madhya Pradesh",
    capital: "Bhopal",
    image_url: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
    slug: "madhya-pradesh",
    type: "state",
    population: "72.6 million",
    official_languages: ["Hindi"],
    area: "308,245 km²"
  },
  {
    state_name: "Maharashtra",
    capital: "Mumbai",
    image_url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    slug: "maharashtra",
    type: "state",
    population: "112.4 million",
    official_languages: ["Marathi"],
    area: "307,713 km²"
  },
  {
    state_name: "Manipur",
    capital: "Imphal",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    slug: "manipur",
    type: "state",
    population: "2.9 million",
    official_languages: ["Manipuri"],
    area: "22,327 km²"
  },
  {
    state_name: "Meghalaya",
    capital: "Shillong",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    slug: "meghalaya",
    type: "state",
    population: "3.0 million",
    official_languages: ["English"],
    area: "22,429 km²"
  },
  {
    state_name: "Mizoram",
    capital: "Aizawl",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    slug: "mizoram",
    type: "state",
    population: "1.1 million",
    official_languages: ["Mizo", "English"],
    area: "21,081 km²"
  },
  {
    state_name: "Nagaland",
    capital: "Kohima",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    slug: "nagaland",
    type: "state",
    population: "2.0 million",
    official_languages: ["English"],
    area: "16,579 km²"
  },
  {
    state_name: "Odisha",
    capital: "Bhubaneswar",
    image_url: "https://images.unsplash.com/photo-1633078654544-61b3455b9161?w=800&q=80",
    slug: "odisha",
    type: "state",
    population: "42.0 million",
    official_languages: ["Odia"],
    area: "155,707 km²"
  },
  {
    state_name: "Punjab",
    capital: "Chandigarh",
    image_url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
    slug: "punjab",
    type: "state",
    population: "27.7 million",
    official_languages: ["Punjabi"],
    area: "50,362 km²"
  },
  {
    state_name: "Rajasthan",
    capital: "Jaipur",
    image_url: "https://images.unsplash.com/photo-1599661046827-dacde6376be3?w=800&q=80",
    slug: "rajasthan",
    type: "state",
    population: "68.5 million",
    official_languages: ["Hindi"],
    area: "342,239 km²"
  },
  {
    state_name: "Sikkim",
    capital: "Gangtok",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    slug: "sikkim",
    type: "state",
    population: "0.6 million",
    official_languages: ["Nepali", "Sikkimese", "Lepcha", "Limbu"],
    area: "7,096 km²"
  },
  {
    state_name: "Tamil Nadu",
    capital: "Chennai",
    image_url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    slug: "tamil-nadu",
    type: "state",
    population: "72.1 million",
    official_languages: ["Tamil"],
    area: "130,060 km²"
  },
  {
    state_name: "Telangana",
    capital: "Hyderabad",
    image_url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    slug: "telangana",
    type: "state",
    population: "35.0 million",
    official_languages: ["Telugu"],
    area: "112,077 km²"
  },
  {
    state_name: "Tripura",
    capital: "Agartala",
    image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    slug: "tripura",
    type: "state",
    population: "3.7 million",
    official_languages: ["Bengali", "Tripuri"],
    area: "10,486 km²"
  },
  {
    state_name: "Uttar Pradesh",
    capital: "Lucknow",
    image_url: "https://images.unsplash.com/photo-1633078654544-61b3455b9161?w=800&q=80",
    slug: "uttar-pradesh",
    type: "state",
    population: "199.8 million",
    official_languages: ["Hindi"],
    area: "240,928 km²"
  },
  {
    state_name: "Uttarakhand",
    capital: "Dehradun",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    slug: "uttarakhand",
    type: "state",
    population: "10.1 million",
    official_languages: ["Hindi"],
    area: "53,483 km²"
  },
  {
    state_name: "West Bengal",
    capital: "Kolkata",
    image_url: "https://images.unsplash.com/photo-1633078654544-61b3455b9161?w=800&q=80",
    slug: "west-bengal",
    type: "state",
    population: "91.3 million",
    official_languages: ["Bengali"],
    area: "88,752 km²"
  },
  
  // Union Territories
  {
    state_name: "Andaman and Nicobar Islands",
    capital: "Port Blair",
    image_url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    slug: "andaman-nicobar",
    type: "union_territory",
    population: "0.4 million",
    official_languages: ["Hindi", "English"],
    area: "8,249 km²"
  },
  {
    state_name: "Chandigarh",
    capital: "Chandigarh",
    image_url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
    slug: "chandigarh",
    type: "union_territory",
    population: "1.1 million",
    official_languages: ["Hindi", "Punjabi"],
    area: "114 km²"
  },
  {
    state_name: "Dadra and Nagar Haveli and Daman and Diu",
    capital: "Daman",
    image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    slug: "dadra-nagar-haveli-daman-diu",
    type: "union_territory",
    population: "0.6 million",
    official_languages: ["Hindi", "Gujarati"],
    area: "603 km²"
  },
  {
    state_name: "Delhi",
    capital: "New Delhi",
    image_url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    slug: "delhi",
    type: "union_territory",
    population: "16.8 million",
    official_languages: ["Hindi", "English"],
    area: "1,484 km²"
  },
  {
    state_name: "Jammu and Kashmir",
    capital: "Srinagar (Summer), Jammu (Winter)",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    slug: "jammu-kashmir",
    type: "union_territory",
    population: "12.5 million",
    official_languages: ["Hindi", "Urdu"],
    area: "55,673 km²"
  },
  {
    state_name: "Ladakh",
    capital: "Leh",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    slug: "ladakh",
    type: "union_territory",
    population: "0.3 million",
    official_languages: ["Hindi", "English"],
    area: "59,146 km²"
  },
  {
    state_name: "Lakshadweep",
    capital: "Kavaratti",
    image_url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    slug: "lakshadweep",
    type: "union_territory",
    population: "0.06 million",
    official_languages: ["Malayalam", "English"],
    area: "32 km²"
  },
  {
    state_name: "Puducherry",
    capital: "Puducherry",
    image_url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    slug: "puducherry",
    type: "union_territory",
    population: "1.2 million",
    official_languages: ["Tamil", "French"],
    area: "492 km²"
  }
];
