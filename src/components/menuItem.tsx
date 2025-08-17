'use client';

import React from 'react';
import { Avatar, Button, Card } from '@chakra-ui/react';
import { toaster } from "@/components/ui/toaster";
import { useColorModeValue } from '@/components/ui/color-mode';
import { menuItemColors } from '@/lib/theme';

export interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  imageSrc: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, imageSrc }) => {

  const bgColorCard = useColorModeValue(menuItemColors.bgCardLight, menuItemColors.bgCardDark);
  const bgColorImage = useColorModeValue(menuItemColors.bgImageLight, menuItemColors.bgImageDark);
  const bgColorButton = useColorModeValue(menuItemColors.bgButtonLight, menuItemColors.bgButtonDark);
  const colorDescription = useColorModeValue(menuItemColors.colorDescriptionLight, menuItemColors.colorDescriptionDark);
  const colorButton = useColorModeValue(menuItemColors.colorButtonLight, menuItemColors.colorButtonDark)

  const handleOrder = async (name: string) => {
    try {
      const response = await fetch('/api/sendOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(name),
      });

      if (!response.ok) {
        throw new Error('Failed to send order');
      }

      toaster.success({
        title: `Order for ${name} placed`,
        action: {
          label: "Ok",
          onClick: () => console.log("Order placed"),
        },
      });
    } catch (error) {
      console.error(error);
      toaster.error({
        title: "Error",
        description: `Order for ${name} could not be placed`,
        action: {
          label: "Ok",
          onClick: () => console.log("Order not placed"),
        },
      });
    }
  }

  return (
    <Card.Root
      flex="1"
      minW="300px"
      variant="elevated"
      bgColor={bgColorCard}
    >
      <Card.Body gap="2">
        <Avatar.Root size="xl" shape="rounded">
          <Avatar.Image src={imageSrc} bgColor={bgColorImage} />
          <Avatar.Fallback name={name} />
        </Avatar.Root>
        <Card.Title>{name}</Card.Title>
        <Card.Description color={colorDescription}>{description}</Card.Description>
        <Card.Footer>${price}</Card.Footer>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button
          variant="subtle"
          bgColor={bgColorButton}
          color={colorButton}
          borderRadius="full"
          onClick={() => handleOrder(name)}
        >
          Order
        </Button>
      </Card.Footer>

    </Card.Root>
  )
}

export default MenuItem;
