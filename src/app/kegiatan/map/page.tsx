"use client";
import Map from "@/components/map";

function Demo() {
  return (
    <div className="w-full h-fit rounded-xl flex items-center justify-center">
      <iframe
        width="100%"
        height="500px"
        src="https://api.mapbox.com/styles/v1/fikrianggara/clrp26ujb009k01pefezffc7c.html?title=view&access_token=pk.eyJ1IjoiZmlrcmlhbmdnYXJhIiwiYSI6ImNscmsyYnZveTA5NmUya29qZ2djYmU5YnkifQ.vVYOAwSJaUdd5gFA0TnxZA&zoomwheel=true&fresh=true#4.67/2.5/102.72/0/59"
        title="Monochrome"
      ></iframe>
    </div>
  );
}

export default Demo;
