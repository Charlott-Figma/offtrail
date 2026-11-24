export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export type EventData = {
  slug: string;
  name: string;
  shortDescription: string;
  dateLong: string;
  dateShort: string;
  dayLabel: string;
  dayNumber: string;
  timeRange: string;
  openSpots: string;
  spotsShort: string;
  description: ReadonlyArray<string>;
  host: { name: string; avatarSrc: string };
  city: string;
  fullAddress: string;
  heroImageSrc: string;
  galleryImages: ReadonlyArray<{ src: string; alt: string }>;
  schedule: ReadonlyArray<ScheduleItem>;
  attendeeAvatars: ReadonlyArray<string>;
  attendeesOverflow?: string;
  relatedSlugs: ReadonlyArray<string>;
};

const portraits = (...nums: number[]) =>
  nums.map((n) => `/images/portraits/Portrait-${String(n).padStart(2, "0")}.webp`);

export const events: Record<string, EventData> = {
  "high-desert-horseback-ride": {
    slug: "high-desert-horseback-ride",
    name: "High Desert Horseback Ride",
    shortDescription: "Desert views, steady pace",
    dateLong: "February 16, 2026",
    dateShort: "Feb 16, 2026",
    dayLabel: "Feb",
    dayNumber: "16",
    timeRange: "10AM - 2PM",
    openSpots: "24 open spots",
    spotsShort: "24 Spots",
    description: [
      "Join us for a relaxed group ride through open desert terrain just outside Mammoth Lakes. This route winds through rolling hills and open meadow, offering panoramic views and a steady, approachable pace.",
      "All levels are welcome — whether you've ridden before or this is your first time in the saddle. We'll begin with a quick orientation, regroup at scenic overlooks, and wrap up with time to connect back at the trailhead.",
      "Helmets are provided. Bring water, closed-toe shoes, and layers — high desert weather can shift quickly.",
    ],
    host: { name: "Jenna Lee", avatarSrc: portraits(4)[0] },
    city: "Mammoth Lakes, CA",
    fullAddress: "Sherwin Creek, Mammoth Lakes, CA",
    heroImageSrc: "/images/event/Event-01.webp",
    galleryImages: [
      { src: "/images/event/Event-10.webp", alt: "Group meeting at the trailhead" },
      { src: "/images/event/Event-21.webp", alt: "Horses crossing open meadow" },
      { src: "/images/event/Event-32.webp", alt: "Riders against panoramic sky" },
    ],
    schedule: [
      { time: "10:00", title: "Arrival & check-in", description: "Meet at the Sherwin Creek trailhead. We'll introduce the route and answer questions before saddling up." },
      { time: "10:15", title: "Orientation & saddle up", description: "Quick overview of riding basics and trail etiquette. We'll match horses to riders before heading out." },
      { time: "11:30", title: "Scenic overlook stop", description: "We'll regroup at a high-desert overlook. Time for water, photos, and a short break before continuing the loop." },
      { time: "12:00", title: "Continue along the trail", description: "From here, we'll follow the trail deeper into high desert terrain. Wide skies and long stretches of open path ahead." },
      { time: "13:30", title: "Return to trailhead", description: "We'll make our way back at a relaxed pace. Cool down, untack, debrief, and thank the horses." },
      { time: "14:00", title: "Wrap & connect", description: "Optional time to hang back and connect with other riders. We'll share upcoming Offtrail events before heading out." },
    ],
    attendeeAvatars: portraits(1, 2, 3, 5, 6, 7, 8, 9, 10, 11),
    attendeesOverflow: "+4",
    relatedSlugs: ["meadow-loop-sunrise-hike", "sunset-paraglide-meetup", "afternoon-social-run"],
  },
  "afternoon-social-run": {
    slug: "afternoon-social-run",
    name: "Afternoon Social Run: Open Pace",
    shortDescription: "Easy miles, easier company",
    dateLong: "February 17, 2026",
    dateShort: "Feb 17, 2026",
    dayLabel: "Feb",
    dayNumber: "17",
    timeRange: "12PM - 2PM",
    openSpots: "32 open spots",
    spotsShort: "32 Spots",
    description: [
      "An open-pace social run that loops through the cottonwoods east of Bishop. Run as fast or as slow as you like — we regroup at the turnaround and again at the finish.",
      "Bring a water bottle and a layer. We'll have snacks at the trailhead afterward for anyone who wants to stick around.",
    ],
    host: { name: "Justin Lee", avatarSrc: portraits(6)[0] },
    city: "Bishop, CA",
    fullAddress: "Cottonwood Loop, Bishop, CA",
    heroImageSrc: "/images/event/Event-02.webp",
    galleryImages: [
      { src: "/images/event/Event-11.webp", alt: "Runners on a dirt path" },
      { src: "/images/event/Event-18.webp", alt: "Cottonwood grove in afternoon light" },
      { src: "/images/event/Event-27.webp", alt: "Group at the turnaround" },
    ],
    schedule: [
      { time: "11:45", title: "Check-in", description: "Meet at the trailhead parking lot. Quick group photo before we start." },
      { time: "12:00", title: "Start", description: "We head out together at an easy pace. Split into groups by comfort level at the first mile." },
      { time: "12:45", title: "Turnaround", description: "Regroup at the turnaround for water and a breather." },
      { time: "13:30", title: "Cool down", description: "Easy walk back to the trailhead. Stretch and decompress." },
      { time: "14:00", title: "Snacks & chat", description: "Hang out at the parking lot for snacks and recovery talk." },
    ],
    attendeeAvatars: portraits(2, 3, 4, 5, 7, 8, 9, 11, 12),
    attendeesOverflow: "+8",
    relatedSlugs: ["high-desert-horseback-ride", "eastern-sierra-road-spin", "meadow-loop-sunrise-hike"],
  },
  "eastern-sierra-road-spin": {
    slug: "eastern-sierra-road-spin",
    name: "Eastern Sierra Road Spin",
    shortDescription: "Long miles, big sky",
    dateLong: "February 19, 2026",
    dateShort: "Feb 19, 2026",
    dayLabel: "Feb",
    dayNumber: "19",
    timeRange: "8AM - 12PM",
    openSpots: "16 open spots",
    spotsShort: "16 Spots",
    description: [
      "A friendly group ride out of Crowley Lake along the eastern flank of the Sierra. Steady rollers, open road, and a coffee stop halfway through.",
      "Best for intermediate riders comfortable on traffic-free roads. Bring a road or gravel bike, food, water, and a spare tube.",
    ],
    host: { name: "Kaley Bennett", avatarSrc: portraits(7)[0] },
    city: "Crowley Lake, CA",
    fullAddress: "Crowley Lake Drive, Crowley Lake, CA",
    heroImageSrc: "/images/event/Event-03.webp",
    galleryImages: [
      { src: "/images/event/Event-14.webp", alt: "Cyclists on an open road" },
      { src: "/images/event/Event-25.webp", alt: "Coffee stop at the halfway point" },
      { src: "/images/event/Event-41.webp", alt: "Group photo with mountain backdrop" },
    ],
    schedule: [
      { time: "07:45", title: "Roll-in", description: "Coffee and group sign-in at the lake parking lot." },
      { time: "08:00", title: "Depart", description: "We roll out together at conversation pace." },
      { time: "09:30", title: "Coffee stop", description: "Mid-ride regroup with espresso and pastries." },
      { time: "11:00", title: "Climb segment", description: "Optional climb push for those who want to test the legs." },
      { time: "12:00", title: "Finish", description: "Back at the lot. Recovery snacks and trip recap." },
    ],
    attendeeAvatars: portraits(1, 3, 5, 6, 8, 9, 10, 12),
    attendeesOverflow: "+3",
    relatedSlugs: ["high-desert-horseback-ride", "afternoon-social-run", "sunset-paraglide-meetup"],
  },
  "meadow-loop-sunrise-hike": {
    slug: "meadow-loop-sunrise-hike",
    name: "Meadow Loop Sunrise Hike",
    shortDescription: "Quiet morning, golden light",
    dateLong: "February 19, 2026",
    dateShort: "Feb 19, 2026",
    dayLabel: "Feb",
    dayNumber: "19",
    timeRange: "6AM - 11AM",
    openSpots: "16 open spots",
    spotsShort: "16 Spots",
    description: [
      "Catch sunrise from the high meadow above June Lake. A 4-mile loop with one gentle climb and panoramic views at the top.",
      "Bring a headlamp for the early start, layers, and breakfast — we'll have hot drinks at the trailhead.",
    ],
    host: { name: "Karim Nasser", avatarSrc: portraits(2)[0] },
    city: "June Lake, CA",
    fullAddress: "Meadow Loop Trailhead, June Lake, CA",
    heroImageSrc: "/images/event/Event-04.webp",
    galleryImages: [
      { src: "/images/event/Event-09.webp", alt: "Sunrise over the meadow" },
      { src: "/images/event/Event-22.webp", alt: "Hikers ascending the ridge" },
      { src: "/images/event/Event-38.webp", alt: "Summit view across the valley" },
    ],
    schedule: [
      { time: "05:45", title: "Check-in", description: "Meet at the trailhead. Hot drinks and final route briefing." },
      { time: "06:15", title: "Depart", description: "Head out by headlamp. The climb starts gentle." },
      { time: "07:30", title: "Sunrise summit", description: "Reach the overlook in time for first light. Time for photos and breakfast." },
      { time: "09:00", title: "Loop back", description: "Continue the loop down the easier south side." },
      { time: "11:00", title: "Wrap", description: "Back at the trailhead. Hang out before heading home." },
    ],
    attendeeAvatars: portraits(1, 4, 5, 8, 9, 10, 11, 12, 13),
    attendeesOverflow: "+5",
    relatedSlugs: ["high-desert-horseback-ride", "eastern-sierra-road-spin", "sunset-paraglide-meetup"],
  },
  "sunset-paraglide-meetup": {
    slug: "sunset-paraglide-meetup",
    name: "Sunset Paraglide Meetup",
    shortDescription: "Wing it, evening edition",
    dateLong: "February 21, 2026",
    dateShort: "Feb 21, 2026",
    dayLabel: "Feb",
    dayNumber: "21",
    timeRange: "3PM - 6PM",
    openSpots: "12 open spots",
    spotsShort: "12 Spots",
    description: [
      "Watch the sun drop over the Mono Basin from the launch above the basin rim. For pilots and spectators alike — bring snacks and a packable chair.",
      "Pilots: P2 minimum, must have current rating. Spectators: meet at the LZ for a low-pressure social.",
    ],
    host: { name: "Annisah Patel", avatarSrc: portraits(11)[0] },
    city: "Mono Lake, CA",
    fullAddress: "Mono Basin Launch, Mono Lake, CA",
    heroImageSrc: "/images/event/Event-05.webp",
    galleryImages: [
      { src: "/images/event/Event-19.webp", alt: "Paraglider against sunset" },
      { src: "/images/event/Event-33.webp", alt: "Group at the landing zone" },
      { src: "/images/event/Event-44.webp", alt: "Launch above the basin" },
    ],
    schedule: [
      { time: "14:30", title: "Pilots meet at launch", description: "Wind check and weather brief. Spectators continue to the LZ." },
      { time: "15:00", title: "First launches", description: "Pilots launch in conditions order." },
      { time: "16:00", title: "Watching from the LZ", description: "Spectators gather. Bring chairs and snacks." },
      { time: "17:15", title: "Sunset session", description: "Best light. Last launches in the calm air." },
      { time: "18:00", title: "Wrap", description: "Pack up and share photos. Hang out at the LZ until dark." },
    ],
    attendeeAvatars: portraits(2, 3, 5, 6, 7, 9, 10, 13),
    attendeesOverflow: "+2",
    relatedSlugs: ["high-desert-horseback-ride", "meadow-loop-sunrise-hike", "eastern-sierra-road-spin"],
  },
};

export function getEvent(slug: string): EventData | undefined {
  return events[slug];
}

export function getAllEventSlugs(): string[] {
  return Object.keys(events);
}
