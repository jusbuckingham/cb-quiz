import React from 'react';
import PropTypes from 'prop-types';

const SharedLayout = ({ children }) => {
  return (
    <div>
      {/* Add your common layout elements here, such as headers, footers, navigation, etc. */}
      <header>
        {/* Your header content */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;
