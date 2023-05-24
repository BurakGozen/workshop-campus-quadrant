type Exercise = {
  id: number;
  name: string;
};

export const exercises: Exercise[] = [
  {
    name: "Hello World",
  },
  {
    name: "Werken met variabelen",
  },
  {
    name: "Rekenen",
  },
  {
    name: "Quiz",
  },
  {
    name: "Getal raden",
  },
  {
    name: "Kwadraat",
  },
  {
    name: "Derde macht functie",
  },
  {
    name: "Rekenmachine",
  },
  {
    name: "De kikker",
  },
  {
    name: "Langer dan",
  },
  {
    name: "Positief of negatief",
  },
  {
    name: "Leeftijd",
  },
  {
    name: "Verzendkosten",
  },
  {
    name: "Beoordeling student",
  },
  {
    name: "Bereken de korting",
  },
  {
    name: "Loop",
  },
].map((exercise, index) => ({ ...exercise, id: index + 1 }));
