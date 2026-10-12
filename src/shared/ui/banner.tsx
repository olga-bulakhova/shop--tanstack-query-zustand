import { Button } from "./kit/button";
import bannerImg from "@/assets/img/banner.png";

export const Banner = () => {
  return (
    <div className="rounded-[20px] border border-brand-secondary bg-white py-5 pr-5">
      <div className="grid grid-cols-[1fr_2fr] items-center gap-4">
        <div className="flex-shrink-0">
          <img
            src={bannerImg}
            alt="Big Sale Banner"
            className="relative -left-2.5 w-[calc(100%+10px)] max-w-none"
            loading="lazy"
          />
        </div>
        <div>
          <div className="text-[20px] font-semibold text-brand">BIG SALE!</div>

          <Button className="mt-3 w-full">
            <span>Learn more</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
