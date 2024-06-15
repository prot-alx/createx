import React, { Fragment } from "react";
import { HeroSection } from "@/widgets";

export const HomePage: React.FC = () => {
  return (
    <Fragment>
      <section className="flex-col justify-between">
        <section>
          <HeroSection></HeroSection>
        </section>
        <section>
          banner2
        </section>
      </section>
    </Fragment>
  );
};
