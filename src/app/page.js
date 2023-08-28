"use client";
import {
  Container,
  Rating,
  Text,
  Title,
  TextInput,
  Textarea,
  Button,
  Divider,
  Group,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        mt="xs"
        minRows={3}
      />
      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Divider mt="sm" position="center" />
      <Group position="center" mt="sm">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly />
      </Group>
      <Text align="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider mt="sm" position="center" />
      <Group position="center" mt="sm">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>
      <Text align="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination total={20} color="orange" mt="md" position="center" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Norrawich Sombutnan 660612148
      </Text>
    </Container>
  );
}
