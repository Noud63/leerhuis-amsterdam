import archief_24 from "../archief_24.json";
import archief_2425 from "../archief_2425.json";
import archief_2526 from "../archief_2526.json";
import { ascendingOrder } from "./ascendingOrder";

const archive24 = ascendingOrder(archief_24.activities || []);
const archive2425 = ascendingOrder(archief_2425.activities || []);
const archive2526 = ascendingOrder(archief_2526.activities || []);

const archives = [
  {
    title: "Archief 2025-2026",
    activities: archive2526,
  },
  {
    title: "Archief 2024-2025",
    activities: archive2425,
  },
  {
    title: "Archief jan-juni 2024",
    activities: archive24,
  },
];

export default archives;
