import { BentoGrid, Skeleton } from "@/components/bentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconMountain,
  IconGift,
  IconBuildingStore,
} from "@tabler/icons-react";

const page = () => {
  const items = [
    {
      title: "Wisata",
      description: "Tempat wisata di Provinsi Jambi",
      header: <Skeleton />,
      icon: <IconMountain className="h-4 w-4 text-neutral-500" />,
      href: "/hiburan/wisata",
    },
    {
      title: "Oleh-oleh",
      description: "Rekomendasi oleh-oleh khas Jambi",
      header: <Skeleton />,
      icon: <IconGift className="h-4 w-4 text-neutral-500" />,
      href: "/hiburan/oleh-oleh",
    },
    {
      title: "Produk UMKM",
      description: "produk berkualitas dari UMKM Jambi",
      header: <Skeleton />,
      icon: <IconBuildingStore className="h-4 w-4 text-neutral-500" />,
      href: "/hiburan/umkm",
    },
  ];
  return <BentoGrid items={items} />;
};

export default page;
