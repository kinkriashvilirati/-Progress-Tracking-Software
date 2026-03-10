import ButtonState from "../components/shared/ButtonState";
import { stateButtons } from "../data/frontData";
export default function LandingPage() {
  return (
    <div className="box-border">
      <div className="box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {stateButtons.map((button) => (
          <div className="min-w-full">
            <ButtonState content={button.content} status={button.status} />
          </div>
        ))}
      </div>
    </div>
  );
}
