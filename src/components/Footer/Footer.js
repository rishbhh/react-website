import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinksTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRight, SocialIcon, SocialIcons, SocialIconLink } from './Footer.elements'
import { Button } from '../../globalStyles'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join Our exlusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placholder="your email" />
                    <Button fontBig> subscribe </Button>

                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>About us</FooterLinksTitle>
                        <FooterLink to="/p">Test</FooterLink>
                        <FooterLink to="/">Carrer</FooterLink>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">How it works</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Contact us</FooterLinksTitle>
                        <FooterLink to="/p">Test</FooterLink>
                        <FooterLink to="/">Carrer</FooterLink>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">How it works</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Videos</FooterLinksTitle>
                        <FooterLink to="/p">Test</FooterLink>
                        <FooterLink to="/">Carrer</FooterLink>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">How it works</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLink to="/p">Test</FooterLink>
                        <FooterLink to="/">Carrer</FooterLink>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">How it works</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" >
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebsiteRight>
                        ULTRA 2020
                    </WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink href="/" traget="_blank" aria-label="Facbook" >
                            <FaFacebook /></SocialIconLink>
                        <SocialIconLink href="/" traget="_blank" aria-label="Instagram" >
                            <FaInstagram /></SocialIconLink>
                        <SocialIconLink href="/" traget="_blank" aria-label="Youtube" >
                            <FaYoutube /></SocialIconLink>
                    </SocialIcons>

                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer
