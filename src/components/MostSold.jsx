import MostSoldItem from "../components/MostSoldItem";

export default function MostSold() {
  return (
    <div className="most-sold">
      <h2>Most sold</h2>
      <div className="items">
        <MostSoldItem />
      </div>
    </div>
  );
}
