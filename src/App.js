import styled from "styled-components";
import Header from "./components/Nav/Header";
import ProfComponent from "./components/Profile/ProfComponent";
import Footer from "./components/Footer/Footer";

//testing

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <FooterColor>
        <Footer />
      </FooterColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
background: radial-gradient(41.26% 41.26% at 50% 50%, #01262E 0%, #1A1A1A 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const FooterColor = styled.div`
background: radial-gradient(41.26% 41.26% at 50% 50%, #06171B 0%, #01262E 100%);
`;
