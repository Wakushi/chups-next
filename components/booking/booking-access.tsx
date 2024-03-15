import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

export default function BookingAccess({
  locationurl,
}: {
  locationurl: string
}) {
  return (
    <Button variant="secondary">
      <Link
        href={locationurl}
        target="_blank"
        className="flex justify-center items-center"
      >
        <span>Accès</span>
        <Image
          src="/images/icons/plan-icon.png"
          alt="Plan icon"
          width={25}
          height={25}
        />
      </Link>
    </Button>
  )
}
