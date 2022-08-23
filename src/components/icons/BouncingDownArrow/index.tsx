import ArrowDownIcon from "../../icons/svgs/arrow-down-icon.svg";

interface Props {
  href: string;
  className?: string;
}

const BouncingDownArrow = ({ href, className }: Props) => {
  return (
    <a
      href={href}
      className={
        "absolute bottom-10 animate-bounce rounded-full p-4 " +
        (className ?? "")
      }
      aria-label="Scroll down"
    >
      <ArrowDownIcon width={24} height={24} alt="floating arrow down button" />
    </a>
  );
};

export default BouncingDownArrow;
