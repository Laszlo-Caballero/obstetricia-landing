interface InputProps {
  for: string;
  type: string;
  placeholder: string;
}

export default function Input({ for: forId, type, placeholder }: InputProps) {
  return (
    <>
      <label htmlFor={forId}></label>
      <input
        id={forId}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-bordeColumn px-4 py-3 text-[15px] outline-none"
      />
    </>
  );
}
