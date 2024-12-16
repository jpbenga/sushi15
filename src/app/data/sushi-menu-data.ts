// Ce fichier contiendra les données du menu
interface MenuItem {
    name: string;
    price: number;
    description?: string;
    pieces?: number;
    items?: string[];
  }
  
  interface MenuCategory {
    title: string;
    subtitle?: string;
    description?: string;
    items: MenuItem[];
    supplements?: {
      price: number;
      options: string[];
    };
  }
  
  interface MenuData {
    [key: string]: MenuCategory;
  }
  
  export const menuData: MenuData = {
    nigiri: {
      title: "NIGIRI",
      subtitle: "Par pièce",
      description: "Tranches de poisson frais sur un lit de riz vinaigré",
      items: [
        { name: "Nigiri saumon", price: 2.00 },
        { name: "Nigiri saumon fromage", price: 2.50 },
        { name: "Nigiri saumon épicé", price: 2.00 },
        { name: "Nigiri saumon braisé", price: 2.50 },
        { name: "Nigiri thon", price: 2.50 },
        { name: "Nigiri thon épicé", price: 2.50 },
        { name: "Nigiri thon braise", price: 3.00 },
        { name: "Nigiri crevettes", price: 3.00 }
      ]
    },
    sashimi: {
      title: "SASHIMI",
      subtitle: "Par 6 pièces",
      description: "Fines tranches de poisson cru servies nature",
      items: [
        { name: "Sashimi saumon", price: 7.00 },
        { name: "Sashimi thon", price: 8.00 }
      ]
    },
    tataki: {
      title: "TATAKI",
      subtitle: "Par 6 pièces",
      description: "Poisson mi-cuit et mi-cru mariné dans une sauce spéciale",
      items: [
        { name: "Saumon", price: 8.00 },
        { name: "Thon", price: 9.00 }
      ]
    },
    california: {
      title: "CALIFORNIA",
      subtitle: "Par 8 pièces",
      description: "Rouleaux de riz garnis d'avocat et divers ingrédients",
      items: [
        { name: "Saumon, avocat, fromage", price: 6.50 },
        { name: "Fromage Concombre saumon", price: 6.50 },
        { name: "Saumon, avocat", price: 6.00 },
        { name: "Saumon, concombre", price: 6.00 },
        { name: "Saumon Tempura Avocat fromage", price: 6.00 },
        { name: "Mayo épicé Saumon, avocat", price: 7.00 },
        { name: "Saumon fumé fromage avocat", price: 6.50 },
        { name: "Thon avocat", price: 7.00 },
        { name: "Thon avocat épicé", price: 6.50 },
        { name: "Thon tempura Fromage", price: 6.50 },
        { name: "Thon concombre", price: 7.00 },
        { name: "Surimi avocat", price: 6.50 }
      ]
    },
    freshRolls: {
      title: "FRESH ROLLS",
      subtitle: "Par 8 pièces",
      items: [
        { name: "Saumon fromage", price: 7.50 },
        { name: "Saumon fumé fromage", price: 8.00 },
        { name: "Saumon avocat fromage", price: 8.00 },
        { name: "Saumon avocat", price: 7.50 },
        { name: "Saumon fume avocat", price: 8.00 },
        { name: "Saumon fume avocat fromage", price: 8.50 }
      ]
    },
    springRolls: {
      title: "SPRING ROLLS",
      subtitle: "Par 8 pièces",
      items: [
        { name: "Avocat saumon", price: 7.50 },
        { name: "Avocat thon", price: 7.50 },
        { name: "Avocat crevettes", price: 8.00 },
        { name: "Avocat saumon fumé", price: 8.00 },
        { name: "Végétarien", price: 6.00 }
      ]
    },
    hosomaki: {
      title: "HOSOMAKI",
      subtitle: "Par 8 pièces",
      items: [
        { name: "Hosomaki saumon", price: 5.50 },
        { name: "Hosomaki saumon avocat", price: 6.00 },
        { name: "Hosomaki saumon fromage", price: 6.00 },
        { name: "Hosomaki saumon épicé", price: 5.50 },
        { name: "Hosomaki saumon pané", price: 6.00 },
        { name: "Hosomaki avocat", price: 4.50 },
        { name: "Hosomaki avocat fromage", price: 5.00 },
        { name: "Hosomaki concombre", price: 4.00 },
        { name: "Hosomaki concombre fromage", price: 4.50 },
        { name: "Hosomaki crevettes", price: 6.00 },
        { name: "Hosomaki crevettes panées", price: 6.50 },
        { name: "Hosomaki surimi pané", price: 5.50 },
        { name: "Hosomaki surimi", price: 5.00 },
        { name: "Hosomaki thon", price: 6.00 },
        { name: "Hosomaki thon épicé", price: 6.00 },
        { name: "Hosomaki thon avocat", price: 6.50 },
        { name: "Hosomaki kiwi", price: 5.00 },
        { name: "Hosomaki mangue", price: 5.00 },
        { name: "Hosomaki thon cuit mayonnaise", price: 5.00 },
        { name: "Hosomaki thon cuit fromage", price: 5.00 }
      ]
    },
    tobiko: {
      title: "TOBIKO",
      subtitle: "Par 8 pièces",
      items: [
        { name: "Saumon avocat", price: 7.50 },
        { name: "Thon avocat", price: 7.50 },
        { name: "Crevettes avocat", price: 8.00 }
      ]
    },
    crunchy: {
      title: "CRUNCHY",
      subtitle: "Par 8 pièces",
      items: [
        { name: "Saumon avocat", price: 8.00 },
        { name: "Thon avocat", price: 8.00 },
        { name: "Végétarien", price: 7.00 },
        { name: "Poulet avocat", price: 8.00 },
        { name: "Surimi avocat", price: 8.00 },
        { name: "Boeuf avocat", price: 8.00 }
      ]
    },
    tiger: {
      title: "TIGER",
      items: [
        { name: "Dragon Eye", price: 9.00, pieces: 6 },
        { name: "Eagle Eye", price: 9.00, pieces: 6 }
      ]
    },
    futoMaki: {
      title: "FUTO MAKI",
      subtitle: "Par 6 pièces",
      items: [
        { name: "FUTO CLASSIC", price: 7.50, description: "Saumon, avocat, fromage, concombre, crevettes" },
        { name: "FUTO SWEET EBI", price: 8.00, description: "Laitue, crevettes, tempura, avocat surimi, sauce sweet chili" },
        { name: "FUTO PACIFIC", price: 8.50, description: "Saumon fumé, fromage crevettes, tobiko, concombre, mangue" },
        { name: "FUTO CHILI", price: 8.50, description: "Saumon, avocat, tobiko, chichimi, sauce chili" },
        { name: "FUTO THONNA", price: 8.50, description: "Thon, surimi pané, avocat, concombre, miel" }
      ]
    },
    chirashi: {
      title: "CHIRASHI",
      items: [
        { name: "Chirashi saumon", price: 14.00 },
        { name: "Chirashi saumon épicé", price: 14.00 },
        { name: "Chirashi thon épicé", price: 15.00 },
        { name: "Chirashi thon", price: 15.00 },
        { name: "Chirashi mixte épicé", price: 16.00 },
        { name: "Chirashi mixte", price: 16.00 }
      ]
    },
    pokeBowl: {
      title: "POKE BOWL",
      items: [
        { name: "Poke saumon", price: 13.00 },
        { name: "Poke thon", price: 14.00 },
        { name: "Poke tenders de poulet", price: 13.00 },
        { name: "Poke végétal", price: 10.00 }
      ]
    },
    noodles: {
      title: "NOUILLES UDON OU SOBA",
      items: [
        { name: "Nouilles poulet", price: 12.00 },
        { name: "Nouilles bœuf", price: 12.50 },
        { name: "Nouilles crevettes", price: 13.00 },
        { name: "Nouilles végétarienne", price: 10.00 }
      ]
    },
    yakitoris: {
      title: "YAKITORIS FAIT MAISON",
      subtitle: "Par 2 pièces",
      items: [
        { name: "Poulet", price: 5.00 },
        { name: "Bœuf", price: 6.00 },
        { name: "Boulette de poulet", price: 5.50 },
        { name: "Bœuf fromage", price: 6.00 },
        { name: "Saumon", price: 6.00 },
        { name: "Thon", price: 6.00 }
      ]
    },
    tempura: {
      title: "TEMPURA",
      subtitle: "Par 2 pièces",
      items: [
        { name: "Bœuf fromage pané", price: 6.50 },
        { name: "Crevettes pané", price: 5.50 },
        { name: "Mixte de poissons pané", price: 9.00 }
      ]
    },
    nems: {
      title: "NEMS",
      subtitle: "Par 3 pièces",
      items: [
        { name: "Poulet", price: 4.50 },
        { name: "Crevettes", price: 4.50 }
      ]
    },
    gyoza: {
      title: "GYOZA",
      subtitle: "Par 4 pièces",
      items: [
        { name: "Poulet", price: 4.00 },
        { name: "Crevettes", price: 5.00 },
        { name: "Légumes", price: 3.50 },
        { name: "Bœuf", price: 4.00 }
      ]
    },
    newRolls: {
      title: "NEW ROLLS",
      subtitle: "Par 8 pièces",
      items: [
        { name: "FRENCH TOUCH", price: 10.00, description: "Foie gras, confiture de figues, noisettes grillées" },
        { name: "SAUMACONDA", price: 11.00, description: "Saumon, chips d'oignon, tobiko, sauce barbecue" },
        { name: "THONACONDA", price: 12.00, description: "Saumon chips d'oignons recouvert thon et sauce teriyakizan-Tobiko" },
        { name: "TIGER", price: 11.00, description: "Crevettes panko, avocat, recouvert saumon et avocat" },
        { name: "RAINBOW", price: 10.00, description: "Surimi, avocat, recouvert saumon, avocat, thon, crevettes" },
        { name: "SNAKE", price: 11.00, description: "Saumon, mangue, recouvert avocat, tobiko, sauce barbecue" },
        { name: "CESAR", price: 12.00, description: "Poulet pané, épinards panés, avocat, fromage et fromage braisé" },
        { name: "DRAGON FIRE", price: 13.00, description: "Surimi épicé, saumon, chips d'oignons, recouvert saumon" },
        { name: "CRAZY TUNA", price: 10.00, description: "Thon cuit, mayo japonaise, concombre recouvert thon et avocat" },
        { name: "CHÈVRE CHILI", price: 10.00, description: "Saumon, avocat, chèvre, recouvert Aneth, sauce hot chili" },
        { name: "CRAZY", price: 13.00, description: "Crevettes panko, chips d'oignons, fromage, recouvert chips d'oignons" }
      ]
    },
    platters: {
      title: "Les plateaux à partager",
      items: [
        {
          name: "16 PIÈCES",
          price: 11.50,
          items: [
            "8 makis saumon",
            "8 californias"
          ]
        },
        {
          name: "24 PIÈCES",
          price: 20.00,
          items: [
            "8 makis saumon",
            "8 californias saumon",
            "8 crousty crevettes"
          ]
        },
        {
          name: "32 PIÈCES",
          price: 28.00,
          items: [
            "8 makis saumon",
            "8 makis thon",
            "8 californias thon",
            "2 Nigiris saumon",
            "2 Nigiris thon",
            "2 sashimi saumon",
            "2 sashimi thon"
          ]
        },
        {
          name: "40 PIÈCES",
          price: 39.00,
          items: [
            "8 californias saumon",
            "8 californias surimis",
            "8 makis avocat fromage",
            "8 crunchy saumon",
            "6 futo maki classic",
            "2 Nigiri saumon braisé"
          ]
        },
        {
          name: "50 PIÈCES",
          price: 56.00,
          items: [
            "8 californias poulet",
            "8 makis saumon",
            "8 californias crevettes",
            "6 makis thon cuit fromage",
            "4 sashimis thon",
            "4 Nigiris saumon",
            "4 Nigiris thon",
            "4 sashimis saumon",
            "4 yakitoris boulette de poulet"
          ]
        }
      ]
    },
    specialSushi: {
      title: "Special sushi 8",
      items: [
        { name: "Sushi pizza", price: 9.00 }
      ]
    },
    entrees: {
      title: "ENTRÉES",
      items: [
        { name: "Soupe miso", price: 3.00 },
        { name: "Salade de choux", price: 3.50 },
        { name: "Edamame", price: 4.50 },
        { name: "Riz nature", price: 3.00 },
        { name: "Riz vinaigré", price: 3.50 },
        { name: "Riz cantonais", price: 4.50 }
      ],
      supplements: {
        price: 2.00,
        options: ["saumon", "thon", "ebi"]
      }
    },
    desserts: {
      title: "DESSERTS",
      items: [
        { name: "Litchi", price: 4.00 },
        { name: "Boules de coco", price: 4.00, pieces: 3 },
        { name: "Mochi", price: 5.00, pieces: 3 },
        { name: "Tiramisu Maison", price: 3.50 },
        { name: "Boule de glace Panko", price: 5.00 },
        { name: "Gyouza pomme", price: 4.00, pieces: 4 },
        { name: "Tarte coco Nutella", price: 3.50 },
        { name: "Tarte Daim", price: 3.00 }
      ]
    },
    boissons: {
      title: "BOISSONS",
      items: [
        { name: "Bouteille 50cl", price: 2.50 },
        { name: "Thé japonais Mangajo 25cl", price: 3.50 },
        { name: "Limonade japonaise Ramune 20 cl", price: 3.80 }
      ]
    }
  };
