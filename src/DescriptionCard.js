export default function DescriptionCard(props) {
  return (
    <ul>
      <li>
        <b>Profession: </b> {props.profession}
      </li>
      <li>
        <b>Awards:</b> {props.awardsNum} {props.awards}
      </li>
      <li>
        <b>Discovered: </b> {props.discovered}
      </li>
    </ul>
  );
}
