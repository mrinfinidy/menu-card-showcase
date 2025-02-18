import { Text } from '@chakra-ui/react';

type TitleLayoutProps = {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: string;
  mb?: string;
  };

const TitleLayout = ({ children, fontSize="2xl", fontWeight="bold", mb="4" }: TitleLayoutProps) => (
  <Text
    fontSize={fontSize}
    fontWeight={fontWeight}
    mb={mb}
  >
    { children }
  </Text>
);

export default TitleLayout;
