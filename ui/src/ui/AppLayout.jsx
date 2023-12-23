import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: 8rem 1fr 4rem;
  height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
