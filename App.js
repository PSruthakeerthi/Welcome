import "./styles.css";

function Welcome(props) {
  const { name } = props;
  return (
    <div>
      <h1>Hey! {name}</h1>
      <h2>Welcome to Newton School</h2>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Welcome name={"Keerthi"}></Welcome>
    </div>
  );
}
