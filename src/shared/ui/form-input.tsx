import { forwardRef, type InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, type = 'text', className = '', id, ...props }, ref) => {
    return (
      <div className="relative flex flex-col gap-1.5 pb-5">
        <label htmlFor={id} className="pl-4 text-sm font-medium text-gray-600">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          autoComplete="off"
          type={type}
          className={`h-10 w-full rounded-full border border-zinc-800 bg-white px-4 pr-10 text-sm text-black placeholder-zinc-500 transition-colors focus:border-zinc-700 focus:outline-none ${
            error
              ? 'border-red-500 focus:ring-red-500/50'
              : 'border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500/50'
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="absolute top-17.5 left-0 pl-4 text-xs text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormInput.displayName = 'FormInput';
