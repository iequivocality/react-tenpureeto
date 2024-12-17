export type ComponentProps = {
  text: string;
}

export default function Component(props: ComponentProps) {
  return <div>{props.text}</div>
}