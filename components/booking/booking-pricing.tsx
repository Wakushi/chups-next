export default function BookingPricing({
  adultPrice,
  childPrice,
}: {
  adultPrice: number
  childPrice: number
}) {
  if (!childPrice) {
    return (
      <div>
        <p className="text-sm mt-3">Prix unique : {adultPrice}€*</p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-sm font-extralight	mt-3 flex flex-col">
        <span>Prix adulte : {adultPrice}€*</span>
        <span>Prix enfant : {childPrice}€**</span>
      </p>
    </div>
  )
}
