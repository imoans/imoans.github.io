import * as React from "react"
import {
  ChakraProvider,
  Stack,
  Heading,
  Avatar,
  HStack,
  Link,
  Icon,
  Text,
  Image,
} from "@chakra-ui/react"
import { FaTwitter, FaGithub, FaYoutube } from "react-icons/fa"
import avatar from "../images/avatar.jpg"
import note from "../images/note.png"
import nana from "../images/nana.png"

import Seo from "../components/seo"

const texts = [
  "職業はソフトウェアエンジニア。",
  "趣味は歌と手芸、洋裁。",
  "健康的な暮らしの追求が好きで日々食事や運動の改善に励む。",
  "シンプル志向で物事を整理整頓することを好む。",
]

const IndexPage = () => (
  <ChakraProvider>
    <Seo title="imoans' profile" />
    <Stack p="40px" spacing="40px">
      <Heading size="2xl">Hello! I'm imoans.</Heading>
      <HStack spacing="40px">
        <Avatar size="2xl" name="imoans" src={avatar} />
        <Stack spacing="18px">
          <Stack spacing="2px">
            {texts.map(text => (
              <Text>{text}</Text>
            ))}
          </Stack>
          <HStack spacing="12px">
            <Link href="https://twitter.com/mimushi100">
              <Icon color="blue.300" boxSize="6" as={FaTwitter} />
            </Link>
            <Link href="https://github.com/imoans">
              <Icon boxSize="6" as={FaGithub} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCgxsqbspAuKuCeNeTd7pUqw">
              <Icon color="red.500" boxSize="6" as={FaYoutube} />
            </Link>
            <Link href="https://nana-music.com/users/9881415">
              <Image boxSize="6" src={nana} />
            </Link>
            <Link href="https://note.com/imoans">
              <Image boxSize="6" src={note} />
            </Link>
          </HStack>
        </Stack>
      </HStack>
    </Stack>
  </ChakraProvider>
)

export default IndexPage
