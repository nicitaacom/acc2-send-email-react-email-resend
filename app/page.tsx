"use client"
import { renderAsync } from "@react-email/render"
import CheckEmail from "./emails/CheckEmail"
import { formatDeliveryDate } from "./utils/formatDeliveryDate"
import { useEffect, useState } from "react"

export default function Home() {
  const deliveryDate = formatDeliveryDate()
  const [emailMessageString, setEmailMessageString] = useState("")

  useEffect(() => {
    async function renderEmail() {
      const emailMessageString = await renderAsync(<CheckEmail deliveryDate={deliveryDate} />, {
        pretty: true,
      })
      setEmailMessageString(emailMessageString)
    }
    renderEmail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(18, "emailMessageString - ", emailMessageString)

  return <div>{emailMessageString}</div>
}
