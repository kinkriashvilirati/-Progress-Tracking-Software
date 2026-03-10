import type { ButtonStateProps } from "../../types/CommonTypes";

export default function ButtonState({ content, status }: ButtonStateProps) {
  return (
    <>
      <button
        className={`min-w-full sm:w-auto px-4 py-2 rounded-xl text-bg bg-status-${status}`}
      >
        {content}
      </button>
    </>
  );
}
