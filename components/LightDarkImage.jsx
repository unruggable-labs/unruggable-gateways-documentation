import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function LightDarkImage({light, dark, alt}) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders theme-specific content after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // During server-side rendering, show a placeholder or light image
  const imageSrc = mounted && theme === 'dark'
    ? dark
    : light;

  return <img src={imageSrc} alt={alt} className='centered-image' />;
}