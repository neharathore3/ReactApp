import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1>Welcome to My Website</h1>
      </header>

      {/* Main Content Section */}
      <main style={styles.main}>
        <p>
          This is the homepage of your React application. Feel free to explore and customize it as you like!
        </p>
        <button style={styles.button} onClick={() => alert('Button Clicked!')}>
          Click Me
        </button>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
  },
  main: {
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    marginTop: '20px',
    fontSize: '0.9em',
    color: '#555',
  },
};

export default HomePage;
