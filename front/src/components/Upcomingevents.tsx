"use client";
import Link from "next/link";
import { Ieventos } from "@/lib/interfaces";
import CardUpcoming from "./CardUpcoming";
const events: Ieventos[] = [
  {
      "tags": [],
      "_id": "65d4181d4ed8d0caf2752545",
      "organizerId": "65ceb0e52341fb6296faa846",
      "title": "Fiesta en casa de Santi",
      "description": "Tremenda fiesta masiva tipo \"Proyecto X\"",
      "startDate": "2024-02-20T02:57:03.000Z",
      "endDate": "2024-02-21T02:57:03.000Z",
      "createdAt": "2024-02-20T03:10:17.552Z",
      "location": "Temuco",
      "isPrivate": true,
      "status": "scheduled",
      "guestIds": [],
      "expenses": [],
  },
  {
      "_id": "65d512ac0c2fab0a5685b81e",
      "organizerId": "65ceb0e52341fb6296faa846",
      "title": "Fiesta en casa de Santi",
      "description": "Tremenda fiesta masiva tipo \"Proyecto X\"",
      "startDate": "2024-02-20T02:57:03.000Z",
      "endDate": "2024-02-21T02:57:03.000Z",
      "createdAt": "2024-02-20T20:55:39.522Z",
      "location": "Temuco",
      "isPrivate": true,
      "tags": [],
      "status": "scheduled",
      "guestIds": [],
      "expenses": [],
  },
  {
      "_id": "65d512d2af04eb96758b8fc2",
      "organizerId": "65ceb0e52341fb6296faa846",
      "title": "Fiesta en casa de Santi",
      "description": "Tremenda fiesta masiva tipo \"Proyecto X\"",
      "startDate": "2024-02-20T02:57:03.000Z",
      "endDate": "2024-02-21T02:57:03.000Z",
      "createdAt": "2024-02-20T20:59:58.924Z",
      "location": "Temuco",
      "isPrivate": true,
      "tags": [
          "['fiesta', 'playa', 'cena']"
      ],
      "status": "scheduled",
      "guestIds": [],
      "expenses": [],
  },
  {
      "_id": "65d51349af04eb96758b8fc5",
      "organizerId": "65ceb0e52341fb6296faa846",
      "title": "Fiesta en casa de Santi",
      "description": "Tremenda fiesta masiva tipo \"Proyecto X\"",
      "startDate": "2024-02-20T02:57:03.000Z",
      "endDate": "2024-02-21T02:57:03.000Z",
      "createdAt": "2024-02-20T20:59:58.924Z",
      "location": "Temuco",
      "isPrivate": true,
      "tags": [
          "fiesta",
          "playa"
      ],
      "status": "scheduled",
      "guestIds": [],
      "expenses": [],
  },
  {
      "_id": "65d513db3535c6288e2e053b",
      "organizerId": "65ceb0e52341fb6296faa846",
      "title": "Fiesta en casa de Santi",
      "description": "Tremenda fiesta masiva tipo \"Proyecto X\"",
      "startDate": "2024-02-20T02:57:03.000Z",
      "endDate": "2024-02-21T02:57:03.000Z",
      "createdAt": "2024-02-20T21:04:17.172Z",
      "location": "Temuco",
      "isPrivate": true,
      "tags": [
          "\"['fiesta', 'playa', 'cena']\""
      ],
      "status": "scheduled",
      "guestIds": [],
      "expenses": [],
  }
];
const img =
  "https://static.vecteezy.com/system/resources/previews/005/988/959/non_2x/calendar-icon-free-vector.jpg";

const UpcomingEvents = () => {
  const eventFilter = events.splice(0, 2)
  return (
    <section className="pt-2 pl-12 pr-12 pb-2">
      <div className="flex r items-center justify-between p-4">
        <h3 className="text-lg font-semibold pl-4">Tus proximas Salidas</h3>
        <Link
          href="/upcomingEvents"
          className="text-sky-500 hover:underline hover:text-sky-400 pr-6"
        >
          Ver más
        </Link>
      </div>
      <div className="flex  items-center gap-3">
        {eventFilter.map((event, index) => < CardUpcoming key={index} index={index} event={event}/>)}
      </div>
    </section>
  );
};

export default UpcomingEvents;
