"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const Dropdown = ({ options, value, onChange, placeholder, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 bg-[#141416] border border-[#272729] text-white rounded-md hover:bg-[#272729] transition-colors duration-200"
      >
        <span className="text-sm">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#141416] border border-[#272729] rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="flex items-center justify-between w-full px-4 py-2 text-sm text-white hover:bg-[#272729] transition-colors duration-200"
            >
              <span>{option.label}</span>
              {value === option.value && (
                <Check className="h-4 w-4 text-orange-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown; 