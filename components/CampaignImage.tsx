import Image from "next/image";
import { publicAssetPath } from "@/lib/assets";

type CampaignImageProps = {
  image: {
    src: string;
    alt: string;
  };
  priority?: boolean;
  sizes?: string;
};

export function CampaignImage({ image, priority = false, sizes = "100vw" }: CampaignImageProps) {
  return (
    <Image
      src={publicAssetPath(image.src)}
      alt={image.alt}
      fill
      preload={priority}
      sizes={sizes}
    />
  );
}
