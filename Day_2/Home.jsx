import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';
import { FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Navigation from './Navigation';
import GlamImage from '../Components/Images/Glam2.jpg'; 

const HomeContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '125px',
});

const HeroContent = styled('div')({
  textAlign: 'center',
  padding: '20px',
});

const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  border: '2px solid #ccc',
  borderRadius: '8px',
  overflow: 'hidden',
});

const Image = styled('img')({
  width: '500px',
  height: '400px',
});

const ContentBelow = styled('div')({
  background: '		#fff0f5',
  padding: '40px',
});

const Footer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  background: '#333',
  padding: '20px 0',
  color: '#fff',
  bottom: 0,
});

const FooterLink = styled(Link)({
  textDecoration: 'none',
  color: '#f9f9f9',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const FooterIcon = styled('div')({
  marginRight: '8px',
color: '#f9f9f9',
});

const NavigationBottom = styled(Navigation)({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  background: '#333',
});

const Home = () => {
  return (
    <div>
      <div id="home-section">
        <HomeContainer>
          <HeroContent>
       
            <Container maxWidth="md">
            <Typography variant="h3" align="center"  color="#40E0D0"gutterBottom style={{ marginTop: '0' }}>
            Welcome to Glam Mart
          </Typography>
          
           
              <Typography variant="h5" align="center" color="#AFEEEE" paragraph style={{ fontFamily: 'Georgia, serif' }}>
                Give them a reason to take a second look.
              </Typography>
            </Container>
          </HeroContent>
          <ImageContainer>
            <Image src={GlamImage} alt="GlamMart" />
          </ImageContainer>
          <br/><br></br>
          <br></br>
        </HomeContainer>
      </div>

      <Footer>
        <FooterLink to="/contact-us">
          <FooterIcon>
            <FaPhone />
          </FooterIcon>
          Contact Us
        </FooterLink>

        <FooterIcon>
          <a href="https://www.facebook.com/"><FaFacebook /> Facebook</a>
        </FooterIcon>
        <FooterIcon>
          <a href="https://twitter.com/"><FaTwitter /> Twitter</a>
        </FooterIcon>
        <FooterIcon>
          <a href="https://www.instagram.com/urfav_thivin_?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram /> Instagram</a>
        </FooterIcon>
        <FooterIcon>
          <a href="https://www.linkedin.com"><FaLinkedin /> Linkedin</a>
        </FooterIcon>
      </Footer>
      <ContentBelow>
        <Typography variant="h6" gutterBottom>
          Visit:
        </Typography>
        <Typography variant="body1" gutterBottom>
          4-1/65, OM NAGAR, NALLAMPALAYAM, COIMBATORE-06
        </Typography>
      </ContentBelow>
      <NavigationBottom />
    </div>
  );
};

export default Home;
