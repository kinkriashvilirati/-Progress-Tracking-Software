import type { ButtonStateProps } from "../../types/CommonTypes";

export default function ButtonState({ content, status }: ButtonStateProps) {
  console.log(status);
  return (
    <>
      {/* start, progress, test, finish */}
      <button
        className={`min-w-full sm:w-auto px-4 py-2 rounded-xl text-bg bg-status-${status}`}
      >
        {content}
      </button>
    </>
  );
}
