'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { PaintBrushIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface ColorVariables {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
}

const defaultColors: ColorVariables = {
  background: '#fffefd',
  foreground: '#3f3838',
  primary: '#6C9A8B',
  secondary: '#E8998D',
  accent: '#EED2CC',
};

export default function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState<ColorVariables>(defaultColors);
  const searchParams = useSearchParams();
  
  const testParam = searchParams.get("test");
  const displayColorPicker = testParam === "1";
  const hideColorPicker = testParam === "0";

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);

  const handleColorChange = (colorKey: keyof ColorVariables, value: string) => {
    setColors(prev => ({
      ...prev,
      [colorKey]: value
    }));
  };

  const resetColors = () => {
    setColors(defaultColors);
  };

  const exportColors = () => {
    const cssVariables = Object.entries(colors)
      .map(([key, value]) => `  --${key}: ${value};\n  --color-${key}: ${value};`)
      .join('\n');
    
    const output = `:root {\n${cssVariables}\n}`;
    navigator.clipboard.writeText(output);
    alert('CSS variables copied to clipboard!');
  };

  if (hideColorPicker) {
    return null;
  }

  if (displayColorPicker && !isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-[9999] p-3 bg-black/50 hover:bg-black/70 text-white rounded-full shadow-lg transition-all duration-200"
        aria-label="Open color picker"
      >
        <PaintBrushIcon className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className={`${displayColorPicker || isOpen ? 'flex' : 'hidden'} fixed inset-0 z-[9999] items-center justify-center bg-black/50 backdrop-blur-sm`}>
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Color Theme Editor</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close color picker"
          >
            <XMarkIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="space-y-4">
          {Object.entries(colors).map(([key, value]) => (
            <div key={key} className="flex items-center gap-3">
              <label className="flex-1 text-sm font-medium text-gray-700 capitalize">
                {key}:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={value}
                  onChange={(e) => handleColorChange(key as keyof ColorVariables, e.target.value)}
                  className="w-10 h-8 rounded border-2 border-gray-200 cursor-pointer"
                />
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleColorChange(key as keyof ColorVariables, e.target.value)}
                  className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#000000"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={resetColors}
            className="flex-1 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded font-medium transition-colors"
          >
            Reset
          </button>
          <button
            onClick={exportColors}
            className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium transition-colors"
          >
            Export CSS
          </button>
        </div>
      </div>
    </div>
  );
}