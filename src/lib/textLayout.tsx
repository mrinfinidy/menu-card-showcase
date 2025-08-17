import { Text } from '@chakra-ui/react';

type TextLayoutProps = {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: string;
  mb?: string;
};

const TextLayout = ({ children, fontSize = "lg", fontWeight = "normal", mb = "2" }: TextLayoutProps) => (
  <Text
    fontSize={fontSize}
    fontWeight={fontWeight}
    mb={mb}
    color={"gray.fg"}
  >
    {children}
  </Text>
);

export default TextLayout;
