import { Card, css, Col, Row, Button, Text } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export const Card1 = () => (
  <Card css={{ w: "100%", h: "auto" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Case Study
        </Text>
        <Text h3 color="white">
          Sheprescue.org
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="./assets/wgsrcard.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#fff" size={16}>
            A dog rescue site gets facelift.
          </Text>
          {/* <Text color="#fff" size={12}>
            Get notified.
          </Text> */}
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary" css={{
          background:'$secondary'
        }}>
              <Text
                size={14}
                weight="normal"
                transform="uppercase"
              >
               <Link href="/west-side-german-shepherd" color="white"> 
                 Read more...</Link>
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
// export const Card1 = () => (
//   <Card css={{ w: "100%", h: "400px" }}>
//     <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
//       <Col>
//         <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
//           Case Study 1
//         </Text>
//         <Text h3 color="white">
//          Sheprescue.org redesigned
//         </Text>
//       </Col>
//     </Card.Header>
//     <Card.Body css={{ p: 0 }}>
//       <Card.Image
//         src="./assets/wgsrcard.png"
//         objectFit="cover"
//         width="100%"
//         height="100%"
//         alt="Relaxing app background"
//       />
//     </Card.Body>
//     <Card.Footer
//       isBlurred
//       css={{
//         position: "absolute",
//         bgBlur: "#0f111466",
//         borderTop: "$borderWeights$light solid $gray800",
//         bottom: 0,
//         zIndex: 1,
//       }}
//     >
//       <Row>
//         <Col>
//           <Row>
//             <Col span={3}>
//               <Card.Image
//                  src="https://worldshaker.com/assets/dog-app-icon.png"
//                 css={{ bg: "black", br: "50%" }}
//                 height={40}
//                 width={40}
//                 alt="Breathing app icon"
//               />
//             </Col>
//             <Col>
//               <Text color="#d1d1d1" size={12}>
//                 Dog Adoption
//               </Text>
//               <Text color="#d1d1d1" size={12}>
//                 Save a german shepherd.
//               </Text>
//             </Col>
//           </Row>
//         </Col>
//         <Col>
//           <Row justify="flex-end">
//             <Button
//               flat
//               auto
//               rounded
//               css={{ color: "#322294", bg: "#CCF381" }}
//             >
//               <Text
//                 css={{ color: "inherit" }}
//                 size={12}
//                 weight="normal"
//                 transform="uppercase"
//               ><Link href="/fade-solutions"> 
//                 Learn More...</Link>
//               </Text>
//             </Button>
//           </Row>
//         </Col>
//       </Row>
//     </Card.Footer>
//   </Card>
// );
