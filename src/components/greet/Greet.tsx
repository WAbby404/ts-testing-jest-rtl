import { GreetProps } from "./Greet.types";

export function Greet(props: GreetProps) {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
}
