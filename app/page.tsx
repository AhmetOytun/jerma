import React from 'react';

function Page() {
  return (
    <div style={styles.container}>
      <img 
        src="sus.jpg" 
        alt="Background" 
        style={styles.image as React.CSSProperties} 
      />
    </div>
  );
}

const styles = {
  container: {
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  image: {
    height: '100%', // Stretch to cover the height
    width: '100%', // Stretch to cover the width
    objectFit: 'cover', // Maintain aspect ratio and crop if necessary
  },
};

export default Page;
