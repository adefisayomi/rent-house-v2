import { Input } from '@/components/ui/input';
import useAutocomplete from '@/src/hooks/useAutocomplete';
import React, { useState, useRef, useEffect } from 'react';

const AutocompleteComponent = ({setLocation}: {setLocation: any}) => {
  const { query, setQuery, results, loading, error } = useAutocomplete();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSetQuesry = (data: any) => {
    setLocation(data)
    setQuery(data.display_name)
    setIsDropdownOpen(false);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full relative' id='dark-mode' ref={wrapperRef}>
      <Input
        placeholder="Type to search..."
        className="bg-muted"
        type="text"
        value={query}
        onChange={handleChange}
      />

      {/* {loading && <p className='absolute left-0 top-full mt-2 text-xs'>Loading...</p>} */}
      {error && <p className='absolute left-0 top-full mt-2 text-sm text-red-500'>{error}</p>}
      {isDropdownOpen && results.length > 0 && (
        <ul id='dark-mode' className='absolute left-0 top-full mt-2 w-full bg-background border z-10'>
          {results.map((result, index) => (
            <li
              className='p-2 text-xs lowercase cursor-pointer hover:bg-muted h-9 whitespace-nowrap overflow-hidden text-overflow-ellipsis'
              key={index}
              onClick={() => handleSetQuesry(result)}
            >
              {result.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteComponent;
