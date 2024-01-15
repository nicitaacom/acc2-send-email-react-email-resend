"use client"
import { renderAsync } from "@react-email/render"
import CheckEmail from "./emails/CheckEmail"
import { formatDeliveryDate } from "./utils/formatDeliveryDate"

export default function Home() {
  const deliveryDate = formatDeliveryDate()

  const emailMessageString = renderAsync(<CheckEmail deliveryDate={deliveryDate} />, {
    pretty: true,
  })

  return <div>hi</div>
}
