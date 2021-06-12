import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const DesktopTablet = ({ children }) => {
  const isTabletMobile = useMediaQuery({ minWidth: 768 });
  return isTabletMobile ? children : null;
};
const TabletMobile = ({ children }) => {
  const isTabletMobile = useMediaQuery({ maxWidth: 991 });
  return isTabletMobile ? children : null;
};
// const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 });
//   return isNotMobile ? children : null;
// };

export { Desktop, Tablet, Mobile, DesktopTablet, TabletMobile };
