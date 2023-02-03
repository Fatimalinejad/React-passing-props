import Avatar from "./Avatar.js";
import DescriptionCard from "./DescriptionCard.js";
import Header from "./Header.js";
import { personData } from "./PersonData.js";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <Header scientistName="Marie Curie" />
        <Avatar
          size={70}
          person={{
            name: "Maria Skłodowska-Curie",
            imageId: "szV5sdG"
          }}
        />
        <DescriptionCard
          profession={personData[0].profession}
          awardsNum={personData[0].awardsNum}
          awards={personData[0].awards}
          discovered={personData[0].discovered}
        />
      </section>

      <section className="profile">
        <Header scientistName="Katsuko Saruhashi" />
        <Avatar
          size={70}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2"
          }}
        />
        <DescriptionCard
          profession={personData[1].profession}
          awardsNum={personData[1].awardsNum}
          awards={personData[1].awards}
          discovered={personData[1].discovered}
        />
      </section>
    </div>
  );
}
