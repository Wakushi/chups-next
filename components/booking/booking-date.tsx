export default function BookingDate({
  date,
  time,
}: {
  date: Date
  time: string
}) {
  return (
    <p className="text-sm font-extralight">
      {date.toLocaleDateString("fr-FR", {
        weekday: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })}{" "}
      à {time}
    </p>
  )
}
