"use client"

import { renderAsync } from "@react-email/render"
import CheckEmail from "./emails/CheckEmail"
import { formatDeliveryDate } from "./utils/formatDeliveryDate"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import axios, { AxiosError } from "axios"
import { TAPISendEmail } from "./api/send-email/route"

export default function Home() {
  const deliveryDate = formatDeliveryDate()
  const [emailMessageString, setEmailMessageString] = useState("")
  const status = useSearchParams()?.get("status")

  const emailData = {
    from: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
    to: "icpcsenondaryemail@gmail.com", // get this from user store
    subject: "Payment Status",
    html: emailMessageString,
  }

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

  // Send email
  useEffect(() => {
    async function sendEmailFunction() {
      // 2/2 Prevent somebody accessing to this route to make success payment without paying
      if (true && status === "success") {
        await sendEmail()
      }
    }
    sendEmailFunction()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailMessageString])

  /* ------- FUNCTION -------- */
  async function sendEmail() {
    try {
      await axios.post("/api/send-email", {
        from: emailData.from,
        to: emailData.to,
        subject: emailData.subject,
        html: emailMessageString,
      } as TAPISendEmail)
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(102, error.response?.data)
        // show toast with error
      }
    }
  }

  return (
    <div>
      {emailMessageString}
      {status !== "success" && <p className="text-danger pt-4">Payment canceled (status !== success)</p>}
    </div>
  )
}
