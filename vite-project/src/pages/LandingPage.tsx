import { useState } from "react";
import Filter from "../components/filter/Filter";
import ButtonState from "../components/shared/ButtonState";
import { stateButtons } from "../data/frontData";

export default function LandingPage() {
  const [isFilter, setIsFilter] = useState(false);

  return (
    <div className="box-border">
      <section>
        <h1>დავალების გვერდი</h1>
        <Filter isFilter={isFilter} setIsFilter={setIsFilter} />
      </section>
      <section className="box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {stateButtons.map((button, index) => (
          <div key={index} className="min-w-full">
            <ButtonState content={button.content} status={button.status} />
          </div>
        ))}
      </section>
    </div>
  );
}
