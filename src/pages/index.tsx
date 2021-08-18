import { Box } from "@chakra-ui/react";
import { Dashboard } from "../components/Dashboard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JoinDiscord } from "../components/JoinDiscord";


export default function Home() {
  return (
    <>
      <Header />
      <Box mt="4" >
        <JoinDiscord />
      </Box>
      <Dashboard />
      <Footer />

    </>
  )
}
