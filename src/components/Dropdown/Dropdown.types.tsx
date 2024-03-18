export interface DropdownProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  disabled?: boolean;
}
