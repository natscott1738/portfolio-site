function CarCard(props) {
    return (
        <div className="bg-light border p-4 m-2">
        <h4>{props.car.name}</h4>
        <p>{props.car.category}</p>
        <p>{props.car.rating}</p>
      </div>
    )

}

export default CarCard