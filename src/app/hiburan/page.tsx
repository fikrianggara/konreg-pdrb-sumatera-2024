import Link from "next/link";

const page = () => {
  const items = [
    {
      title: "Wisata",
      description: "Tempat wisata di Provinsi Jambi",
      imageUrl: "/assets/1x3_banner_wisata.png",
      imageClassName: "lg:col-span-2",
      href: "/hiburan/wisata",
    },
    {
      title: "Oleh-oleh",
      description: "Rekomendasi oleh-oleh khas Jambi",
      imageUrl: "/assets/1x3_banner_oleh-oleh.png",
      imageClassName: "object-cover object-left h-36 lg:h-full",
      href: "/hiburan/oleh-oleh",
    },
    {
      title: "Kuliner",
      description: "Kuliner khas jambi",
      imageUrl: "/assets/1x3_banner_kuliner.png",
      imageClassName: "lg:col-span-3",
      href: "/hiburan/kuliner",
    },
  ];
  return (
    <div className="lg:w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-start justify-start m-auto">
      {items.map((i) => (
        <Link key={i.title} href={i.href} className={i.imageClassName}>
          <img
            src={i.imageUrl}
            alt={i.description}
            className={`rounded-lg h-36 lg:h-full hover:shadow-xl duration-300 ease-in-out hover:cursor-pointer ${i.imageClassName}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default page;
