'use client';

import { Container, HStack, Icon, Link, Stack } from '@chakra-ui/react'
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si'
import Copyright from './copyright'
import Logo from './logo'
import { useColorModeValue } from '../ui/color-mode';
import { footerColors } from "@/lib/theme";

export const Footer = () => {
  return (
    <Container as="footer" py={{ base: '10', md: '12' }}>
      <Stack gap="6">
        <Stack direction="row" justify="space-between" align="center">
          <Logo />
          <HStack gap="4">
            {socialLinks.map(({ href, icon }, index) => (
              <Link
                key={index}
                href={href}
                color={useColorModeValue(footerColors.colorLight, footerColors.colorDark)}
                target='_blank'
              >
                <Icon size="md">
                  {icon}
                </Icon>
              </Link>
            ))}
          </HStack>
        </Stack>
        <Copyright />
      </Stack>
    </Container>
  )
}

const socialLinks = [
  { href: 'https://github.com/mrinfinidy/', icon: <SiGithub /> },
  { href: 'https://www.linkedin.com/in/amon-f-61720328b/', icon: <SiLinkedin /> },
]

export default Footer;
