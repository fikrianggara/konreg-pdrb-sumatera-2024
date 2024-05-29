import React from "react";
import { BentoGrid as BentoGridWrapper, BentoGridItem } from "./ui/bento-grid";

export function BentoGrid({ items }: any) {
  return (
    <BentoGridWrapper className="max-w-4xl mx-auto">
      {items.map((item: any, i: any) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          href={item.href}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGridWrapper>
  );
}
export const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
