"use client";
import { MultiplePointMap } from "@/components/map";

const LOKASIS = [
  {
    title: "Acara Utama",
    name: "BW Luxury Hotel",
    location: {
      latitude: -1.619318,
      longitude: 103.6272072,
    },
    gmapsUrl:
      "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
    image: "/assets/hotel_bw.jpg",
  },
  {
    title: "Acara Tambahan",
    name: "Candi Muaro Jambi",
    location: {
      latitude: -1.4779213,
      longitude: 103.6645089,
    },
    gampsUrl:
      "https://www.google.com/maps/place/GMC8%2BRRP+Candi+Muaro+Jambi,+Muaro+Jambi,+Maro+Sebo,+Muaro+Jambi+Regency,+Jambi+36382/@-1.4779213,103.6670838,16z/data=!4m6!3m5!1s0x2e25f3532e01e437:0x9251412ef519ac6f!8m2!3d-1.4779213!4d103.6670838!16s%2Fm%2F03h3n81",
    image:
      "https://indonesiaimpressiontour.com/wp-content/uploads/2022/11/IMG_20191101_004648.webp",
  },
];
function Page() {
  return (
    <div className="w-full h-96 rounded-xl flex items-center justify-center">
      <MultiplePointMap isAnimate={true} points={LOKASIS} />
    </div>
  );
}

export default Page;
