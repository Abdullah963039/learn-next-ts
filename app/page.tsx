"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Container,
  HStack,
  Heading,
  Spacer,
  Stack,
  chakra,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <chakra.main>
      <Container>
        <Stack direction="row" py={6}>
          <Heading>Home Page</Heading>
          <Spacer />
          <HStack align="end">
            <Link href="/users" color="violet.500">
              Users
            </Link>
          </HStack>
        </Stack>
      </Container>
    </chakra.main>
  );
}
