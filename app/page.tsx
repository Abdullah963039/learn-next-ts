"use client";

import { Button, Container, Text, chakra } from "@chakra-ui/react";

export default function Home() {
  return (
    <chakra.main
      sx={{
        fontSize: "5xl",
        fontFamily: "mono",
      }}
    >
      <Container>
        <Text>Home Page</Text>
        <Button variant="primary">Primary Varient</Button>
      </Container>
    </chakra.main>
  );
}
