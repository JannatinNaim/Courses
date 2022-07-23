import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards-gallery">
      <Card
        image="item_a.png"
        status="sold"
        rating={4.2}
        reviews={66}
        country="BD"
        description="Some description of the service."
        price={111}
      />

      <Card
        image="item_b.png"
        status="available"
        rating={4.2}
        reviews={66}
        country="BD"
        description="Some description of the service."
        price={111}
      />

      <Card
        image="item_a.png"
        status="sold"
        rating={4.2}
        reviews={66}
        country="BD"
        description="Some description of the service."
        price={111}
      />

      <Card
        image="item_b.png"
        status="sold"
        rating={4.2}
        reviews={66}
        country="BD"
        description="Some description of the service."
        price={111}
      />
    </div>
  );
};

export default Cards;
