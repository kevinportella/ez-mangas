import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { JoinDiscord } from "../components/JoinDiscord";


export default function Home() {
  return (
    <>
      <Header />
      <JoinDiscord />
      <Dashboard />
    </>
  )
}
