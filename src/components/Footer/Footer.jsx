// import {
//     FooterBox,
//     FooterContainer,
//     RightsReservedSpan,
//     SocialLink,
// } from './Footer.styled';

import { Link } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <div>
        <span>
          &#169; 2023 All rights reserved. Developed by Yana Usatiuk |{' '}
        </span>
        <Link
          to="https://www.linkedin.com/in/yana-usatiuk-223aa1262/"
          target="blank"
        >
          {' '}
          LinkedIn{' '}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
