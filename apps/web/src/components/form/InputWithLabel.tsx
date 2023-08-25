import { InputHTMLAttributes, forwardRef } from 'react';

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
  label?: boolean;
  labelText?: string;
}

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ name, error, label = false, labelText = '', ...rest }, ref) => (
    <div className="flex gap-1 flex-col">
      {label && (
        <label htmlFor={name} className="text-teal-light text-lg px-1">
          {labelText}
        </label>
      )}
      <div>
        <input
          {...rest}
          name={name}
          ref={ref}
          className="bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
        />
      </div>
      {error && (
        <span className="text-start text-red-600 text-sm">{error}</span>
      )}
    </div>
  )
);

InputWithLabel.displayName = 'InputWithLabel';

export default InputWithLabel;
