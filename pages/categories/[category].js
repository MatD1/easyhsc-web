import Link from "next/link";
import {
  Text,
  VStack,
  Button,
  Icon,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Center,
  Box,
  Grid,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { FcExternal } from "react-icons/fc";
import Moment from "react-moment";

function Category({ categories }) {
  return (
    <>
      <Center p={2}>
        <Alert status="warning">
          <AlertIcon />
          <AlertTitle>Please note:</AlertTitle>
          <AlertDescription>
            None of these papers are created or owned by the developer, they are
            created by the Department of Education Australia all rights go to
            them for these papers.
          </AlertDescription>
        </Alert>
        <br />
      </Center>
      <Center pl={4} pr={4}>
      <Alert status="info">
          <AlertIcon />
          <AlertTitle>{categories.alert_title || <a>No alert today</a>}</AlertTitle>
          <AlertDescription>
          {categories.alert_desc}
          </AlertDescription>
        </Alert>
        </Center>
        <Grid gap={6} pl={4} pr={4}>
          <Box mb={10}>
          <VStack>
          <Heading pl={4}>{categories.name}</Heading>
            {categories.papers.map((cat) => {
              return (
                <div key={cat.id} style={{
                  paddingBottom: 10,
                }}>
                  <Text>
                    Paper Uploaded at:{" "}
                    <Moment
                      format="DD/MM/YYYY"
                      date={cat.file_uploaded_at || <div>No papers exist</div>}
                    />
                  </Text>
                  <Text fontSize="2xl">
                    Paper name: {cat.name || <div>No papers exist</div>}
                  </Text>
                  <Stack spacing={2} direction="row" align="center">
                    <Link href={cat.PDF_link || <div>No papers exist</div>}>
                      <a target="_blank" rel="noopener noreferrer">
                        <Button
                          colorScheme="green"
                          rightIcon={<Icon as={FcExternal} />}
                        >
                          Open PDF
                        </Button>
                      </a>
                    </Link>
                    <Link
                      href={cat.PDF_Answers_Link || <div>No papers exist</div>}
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <Button
                          colorScheme="green"
                          rightIcon={<Icon as={FcExternal} />}
                        >
                          Open Paper Answers
                        </Button>
                      </a>
                    </Link>
                  </Stack>
                  <Text fontSize="2xl">
                    File Format:{" "}
                    {cat.Media_Upload[0].ext || <div>No papers exist</div>}
                  </Text>
                </div>
              );
            })}
            </VStack>
          </Box>
          <Center>
            <Text fontSize="3xl">End Of Papers</Text>
          </Center>
        </Grid>

    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://api-easyhsc.herokuapp.com/Categories");
  const Categories = await res.json();

  const paths = Categories.map((category) => ({
    params: { category: category.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://api-easyhsc.herokuapp.com/Categories/${params.category}`
  );
  const categories = await res.json();
  // Pass post data to the page via props
  return { props: { categories } };
}

export default Category;
