import { Head, Html, Preview, Tailwind, Body, Container, Heading, Text, Column, Link } from "@react-email/components"
import { getURL } from "@/utils/helpers"

interface CheckEmailProps {
  deliveryDate: string
}

export const CheckEmail = ({ deliveryDate }: CheckEmailProps) => {
  const previewText = `Thank you for your purchace`
  return (
    <Tailwind
      config={{
        theme: {
          screens: {
            // read dev_readme.md
          },
          extend: {
            colors: {
              brand: "#1ce956",
              subTitle: "#999999",
              "broder-color": "#999999",
              title: "#e0e0e0",
              info: "407ded",
            },
          },
        },
      }}>
      <Html>
        <Head />
        <Preview>{previewText}</Preview>

        <Body className="bg-[#202020]">
          {/* CONTENT - START */}

          {/* HEADER */}
          <Column align="center">
            <Heading className="m-0 pt-8 text-title text-center">{previewText}</Heading>
            <Text className="m-0 pb-8 text-subTitle text-center">Your order will delivered on {deliveryDate} 🗓</Text>
          </Column>

          {/* MAIN CONTENT */}
          <Container
            style={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
              width: "480px",
              maxWidth: "480px",
            }}>
            Some content here
          </Container>

          {/* TOTAL */}
          <table
            style={{
              borderTop: "1px solid #999999",
              borderBottom: "1px solid #999999",
              minWidth: "100%",
              margin: "3rem 0rem",
              padding: "1rem 0rem",
              textAlign: "center",
            }}>
            <tr>
              <td>
                <Text className="m-0 text-title text-2xl text-center">Total:&nbsp; 1,000$</Text>
              </td>
            </tr>
          </table>

          {/* FOOTER */}
          <table
            style={{
              borderTop: "1px solid #999999",
              minWidth: "100%",
              margin: "1rem 0rem",
              padding: "1rem 0rem",
              textAlign: "center",
            }}>
            <tr>
              <td>
                <Link className="m-0 text-[#407ded] text-sm text-center mr-4" href={`${getURL()}support`}>
                  Support
                </Link>
                <Link className="m-0 text-[#407ded] text-sm text-center mr-4" href={`${getURL()}feedback`}>
                  Feedback
                </Link>
                <Link className="m-0 text-[#407ded] text-sm text-center" href={`${getURL()}track-order`}>
                  Track order
                </Link>
              </td>
            </tr>
          </table>

          {/* CONTENT - END */}
        </Body>
      </Html>
    </Tailwind>
  )
}

export default CheckEmail
