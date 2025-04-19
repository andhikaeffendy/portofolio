interface Props {
  icon: React.ReactNode;
  label: string;
  id: string;
  active?: boolean;
  onClick: () => void;
}

export default function NavItem({ icon, label, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
        active ? "bg-blue-500 text-white" : "hover:bg-gray-800 text-gray-300"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
