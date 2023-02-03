import { getImageUrl } from "./utils";

export default function Avatar({ person, size }) {
  return (
    <img
      alt={person.name}
      className="avatar"
      src={getImageUrl(person.imageId)}
      height={size}
      width={size}
    />
  );
}
