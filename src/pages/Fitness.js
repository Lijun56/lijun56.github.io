import { useEffect } from 'react';

const FitnessRedirect = () => {
  useEffect(() => {
    // Redirect to the external URL immediately when the component mounts
    window.location.href = 'https://fitness-coach.pages.dev/';
  }, []); // Empty dependency array to ensure this runs once on mount

  return null; // This component does not render anything
};

export default FitnessRedirect;
