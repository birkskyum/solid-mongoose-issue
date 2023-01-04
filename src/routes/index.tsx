import { Title } from "solid-start";
import Counter from "~/components/Counter";
import {version} from "mongoose"

export default function Home() {
  console.log(version)
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        
      </p>
    </main>
  );
}
