import heart from "@/shared/img/Heart_outline.svg";

export const LowerFooter: React.FC = () => {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };
  return (
    <div className="flex justify-between pb-8 pt-7 text-gray-500">
      <div className="flex my-auto">
        <span className="text-extrasmall">
          © All rights reserved. Made with by{" "}
        </span>
        <div className="px-1">
          <img
            decoding="async"
            className="pt-[0.5px]"
            src={heart}
            alt="heart"
          />
        </div>
        <span className="text-extrasmall"> Createx Studio</span>
      </div>
      <button
        onClick={scrollToTop}
        className="text-base font-bold active:translate-y-1"
      >
        Go to top
      </button>
    </div>
  );
};
