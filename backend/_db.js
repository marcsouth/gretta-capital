const processors = [
  {
    id: "1",
    processor: "American Express",
    merchantid: "1234554321",
    adress: "42 Sunny Lane, Orlando, FL, 32887",
    ucc: true,
  },
  {
    id: "2",
    processor: "Paypal",
    merchantid: "9876598781",
    adress: "73 Stormy Drive, New Haven, CT,15658 ",
    ucc: true,
  },
  {
    id: "3",
    processor: "Stripe",
    merchantid: "8462946275",
    adress: "312 Martin Luther Rd, Hoboken, New Jersey, 12341",
    ucc: false,
  },
  {
    id: "4",
    processor: "Bank of America",
    merchantid: "1442976276",
    adress: "2 Whitney Lane, Riverside, Georgia, 63342",
    ucc: true,
  },
];

const clients = [
  { id: "1", name: "Jarred Hanks", processor_id: "1" },
  { id: "2", name: "Chet Hummer", processor_id: "1" },
  { id: "3", name: "Ana Bunker", processor_id: "2" },
  { id: "4", name: "Maria Carter", processor_id: "2" },
  { id: "5", name: "Arnold Tissot", processor_id: "3" },
  { id: "6", name: "Sherman keys", processor_id: "3" },
  { id: "7", name: "Douglas Smith", processor_id: "4" },
  { id: "8", name: "Alex Barrera", processor_id: "4" },
];

export default { processors, clients };
